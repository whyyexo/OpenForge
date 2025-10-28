import React from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../components/Sidebar';
import Navigation from '../components/Navigation';

const Admin: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navigation />
      <div className="flex pt-12">
        <Sidebar />
        <main className="ml-16 min-h-screen flex-1 transition-all duration-300">
          <div className="p-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl font-bold text-white mb-8">
                  Admin Dashboard
                </h1>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Utilisateurs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all duration-200"
                >
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Utilisateurs
                  </h3>
                  <p className="text-white/60">
                    Gestion des utilisateurs (à venir)
                  </p>
                </motion.div>

                {/* Statistiques globales */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all duration-200"
                >
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Statistiques globales
                  </h3>
                  <p className="text-white/60">
                    Statistiques du système (à venir)
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Admin;