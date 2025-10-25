import React from 'react';
import Sidebar from '../components/Sidebar';
import Navigation from '../components/Navigation';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0f1117]">
      <Navigation />
      <div className="flex pt-12">
        <Sidebar />
        <main className="ml-16 min-h-screen flex-1 transition-all duration-300">
          <div className="p-8">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl font-bold text-[#EAEAEA] mb-8">
                Dashboard
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-[#181B22] border border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-[#EAEAEA] mb-2">
                    Welcome to OpenForge
                  </h3>
                  <p className="text-gray-400">
                    Your development environment is ready to use.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-[#181B22] border border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-[#EAEAEA] mb-2">
                    Quick Start
                  </h3>
                  <p className="text-gray-400">
                    Get started with your first project.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-[#181B22] border border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-[#EAEAEA] mb-2">
                    Documentation
                  </h3>
                  <p className="text-gray-400">
                    Learn how to use OpenForge effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;