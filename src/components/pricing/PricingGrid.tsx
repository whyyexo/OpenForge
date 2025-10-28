import React from 'react';
import { motion } from 'framer-motion';

interface PricingGridProps {
  isAnnual: boolean;
  isAllInOne: boolean;
  onTogglePlan: () => void;
}

const PricingGrid: React.FC<PricingGridProps> = ({ isAnnual, isAllInOne, onTogglePlan }) => {
  const allInOnePrice = isAnnual ? '$490' : '$49';
  const allInOnePeriod = isAnnual ? '/year' : '/month';

  const individualProducts = [
    {
      name: 'FiverFlow',
      description: 'AI automation for freelancers',
      price: isAnnual ? '$15' : '$19',
      period: '/month',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      name: 'CoreAI',
      description: 'Create custom AI agents effortlessly',
      price: isAnnual ? '$23' : '$29',
      period: '/month',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      name: 'FlowSync',
      description: 'Seamless workflow orchestration',
      price: isAnnual ? '$7' : '$9',
      period: '/month',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Plan Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/5 border border-white/10 rounded-lg p-1">
            <button
              onClick={onTogglePlan}
              className={`px-6 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                isAllInOne
                  ? 'bg-white text-black'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              All-in-One Suite
            </button>
            <button
              onClick={onTogglePlan}
              className={`px-6 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                !isAllInOne
                  ? 'bg-white text-black'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Individual Tools
            </button>
          </div>
        </div>

        {/* All-in-One Pricing */}
        {isAllInOne ? (
          <motion.div
            key="all-in-one"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="bg-white/5 border border-white/10 rounded-lg p-12 max-w-md w-full hover:border-white/20 transition-all duration-300 hover:scale-[1.02]">
              <div className="text-center space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    OpenForge Suite
                  </h3>
                  <p className="text-white/60 text-sm">
                    Unlimited access to all OpenForge tools — FiverFlow, CoreAI, and future releases.
                  </p>
                </div>

                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-white">
                    {allInOnePrice}
                  </span>
                  <span className="text-white/60 text-sm ml-1">
                    {allInOnePeriod}
                  </span>
                </div>

                <button className="w-full py-3 px-6 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-all duration-200 transform hover:scale-[1.02]">
                  Start Free Trial
                </button>

                <div className="space-y-3 text-left">
                  {[
                    'Access to every OpenForge product',
                    'Unlimited AI automation workflows',
                    'Priority updates and new releases',
                    'Early access to experimental tools'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center text-sm text-white/60">
                      <svg className="w-4 h-4 text-white/40 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="individual"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {individualProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="text-white/40">
                      {product.icon}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {product.name}
                    </h3>
                    <p className="text-white/60 text-sm mb-4">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-white">
                      {product.price}
                    </span>
                    <span className="text-white/60 text-sm ml-1">
                      {product.period}
                    </span>
                  </div>

                  <button className="w-full py-3 px-4 border border-white/20 text-white font-medium rounded-lg hover:border-white/40 hover:bg-white/5 transition-all duration-200">
                    Start Free Trial
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PricingGrid;
