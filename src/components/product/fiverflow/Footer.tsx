import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-[#0A0A0A] border-t border-white/4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          {/* Left: Links */}
          <div className="flex items-center space-x-8">
            <a href="#" className="text-sm text-white/40 hover:text-white/60 transition-colors duration-200">
              Privacy
            </a>
            <a href="#" className="text-sm text-white/40 hover:text-white/60 transition-colors duration-200">
              Terms
            </a>
            <a href="#" className="text-sm text-white/40 hover:text-white/60 transition-colors duration-200">
              Contact
            </a>
          </div>

          {/* Right: Copyright */}
          <div className="text-sm text-white/40">
            © {currentYear} FiverFlow
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
