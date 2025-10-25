import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Profile: React.FC = () => {
  const { user, profile } = useAuth();

  return (
    <div className="p-8 bg-[#0f1117] min-h-screen w-full">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold text-[#EAEAEA] mb-8">Your Profile</h1>
        
        <div className="bg-[#181B22] rounded-lg p-6 border border-gray-700 shadow-sm">
          <h3 className="text-lg font-semibold text-[#EAEAEA] mb-4">Profile Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">Full Name</p>
              <p className="text-[#EAEAEA]">{profile?.full_name || 'Not set'}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">Username</p>
              <p className="text-[#EAEAEA]">{profile?.username || 'Not set'}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">Email</p>
              <p className="text-[#EAEAEA]">{user?.email}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">Subscription</p>
              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${
                profile?.subscription === 'Lunch' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                profile?.subscription === 'Boost' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                profile?.subscription === 'Scale' ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' :
                'bg-gray-500/20 text-gray-400 border-gray-500/30'
              }`}>
                {profile?.subscription || 'Lunch'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
