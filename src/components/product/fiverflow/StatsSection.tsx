import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const StatsSection: React.FC = () => {
  const [counters, setCounters] = useState({
    users: 0,
    processed: 0,
    tasks: 0
  });

  const stats = [
    {
      value: '+1,200',
      label: 'users',
      suffix: '',
      max: 1200
    },
    {
      value: '$45,000',
      label: 'processed',
      suffix: '',
      max: 45000
    },
    {
      value: '5K+',
      label: 'AI tasks automated',
      suffix: '',
      max: 5000
    },
    {
      value: 'Launched',
      label: 'under OpenForge ecosystem',
      suffix: '',
      max: 1
    }
  ];

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const interval = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          users: Math.floor(1200 * progress),
          processed: Math.floor(45000 * progress),
          tasks: Math.floor(5000 * progress)
        });

        if (step >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    };

    // Start animation when component mounts
    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300">
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00E38C]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="text-3xl lg:text-4xl font-bold text-white mb-2"
                  >
                    {stat.label === 'users' && `+${counters.users.toLocaleString()}`}
                    {stat.label === 'processed' && `$${counters.processed.toLocaleString()}`}
                    {stat.label === 'AI tasks automated' && `${counters.tasks.toLocaleString()}+`}
                    {stat.label === 'under OpenForge ecosystem' && 'Launched'}
                  </motion.div>
                  
                  <p className="text-gray-300 text-sm lg:text-base">
                    {stat.label}
                  </p>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-[#00E38C] rounded-full opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <div className="absolute bottom-3 left-3 w-1 h-1 bg-gray-500 rounded-full opacity-30"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
