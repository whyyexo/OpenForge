import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import SubscriptionManager from '../components/SubscriptionManager';

const Dashboard: React.FC = () => {
  const { user, profile, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleRefreshProfile = async () => {
    console.log('Refreshing profile...');
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
  };

  const handleListAllProfiles = async () => {
    console.log('Listing all profiles...');
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .limit(10);

      console.log('All profiles:', { data, error });
    } catch (err) {
      console.error('Error listing profiles:', err);
    }
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role?.toLowerCase()) {
      case 'admin':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'moderator':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="p-8 bg-[#0f1117] min-h-screen w-full">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-semibold text-[#EAEAEA]">Dashboard</h1>
              <p className="text-gray-400 mt-1">
                Welcome back, {profile?.display_name || profile?.username || user?.email}
              </p>
            </div>
            <div className="flex gap-3">
              {isAdmin && (
                <button
                  onClick={() => navigate('/admin')}
                  className="px-4 py-2 bg-[#00E38C] text-black rounded-md font-medium hover:bg-[#00E38C]/90 transition-colors flex items-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
                  </svg>
                  <span>Admin Dashboard</span>
                </button>
              )}
              <button
                onClick={handleRefreshProfile}
                className="px-4 py-2 bg-gray-600 text-white rounded-md font-medium hover:bg-gray-700 transition-colors flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
                <span>Refresh</span>
              </button>
              <button
                onClick={handleListAllProfiles}
                className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <span>List Profiles</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mon Compte Section */}
        <div className="bg-[#181B22] rounded-lg p-6 border border-gray-700 shadow-sm mb-8">
          <h3 className="text-lg font-semibold text-[#EAEAEA] mb-6">Mon compte</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">Nom complet</p>
              <p className="text-[#EAEAEA] font-medium">{profile?.full_name || 'Non défini'}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">Nom d'utilisateur</p>
              <p className="text-[#EAEAEA] font-medium">{profile?.username || 'Non défini'}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">Email</p>
              <p className="text-[#EAEAEA] font-medium">{user?.email}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">Rôle</p>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getRoleBadgeColor(profile?.role || 'member')}`}>
                  {profile?.role || 'Member'}
                </span>
                {isAdmin && (
                  <button
                    onClick={() => navigate('/admin')}
                    className="text-[#00E38C] hover:text-[#00E38C]/80 text-sm font-medium"
                  >
                    Accéder à l'Admin Dashboard →
                  </button>
                )}
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">Plan d'abonnement</p>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${
                  profile?.subscription === 'Lunch' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                  profile?.subscription === 'Boost' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                  profile?.subscription === 'Scale' ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' :
                  'bg-gray-500/20 text-gray-400 border-gray-500/30'
                }`}>
                  {profile?.subscription || 'Lunch'}
                </span>
                <span className="text-xs text-gray-500">
                  {profile?.subscription === 'Lunch' ? 'Gratuit' :
                   profile?.subscription === 'Boost' ? '20 USD/mois' :
                   profile?.subscription === 'Scale' ? '35 USD/mois' : 'Gratuit'}
                </span>
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">Date de création</p>
              <p className="text-[#EAEAEA] font-medium">
                {profile?.created_at ? formatDate(profile.created_at) : 'Non disponible'}
              </p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#181B22] rounded-lg p-6 border border-gray-700 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium">Statut du compte</p>
                <p className="text-xl font-semibold text-[#EAEAEA] mt-1">
                  {profile?.is_active ? 'Actif' : 'Inactif'}
                </p>
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
                <p className="text-gray-400 text-sm font-medium">Abonnement</p>
                <p className="text-xl font-semibold text-[#EAEAEA] mt-1">
                  {profile?.subscription || 'Lunch'}
                </p>
                <p className="text-xs text-gray-500">
                  {profile?.subscription === 'Lunch' ? 'Gratuit' :
                   profile?.subscription === 'Boost' ? '20 USD/mois' :
                   profile?.subscription === 'Scale' ? '35 USD/mois' : 'Gratuit'}
                </p>
              </div>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                profile?.subscription === 'Lunch' ? 'bg-green-500/20' :
                profile?.subscription === 'Boost' ? 'bg-blue-500/20' :
                profile?.subscription === 'Scale' ? 'bg-purple-500/20' : 'bg-gray-500/20'
              }`}>
                <svg className={`w-6 h-6 ${
                  profile?.subscription === 'Lunch' ? 'text-green-400' :
                  profile?.subscription === 'Boost' ? 'text-blue-400' :
                  profile?.subscription === 'Scale' ? 'text-purple-400' : 'text-gray-400'
                }`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-[#181B22] rounded-lg p-6 border border-gray-700 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium">Accès Admin</p>
                <p className="text-xl font-semibold text-[#EAEAEA] mt-1">
                  {isAdmin ? 'Oui' : 'Non'}
                </p>
              </div>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${isAdmin ? 'bg-red-500/20' : 'bg-gray-500/20'}`}>
                {isAdmin ? (
                  <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Gestion des abonnements */}
        <SubscriptionManager />

        {/* Debug Information */}
        <div className="bg-[#181B22] rounded-lg p-6 border border-gray-700 shadow-sm mt-8">
          <h3 className="text-lg font-semibold text-[#EAEAEA] mb-4">Debug Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">User ID</p>
              <p className="text-[#EAEAEA] font-mono text-sm">{user?.id}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">Email</p>
              <p className="text-[#EAEAEA] text-sm">{user?.email}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">Profile ID</p>
              <p className="text-[#EAEAEA] font-mono text-sm">{profile?.id || 'Not found'}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">Username</p>
              <p className="text-[#EAEAEA] text-sm">{profile?.username || 'Not set'}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">Admin Status</p>
              <p className="text-[#EAEAEA] text-sm">
                {profile?.is_admin ? 'True' : 'False'}
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">Profile Active</p>
              <p className="text-[#EAEAEA] text-sm">
                {profile?.is_active ? 'Active' : 'Inactive'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;