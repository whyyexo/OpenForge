import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0f1117]">
      <Navigation />
      
      {/* Hero Section */}
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-[#EAEAEA] mb-6">
              Welcome to OpenForge
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              The ultimate platform for developers to build, deploy, and scale applications with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/pricing')}
                className="px-8 py-3 bg-[#00E38C] text-black font-medium rounded-lg hover:bg-[#00E38C]/90 transition-colors"
              >
                View Pricing
              </button>
              <button
                onClick={() => navigate('/dashboard')}
                className="px-8 py-3 bg-gray-700 text-[#EAEAEA] font-medium rounded-lg hover:bg-gray-600 transition-colors"
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-[#181B22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#EAEAEA] mb-4">
              Why Choose OpenForge?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Powerful features designed for modern development workflows
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00E38C] rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#EAEAEA] mb-2">Fast Development</h3>
              <p className="text-gray-400">Build and deploy applications in minutes, not hours</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00E38C] rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#EAEAEA] mb-2">Lightning Fast</h3>
              <p className="text-gray-400">Optimized performance for the best user experience</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00E38C] rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#EAEAEA] mb-2">Secure & Reliable</h3>
              <p className="text-gray-400">Enterprise-grade security and 99.9% uptime guarantee</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#EAEAEA] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 mb-8">
            Join thousands of developers who trust OpenForge for their projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/pricing')}
              className="px-8 py-3 bg-[#00E38C] text-black font-medium rounded-lg hover:bg-[#00E38C]/90 transition-colors"
            >
              View Pricing
            </button>
            <button
              onClick={() => navigate('/dashboard')}
              className="px-8 py-3 border border-gray-600 text-[#EAEAEA] font-medium rounded-lg hover:bg-gray-700 transition-colors"
            >
              Access Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
