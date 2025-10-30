import React from 'react';
import { motion } from 'framer-motion';

const FooterCTA: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-[#0A0A0A] via-[#111111] to-[#0A0A0A] relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/2 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/1 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Start Automating with FiverFlow
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Join thousands of users optimizing their daily workflow.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <a
              href="https://fiverflow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-10 py-4 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-all duration-200 transform hover:scale-[1.02] shadow-lg shadow-white/10"
            >
              Get Started Free
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            
            <a
              href="https://fiverflow.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 border border-white/20 text-white font-medium rounded-lg hover:border-white/40 hover:bg-white/5 transition-all duration-200"
            >
              View Documentation
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FooterCTA;