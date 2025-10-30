import React from 'react';
import { motion } from 'framer-motion';

const ProductOverview: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Centralize Everything in One Workspace
            </h2>
            <p className="text-lg text-white/60 leading-relaxed">
              FiverFlow is your all-in-one platform for managing clients, orders, invoices, and automation workflows. 
              Whether you're a freelancer or a growing team, FiverFlow helps you stay organized and productive.
            </p>
            <p className="text-white/60 leading-relaxed">
              With AI-powered automation, smart dashboard analytics, and seamless integrations, FiverFlow transforms 
              how you manage your freelance business. Track everything from client communications to payment processing 
              in a single, intuitive interface.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {['Client Management', 'Order Tracking', 'Invoice Generation', 'AI Automation', 'Calendar Sync', 'Analytics'].map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Dashboard Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="bg-black/40 rounded-lg overflow-hidden">
                <div className="p-6 space-y-4">
                  {/* Dashboard header */}
                  <div className="flex items-center justify-between">
                    <div className="h-6 bg-white/20 rounded w-32"></div>
                    <div className="h-6 bg-white/10 rounded w-24"></div>
                  </div>
                  
                  {/* Dashboard content */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white/5 rounded-lg p-4 h-20"></div>
                    <div className="bg-white/5 rounded-lg p-4 h-20"></div>
                    <div className="bg-white/5 rounded-lg p-4 h-20"></div>
                  </div>
                  
                  {/* Table preview */}
                  <div className="bg-white/5 rounded-lg p-4 space-y-3">
                    <div className="h-3 bg-white/20 rounded w-full"></div>
                    <div className="h-3 bg-white/10 rounded w-5/6"></div>
                    <div className="h-3 bg-white/10 rounded w-4/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
