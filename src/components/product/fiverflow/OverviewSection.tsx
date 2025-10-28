import React from 'react';
import { motion } from 'framer-motion';

const OverviewSection: React.FC = () => {
  const useCases = [
    'Client onboarding',
    'Task automation',
    'Billing integration',
    'Analytics dashboard'
  ];

  return (
    <section className="py-24 px-6 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            What is FiverFlow?
          </h2>
          
          {/* Description */}
          <p className="text-lg text-white/60 leading-relaxed max-w-4xl">
            FiverFlow is an intelligent automation platform designed specifically for freelancers and small teams. 
            It streamlines your workflow by automating repetitive tasks, managing client relationships, and providing 
            actionable insights to help you scale your business efficiently.
          </p>
          
          {/* Use cases */}
          <div className="flex flex-wrap gap-3">
            {useCases.map((useCase, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-3 py-1 border border-white/20 rounded-full text-sm text-white/60 hover:border-white/40 hover:text-white/80 transition-colors duration-200"
              >
                {useCase}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OverviewSection;
