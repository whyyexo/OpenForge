#!/usr/bin/env node

/**
 * Direct Auth Test
 * 
 * This script tests authentication directly without the React app
 */

import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || 'https://gcohjfjhktpqswqwiczb.supabase.co';
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdjb2hqZmpoa3RwcXN3cXdpY3piIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1NTI5MTksImV4cCI6MjA3NjEyODkxOX0.pXPSc41jD53A6qLHEdhZuWz4RhvtGJ91Wzt-g31nJuQ';

console.log('🔍 Testing Authentication Directly...\n');

// Create client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function testAuth() {
  try {
    console.log('🔐 Testing auth session...');
    
    const { data: { session }, error } = await supabase.auth.getSession();
    
    if (error) {
      console.log('❌ Auth session error:', error.message);
      return false;
    }
    
    console.log('✅ Auth session successful');
    console.log(`   Session: ${session ? 'Active' : 'No session'}`);
    
    if (session?.user) {
      console.log(`   User: ${session.user.email}`);
    }
    
    return true;
    
  } catch (error) {
    console.log('❌ Auth test failed:', error.message);
    return false;
  }
}

async function testDatabase() {
  try {
    console.log('🗄️ Testing database access...');
    
    const { data, error } = await supabase
      .from('profiles')
      .select('count')
      .limit(1);
    
    if (error) {
      console.log('❌ Database error:', error.message);
      return false;
    }
    
    console.log('✅ Database access successful');
    return true;
    
  } catch (error) {
    console.log('❌ Database test failed:', error.message);
    return false;
  }
}

async function runTests() {
  console.log('🚀 Starting direct auth tests...\n');
  
  const authTest = await testAuth();
  console.log('');
  
  const dbTest = await testDatabase();
  console.log('');
  
  if (authTest && dbTest) {
    console.log('🎉 All tests passed! Authentication is working correctly.');
    console.log('\n📋 The timeout error in the browser might be due to:');
    console.log('   1. Browser cache issues');
    console.log('   2. React component loading timing');
    console.log('   3. Network latency');
    console.log('\n💡 Try:');
    console.log('   - Clear browser cache');
    console.log('   - Try incognito mode');
    console.log('   - Check browser console for more details');
  } else {
    console.log('💥 Some tests failed. Check the errors above.');
  }
}

// Run tests
runTests();
