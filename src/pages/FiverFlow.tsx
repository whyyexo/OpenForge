import React from 'react';
import HeroSection from '../components/product/fiverflow/HeroSection';
import OverviewSection from '../components/product/fiverflow/OverviewSection';
import FeaturesSection from '../components/product/fiverflow/FeaturesSection';
import StatsSection from '../components/product/fiverflow/StatsSection';
import CTASection from '../components/product/fiverflow/CTASection';

const FiverFlow: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Overview Section */}
      <OverviewSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default FiverFlow;
