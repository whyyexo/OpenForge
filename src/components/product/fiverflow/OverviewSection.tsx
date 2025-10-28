import React from 'react';
import { motion } from 'framer-motion';

const OverviewSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900">
              What is FiverFlow?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              FiverFlow is an intelligent freelancing automation tool built under the OpenForge ecosystem. 
              It helps creators, freelancers, and small teams manage their projects, clients, and AI-powered 
              workflows seamlessly — all in one place.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Designed for modern freelancers who want to focus on their craft while automation handles 
              the repetitive tasks that slow down growth.
            </p>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white border border-gray-200 rounded-sm p-8">
              {/* Simple illustration */}
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-500">FiverFlow</div>
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                  <div className="h-3 bg-gray-100 rounded w-3/5"></div>
                  <div className="h-3 bg-gray-100 rounded w-2/3"></div>
                </div>
                
                {/* Cards */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-sm p-3">
                    <div className="h-2 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                  </div>
                  <div className="bg-gray-50 rounded-sm p-3">
                    <div className="h-2 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-2 bg-gray-100 rounded w-1/2"></div>
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

export default OverviewSection;
