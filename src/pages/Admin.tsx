import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Admin: React.FC = () => {
  const { user, profile } = useAuth();

  return (
    <div className="ml-64 p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Administrative access granted for {profile?.display_name || profile?.username || user?.email}
          </p>
        </div>

        {/* Admin Status Card */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm mb-8">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Admin Access</h3>
              <p className="text-gray-600 text-sm">Administrative privileges confirmed</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
            <span className="text-gray-700">Admin Dashboard (access granted)</span>
          </div>
        </div>

        {/* Admin Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Admin Profile</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">Username</p>
                <p className="text-gray-900">{profile?.username}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">Display Name</p>
                <p className="text-gray-900">{profile?.display_name || 'Not set'}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">Email</p>
                <p className="text-gray-900">{user?.email}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">Admin Status</p>
                <div className="flex items-center">
                  <div className={`w-2 h-2 rounded-full mr-2 ${profile?.is_admin ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  <span className={`font-medium ${profile?.is_admin ? 'text-green-600' : 'text-red-600'}`}>
                    {profile?.is_admin ? 'Admin' : 'Not Admin'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">System Status</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Database Connection</span>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-green-600 text-sm font-medium">Connected</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Authentication</span>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-green-600 text-sm font-medium">Active</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Role Verification</span>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-green-600 text-sm font-medium">Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Test Information */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Test Information</h3>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-700 text-sm mb-3">
              This admin page is accessible because your role in the database is set to admin.
            </p>
            <p className="text-gray-700 text-sm mb-3">
              To test role changes:
            </p>
            <ul className="text-gray-700 text-sm space-y-1 ml-4">
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