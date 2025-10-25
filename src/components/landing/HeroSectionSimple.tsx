import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSectionSimple: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]" />
        
        {/* Static Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#00E38C] rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
          Build.{' '}
          <span className="text-[#00E38C]">
            Connect.
          </span>{' '}
          Create.
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          OpenForge empowers creators and developers to build next-generation platforms.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => navigate('/signup')}
            className="bg-[#00E38C] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#00E38C]/90 transition-all duration-300 hover:scale-105"
          >
            Get Started
          </button>
          
          <button
            onClick={() => navigate('/docs')}
            className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold text-lg hover:border-[#00E38C] hover:text-[#00E38C] transition-all duration-300 hover:scale-105"
          >
            View Docs
          </button>
        </div>

        {/* 3D Rotating Element */}
        <div className="mt-16">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#00E38C] to-[#00B894] rounded-lg shadow-2xl hover:rotate-12 transition-transform duration-300" />
        </div>
      </div>
    </section>
  );
};

export default HeroSectionSimple;
