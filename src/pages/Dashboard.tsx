import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { user, profile, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleRefreshProfile = () => {
    window.location.reload();
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

        {/* Additional Info */}
        <div className="mt-8 bg-supabase-dark-800 rounded-lg p-6 border border-supabase-dark-700">
          <h3 className="text-lg font-semibold text-white mb-4">System Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-supabase-dark-400 text-sm mb-1">User ID</p>
              <p className="text-supabase-dark-300 font-mono text-sm">{user?.id}</p>
            </div>
            <div>
              <p className="text-supabase-dark-400 text-sm mb-1">Last Login</p>
              <p className="text-supabase-dark-300 text-sm">
                {profile?.last_login ? new Date(profile.last_login).toLocaleString() : 'Never'}
              </p>
            </div>
            <div>
              <p className="text-supabase-dark-400 text-sm mb-1">Login Count</p>
              <p className="text-supabase-dark-300 text-sm">{profile?.login_count || 0}</p>
            </div>
            <div>
              <p className="text-supabase-dark-400 text-sm mb-1">Account Created</p>
              <p className="text-supabase-dark-300 text-sm">
                {profile?.created_at ? new Date(profile.created_at).toLocaleDateString() : 'Unknown'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
