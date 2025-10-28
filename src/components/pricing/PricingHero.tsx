import React from 'react';
import { motion } from 'framer-motion';

interface PricingHeroProps {
  isAnnual: boolean;
  onToggle: () => void;
}

const PricingHero: React.FC<PricingHeroProps> = ({ isAnnual, onToggle }) => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-white">
            Simple, transparent pricing — built for creators and teams.
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Choose the full OpenForge Suite or subscribe per product. No hidden fees.
          </p>
          
          {/* Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-white/40'}`}>
              Monthly
            </span>
            <button
              onClick={onToggle}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#0A0A0A]"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-white' : 'text-white/40'}`}>
              Annual
              <span className="ml-1 text-xs text-white/60">(Save 20%)</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingHero;
