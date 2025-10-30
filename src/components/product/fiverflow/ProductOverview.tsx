import React from 'react';
import { motion } from 'framer-motion';

const ProductOverview: React.FC = () => {
  const cards = [
    {
      title: 'Dashboard Overview',
      description: 'Real-time insights and analytics at your fingertips',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      screenshot: (
        <div className="mt-4 bg-black/60 rounded-lg p-3 space-y-2">
          <div className="h-2 bg-white/20 rounded w-full"></div>
          <div className="h-2 bg-white/10 rounded w-5/6"></div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="h-12 bg-white/5 rounded"></div>
            <div className="h-12 bg-white/5 rounded"></div>
          </div>
        </div>
      )
    },
    {
      title: 'AI Assistant',
      description: 'Intelligent automation for your workflows',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      screenshot: (
        <div className="mt-4 bg-black/60 rounded-lg p-3 space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-white/20 rounded-full"></div>
            <div className="h-2 bg-white/20 rounded flex-1"></div>
          </div>
          <div className="h-2 bg-white/10 rounded w-4/5"></div>
        </div>
      )
    },
    {
      title: 'Client Management',
      description: 'Comprehensive CRM for all your clients',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      screenshot: (
        <div className="mt-4 bg-black/60 rounded-lg p-3 space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white/20 rounded-full"></div>
            <div className="flex-1 space-y-1">
              <div className="h-2 bg-white/20 rounded w-1/2"></div>
              <div className="h-2 bg-white/10 rounded w-full"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Invoicing',
      description: 'Professional invoices in seconds',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      screenshot: (
        <div className="mt-4 bg-black/60 rounded-lg p-3 space-y-2">
          <div className="h-3 bg-white/20 rounded w-full"></div>
          <div className="h-2 bg-white/10 rounded w-2/3"></div>
          <div className="h-3 bg-white/20 rounded w-1/2 mt-2"></div>
        </div>
      )
    },
    {
      title: 'Calendar & Tasks',
      description: 'Sync schedules and manage deadlines',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      screenshot: (
        <div className="mt-4 bg-black/60 rounded-lg p-3">
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className={`aspect-square rounded ${i === 2 ? 'bg-white/10' : 'bg-white/5'}`}></div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: 'Analytics',
      description: 'Deep insights into your business performance',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      screenshot: (
        <div className="mt-4 bg-black/60 rounded-lg p-3 space-y-2">
          <div className="h-8 bg-white/10 rounded flex items-end space-x-1">
            <div className="h-3 bg-white/20 rounded w-full"></div>
            <div className="h-5 bg-white/30 rounded w-full"></div>
            <div className="h-6 bg-white/40 rounded w-full"></div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Everything You Need in One Platform
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Powerful features designed to streamline your workflow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="relative bg-white/5 border border-white/10 rounded-lg p-6 h-full hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300 overflow-hidden">
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/0 transition-opacity duration-300 pointer-events-none"></div>
                
                <div className="relative space-y-4">
                  <div className="text-white/40 group-hover:text-white/60 transition-colors duration-300">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {card.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  {card.screenshot}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;