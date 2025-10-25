import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const IntegrationsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const integrations = [
    { name: 'Stripe', logo: '💳', color: 'from-blue-500 to-purple-500' },
    { name: 'Supabase', logo: '🗄️', color: 'from-green-500 to-emerald-500' },
    { name: 'Framer', logo: '🎨', color: 'from-pink-500 to-red-500' },
    { name: 'OpenAI', logo: '🤖', color: 'from-yellow-500 to-orange-500' },
    { name: 'Vercel', logo: '▲', color: 'from-gray-500 to-gray-700' },
    { name: 'GitHub', logo: '🐙', color: 'from-gray-600 to-gray-800' }
  ];

  return (
    <section ref={ref} className="py-24 bg-[#0a0a0a] relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00E38C]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#00E38C]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Seamless Integrations
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Connect with the tools you already use and love
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.1,
                y: -5,
                boxShadow: '0 10px 30px rgba(0, 227, 140, 0.2)'
              }}
              className="group"
            >
              <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6 text-center transition-all duration-300 group-hover:border-[#00E38C]/50 group-hover:bg-[#1a1a1a]/80">
                <motion.div
                  className="text-3xl mb-3"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {integration.logo}
                </motion.div>
                
                <h3 className="text-sm font-semibold text-white group-hover:text-[#00E38C] transition-colors">
                  {integration.name}
                </h3>

                {/* Animated Glow */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00E38C]/20 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            And many more integrations coming soon
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg hover:border-[#00E38C] hover:text-[#00E38C] transition-all duration-300"
          >
            View All Integrations
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
