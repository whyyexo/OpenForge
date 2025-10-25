import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Team: React.FC = () => {
  const { user, profile } = useAuth();

  return (
    <div className="p-8 bg-[#0f1117] min-h-screen w-full">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold text-[#EAEAEA] mb-8">Your Team</h1>
        
        <div className="bg-[#181B22] rounded-lg p-6 border border-gray-700 shadow-sm">
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-gray-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            <p className="text-gray-400 text-lg mb-2">No team members found</p>
            <p className="text-gray-500 text-sm">Team features will be available soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
