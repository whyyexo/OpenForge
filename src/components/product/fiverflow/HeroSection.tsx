import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-[#0A0A0A] relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/2 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/1 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Headline */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
              FiverFlow — AI automation for freelance workflows
            </h1>
            
            <p className="text-xl text-white/60 leading-relaxed max-w-lg">
              Automate client onboarding, task handling and billing with perceptive AI workflows.
            </p>
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://fiverflow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-6 py-3 bg-white text-black font-medium rounded-sm hover:bg-white/90 transition-all duration-200 transform hover:scale-[1.02]"
            >
              View Live
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            
            <button className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white font-medium rounded-sm hover:border-white/40 hover:bg-white/5 transition-all duration-200">
              Learn more
            </button>
          </motion.div>
        </motion.div>

        {/* Right: Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
            {/* Mockup header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                <div className="w-2 h-2 bg-white/20 rounded-full"></div>
              </div>
              <div className="text-sm text-white/40">FiverFlow Dashboard</div>
            </div>
            
            {/* Mockup content */}
            <div className="space-y-4">
              <div className="h-4 bg-white/20 rounded w-4/5"></div>
              <div className="h-3 bg-white/10 rounded w-3/5"></div>
              <div className="h-3 bg-white/10 rounded w-2/3"></div>
            </div>
            
            {/* Mockup cards */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="bg-white/5 rounded-sm p-3 border border-white/10">
                <div className="h-2 bg-white/20 rounded w-full mb-2"></div>
                <div className="h-2 bg-white/10 rounded w-3/4"></div>
              </div>
              <div className="bg-white/5 rounded-sm p-3 border border-white/10">
                <div className="h-2 bg-white/20 rounded w-full mb-2"></div>
                <div className="h-2 bg-white/10 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
