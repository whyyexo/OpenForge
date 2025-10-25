import React from 'react';
import Sidebar from '../components/Sidebar';
import Navigation from '../components/Navigation';

const Admin: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0f1117]">
      <Navigation />
      <div className="flex pt-12">
        <Sidebar />
        <main className="ml-16 min-h-screen flex-1 transition-all duration-300">
          <div className="p-8">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl font-bold text-[#EAEAEA] mb-8">
                Admin Dashboard
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Utilisateurs */}
                <div className="bg-[#181B22] border border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-[#EAEAEA] mb-4">
                    Utilisateurs
                  </h3>
                  <p className="text-gray-400">
                    Gestion des utilisateurs (à venir)
                  </p>
                </div>

                {/* Statistiques globales */}
                <div className="bg-[#181B22] border border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-[#EAEAEA] mb-4">
                    Statistiques globales
                  </h3>
                  <p className="text-gray-400">
                    Statistiques du système (à venir)
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

export default Admin;