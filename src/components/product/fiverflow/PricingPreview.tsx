import React from 'react';
import { motion } from 'framer-motion';

const PricingPreview: React.FC = () => {
  const plans = [
    {
      name: 'Free',
      summary: 'Perfect for getting started',
      limits: ['5 active projects', 'Basic automation', 'Community support'],
      popular: false
    },
    {
      name: 'Pro',
      summary: 'For growing freelancers',
      limits: ['Unlimited projects', 'Advanced AI features', 'Priority support', 'Custom integrations'],
      popular: true
    },
    {
      name: 'Enterprise',
      summary: 'For teams and agencies',
      limits: ['Everything in Pro', 'Team collaboration', 'Dedicated support', 'White-label options'],
      popular: false
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Simple Plans for Every Team
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Choose the plan that fits your needs. Start free, upgrade anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${plan.popular ? 'md:-mt-4' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-white text-black px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`bg-white/5 border rounded-lg p-8 h-full transition-all duration-200 hover:border-white/20 ${
                plan.popular ? 'border-white/20' : 'border-white/10'
              }`}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-white/60 text-sm mb-6">
                      {plan.summary}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {plan.limits.map((limit, limitIndex) => (
                      <li key={limitIndex} className="flex items-center text-sm text-white/60">
                        <svg className="w-4 h-4 text-white/40 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {limit}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://fiverflow.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                      plan.popular
                        ? 'bg-white text-black hover:bg-white/90'
                        : 'border border-white/20 text-white hover:border-white/40 hover:bg-white/5'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;
