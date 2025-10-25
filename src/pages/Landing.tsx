import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/landing/HeroSection';
import FeaturesSection from '../components/landing/FeaturesSection';
import IntegrationsSection from '../components/landing/IntegrationsSection';
import PricingPreviewSection from '../components/landing/PricingPreviewSection';
import CTASection from '../components/landing/CTASection';
import Footer from '../components/landing/Footer';

const Landing: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#0a0a0a] text-white"
    >
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Integrations Section */}
      <IntegrationsSection />
      
      {/* Pricing Preview Section */}
      <PricingPreviewSection />
      
      {/* Call to Action Section */}
      <CTASection />
      
      {/* Footer */}
      <Footer />
    </motion.div>
  );
};

export default Landing;