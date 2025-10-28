import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const EnterpriseCTA: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Need a custom solution?
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            We offer enterprise-grade deployment and white-label solutions for growing teams.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:border-white/40 hover:bg-white/5 transition-all duration-200"
          >
            Contact Sales
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default EnterpriseCTA;
