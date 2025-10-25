import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const PricingPreviewSection: React.FC = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const plans = [
    {
      name: 'Lunch',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started',
      features: ['Public projects', 'Basic support', 'Community access'],
      popular: false,
      color: 'border-gray-600'
    },
    {
      name: 'Boost',
      price: '$20',
      period: 'month',
      description: 'For growing teams',
      features: ['Everything in Lunch', 'Private projects', 'Priority support', 'Advanced analytics'],
      popular: true,
      color: 'border-[#00E38C]'
    },
    {
      name: 'Scale',
      price: '$35',
      period: 'month',
      description: 'For enterprise needs',
      features: ['Everything in Boost', 'Custom integrations', 'Dedicated support', 'Advanced security'],
      popular: false,
      color: 'border-gray-600'
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-[#0a0a0a] relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Simple Pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your needs. Start free, upgrade anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: plan.popular ? '0 20px 40px rgba(0, 227, 140, 0.2)' : '0 20px 40px rgba(0, 0, 0, 0.3)'
              }}
              className={`relative group ${plan.popular ? 'md:-mt-8' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                >
                  <div className="bg-[#00E38C] text-black px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </motion.div>
              )}

              <div className={`bg-[#1a1a1a] border-2 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-[#00E38C]/50 ${plan.color} ${plan.popular ? 'bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]' : ''}`}>
                {/* Glow Effect for Popular Plan */}
                {plan.popular && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00E38C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#00E38C] transition-colors">
                    {plan.name}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
                  </div>
                  
                  <p className="text-gray-400 mb-6">{plan.description}</p>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.6 + featureIndex * 0.1 }}
                        className="flex items-center text-gray-300"
                      >
                        <motion.span
                          className="text-[#00E38C] mr-3"
                          whileHover={{ scale: 1.2 }}
                        >
                          ✓
                        </motion.span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/pricing')}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-[#00E38C] text-black hover:bg-[#00E38C]/90'
                        : 'border border-gray-600 text-gray-300 hover:border-[#00E38C] hover:text-[#00E38C]'
                    }`}
                  >
                    {plan.name === 'Lunch' ? 'Get Started' : 'Upgrade Now'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            All plans include 30-day money-back guarantee
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/pricing')}
            className="text-[#00E38C] hover:text-[#00E38C]/80 transition-colors font-semibold"
          >
            View Full Pricing →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPreviewSection;
