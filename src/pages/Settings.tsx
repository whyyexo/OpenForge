import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Settings: React.FC = () => {
  const { user, profile } = useAuth();

  return (
    <div className="p-8 bg-[#0f1117] min-h-screen w-full">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold text-[#EAEAEA] mb-8">Your Settings</h1>
        
        <div className="bg-[#181B22] rounded-lg p-6 border border-gray-700 shadow-sm">
          <h3 className="text-lg font-semibold text-[#EAEAEA] mb-4">Account Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                value={user?.email || ''}
                disabled
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-[#EAEAEA]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Username</label>
              <input
                type="text"
                value={profile?.username || ''}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-[#EAEAEA] focus:outline-none focus:ring-2 focus:ring-[#00E38C]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Display Name</label>
              <input
                type="text"
                value={profile?.display_name || ''}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-[#EAEAEA] focus:outline-none focus:ring-2 focus:ring-[#00E38C]"
              />
            </div>
            <button className="px-4 py-2 bg-[#00E38C] text-black rounded-md font-medium hover:bg-[#00E38C]/90 transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
