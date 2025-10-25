import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Admin: React.FC = () => {
  const { user, profile } = useAuth();

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-supabase-dark-400">
            Administrative access granted for {profile?.display_name || profile?.username || user?.email}
          </p>
        </div>

        {/* Admin Status Card */}
        <div className="bg-supabase-dark-800 rounded-lg p-6 border border-supabase-dark-700 mb-8">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-accent-green/10 rounded-lg flex items-center justify-center mr-4">
              <span className="text-2xl">⚙️</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Admin Access</h3>
              <p className="text-supabase-dark-400 text-sm">Administrative privileges confirmed</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-accent-green rounded-full mr-3"></div>
            <span className="text-supabase-dark-300">Admin Dashboard (access granted)</span>
          </div>
        </div>

        {/* Admin Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-supabase-dark-800 rounded-lg p-6 border border-supabase-dark-700">
            <h3 className="text-lg font-semibold text-white mb-4">Admin Profile</h3>
            <div className="space-y-3">
              <div>
                <p className="text-supabase-dark-400 text-sm mb-1">Username</p>
                <p className="text-supabase-dark-300">{profile?.username}</p>
              </div>
              <div>
                <p className="text-supabase-dark-400 text-sm mb-1">Display Name</p>
                <p className="text-supabase-dark-300">{profile?.display_name || 'Not set'}</p>
              </div>
              <div>
                <p className="text-supabase-dark-400 text-sm mb-1">Email</p>
                <p className="text-supabase-dark-300">{user?.email}</p>
              </div>
              <div>
                <p className="text-supabase-dark-400 text-sm mb-1">Admin Status</p>
                <p className="text-accent-green font-medium">
                  {profile?.is_admin ? '✅ Admin' : '❌ Not Admin'}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-supabase-dark-800 rounded-lg p-6 border border-supabase-dark-700">
            <h3 className="text-lg font-semibold text-white mb-4">System Status</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-supabase-dark-300">Database Connection</span>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent-green rounded-full mr-2"></div>
                  <span className="text-accent-green text-sm">Connected</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-supabase-dark-300">Authentication</span>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent-green rounded-full mr-2"></div>
                  <span className="text-accent-green text-sm">Active</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-supabase-dark-300">Role Verification</span>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent-green rounded-full mr-2"></div>
                  <span className="text-accent-green text-sm">Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Test Information */}
        <div className="mt-8 bg-supabase-dark-800 rounded-lg p-6 border border-supabase-dark-700">
          <h3 className="text-lg font-semibold text-white mb-4">Test Information</h3>
          <div className="bg-supabase-dark-900 rounded-lg p-4">
            <p className="text-supabase-dark-300 text-sm mb-2">
              This admin page is accessible because your role in the database is set to admin.
            </p>
            <p className="text-supabase-dark-300 text-sm mb-2">
              To test role changes:
            </p>
            <ul className="text-supabase-dark-300 text-sm space-y-1 ml-4">
              <li>• Change your role in Supabase to 'member' → you'll be redirected to /dashboard</li>
              <li>• Change your role back to 'admin' → you'll regain access to /admin</li>
              <li>• The role check happens in real-time</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
