import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';

const Settings: React.FC = () => {
  const { user, profile } = useAuth();
  const { t } = useLanguage();

  return (
    <div className="p-8 bg-[#0f1117] min-h-screen w-full">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold text-[#EAEAEA] mb-8">Settings</h1>
        
        <div className="bg-[#181B22] rounded-lg p-6 border border-gray-700 shadow-sm">
          <h2 className="text-lg font-semibold text-[#EAEAEA] mb-4">Account Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Email Notifications</label>
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="rounded" defaultChecked />
                <span className="text-[#EAEAEA]">Receive email notifications</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Two-Factor Authentication</label>
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="rounded" />
                <span className="text-[#EAEAEA]">Enable 2FA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;