import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';

const Profile: React.FC = () => {
  const { user, profile } = useAuth();
  const { t } = useLanguage();

  return (
    <div className="p-8 bg-[#0f1117] min-h-screen w-full">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold text-[#EAEAEA] mb-8">Profile</h1>
        
        <div className="bg-[#181B22] rounded-lg p-6 border border-gray-700 shadow-sm">
          <h2 className="text-lg font-semibold text-[#EAEAEA] mb-4">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
              <p className="text-[#EAEAEA]">{profile?.display_name || 'Not set'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Username</label>
              <p className="text-[#EAEAEA]">{profile?.username || 'Not set'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <p className="text-[#EAEAEA]">{user?.email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Role</label>
              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${
                profile?.role === 'admin' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                profile?.role === 'moderator' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                'bg-gray-500/20 text-gray-400 border-gray-500/30'
              }`}>
                {profile?.role || 'member'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;