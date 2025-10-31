import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const CTASection: React.FC = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00E38C]/10 via-transparent to-[#00E38C]/10" />
        
        {/* Floating Elements */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#00E38C] rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Join StriveLabs{' '}
            <motion.span
              className="text-[#00E38C]"
              animate={{ 
                textShadow: [
                  '0 0 20px #00E38C',
                  '0 0 40px #00E38C',
                  '0 0 20px #00E38C'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Today
            </motion.span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Create your account and start building the future. Join thousands of developers already using StriveLabs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 0 40px rgba(0, 227, 140, 0.3)',
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/signup')}
            className="bg-[#00E38C] text-black px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#00E38C]/90 transition-all duration-300 shadow-lg"
          >
            Create Account
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/docs')}
            className="border border-gray-600 text-gray-300 px-10 py-4 rounded-lg font-bold text-lg hover:border-[#00E38C] hover:text-[#00E38C] transition-all duration-300"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {[
            { number: '10K+', label: 'Active Users' },
            { number: '99.9%', label: 'Uptime' },
            { number: '24/7', label: 'Support' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-[#00E38C] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
