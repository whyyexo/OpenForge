import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';

const Team: React.FC = () => {
  const { user, profile } = useAuth();
  const { t } = useLanguage();

  return (
    <div className="p-8 bg-[#0f1117] min-h-screen w-full">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold text-[#EAEAEA] mb-8">Team</h1>
        
        <div className="bg-[#181B22] rounded-lg p-6 border border-gray-700 shadow-sm">
          <h2 className="text-lg font-semibold text-[#EAEAEA] mb-4">Team Members</h2>
          <div className="text-center py-10">
            <p className="text-gray-400 text-lg mb-2">No team members found</p>
            <p className="text-gray-500 text-sm">Team members will appear here once added</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;