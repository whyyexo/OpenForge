import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-6 bg-[#0A0A0A] overflow-hidden">
      {/* Background with subtle grid pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#111111] to-[#0A0A0A]"></div>
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/2 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/1 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                The Ultimate Workspace Automation Platform
              </h1>
              <p className="text-xl text-white/60 leading-relaxed">
                Powerful tools to manage clients, automate workflows, and accelerate your business — all inside FiverFlow.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://fiverflow.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-all duration-200 transform hover:scale-[1.02] shadow-lg shadow-white/10"
              >
                Explore FiverFlow
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              
              <button
                onClick={() => navigate('/pricing')}
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:border-white/40 hover:bg-white/5 transition-all duration-200"
              >
                View Pricing
              </button>
            </div>
          </motion.div>

          {/* Right: Dashboard with 3D tilt effect */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              whileHover={{ 
                rotateY: -5,
                rotateX: 5,
                scale: 1.02
              }}
              transition={{ duration: 0.3 }}
              className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Browser frame */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500/50 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500/50 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500/50 rounded-full"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white/60 text-center">
                    fiverflow.com
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;