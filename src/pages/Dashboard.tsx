import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const Dashboard: React.FC = () => {
  const { user, profile, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleRefreshProfile = async () => {
    console.log('🔄 Refreshing profile...');
    // Vider complètement le cache
    localStorage.clear();
    sessionStorage.clear();
    // Forcer le rechargement
    window.location.reload();
  };

  const handleForceAdmin = () => {
    // Fonction temporaire pour tester l'admin
    console.log('🔧 Force admin mode (temporary)');
    // Cette fonction sera supprimée en production
  };

  const handleListAllProfiles = async () => {
    console.log('🔍 Listing all profiles...');
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .limit(10);
      
      console.log('📋 All profiles:', { data, error });
    } catch (err) {
      console.error('❌ Error listing profiles:', err);
    }
  };

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
              <p className="text-supabase-dark-400">
                Welcome back, {profile?.display_name || profile?.username || user?.email}
              </p>
            </div>
            <div className="flex gap-4">
              {isAdmin && (
                <button
                  onClick={() => navigate('/admin')}
                  className="px-4 py-2 bg-accent-green text-supabase-dark-900 rounded-lg font-medium hover:bg-accent-green/90 transition-colors"
                >
                  🚀 Admin Panel
                </button>
              )}
              <button
                onClick={handleRefreshProfile}
                className="px-4 py-2 bg-supabase-dark-700 text-white rounded-lg font-medium hover:bg-supabase-dark-600 transition-colors"
              >
                🔄 Refresh Profile
              </button>
              <button
                onClick={handleForceAdmin}
                className="px-4 py-2 bg-yellow-600 text-white rounded-lg font-medium hover:bg-yellow-700 transition-colors"
              >
                🔧 Debug Admin
              </button>
              <button
                onClick={handleListAllProfiles}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                📋 List Profiles
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Welcome Card */}
          <div className="bg-supabase-dark-800 rounded-lg p-6 border border-supabase-dark-700">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-accent-green/10 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">👋</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Welcome</h3>
                <p className="text-supabase-dark-400 text-sm">OpenForge Dashboard</p>
              </div>
            </div>
            <p className="text-supabase-dark-300">
              You're successfully connected to the same Supabase instance as FiverFlow.
            </p>
          </div>

          {/* Profile Info */}
          <div className="bg-supabase-dark-800 rounded-lg p-6 border border-supabase-dark-700">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-accent-green/10 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">👤</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Profile</h3>
                <p className="text-supabase-dark-400 text-sm">Account Information</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-supabase-dark-300">
                <span className="font-medium">Username:</span> {profile?.username}
              </p>
              <p className="text-supabase-dark-300">
                <span className="font-medium">Tier:</span> {profile?.subscription_tier}
              </p>
              <p className="text-supabase-dark-300">
                <span className="font-medium">Status:</span> {profile?.is_active ? 'Active' : 'Inactive'}
              </p>
              <p className="text-supabase-dark-300">
                <span className="font-medium">Admin:</span> 
                <span className={`ml-2 px-2 py-1 rounded text-xs font-medium ${
                  isAdmin 
                    ? 'bg-accent-green/20 text-accent-green border border-accent-green/30' 
                    : 'bg-supabase-dark-600 text-supabase-dark-300'
                }`}>
                  {isAdmin ? '✅ Admin' : '❌ Member'}
                </span>
              </p>
            </div>
          </div>

          {/* Connection Status */}
          <div className="bg-supabase-dark-800 rounded-lg p-6 border border-supabase-dark-700">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-accent-green/10 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🔗</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Connection</h3>
                <p className="text-supabase-dark-400 text-sm">Supabase Status</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-accent-green rounded-full mr-3"></div>
              <span className="text-supabase-dark-300">Connected to FiverFlow Database</span>
            </div>
          </div>
        </div>

        {/* Debug Information */}
        <div className="mt-8 bg-supabase-dark-800 rounded-lg p-6 border border-supabase-dark-700">
          <h3 className="text-lg font-semibold text-white mb-4">Debug Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-supabase-dark-400 text-sm mb-1">User ID</p>
              <p className="text-supabase-dark-300 font-mono text-sm">{user?.id}</p>
            </div>
            <div>
              <p className="text-supabase-dark-400 text-sm mb-1">Email</p>
              <p className="text-supabase-dark-300 text-sm">{user?.email}</p>
            </div>
            <div>
              <p className="text-supabase-dark-400 text-sm mb-1">Profile ID</p>
              <p className="text-supabase-dark-300 font-mono text-sm">{profile?.id || 'Not found'}</p>
            </div>
            <div>
              <p className="text-supabase-dark-400 text-sm mb-1">Username</p>
              <p className="text-supabase-dark-300 text-sm">{profile?.username || 'Not set'}</p>
            </div>
            <div>
              <p className="text-supabase-dark-400 text-sm mb-1">Admin Status</p>
              <p className="text-supabase-dark-300 text-sm">
                {profile?.is_admin ? '✅ True' : '❌ False'}
              </p>
            </div>
            <div>
              <p className="text-supabase-dark-400 text-sm mb-1">Profile Active</p>
              <p className="text-supabase-dark-300 text-sm">
                {profile?.is_active ? '✅ Active' : '❌ Inactive'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
