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
      label: 'Active Users',
      max: 1200
    },
    {
      value: '$45,000',
      label: 'Revenue Processed',
      max: 45000
    },
    {
      value: '5K+',
      label: 'Tasks Automated',
      max: 5000
    },
    {
      value: '99.9%',
      label: 'Uptime',
      max: 1
    }
  ];

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
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

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white border border-gray-200 rounded-sm p-8">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="text-3xl lg:text-4xl font-light text-gray-900 mb-2"
                >
                  {stat.label === 'Active Users' && `+${counters.users.toLocaleString()}`}
                  {stat.label === 'Revenue Processed' && `$${counters.processed.toLocaleString()}`}
                  {stat.label === 'Tasks Automated' && `${counters.tasks.toLocaleString()}+`}
                  {stat.label === 'Uptime' && '99.9%'}
                </motion.div>
                
                <p className="text-gray-600 font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
