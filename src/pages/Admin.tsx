import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Admin: React.FC = () => {
  const { user, profile } = useAuth();

  return (
    <div className="ml-64 p-8 bg-[#0f1117] min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-[#EAEAEA]">Admin Dashboard</h1>
          <p className="text-gray-400 mt-1">
            Administrative access granted for {profile?.display_name || profile?.username || user?.email}
          </p>
        </div>

        {/* Admin Status Card */}
        <div className="bg-[#181B22] rounded-lg p-6 border border-gray-700 shadow-sm mb-8">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#EAEAEA]">Admin Access</h3>
              <p className="text-gray-400 text-sm">Administrative privileges confirmed</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
            <span className="text-gray-300">Admin Dashboard (access granted)</span>
          </div>
        </div>

        {/* Utilisateurs Section */}
        <div className="bg-[#181B22] rounded-lg p-6 border border-gray-700 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-[#EAEAEA]">Utilisateurs</h3>
            <button className="px-4 py-2 bg-[#00E38C] text-black rounded-md font-medium hover:bg-[#00E38C]/90 transition-colors">
              Ajouter un utilisateur
            </button>
          </div>
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-gray-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            <p className="text-gray-400 text-lg mb-2">Aucun utilisateur trouvé</p>
            <p className="text-gray-500 text-sm">Les utilisateurs apparaîtront ici une fois ajoutés</p>
          </div>
        </div>

        {/* Statistiques globales Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#181B22] rounded-lg p-6 border border-gray-700 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium">Total Utilisateurs</p>
                <p className="text-2xl font-semibold text-[#EAEAEA] mt-1">-</p>
              </div>
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-[#181B22] rounded-lg p-6 border border-gray-700 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium">Utilisateurs Actifs</p>
                <p className="text-2xl font-semibold text-[#EAEAEA] mt-1">-</p>
              </div>
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-[#181B22] rounded-lg p-6 border border-gray-700 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium">Administrateurs</p>
                <p className="text-2xl font-semibold text-[#EAEAEA] mt-1">-</p>
              </div>
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Admin Profile Info */}
        <div className="bg-[#181B22] rounded-lg p-6 border border-gray-700 shadow-sm">
          <h3 className="text-lg font-semibold text-[#EAEAEA] mb-4">Admin Profile</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">Username</p>
              <p className="text-[#EAEAEA]">{profile?.username}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">Display Name</p>
              <p className="text-[#EAEAEA]">{profile?.display_name || 'Not set'}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">Email</p>
              <p className="text-[#EAEAEA]">{user?.email}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">Admin Status</p>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-green-400 font-medium">Admin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;