import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-24 px-6 bg-[#0A0A0A] relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/2 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/1 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            The Next Generation Workspace Automation Platform
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            From AI-powered automation to complete workspace management — explore the full power of FiverFlow.
          </p>
        </motion.div>

        {/* Dashboard Screenshot with glassmorphism frame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl">
            {/* Browser frame style */}
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500/50 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500/50 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500/50 rounded-full"></div>
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white/60 text-center">
                  app.fiverflow.com
                </div>
              </div>
              <div className="w-16"></div>
            </div>
            
            {/* Dashboard preview */}
            <div className="bg-black/40 rounded-lg p-8 min-h-[500px]">
              <div className="grid grid-cols-12 gap-4">
                {/* Sidebar */}
                <div className="col-span-3 space-y-4">
                  <div className="bg-white/5 rounded-lg p-4 h-12"></div>
                  <div className="space-y-2">
                    <div className="bg-white/10 rounded-lg p-3 h-10"></div>
                    <div className="bg-white/5 rounded-lg p-3 h-10"></div>
                    <div className="bg-white/5 rounded-lg p-3 h-10"></div>
                  </div>
                </div>
                
                {/* Main content */}
                <div className="col-span-9 space-y-4">
                  {/* Header stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white/5 rounded-lg p-4 h-24"></div>
                    <div className="bg-white/5 rounded-lg p-4 h-24"></div>
                    <div className="bg-white/5 rounded-lg p-4 h-24"></div>
                  </div>
                  
                  {/* Main dashboard area */}
                  <div className="bg-white/5 rounded-lg p-6 h-64">
                    <div className="space-y-3">
                      <div className="h-4 bg-white/20 rounded w-3/4"></div>
                      <div className="h-3 bg-white/10 rounded w-full"></div>
                      <div className="h-3 bg-white/10 rounded w-5/6"></div>
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="bg-white/5 rounded-lg p-4 h-32"></div>
                        <div className="bg-white/5 rounded-lg p-4 h-32"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;