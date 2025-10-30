import React from 'react';
import GlobalNavbar from '../components/GlobalNavbar';
import GlobalFooter from '../components/GlobalFooter';
import HeroSection from '../components/product/fiverflow/HeroSection';
import ProductOverview from '../components/product/fiverflow/ProductOverview';
import FeatureStories from '../components/product/fiverflow/FeatureStories';
import Integrations from '../components/product/fiverflow/Integrations';
import PricingPreview from '../components/product/fiverflow/PricingPreview';
import FooterCTA from '../components/product/fiverflow/FooterCTA';

const FiverFlow: React.FC = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <title>FiverFlow | StriveLabs Product - Workspace Automation Platform</title>
        <meta name="description" content="FiverFlow is a comprehensive workspace automation platform. Manage clients, orders, invoices, and workflows with AI-powered automation and smart analytics." />
        <meta name="keywords" content="workspace automation, AI assistant, client management, invoice generation, freelance tools, workflow automation" />
        
        {/* Open Graph */}
        <meta property="og:title" content="FiverFlow | StriveLabs Product" />
        <meta property="og:description" content="The ultimate workspace automation platform - AI-powered automation, smart dashboard, and complete workflow management." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://openforge.com/product/fiverflow" />
        <meta property="og:image" content="https://openforge.com/og-image-fiverflow.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FiverFlow | StriveLabs Product" />
        <meta name="twitter:description" content="The ultimate workspace automation platform - AI-powered automation, smart dashboard, and complete workflow management." />
        <meta name="twitter:image" content="https://openforge.com/og-image-fiverflow.png" />
        
        {/* Additional */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="StriveLabs" />
        <link rel="canonical" href="https://openforge.com/product/fiverflow" />
      </head>

      <div className="min-h-screen bg-[#0A0A0A] text-white">
        {/* Global Navbar */}
        <GlobalNavbar />
        
        {/* Hero Section */}
        <HeroSection />
        
        {/* Product Overview Cards */}
        <ProductOverview />
        
        {/* Feature Stories (5 varied sections) */}
        <FeatureStories />
        
        {/* Integrations */}
        <Integrations />
        
        {/* Pricing Preview */}
        <PricingPreview />
        
        {/* Footer CTA */}
        <FooterCTA />
        
        {/* Global Footer */}
        <GlobalFooter />
      </div>
    </>
  );
};

export default FiverFlow;