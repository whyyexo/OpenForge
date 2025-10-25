import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { User } from '@supabase/supabase-js';
import UnifiedAuth, { UnifiedUser } from './lib/unifiedAuth';

// Supabase configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://gcohjfjhktpqswqwiczb.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdjb2hqZmpoa3RwcXN3cXdpY3piIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1NTI5MTksImV4cCI6MjA3NjEyODkxOX0.pXPSc41jD53A6qLHEdhZuWz4RhvtGJ91Wzt-g31nJuQ';

const supabase = createClient(supabaseUrl, supabaseAnonKey);
const unifiedAuth = UnifiedAuth.getInstance();

// Modern Dashboard Component
const ModernDashboard: React.FC = () => {
  const [user, setUser] = useState<UnifiedUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [showAuth, setShowAuth] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // Initialize auth
    const initAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        setUser(session?.user ?? null);
      } catch (error) {
        console.error('Auth error:', error);
      } finally {
        setLoading(false);
      }
    };

    initAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleSignIn = async (email: string, password: string) => {
    try {
      const result = await unifiedAuth.signIn(email, password);
      if (result.success && result.user) {
        setUser(result.user);
      }
      return result;
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  };

  const handleSignUp = async (email: string, password: string, username: string) => {
    try {
      const result = await unifiedAuth.signUp(email, password, username);
      if (result.success && result.user) {
        setUser(result.user);
      }
      return result;
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  };

  const handleSignOut = async () => {
    await unifiedAuth.signOut();
    setUser(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">NeuroFlow</h1>
            <p className="text-gray-600">Unified Dashboard & Account Management</p>
          </div>

          {showAuth ? (
            <AuthForm 
              onSignIn={handleSignIn}
              onSignUp={handleSignUp}
              onClose={() => setShowAuth(false)}
            />
          ) : (
            <div className="space-y-4">
              <button
                onClick={() => setShowAuth(true)}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Sign In / Sign Up
              </button>
              <p className="text-center text-sm text-gray-500">
                Connect with your existing account from other projects
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-gray-900">NeuroFlow</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                {user.email}
              </div>
              <button
                onClick={handleSignOut}
                className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'overview', name: 'Overview', icon: '📊' },
              { id: 'projects', name: 'Projects', icon: '🚀' },
              { id: 'account', name: 'Account', icon: '👤' },
              { id: 'settings', name: 'Settings', icon: '⚙️' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === 'overview' && <OverviewTab user={user} />}
          {activeTab === 'projects' && <ProjectsTab user={user} />}
          {activeTab === 'account' && <AccountTab user={user} />}
          {activeTab === 'settings' && <SettingsTab user={user} />}
        </div>
      </div>
    </div>
  );
};

// Auth Form Component
const AuthForm: React.FC<{
  onSignIn: (email: string, password: string) => Promise<any>;
  onSignUp: (email: string, password: string, username: string) => Promise<any>;
  onClose: () => void;
}> = ({ onSignIn, onSignUp, onClose }) => {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = mode === 'signin' 
        ? await onSignIn(email, password)
        : await onSignUp(email, password, username);

      if (result.success) {
        onClose();
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          {mode === 'signin' ? 'Sign In' : 'Sign Up'}
        </h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === 'signup' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        {error && (
          <div className="text-red-600 text-sm">{error}</div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50"
        >
          {loading ? 'Loading...' : (mode === 'signin' ? 'Sign In' : 'Sign Up')}
        </button>
      </form>

      <div className="mt-4 text-center">
        <button
          onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
          className="text-blue-600 hover:text-blue-700 text-sm"
        >
          {mode === 'signin' ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
        </button>
      </div>
    </div>
  );
};

// Tab Components
const OverviewTab: React.FC<{ user: UnifiedUser }> = ({ user }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Welcome Back!</h3>
      <p className="text-gray-600">You're connected to your unified account.</p>
    </div>
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Projects</h3>
      <p className="text-3xl font-bold text-blue-600">0</p>
      <p className="text-gray-600">Active projects</p>
    </div>
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Account Status</h3>
      <p className="text-green-600 font-medium">✓ Connected</p>
      <p className="text-gray-600">Unified account active</p>
    </div>
  </div>
);

const ProjectsTab: React.FC<{ user: UnifiedUser }> = ({ user }) => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Projects</h3>
    <div className="text-center py-12">
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </div>
      <h4 className="text-lg font-medium text-gray-900 mb-2">No projects yet</h4>
      <p className="text-gray-600 mb-4">Create your first project to get started</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Create Project
      </button>
    </div>
  </div>
);

const AccountTab: React.FC<{ user: UnifiedUser }> = ({ user }) => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h3>
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <p className="mt-1 text-gray-900">{user.email}</p>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Username</label>
        <p className="mt-1 text-gray-900">{user.username || 'Not set'}</p>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Display Name</label>
        <p className="mt-1 text-gray-900">{user.display_name || 'Not set'}</p>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Subscription</label>
        <p className="mt-1 text-gray-900 capitalize">{user.subscription_tier || 'lunch'}</p>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Account Type</label>
        <p className="mt-1 text-gray-900">
          {user.source_project === 'other' ? 'Migrated from other project' : 'NeuroFlow account'}
        </p>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Admin Status</label>
        <p className="mt-1 text-gray-900">
          {user.is_admin ? '✅ Administrator' : '👤 Regular User'}
        </p>
      </div>
    </div>
  </div>
);

const SettingsTab: React.FC<{ user: UnifiedUser }> = ({ user }) => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">Settings</h3>
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-medium text-gray-900">Email Notifications</h4>
          <p className="text-sm text-gray-600">Receive updates about your projects</p>
        </div>
        <button className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">
          Enabled
        </button>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-medium text-gray-900">Unified Account</h4>
          <p className="text-sm text-gray-600">Connected to other projects</p>
        </div>
        <button className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm">
          Active
        </button>
      </div>
    </div>
  </div>
);

export default ModernDashboard;