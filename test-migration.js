#!/usr/bin/env node

/**
 * Test Migration Script
 * 
 * This script tests the migration process with a small sample of users
 * before running the full migration.
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

// Test functions
async function testSourceConnection() {
  console.log('🔍 Testing source connection...');
  try {
    const { data, error } = await sourceClient
      .from('user_profiles')
      .select('id, username, nom, email, is_admin, subscription_tier')
      .limit(5);

    if (error) {
      throw new Error(`Source connection failed: ${error.message}`);
    }

    console.log('✅ Source connection successful');
    console.log(`📊 Found ${data.length} sample users:`);
    data.forEach((user, index) => {
      console.log(`   ${index + 1}. ${user.username || user.nom} (${user.subscription_tier || 'lunch'}) ${user.is_admin ? '[ADMIN]' : ''}`);
    });

    return data;
  } catch (error) {
    console.error('❌ Source connection failed:', error.message);
    throw error;
  }
}

async function testTargetConnection() {
  console.log('🔍 Testing target connection...');
  try {
    const { data, error } = await targetClient
      .from('profiles')
      .select('id, username, subscription_tier, is_admin')
      .limit(3);

    if (error) {
      throw new Error(`Target connection failed: ${error.message}`);
    }

    console.log('✅ Target connection successful');
    console.log(`📊 Found ${data.length} existing users in target`);
    return data;
  } catch (error) {
    console.error('❌ Target connection failed:', error.message);
    throw error;
  }
}

async function testSchemaCompatibility() {
  console.log('🔍 Testing schema compatibility...');
  
  const sampleUser = {
    id: 'test-id',
    user_id: 'test-user-id',
    username: 'testuser',
    display_name: 'Test User',
    subscription_tier: 'lunch',
    is_admin: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };

  try {
    // Test if we can insert a test record
    const { data, error } = await targetClient
      .from('profiles')
      .insert(sampleUser);

    if (error) {
      throw new Error(`Schema test failed: ${error.message}`);
    }

    console.log('✅ Schema compatibility test passed');
    
    // Clean up test record
    await targetClient
      .from('profiles')
      .delete()
      .eq('id', 'test-id');

    return true;
  } catch (error) {
    console.error('❌ Schema compatibility test failed:', error.message);
    throw error;
  }
}

async function runFullTest() {
  console.log('🚀 Starting migration test...\n');

  try {
    // Test connections
    await testSourceConnection();
    console.log('');
    
    await testTargetConnection();
    console.log('');
    
    await testSchemaCompatibility();
    console.log('');

    console.log('🎉 All tests passed! Migration is ready to run.');
    console.log('\n📋 Next steps:');
    console.log('   1. Run: node migrate-users.js');
    console.log('   2. Or use the web interface at /admin');
    console.log('   3. Check the generated sync code');

  } catch (error) {
    console.error('💥 Test failed:', error.message);
    console.log('\n🔧 Troubleshooting:');
    console.log('   1. Check your Supabase URLs and keys');
    console.log('   2. Ensure the target database has the updated schema');
    console.log('   3. Verify network connectivity');
    process.exit(1);
  }
}

// Run test if this script is executed directly
if (require.main === module) {
  runFullTest();
}

module.exports = { testSourceConnection, testTargetConnection, testSchemaCompatibility };
