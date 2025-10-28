import React from 'react';
import { motion } from 'framer-motion';

const OverviewSection: React.FC = () => {
  const cards = [
    {
      icon: '⚡',
      title: 'Smart automation',
      description: 'Automate client communication, task creation, and payments.'
    },
    {
      icon: '📈',
      title: 'Growth analytics',
      description: 'Get powerful insights on project performance and revenue.'
    },
    {
      icon: '🔐',
      title: 'Seamless integration',
      description: 'Connect with Stripe, Supabase, and your favorite tools.'
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What is FiverFlow?
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            FiverFlow is an intelligent freelancing automation tool built under the OpenForge ecosystem. 
            It helps creators, freelancers, and small teams manage their projects, clients, and AI-powered 
            workflows seamlessly — all in one place.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 h-full">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00E38C]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-[#00E38C] rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-gray-500 rounded-full opacity-30"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
