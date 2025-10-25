#!/usr/bin/env node

/**
 * User Migration Script for NeuroFlow
 * 
 * This script migrates users from your other Supabase project to NeuroFlow
 * 
 * Usage:
 * 1. Update the configuration below with your project details
 * 2. Run: node migrate-users.js
 * 
 * Make sure you have the @supabase/supabase-js package installed:
 * npm install @supabase/supabase-js
 */

const { createClient } = require('@supabase/supabase-js');

// Configuration
const SOURCE_CONFIG = {
  url: 'https://arnuyyyryvbfcvqauqur.supabase.co',
  serviceKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFybnV5eXlyeXZiZmN2cWF1cXVyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MzIyNjkyNCwiZXhwIjoyMDY4ODAyOTI0fQ.qlUGGfviSoPyXnqqL5OOMTSHLYlucaCHRXgSwNuUHcY'
};

const TARGET_CONFIG = {
  url: process.env.VITE_SUPABASE_URL || 'https://demo.supabase.co',
  anonKey: process.env.VITE_SUPABASE_ANON_KEY || 'demo-key'
};

// Create clients
const sourceClient = createClient(SOURCE_CONFIG.url, SOURCE_CONFIG.serviceKey);
const targetClient = createClient(TARGET_CONFIG.url, TARGET_CONFIG.anonKey);

// Migration statistics
let stats = {
  total: 0,
  migrated: 0,
  skipped: 0,
  errors: 0,
  startTime: new Date()
};

// Logging function
function log(message, type = 'info') {
  const timestamp = new Date().toLocaleTimeString();
  const prefix = type === 'error' ? '❌' : type === 'success' ? '✅' : 'ℹ️';
  console.log(`${prefix} [${timestamp}] ${message}`);
}

// Transform user profile from source to NeuroFlow format
function transformUserProfile(sourceProfile) {
  const now = new Date().toISOString();
  
  return {
    id: sourceProfile.id,
    user_id: sourceProfile.user_id,
    username: sourceProfile.username || sourceProfile.nom || `user_${sourceProfile.id}`,
    display_name: sourceProfile.nom || sourceProfile.username,
    bio: sourceProfile.bio || null,
    avatar_url: sourceProfile.avatar_url || null,
    banner_url: sourceProfile.banner_url || null,
    subscription_tier: mapSubscriptionTier(sourceProfile.subscription_tier),
    social_links: extractSocialLinks(sourceProfile),
    is_admin: sourceProfile.is_admin || false,
    original_data: sourceProfile, // Store all original data
    first_name: sourceProfile.first_name || sourceProfile.nom?.split(' ')[0] || null,
    last_name: sourceProfile.last_name || sourceProfile.nom?.split(' ').slice(1).join(' ') || null,
    phone: sourceProfile.phone || null,
    date_of_birth: sourceProfile.date_of_birth || null,
    gender: sourceProfile.gender || null,
    location: sourceProfile.location || null,
    timezone: sourceProfile.timezone || null,
    language: sourceProfile.language || 'en',
    preferences: extractPreferences(sourceProfile),
    is_verified: sourceProfile.is_verified || false,
    is_active: sourceProfile.is_active !== false,
    last_login: sourceProfile.last_login || null,
    login_count: sourceProfile.login_count || 0,
    subscription_start_date: sourceProfile.subscription_start_date || null,
    subscription_end_date: sourceProfile.subscription_end_date || null,
    subscription_status: sourceProfile.subscription_status || 'active',
    email_notifications: sourceProfile.email_notifications !== false,
    push_notifications: sourceProfile.push_notifications !== false,
    sms_notifications: sourceProfile.sms_notifications || false,
    profile_visibility: sourceProfile.profile_visibility || 'public',
    show_email: sourceProfile.show_email || false,
    show_phone: sourceProfile.show_phone || false,
    created_at: sourceProfile.created_at || now,
    updated_at: now
  };
}

// Map subscription tiers
function mapSubscriptionTier(sourceTier) {
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

// Extract social links
function extractSocialLinks(sourceProfile) {
  const socialLinks = {};
  const socialFields = [
    'twitter', 'linkedin', 'github', 'discord', 'instagram', 
    'facebook', 'youtube', 'website', 'portfolio', 'telegram'
  ];

  socialFields.forEach(field => {
    if (sourceProfile[field]) {
      socialLinks[field] = sourceProfile[field];
    }
  });

  return socialLinks;
}

// Extract preferences
function extractPreferences(sourceProfile) {
  const preferences = {};
  const preferenceFields = [
    'theme', 'notifications', 'privacy', 'language', 'timezone',
    'currency', 'date_format', 'time_format'
  ];

  preferenceFields.forEach(field => {
    if (sourceProfile[field]) {
      preferences[field] = sourceProfile[field];
    }
  });

  return preferences;
}

// Migrate a single user
async function migrateUser(sourceProfile) {
  try {
    const transformedProfile = transformUserProfile(sourceProfile);
    
    // Check if user already exists
    const { data: existingProfile } = await targetClient
      .from('profiles')
      .select('id')
      .eq('user_id', transformedProfile.user_id)
      .single();

    if (existingProfile) {
      log(`User ${transformedProfile.username} already exists, skipping...`, 'info');
      stats.skipped++;
      return false;
    }

    // Insert into target database
    const { data, error } = await targetClient
      .from('profiles')
      .insert(transformedProfile);

    if (error) {
      throw new Error(`Database error: ${error.message}`);
    }

    log(`Successfully migrated user: ${transformedProfile.username} (${transformedProfile.subscription_tier})`, 'success');
    stats.migrated++;
    return true;

  } catch (error) {
    log(`Error migrating user ${sourceProfile.username}: ${error.message}`, 'error');
    stats.errors++;
    return false;
  }
}

// Main migration function
async function runMigration() {
  try {
    log('🚀 Starting user migration process...');
    log(`Source: ${SOURCE_CONFIG.url}`);
    log(`Target: ${TARGET_CONFIG.url}`);

    // Fetch all users from source
    log('📥 Fetching users from source project...');
    const { data: sourceProfiles, error: fetchError } = await sourceClient
      .from('user_profiles')
      .select('*')
      .order('created_at', { ascending: true });

    if (fetchError) {
      throw new Error(`Failed to fetch source users: ${fetchError.message}`);
    }

    stats.total = sourceProfiles.length;
    log(`📊 Found ${stats.total} users to migrate`);

    if (stats.total === 0) {
      log('No users found to migrate', 'info');
      return;
    }

    // Show sample data structure
    if (sourceProfiles.length > 0) {
      log('📋 Sample user data structure:');
      console.log(JSON.stringify(sourceProfiles[0], null, 2));
    }

    // Migrate users one by one
    log('🔄 Starting migration...');
    for (let i = 0; i < sourceProfiles.length; i++) {
      const profile = sourceProfiles[i];
      log(`Processing user ${i + 1}/${stats.total}: ${profile.username || profile.nom || profile.id}`);
      
      await migrateUser(profile);
      
      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    // Final statistics
    const duration = new Date() - stats.startTime;
    log('🎉 Migration completed!');
    log(`📈 Statistics:`);
    log(`   Total users: ${stats.total}`);
    log(`   Migrated: ${stats.migrated}`);
    log(`   Skipped: ${stats.skipped}`);
    log(`   Errors: ${stats.errors}`);
    log(`   Duration: ${Math.round(duration / 1000)}s`);

    // Generate sync code for the other project
    generateSyncCode();

  } catch (error) {
    log(`💥 Migration failed: ${error.message}`, 'error');
    process.exit(1);
  }
}

// Generate sync code for the other project
function generateSyncCode() {
  const syncCode = `
// NeuroFlow Sync System
// Add this to your other project to enable synchronization

import { createClient } from '@supabase/supabase-js';

// NeuroFlow project configuration
const NEUROFLOW_URL = '${TARGET_CONFIG.url}';
const NEUROFLOW_ANON_KEY = '${TARGET_CONFIG.anonKey}';

const neuroflowClient = createClient(NEUROFLOW_URL, NEUROFLOW_ANON_KEY);

export class NeuroFlowSync {
  // Sync user data to NeuroFlow
  static async syncUserToNeuroFlow(userData) {
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
  static async getUserFromNeuroFlow(userId) {
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

  const fs = require('fs');
  fs.writeFileSync('neuroflow-sync.js', syncCode);
  log('📄 Sync code generated: neuroflow-sync.js');
}

// Run migration if this script is executed directly
if (require.main === module) {
  runMigration();
}

module.exports = { runMigration, transformUserProfile };
