// Unified Authentication System
// This allows connection to your other Supabase project

import { createClient } from '@supabase/supabase-js';

// Your other project configuration
const OTHER_PROJECT_URL = 'https://arnuyyyryvbfcvqauqur.supabase.co';
const OTHER_PROJECT_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFybnV5eXlyeXZiZmN2cWF1cXVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyMjY5MjQsImV4cCI6MjA2ODgwMjkyNH0.mWzoWkBbQcCNR2BHueu8mQpV6hFMZUacbv4EobzOIZs';

// Current NeuroFlow project
const NEUROFLOW_URL = import.meta.env.VITE_SUPABASE_URL || 'https://gcohjfjhktpqswqwiczb.supabase.co';
const NEUROFLOW_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdjb2hqZmpoa3RwcXN3cXdpY3piIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1NTI5MTksImV4cCI6MjA3NjEyODkxOX0.pXPSc41jD53A6qLHEdhZuWz4RhvtGJ91Wzt-g31nJuQ';

// Create clients
const otherProjectClient = createClient(OTHER_PROJECT_URL, OTHER_PROJECT_ANON_KEY);
const neuroflowClient = createClient(NEUROFLOW_URL, NEUROFLOW_ANON_KEY);

export interface UnifiedUser {
  id: string;
  email: string;
  username?: string;
  display_name?: string;
  subscription_tier?: 'lunch' | 'scale' | 'boost';
  is_admin?: boolean;
  source_project: 'other' | 'neuroflow';
  original_data?: any;
}

export class UnifiedAuth {
  private static instance: UnifiedAuth;
  private currentUser: UnifiedUser | null = null;

  static getInstance(): UnifiedAuth {
    if (!UnifiedAuth.instance) {
      UnifiedAuth.instance = new UnifiedAuth();
    }
    return UnifiedAuth.instance;
  }

  // Check if user exists in other project
  async checkOtherProject(email: string): Promise<{ exists: boolean; user?: any }> {
    try {
      console.log('🔍 Checking other project for user:', email);
      
      // Try to get user from other project's user_profiles table
      const { data, error } = await otherProjectClient
        .from('user_profiles')
        .select('*')
        .eq('email', email)
        .single();

      if (error) {
        console.log('❌ User not found in other project:', error.message);
        return { exists: false };
      }

      console.log('✅ User found in other project');
      return { exists: true, user: data };
    } catch (error) {
      console.error('Error checking other project:', error);
      return { exists: false };
    }
  }

  // Migrate user from other project to NeuroFlow
  async migrateUserFromOtherProject(otherUser: any): Promise<UnifiedUser | null> {
    try {
      console.log('🔄 Migrating user from other project...');

      // Create user in NeuroFlow auth
      const { data: authData, error: authError } = await neuroflowClient.auth.signUp({
        email: otherUser.email,
        password: 'temp_password_' + Math.random().toString(36), // Temporary password
        options: {
          data: {
            username: otherUser.username || otherUser.nom,
            migrated_from: 'other_project'
          }
        }
      });

      if (authError) {
        console.error('Auth creation error:', authError);
        return null;
      }

      // Create profile in NeuroFlow
      const { data: profileData, error: profileError } = await neuroflowClient
        .from('profiles')
        .insert({
          user_id: authData.user?.id,
          username: otherUser.username || otherUser.nom || `user_${otherUser.id}`,
          display_name: otherUser.nom || otherUser.username,
          subscription_tier: this.mapSubscriptionTier(otherUser.subscription_tier),
          is_admin: otherUser.is_admin || false,
          original_data: otherUser,
          created_at: otherUser.created_at || new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
        .select()
        .single();

      if (profileError) {
        console.error('Profile creation error:', profileError);
        return null;
      }

      const unifiedUser: UnifiedUser = {
        id: authData.user!.id,
        email: otherUser.email,
        username: otherUser.username || otherUser.nom,
        display_name: otherUser.nom || otherUser.username,
        subscription_tier: this.mapSubscriptionTier(otherUser.subscription_tier),
        is_admin: otherUser.is_admin || false,
        source_project: 'neuroflow',
        original_data: otherUser
      };

      console.log('✅ User migrated successfully');
      return unifiedUser;
    } catch (error) {
      console.error('Migration error:', error);
      return null;
    }
  }

  // Map subscription tiers
  private mapSubscriptionTier(tier?: string): 'lunch' | 'scale' | 'boost' {
    switch (tier?.toLowerCase()) {
      case 'boost':
        return 'boost';
      case 'scale':
        return 'scale';
      case 'lunch':
      default:
        return 'lunch';
    }
  }

  // Unified sign in - checks both projects
  async signIn(email: string, password: string): Promise<{ success: boolean; user?: UnifiedUser; error?: string }> {
    try {
      console.log('🔐 Attempting unified sign in...');

      // First, try NeuroFlow
      const { data: neuroflowData, error: neuroflowError } = await neuroflowClient.auth.signInWithPassword({
        email,
        password
      });

      if (!neuroflowError && neuroflowData.user) {
        console.log('✅ Signed in to NeuroFlow');
        
        // Get profile
        const { data: profile } = await neuroflowClient
          .from('profiles')
          .select('*')
          .eq('user_id', neuroflowData.user.id)
          .single();

        const unifiedUser: UnifiedUser = {
          id: neuroflowData.user.id,
          email: neuroflowData.user.email!,
          username: profile?.username,
          display_name: profile?.display_name,
          subscription_tier: profile?.subscription_tier,
          is_admin: profile?.is_admin,
          source_project: 'neuroflow',
          original_data: profile
        };

        this.currentUser = unifiedUser;
        return { success: true, user: unifiedUser };
      }

      // If NeuroFlow fails, check other project
      console.log('🔍 Checking other project...');
      const otherProjectCheck = await this.checkOtherProject(email);
      
      if (otherProjectCheck.exists && otherProjectCheck.user) {
        console.log('✅ User found in other project, migrating...');
        
        // Migrate user to NeuroFlow
        const migratedUser = await this.migrateUserFromOtherProject(otherProjectCheck.user);
        
        if (migratedUser) {
          this.currentUser = migratedUser;
          return { success: true, user: migratedUser };
        }
      }

      return { success: false, error: 'Invalid credentials' };
    } catch (error: any) {
      console.error('Sign in error:', error);
      return { success: false, error: error.message };
    }
  }

  // Unified sign up
  async signUp(email: string, password: string, username: string): Promise<{ success: boolean; user?: UnifiedUser; error?: string }> {
    try {
      console.log('📝 Attempting unified sign up...');

      // Check if user exists in other project
      const otherProjectCheck = await this.checkOtherProject(email);
      
      if (otherProjectCheck.exists) {
        return { success: false, error: 'User already exists in connected project. Please sign in instead.' };
      }

      // Create new user in NeuroFlow
      const { data: authData, error: authError } = await neuroflowClient.auth.signUp({
        email,
        password,
        options: {
          data: { username }
        }
      });

      if (authError) {
        return { success: false, error: authError.message };
      }

      if (!authData.user) {
        return { success: false, error: 'Failed to create user' };
      }

      // Create profile
      const { data: profileData, error: profileError } = await neuroflowClient
        .from('profiles')
        .insert({
          user_id: authData.user.id,
          username,
          subscription_tier: 'lunch',
          is_admin: false,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
        .select()
        .single();

      if (profileError) {
        console.error('Profile creation error:', profileError);
        return { success: false, error: 'Failed to create profile' };
      }

      const unifiedUser: UnifiedUser = {
        id: authData.user.id,
        email: authData.user.email!,
        username,
        subscription_tier: 'lunch',
        is_admin: false,
        source_project: 'neuroflow',
        original_data: profileData
      };

      this.currentUser = unifiedUser;
      return { success: true, user: unifiedUser };
    } catch (error: any) {
      console.error('Sign up error:', error);
      return { success: false, error: error.message };
    }
  }

  // Get current user
  getCurrentUser(): UnifiedUser | null {
    return this.currentUser;
  }

  // Sign out
  async signOut(): Promise<void> {
    await neuroflowClient.auth.signOut();
    this.currentUser = null;
  }

  // Sync with other project
  async syncWithOtherProject(): Promise<{ success: boolean; message: string }> {
    try {
      if (!this.currentUser) {
        return { success: false, message: 'No user logged in' };
      }

      console.log('🔄 Syncing with other project...');

      // Get user data from other project
      const otherProjectCheck = await this.checkOtherProject(this.currentUser.email);
      
      if (otherProjectCheck.exists && otherProjectCheck.user) {
        // Update NeuroFlow profile with latest data from other project
        const { error } = await neuroflowClient
          .from('profiles')
          .update({
            subscription_tier: this.mapSubscriptionTier(otherProjectCheck.user.subscription_tier),
            is_admin: otherProjectCheck.user.is_admin || false,
            original_data: otherProjectCheck.user,
            updated_at: new Date().toISOString()
          })
          .eq('user_id', this.currentUser.id);

        if (error) {
          return { success: false, message: 'Failed to sync data' };
        }

        return { success: true, message: 'Successfully synced with other project' };
      }

      return { success: false, message: 'User not found in other project' };
    } catch (error: any) {
      console.error('Sync error:', error);
      return { success: false, message: error.message };
    }
  }
}

export default UnifiedAuth;
