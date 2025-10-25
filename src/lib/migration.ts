// Migration script to transfer users from another Supabase project to NeuroFlow
import { createClient } from '@supabase/supabase-js';

// Source project configuration (your other project)
const SOURCE_SUPABASE_URL = 'https://arnuyyyryvbfcvqauqur.supabase.co';
const SOURCE_SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFybnV5eXlyeXZiZmN2cWF1cXVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyMjY5MjQsImV4cCI6MjA2ODgwMjkyNH0.mWzoWkBbQcCNR2BHueu8mQpV6hFMZUacbv4EobzOIZs';
const SOURCE_SUPABASE_SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFybnV5eXlyeXZiZmN2cWF1cXVyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MzIyNjkyNCwiZXhwIjoyMDY4ODAyOTI0fQ.qlUGGfviSoPyXnqqL5OOMTSHLYlucaCHRXgSwNuUHcY';

// Target project configuration (NeuroFlow - current project)
const TARGET_SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://demo.supabase.co';
const TARGET_SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'demo-key';

// Create clients
const sourceClient = createClient(SOURCE_SUPABASE_URL, SOURCE_SUPABASE_SERVICE_KEY);
const targetClient = createClient(TARGET_SUPABASE_URL, TARGET_SUPABASE_ANON_KEY);

// Interface for user profile from source
export interface SourceUserProfile {
  id: string;
  user_id: string;
  nom?: string;
  email?: string;
  username?: string;
  is_admin?: boolean;
  subscription_tier?: 'lunch' | 'boost' | 'scale';
  [key: string]: any; // For the other 40+ columns
}

// Interface for migrated user profile
export interface MigratedUserProfile {
  id: string;
  user_id: string;
  username: string;
  display_name?: string;
  bio?: string;
  avatar_url?: string;
  banner_url?: string;
  subscription_tier: 'lunch' | 'scale' | 'boost';
  social_links: Record<string, string>;
  is_admin?: boolean;
  original_data?: any; // Store all original data
  created_at: string;
  updated_at: string;
}

export class UserMigrationManager {
  private sourceClient: any;
  private targetClient: any;
  private migrationLog: any[] = [];

  constructor() {
    this.sourceClient = sourceClient;
    this.targetClient = targetClient;
  }

  // Get all user profiles from source
  async getSourceUserProfiles(): Promise<SourceUserProfile[]> {
    try {
      console.log('Fetching user profiles from source project...');
      const { data, error } = await this.sourceClient
        .from('user_profiles')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) {
        throw new Error(`Error fetching source profiles: ${error.message}`);
      }

      console.log(`Found ${data?.length || 0} user profiles to migrate`);
      return data || [];
    } catch (error) {
      console.error('Error fetching source profiles:', error);
      throw error;
    }
  }

  // Transform source profile to NeuroFlow format
  transformUserProfile(sourceProfile: SourceUserProfile): MigratedUserProfile {
    const now = new Date().toISOString();
    
    return {
      id: sourceProfile.id,
      user_id: sourceProfile.user_id,
      username: sourceProfile.username || sourceProfile.nom || `user_${sourceProfile.id}`,
      display_name: sourceProfile.nom || sourceProfile.username,
      bio: sourceProfile.bio || null,
      avatar_url: sourceProfile.avatar_url || null,
      banner_url: sourceProfile.banner_url || null,
      subscription_tier: this.mapSubscriptionTier(sourceProfile.subscription_tier),
      social_links: this.extractSocialLinks(sourceProfile),
      is_admin: sourceProfile.is_admin || false,
      original_data: sourceProfile, // Store all original data for reference
      created_at: sourceProfile.created_at || now,
      updated_at: now
    };
  }

  // Map subscription tiers from source to NeuroFlow format
  private mapSubscriptionTier(sourceTier?: string): 'lunch' | 'scale' | 'boost' {
    switch (sourceTier?.toLowerCase()) {
      case 'boost':
        return 'boost';
      case 'scale':
        return 'scale';
      case 'lunch':
      default:
        return 'lunch';
    }
  }

  // Extract social links from source profile
  private extractSocialLinks(sourceProfile: SourceUserProfile): Record<string, string> {
    const socialLinks: Record<string, string> = {};
    
    // Common social media fields to check
    const socialFields = [
      'twitter', 'linkedin', 'github', 'discord', 'instagram', 
      'facebook', 'youtube', 'website', 'portfolio'
    ];

    socialFields.forEach(field => {
      if (sourceProfile[field]) {
        socialLinks[field] = sourceProfile[field];
      }
    });

    return socialLinks;
  }

  // Migrate a single user profile
  async migrateUserProfile(sourceProfile: SourceUserProfile): Promise<boolean> {
    try {
      const transformedProfile = this.transformUserProfile(sourceProfile);
      
      // Check if user already exists in target
      const { data: existingProfile } = await this.targetClient
        .from('profiles')
        .select('id')
        .eq('user_id', transformedProfile.user_id)
        .single();

      if (existingProfile) {
        console.log(`User ${transformedProfile.username} already exists, skipping...`);
        this.migrationLog.push({
          action: 'skipped',
          user_id: transformedProfile.user_id,
          username: transformedProfile.username,
          reason: 'User already exists'
        });
        return false;
      }

      // Insert into target database
      const { data, error } = await this.targetClient
        .from('profiles')
        .insert(transformedProfile);

      if (error) {
        throw new Error(`Error inserting profile: ${error.message}`);
      }

      console.log(`Successfully migrated user: ${transformedProfile.username}`);
      this.migrationLog.push({
        action: 'migrated',
        user_id: transformedProfile.user_id,
        username: transformedProfile.username,
        subscription_tier: transformedProfile.subscription_tier,
        is_admin: transformedProfile.is_admin
      });

      return true;
    } catch (error) {
      console.error(`Error migrating user ${sourceProfile.username}:`, error);
      this.migrationLog.push({
        action: 'error',
        user_id: sourceProfile.user_id,
        username: sourceProfile.username,
        error: error.message
      });
      return false;
    }
  }

  // Migrate all user profiles
  async migrateAllUsers(): Promise<{
    total: number;
    migrated: number;
    skipped: number;
    errors: number;
    log: any[];
  }> {
    console.log('Starting user migration process...');
    
    try {
      const sourceProfiles = await this.getSourceUserProfiles();
      let migrated = 0;
      let skipped = 0;
      let errors = 0;

      for (const profile of sourceProfiles) {
        try {
          const success = await this.migrateUserProfile(profile);
          if (success) {
            migrated++;
          } else {
            skipped++;
          }
        } catch (error) {
          console.error(`Error processing user ${profile.username}:`, error);
          errors++;
        }

        // Add small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 100));
      }

      const result = {
        total: sourceProfiles.length,
        migrated,
        skipped,
        errors,
        log: this.migrationLog
      };

      console.log('Migration completed:', result);
      return result;
    } catch (error) {
      console.error('Migration failed:', error);
      throw error;
    }
  }

  // Create sync system for the other project
  async createSyncSystem(): Promise<string> {
    const syncCode = `
// Sync system for your other project to connect to NeuroFlow
import { createClient } from '@supabase/supabase-js';

// NeuroFlow project configuration
const NEUROFLOW_URL = '${TARGET_SUPABASE_URL}';
const NEUROFLOW_ANON_KEY = '${TARGET_SUPABASE_ANON_KEY}';

const neuroflowClient = createClient(NEUROFLOW_URL, NEUROFLOW_ANON_KEY);

export class NeuroFlowSync {
  // Sync user data to NeuroFlow
  static async syncUserToNeuroFlow(userData: any) {
    try {
      const { data, error } = await neuroflowClient
        .from('profiles')
        .upsert({
          user_id: userData.user_id,
          username: userData.username,
          display_name: userData.nom,
          subscription_tier: userData.subscription_tier || 'lunch',
          is_admin: userData.is_admin || false,
          updated_at: new Date().toISOString()
        }, {
          onConflict: 'user_id'
        });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Sync error:', error);
      throw error;
    }
  }

  // Get user data from NeuroFlow
  static async getUserFromNeuroFlow(userId: string) {
    try {
      const { data, error } = await neuroflowClient
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  }
}
`;

    return syncCode;
  }

  // Get migration statistics
  getMigrationStats() {
    return {
      total: this.migrationLog.length,
      migrated: this.migrationLog.filter(log => log.action === 'migrated').length,
      skipped: this.migrationLog.filter(log => log.action === 'skipped').length,
      errors: this.migrationLog.filter(log => log.action === 'error').length
    };
  }
}

export default UserMigrationManager;
