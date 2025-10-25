#!/usr/bin/env node

/**
 * Test Supabase Connection
 * 
 * This script tests the Supabase connection to diagnose auth issues
 */

import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || 'https://gcohjfjhktpqswqwiczb.supabase.co';
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdjb2hqZmpoa3RwcXN3cXdpY3piIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1NTI5MTksImV4cCI6MjA3NjEyODkxOX0.pXPSc41jD53A6qLHEdhZuWz4RhvtGJ91Wzt-g31nJuQ';

console.log('🔍 Testing Supabase Connection...\n');

console.log('📋 Configuration:');
console.log(`   URL: ${SUPABASE_URL}`);
console.log(`   Key: ${SUPABASE_ANON_KEY.substring(0, 20)}...`);
console.log('');

// Create client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function testConnection() {
  try {
    console.log('🔌 Testing basic connection...');
    
    // Test basic connection
    const { data, error } = await supabase
      .from('profiles')
      .select('count')
      .limit(1);

    if (error) {
      console.log('❌ Database connection failed:', error.message);
      return false;
    }

    console.log('✅ Database connection successful');
    return true;

  } catch (error) {
    console.log('❌ Connection test failed:', error.message);
    return false;
  }
}

async function testAuth() {
  try {
    console.log('🔐 Testing authentication...');
    
    // Test auth session
    const { data: { session }, error } = await supabase.auth.getSession();
    
    if (error) {
      console.log('❌ Auth session failed:', error.message);
      return false;
    }

    console.log('✅ Auth session successful');
    console.log(`   Session: ${session ? 'Active' : 'No session'}`);
    return true;

  } catch (error) {
    console.log('❌ Auth test failed:', error.message);
    return false;
  }
}

async function runTests() {
  console.log('🚀 Starting connection tests...\n');

  const dbTest = await testConnection();
  console.log('');
  
  const authTest = await testAuth();
  console.log('');

  if (dbTest && authTest) {
    console.log('🎉 All tests passed! Supabase is working correctly.');
    console.log('\n📋 Next steps:');
    console.log('   1. Restart your dev server: npm run dev');
    console.log('   2. Check browser console for any errors');
    console.log('   3. Try accessing /admin');
  } else {
    console.log('💥 Some tests failed. Check the errors above.');
    console.log('\n🔧 Troubleshooting:');
    console.log('   1. Verify your Supabase URL and key');
    console.log('   2. Check if your Supabase project is active');
    console.log('   3. Ensure RLS policies are configured');
  }
}

// Run tests
runTests();
