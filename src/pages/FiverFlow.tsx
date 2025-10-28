import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/product/fiverflow/HeroSection';
import OverviewSection from '../components/product/fiverflow/OverviewSection';
import StatsSection from '../components/product/fiverflow/StatsSection';
import FeaturesSection from '../components/product/fiverflow/FeaturesSection';
import CTASection from '../components/product/fiverflow/CTASection';

const FiverFlow: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Overview Section */}
      <OverviewSection />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default FiverFlow;
