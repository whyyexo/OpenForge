import React from 'react';
import { motion } from 'framer-motion';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Title */}
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Start using FiverFlow today
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
                  Experience next-level freelancing automation — powered by StriveLabs.
            </p>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="pt-4"
          >
            <a
              href="https://fiverflow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium rounded-sm hover:bg-white/90 transition-all duration-200 transform hover:scale-[1.02]"
            >
              View Live
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>

          {/* Secondary Link */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="pt-4"
              >
                <button 
                  onClick={() => window.location.href = '/contact'}
                  className="text-sm text-white/40 hover:text-white/60 transition-colors duration-200"
                >
                  Contact / Press
                </button>
              </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
