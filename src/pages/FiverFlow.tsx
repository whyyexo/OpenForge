import React from 'react';
import GlobalNavbar from '../components/GlobalNavbar';
import GlobalFooter from '../components/GlobalFooter';
import HeroSection from '../components/product/fiverflow/HeroSection';
import ProductOverview from '../components/product/fiverflow/ProductOverview';
import CoreFeatures from '../components/product/fiverflow/CoreFeatures';
import DetailedFeatures from '../components/product/fiverflow/DetailedFeatures';
import Integrations from '../components/product/fiverflow/Integrations';
import PlansPreview from '../components/product/fiverflow/PlansPreview';
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
        <meta property="og:description" content="The next generation workspace automation platform - AI-powered automation, smart dashboard, and complete workflow management." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://openforge.com/product/fiverflow" />
        <meta property="og:image" content="https://openforge.com/og-image-fiverflow.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FiverFlow | StriveLabs Product" />
        <meta name="twitter:description" content="The next generation workspace automation platform - AI-powered automation, smart dashboard, and complete workflow management." />
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
        
        {/* Product Overview */}
        <ProductOverview />
        
        {/* Core Features Grid */}
        <CoreFeatures />
        
        {/* Detailed Feature Sections */}
        <DetailedFeatures />
        
        {/* Integrations */}
        <Integrations />
        
        {/* Plans Preview */}
        <PlansPreview />
        
        {/* Footer CTA */}
        <FooterCTA />
        
        {/* Global Footer */}
        <GlobalFooter />
      </div>
    </>
  );
};

export default FiverFlow;