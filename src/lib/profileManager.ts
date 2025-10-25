// Profile Manager - Complete user profile system
import { createClient } from '@supabase/supabase-js';

// Other project configuration
const OTHER_PROJECT_URL = 'https://arnuyyyryvbfcvqauqur.supabase.co';
const OTHER_PROJECT_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFybnV5eXlyeXZiZmN2cWF1cXVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyMjY5MjQsImV4cCI6MjA2ODgwMjkyNH0.mWzoWkBbQcCNR2BHueu8mQpV6hFMZUacbv4EobzOIZs';

// NeuroFlow project
const NEUROFLOW_URL = import.meta.env.VITE_SUPABASE_URL || 'https://gcohjfjhktpqswqwiczb.supabase.co';
const NEUROFLOW_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdjb2hqZmpoa3RwcXN3cXdpY3piIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1NTI5MTksImV4cCI6MjA3NjEyODkxOX0.pXPSc41jD53A6qLHEdhZuWz4RhvtGJ91Wzt-g31nJuQ';

// Create clients
const otherProjectClient = createClient(OTHER_PROJECT_URL, OTHER_PROJECT_ANON_KEY);
const neuroflowClient = createClient(NEUROFLOW_URL, NEUROFLOW_ANON_KEY);

export interface CompleteUserProfile {
  // Basic Info
  id: string;
  email: string;
  username: string;
  display_name: string;
  first_name?: string;
  last_name?: string;
  
  // Contact Info
  phone?: string;
  date_of_birth?: string;
  gender?: string;
  location?: string;
  timezone?: string;
  language?: string;
  
  // Account Status
  is_admin: boolean;
  is_verified: boolean;
  is_active: boolean;
  subscription_tier: 'lunch' | 'scale' | 'boost';
  subscription_status: string;
  subscription_start_date?: string;
  subscription_end_date?: string;
  
  // Profile Details
  bio?: string;
  avatar_url?: string;
  banner_url?: string;
  social_links: Record<string, string>;
  
  // Activity
  last_login?: string;
  login_count: number;
  created_at: string;
  updated_at: string;
  
  // Preferences
  email_notifications: boolean;
  push_notifications: boolean;
  sms_notifications: boolean;
  profile_visibility: string;
  show_email: boolean;
  show_phone: boolean;
  
  // Additional Data
  preferences: Record<string, any>;
  original_data: any;
  source_project: 'other' | 'neuroflow';
  
  // Extended Fields (from other project)
  [key: string]: any;
}

export class ProfileManager {
  private static instance: ProfileManager;
  private currentProfile: CompleteUserProfile | null = null;

  static getInstance(): ProfileManager {
    if (!ProfileManager.instance) {
      ProfileManager.instance = new ProfileManager();
    }
    return ProfileManager.instance;
  }

  // Get complete user profile from other project
  async getCompleteProfileFromOtherProject(email: string): Promise<CompleteUserProfile | null> {
    try {
      console.log('🔍 Fetching complete profile from other project...');
      
      const { data, error } = await otherProjectClient
        .from('user_profiles')
        .select('*')
        .eq('email', email)
        .single();

      if (error || !data) {
        console.log('❌ User not found in other project');
        return null;
      }

      console.log('✅ Complete profile found:', Object.keys(data).length, 'fields');
      
      // Transform to complete profile
      const completeProfile: CompleteUserProfile = {
        // Basic Info
        id: data.id,
        email: data.email,
        username: data.username || data.nom || `user_${data.id}`,
        display_name: data.nom || data.username || data.display_name,
        first_name: data.first_name || data.nom?.split(' ')[0],
        last_name: data.last_name || data.nom?.split(' ').slice(1).join(' '),
        
        // Contact Info
        phone: data.phone,
        date_of_birth: data.date_of_birth,
        gender: data.gender,
        location: data.location,
        timezone: data.timezone,
        language: data.language || 'en',
        
        // Account Status
        is_admin: data.is_admin || false,
        is_verified: data.is_verified || false,
        is_active: data.is_active !== false,
        subscription_tier: this.mapSubscriptionTier(data.subscription_tier),
        subscription_status: data.subscription_status || 'active',
        subscription_start_date: data.subscription_start_date,
        subscription_end_date: data.subscription_end_date,
        
        // Profile Details
        bio: data.bio,
        avatar_url: data.avatar_url,
        banner_url: data.banner_url,
        social_links: this.extractSocialLinks(data),
        
        // Activity
        last_login: data.last_login,
        login_count: data.login_count || 0,
        created_at: data.created_at || new Date().toISOString(),
        updated_at: new Date().toISOString(),
        
        // Preferences
        email_notifications: data.email_notifications !== false,
        push_notifications: data.push_notifications !== false,
        sms_notifications: data.sms_notifications || false,
        profile_visibility: data.profile_visibility || 'public',
        show_email: data.show_email || false,
        show_phone: data.show_phone || false,
        
        // Additional Data
        preferences: this.extractPreferences(data),
        original_data: data,
        source_project: 'other',
        
        // Extended Fields - include all other fields
        ...this.extractExtendedFields(data)
      };

      this.currentProfile = completeProfile;
      return completeProfile;
    } catch (error) {
      console.error('Error fetching complete profile:', error);
      return null;
    }
  }

  // Extract social links from profile data
  private extractSocialLinks(data: any): Record<string, string> {
    const socialLinks: Record<string, string> = {};
    const socialFields = [
      'twitter', 'linkedin', 'github', 'discord', 'instagram', 
      'facebook', 'youtube', 'website', 'portfolio', 'telegram',
      'tiktok', 'snapchat', 'pinterest', 'reddit'
    ];

    socialFields.forEach(field => {
      if (data[field]) {
        socialLinks[field] = data[field];
      }
    });

    return socialLinks;
  }

  // Extract preferences from profile data
  private extractPreferences(data: any): Record<string, any> {
    const preferences: Record<string, any> = {};
    const preferenceFields = [
      'theme', 'notifications', 'privacy', 'currency', 'date_format', 
      'time_format', 'units', 'timezone_offset', 'language_preference'
    ];

    preferenceFields.forEach(field => {
      if (data[field]) {
        preferences[field] = data[field];
      }
    });

    return preferences;
  }

  // Extract extended fields (all other fields not mapped)
  private extractExtendedFields(data: any): Record<string, any> {
    const extendedFields: Record<string, any> = {};
    const mappedFields = [
      'id', 'email', 'username', 'nom', 'display_name', 'first_name', 'last_name',
      'phone', 'date_of_birth', 'gender', 'location', 'timezone', 'language',
      'is_admin', 'is_verified', 'is_active', 'subscription_tier', 'subscription_status',
      'subscription_start_date', 'subscription_end_date', 'bio', 'avatar_url', 'banner_url',
      'last_login', 'login_count', 'created_at', 'updated_at', 'email_notifications',
      'push_notifications', 'sms_notifications', 'profile_visibility', 'show_email', 'show_phone'
    ];

    Object.keys(data).forEach(key => {
      if (!mappedFields.includes(key) && data[key] !== null && data[key] !== undefined) {
        extendedFields[key] = data[key];
      }
    });

    return extendedFields;
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

  // Create complete profile in NeuroFlow
  async createCompleteProfileInNeuroFlow(profile: CompleteUserProfile): Promise<boolean> {
    try {
      console.log('🔄 Creating complete profile in NeuroFlow...');

      // Create auth user first
      const { data: authData, error: authError } = await neuroflowClient.auth.signUp({
        email: profile.email,
        password: 'temp_password_' + Math.random().toString(36), // Temporary password
        options: {
          data: {
            username: profile.username,
            migrated_from: 'other_project'
          }
        }
      });

      if (authError || !authData.user) {
        console.error('Auth creation error:', authError);
        return false;
      }

      // Create complete profile
      const { error: profileError } = await neuroflowClient
        .from('profiles')
        .insert({
          user_id: authData.user.id,
          username: profile.username,
          display_name: profile.display_name,
          first_name: profile.first_name,
          last_name: profile.last_name,
          bio: profile.bio,
          avatar_url: profile.avatar_url,
          banner_url: profile.banner_url,
          subscription_tier: profile.subscription_tier,
          is_admin: profile.is_admin,
          is_verified: profile.is_verified,
          is_active: profile.is_active,
          phone: profile.phone,
          date_of_birth: profile.date_of_birth,
          gender: profile.gender,
          location: profile.location,
          timezone: profile.timezone,
          language: profile.language,
          social_links: profile.social_links,
          preferences: profile.preferences,
          email_notifications: profile.email_notifications,
          push_notifications: profile.push_notifications,
          sms_notifications: profile.sms_notifications,
          profile_visibility: profile.profile_visibility,
          show_email: profile.show_email,
          show_phone: profile.show_phone,
          subscription_status: profile.subscription_status,
          subscription_start_date: profile.subscription_start_date,
          subscription_end_date: profile.subscription_end_date,
          last_login: profile.last_login,
          login_count: profile.login_count,
          original_data: profile.original_data,
          created_at: profile.created_at,
          updated_at: profile.updated_at,
          // Extended fields
          ...profile
        });

      if (profileError) {
        console.error('Profile creation error:', profileError);
        return false;
      }

      console.log('✅ Complete profile created in NeuroFlow');
      return true;
    } catch (error) {
      console.error('Error creating complete profile:', error);
      return false;
    }
  }

  // Get current profile
  getCurrentProfile(): CompleteUserProfile | null {
    return this.currentProfile;
  }

  // Update profile
  async updateProfile(updates: Partial<CompleteUserProfile>): Promise<boolean> {
    try {
      if (!this.currentProfile) return false;

      const { error } = await neuroflowClient
        .from('profiles')
        .update({
          ...updates,
          updated_at: new Date().toISOString()
        })
        .eq('user_id', this.currentProfile.id);

      if (error) {
        console.error('Profile update error:', error);
        return false;
      }

      // Update local profile
      this.currentProfile = { ...this.currentProfile, ...updates };
      return true;
    } catch (error) {
      console.error('Error updating profile:', error);
      return false;
    }
  }

  // Sync with other project
  async syncWithOtherProject(): Promise<boolean> {
    try {
      if (!this.currentProfile) return false;

      console.log('🔄 Syncing with other project...');
      
      const updatedProfile = await this.getCompleteProfileFromOtherProject(this.currentProfile.email);
      
      if (updatedProfile) {
        await this.updateProfile(updatedProfile);
        console.log('✅ Profile synced with other project');
        return true;
      }

      return false;
    } catch (error) {
      console.error('Sync error:', error);
      return false;
    }
  }
}

export default ProfileManager;
