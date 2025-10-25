import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { User } from '@supabase/supabase-js';
import UnifiedAuth, { UnifiedUser } from './lib/unifiedAuth';
import ProfileManager, { CompleteUserProfile } from './lib/profileManager';

// Supabase configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://gcohjfjhktpqswqwiczb.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdjb2hqZmpoa3RwcXN3cXdpY3piIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1NTI5MTksImV4cCI6MjA3NjEyODkxOX0.pXPSc41jD53A6qLHEdhZuWz4RhvtGJ91Wzt-g31nJuQ';

const supabase = createClient(supabaseUrl, supabaseAnonKey);
const unifiedAuth = UnifiedAuth.getInstance();
const profileManager = ProfileManager.getInstance();

// Supabase-style Dashboard Component
const SupabaseDashboard: React.FC = () => {
  const [user, setUser] = useState<CompleteUserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [showAuth, setShowAuth] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // Initialize auth
    const initAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          // Get user profile
          const { data: profile } = await supabase
            .from('profiles')
            .select('*')
            .eq('user_id', session.user.id)
            .single();

          if (profile) {
            setUser({
              id: session.user.id,
              email: session.user.email!,
              username: profile.username,
              display_name: profile.display_name,
              subscription_tier: profile.subscription_tier,
              is_admin: profile.is_admin,
              source_project: 'neuroflow',
              original_data: profile
            });
          }
        }
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
        if (session?.user) {
          // Get user profile
          supabase
            .from('profiles')
            .select('*')
            .eq('user_id', session.user.id)
            .single()
            .then(({ data: profile }) => {
              if (profile) {
                setUser({
                  id: session.user.id,
                  email: session.user.email!,
                  username: profile.username,
                  display_name: profile.display_name,
                  subscription_tier: profile.subscription_tier,
                  is_admin: profile.is_admin,
                  source_project: 'neuroflow',
                  original_data: profile
                });
              }
            });
        } else {
          setUser(null);
        }
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleSignIn = async (email: string, password: string) => {
    try {
      // First, try to get complete profile from other project
      const completeProfile = await profileManager.getCompleteProfileFromOtherProject(email);
      
      if (completeProfile) {
        console.log('✅ Complete profile found in other project');
        setUser(completeProfile);
        return { success: true };
      }

      // If not found, try regular auth
      const result = await unifiedAuth.signIn(email, password);
      if (result.success && result.user) {
        // Convert to complete profile
        const completeProfile: CompleteUserProfile = {
          id: result.user.id,
          email: result.user.email,
          username: result.user.username || '',
          display_name: result.user.display_name || '',
          is_admin: result.user.is_admin || false,
          subscription_tier: result.user.subscription_tier || 'lunch',
          source_project: result.user.source_project || 'neuroflow',
          original_data: result.user.original_data,
          social_links: {},
          preferences: {},
          email_notifications: true,
          push_notifications: true,
          sms_notifications: false,
          profile_visibility: 'public',
          show_email: false,
          show_phone: false,
          is_verified: false,
          is_active: true,
          subscription_status: 'active',
          login_count: 0,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };
        setUser(completeProfile);
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
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-green-600 border-t-transparent mx-auto mb-4"></div>
          <p className="text-slate-300 text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          {/* Supabase-style Header */}
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-green-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12v8.959a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.66z"/>
              </svg>
            </div>
            <h1 className="text-2xl font-semibold text-white mb-2">NeuroFlow</h1>
            <p className="text-slate-300">Unified Dashboard & Account Management</p>
          </div>

          {/* Supabase-style Auth Card */}
          <div className="bg-slate-800 rounded-lg border border-slate-700 shadow-sm">
            {showAuth ? (
              <AuthForm 
                onSignIn={handleSignIn}
                onSignUp={handleSignUp}
                onClose={() => setShowAuth(false)}
              />
            ) : (
              <div className="p-6">
                <div className="space-y-4">
                  <button
                    onClick={() => setShowAuth(true)}
                    className="w-full bg-green-600 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
                  >
                    Sign In / Sign Up
                  </button>
                  <p className="text-center text-sm text-slate-500">
                    Connect with your existing account from other projects
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Supabase-style Header */}
      <header className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12v8.959a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.66z"/>
                </svg>
              </div>
              <h1 className="text-lg font-semibold text-white">NeuroFlow</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-sm text-slate-300">
                {user.email}
              </div>
              <button
                onClick={handleSignOut}
                className="text-slate-300 hover:text-white px-3 py-2 rounded-lg hover:bg-slate-700 text-sm"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Supabase-style Sidebar */}
      <div className="flex">
        <div className="w-64 bg-slate-800 border-r border-slate-700 min-h-screen">
          <nav className="p-4 space-y-1">
            {[
              { id: 'overview', name: 'Overview', icon: '📊' },
              { id: 'projects', name: 'Projects', icon: '🚀' },
              { id: 'account', name: 'Account', icon: '👤' },
              { id: 'settings', name: 'Settings', icon: '⚙️' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-green-600 text-white'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                <span className="mr-3">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="max-w-6xl">
            {activeTab === 'overview' && <OverviewTab user={user} />}
            {activeTab === 'projects' && <ProjectsTab user={user} />}
            {activeTab === 'account' && <AccountTab user={user} />}
            {activeTab === 'settings' && <SettingsTab user={user} />}
          </div>
        </div>
      </div>
    </div>
  );
};

// Supabase-style Auth Form
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
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-white">
          {mode === 'signin' ? 'Sign In' : 'Sign Up'}
        </h2>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-slate-300"
        >
          ✕
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === 'signup' && (
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
              required
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
            required
          />
        </div>

        {error && (
          <div className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg p-3">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors disabled:opacity-50 text-sm"
        >
          {loading ? 'Loading...' : (mode === 'signin' ? 'Sign In' : 'Sign Up')}
        </button>
      </form>

      <div className="mt-4 text-center">
        <button
          onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
          className="text-green-600 hover:text-green-700 text-sm"
        >
          {mode === 'signin' ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
        </button>
      </div>
    </div>
  );
};

// Supabase-style Tab Components
const OverviewTab: React.FC<{ user: CompleteUserProfile }> = ({ user }) => (
  <div>
    <div className="mb-6">
      <h2 className="text-2xl font-semibold text-white mb-2">Welcome back, {user.display_name || user.username}!</h2>
      <p className="text-slate-300">Here's what's happening with your account today.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-slate-300">Active Projects</p>
            <p className="text-2xl font-semibold text-white">0</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-slate-300">Total Users</p>
            <p className="text-2xl font-semibold text-white">1</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-slate-300">Account Status</p>
            <p className="text-2xl font-semibold text-white">Active</p>
          </div>
        </div>
      </div>
    </div>

    {/* Recent Activity */}
    <div className="bg-slate-800 rounded-lg border border-slate-700">
      <div className="px-6 py-4 border-b border-slate-700">
        <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
      </div>
      <div className="p-6">
        <div className="text-center py-8">
          <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h4 className="text-lg font-medium text-white mb-2">No recent activity</h4>
          <p className="text-slate-300">Your recent activity will appear here.</p>
        </div>
      </div>
    </div>
  </div>
);

const ProjectsTab: React.FC<{ user: CompleteUserProfile }> = ({ user }) => (
  <div>
    <div className="mb-6">
      <h2 className="text-2xl font-semibold text-white mb-2">Projects</h2>
      <p className="text-slate-300">Manage your projects and applications.</p>
    </div>

    <div className="bg-slate-800 rounded-lg border border-slate-700">
      <div className="px-6 py-4 border-b border-slate-700">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-white">Your Projects</h3>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
            New Project
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h4 className="text-lg font-medium text-white mb-2">No projects yet</h4>
          <p className="text-slate-300 mb-6">Get started by creating your first project.</p>
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium">
            Create Project
          </button>
        </div>
      </div>
    </div>
  </div>
);

const AccountTab: React.FC<{ user: CompleteUserProfile }> = ({ user }) => (
  <div>
    <div className="mb-6">
      <h2 className="text-2xl font-semibold text-white mb-2">Account</h2>
      <p className="text-slate-300">Manage your account settings and preferences.</p>
    </div>

    <div className="space-y-6">
      {/* Profile Information */}
      <div className="bg-slate-800 rounded-lg border border-slate-700">
        <div className="px-6 py-4 border-b border-slate-700">
          <h3 className="text-lg font-semibold text-white">Profile Information</h3>
        </div>
        <div className="p-6 space-y-6">
          {/* Basic Information */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Basic Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                <p className="text-white">{user.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Username</label>
                <p className="text-white">{user.username || 'Not set'}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Display Name</label>
                <p className="text-white">{user.display_name || 'Not set'}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
                <p className="text-white">{user.first_name && user.last_name ? `${user.first_name} ${user.last_name}` : 'Not set'}</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Phone</label>
                <p className="text-white">{user.phone || 'Not set'}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Location</label>
                <p className="text-white">{user.location || 'Not set'}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Date of Birth</label>
                <p className="text-white">{user.date_of_birth || 'Not set'}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Gender</label>
                <p className="text-white">{user.gender || 'Not set'}</p>
              </div>
            </div>
          </div>

          {/* Account Status */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Account Status</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Subscription</label>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  user.subscription_tier === 'boost' ? 'bg-green-100 text-green-800' :
                  user.subscription_tier === 'scale' ? 'bg-blue-100 text-blue-800' :
                  'bg-slate-700 text-slate-800'
                }`}>
                  {user.subscription_tier || 'lunch'}
                </span>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Status</label>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  user.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {user.is_active ? 'Active' : 'Inactive'}
                </span>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Verification</label>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  user.is_verified ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {user.is_verified ? 'Verified' : 'Unverified'}
                </span>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Admin Status</label>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  user.is_admin ? 'bg-red-100 text-red-800' : 'bg-slate-700 text-slate-800'
                }`}>
                  {user.is_admin ? 'Administrator' : 'Regular User'}
                </span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          {Object.keys(user.social_links).length > 0 && (
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Social Links</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(user.social_links).map(([platform, url]) => (
                  <div key={platform}>
                    <label className="block text-sm font-medium text-slate-300 mb-1 capitalize">{platform}</label>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 text-sm">
                      {url}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Preferences */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Preferences</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Language</label>
                <p className="text-white">{user.language || 'English'}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Timezone</label>
                <p className="text-white">{user.timezone || 'Not set'}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Profile Visibility</label>
                <p className="text-white capitalize">{user.profile_visibility || 'Public'}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Email Notifications</label>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  user.email_notifications ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {user.email_notifications ? 'Enabled' : 'Disabled'}
                </span>
              </div>
            </div>
          </div>

          {/* Activity */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Activity</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Last Login</label>
                <p className="text-white">{user.last_login ? new Date(user.last_login).toLocaleString() : 'Never'}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Login Count</label>
                <p className="text-white">{user.login_count || 0}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Account Created</label>
                <p className="text-white">{new Date(user.created_at).toLocaleDateString()}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Last Updated</label>
                <p className="text-white">{new Date(user.updated_at).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Account Status */}
      <div className="bg-slate-800 rounded-lg border border-slate-700">
        <div className="px-6 py-4 border-b border-slate-700">
          <h3 className="text-lg font-semibold text-white">Account Status</h3>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-white">Account Type</h4>
              <p className="text-sm text-slate-300">
                {user.source_project === 'other' ? 'Migrated from other project' : 'NeuroFlow account'}
              </p>
            </div>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
              Active
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-white">Admin Status</h4>
              <p className="text-sm text-slate-300">Account permissions</p>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              user.is_admin ? 'bg-red-100 text-red-800' : 'bg-slate-700 text-slate-800'
            }`}>
              {user.is_admin ? 'Administrator' : 'Regular User'}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SettingsTab: React.FC<{ user: CompleteUserProfile }> = ({ user }) => (
  <div>
    <div className="mb-6">
      <h2 className="text-2xl font-semibold text-white mb-2">Settings</h2>
      <p className="text-slate-300">Manage your application settings and preferences.</p>
    </div>

    <div className="space-y-6">
      {/* Notifications */}
      <div className="bg-slate-800 rounded-lg border border-slate-700">
        <div className="px-6 py-4 border-b border-slate-700">
          <h3 className="text-lg font-semibold text-white">Notifications</h3>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-white">Email Notifications</h4>
              <p className="text-sm text-slate-300">Receive updates about your projects</p>
            </div>
            <button className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-medium">
              Enabled
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-white">Push Notifications</h4>
              <p className="text-sm text-slate-300">Receive real-time updates</p>
            </div>
            <button className="bg-slate-200 text-slate-300 px-3 py-1 rounded-lg text-sm font-medium">
              Disabled
            </button>
          </div>
        </div>
      </div>

      {/* Unified Account */}
      <div className="bg-slate-800 rounded-lg border border-slate-700">
        <div className="px-6 py-4 border-b border-slate-700">
          <h3 className="text-lg font-semibold text-white">Unified Account</h3>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-white">Project Synchronization</h4>
              <p className="text-sm text-slate-300">Keep data synced between projects</p>
            </div>
            <button className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-medium">
              Active
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-white">Data Migration</h4>
              <p className="text-sm text-slate-300">Migrate users from other projects</p>
            </div>
            <button className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-medium">
              Available
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SupabaseDashboard;