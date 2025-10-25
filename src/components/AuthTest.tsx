import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const AuthTest: React.FC = () => {
  const [authStatus, setAuthStatus] = useState<string>('Checking...');
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      setLoading(true);
      setAuthStatus('Checking authentication...');
      
      // Test basic connection
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (error) {
        setAuthStatus(`❌ Auth error: ${error.message}`);
        setUser(null);
      } else if (session?.user) {
        setAuthStatus('✅ User is logged in');
        setUser(session.user);
      } else {
        setAuthStatus('ℹ️ No user logged in (this is normal)');
        setUser(null);
      }
    } catch (error) {
      setAuthStatus(`❌ Connection error: ${error.message}`);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const testSignUp = async () => {
    try {
      setAuthStatus('Testing sign up...');
      const { data, error } = await supabase.auth.signUp({
        email: 'test@example.com',
        password: 'testpassword123'
      });
      
      if (error) {
        setAuthStatus(`❌ Sign up error: ${error.message}`);
      } else {
        setAuthStatus('✅ Sign up successful');
      }
    } catch (error) {
      setAuthStatus(`❌ Sign up error: ${error.message}`);
    }
  };

  const testDatabase = async () => {
    try {
      setAuthStatus('Testing database connection...');
      const { data, error } = await supabase
        .from('profiles')
        .select('count')
        .limit(1);
      
      if (error) {
        setAuthStatus(`❌ Database error: ${error.message}`);
      } else {
        setAuthStatus('✅ Database connection successful');
      }
    } catch (error) {
      setAuthStatus(`❌ Database error: ${error.message}`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Auth Test Panel</h1>
      
      <div className="space-y-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Authentication Status</h3>
          <p className="text-gray-700">{authStatus}</p>
          {loading && <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>}
        </div>

        {user && (
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">User Info</h3>
            <p className="text-sm text-gray-600">Email: {user.email}</p>
            <p className="text-sm text-gray-600">ID: {user.id}</p>
          </div>
        )}

        <div className="flex space-x-4">
          <button
            onClick={checkAuth}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Check Auth
          </button>
          <button
            onClick={testSignUp}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Test Sign Up
          </button>
          <button
            onClick={testDatabase}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Test Database
          </button>
        </div>

        <div className="p-4 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Configuration</h3>
          <p className="text-sm text-gray-600">Supabase URL: {import.meta.env.VITE_SUPABASE_URL}</p>
          <p className="text-sm text-gray-600">Key: {import.meta.env.VITE_SUPABASE_ANON_KEY?.substring(0, 20)}...</p>
        </div>
      </div>
    </div>
  );
};

export default AuthTest;
