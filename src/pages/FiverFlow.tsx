import React from 'react';
import Navbar from '../components/product/fiverflow/Navbar';
import HeroSection from '../components/product/fiverflow/HeroSection';
import OverviewSection from '../components/product/fiverflow/OverviewSection';
import FeaturesSection from '../components/product/fiverflow/FeaturesSection';
import StatsSection from '../components/product/fiverflow/StatsSection';
import CTASection from '../components/product/fiverflow/CTASection';
import Footer from '../components/product/fiverflow/Footer';

const FiverFlow: React.FC = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <title>FiverFlow | OpenForge Product - AI automation for freelance workflows</title>
        <meta name="description" content="FiverFlow is an intelligent automation platform designed specifically for freelancers and small teams. Automate client onboarding, task handling and billing with perceptive AI workflows." />
        <meta name="keywords" content="freelance automation, AI workflows, client onboarding, task automation, billing integration, freelancer tools" />
        
        {/* Open Graph */}
        <meta property="og:title" content="FiverFlow | OpenForge Product" />
        <meta property="og:description" content="AI automation for freelance workflows - Automate client onboarding, task handling and billing with perceptive AI workflows." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://openforge.com/product/fiverflow" />
        <meta property="og:image" content="https://openforge.com/og-image-fiverflow.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FiverFlow | OpenForge Product" />
        <meta name="twitter:description" content="AI automation for freelance workflows - Automate client onboarding, task handling and billing with perceptive AI workflows." />
        <meta name="twitter:image" content="https://openforge.com/og-image-fiverflow.png" />
        
        {/* Additional */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="OpenForge" />
        <link rel="canonical" href="https://openforge.com/product/fiverflow" />
      </head>

      <div className="min-h-screen bg-[#0A0A0A] text-white">
        {/* Navbar */}
        <Navbar />
        
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
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default FiverFlow;
