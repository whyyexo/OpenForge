import React, { useState } from 'react';
import { motion } from 'framer-motion';
import StripeButton from '../components/StripeButton';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Personal',
      price: '0',
      period: '/month',
      description: 'For individuals to get started with OpenForge.',
      features: [
        'OpenForge\'s fully browser-based IDE',
        'Unlimited public projects and collections',
        'Open and edit public GitHub repositories',
        'Up to 1MB of file uploads per project',
        'Community support'
      ],
      popular: false,
      priceId: null // Free plan
    },
    {
      name: 'Boost',
      price: '20',
      period: '/month',
      description: 'For growing teams and professionals.',
      features: [
        'Everything in Personal and:',
        'Private projects and collections',
        'Up to 10MB of file uploads per project',
        'Priority support',
        'Advanced analytics',
        'Team collaboration tools'
      ],
      popular: true,
      priceId: process.env.NEXT_PUBLIC_STRIPE_BOOST_PRICE_ID || 'price_boost_placeholder'
    },
    {
      name: 'Scale',
      price: '35',
      period: '/month',
      description: 'For enterprise needs and large teams.',
      features: [
        'Everything in Boost and:',
        'Unlimited file uploads',
        'Custom integrations',
        'Dedicated support',
        'Advanced security features',
        'White-label options'
      ],
      popular: false,
      priceId: process.env.NEXT_PUBLIC_STRIPE_SCALE_PRICE_ID || 'price_scale_placeholder'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              Simple Pricing
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Choose the plan that fits your needs. Start free, upgrade anytime.
            </p>
            
            {/* Toggle */}
            <div className="flex items-center justify-center space-x-4">
              <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-white/40'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#0A0A0A]"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm ${isAnnual ? 'text-white' : 'text-white/40'}`}>
                Annual
                <span className="ml-1 text-xs text-white/60">(Save 20%)</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-white/60 text-sm mb-4">
                        {plan.description}
                      </p>
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-white">
                          ${isAnnual ? Math.round(parseInt(plan.price) * 0.8) : plan.price}
                        </span>
                        <span className="text-white/60 text-sm ml-1">
                          {plan.period}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-white/60 text-sm">
                          <svg className="w-4 h-4 text-white/40 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4">
                      {plan.priceId ? (
                        <StripeButton
                          priceId={plan.priceId}
                          className={`w-full py-3 px-4 rounded-sm text-sm font-medium transition-all duration-200 ${
                            plan.popular
                              ? 'bg-white text-black hover:bg-white/90'
                              : 'border border-white/20 text-white hover:border-white/40 hover:bg-white/5'
                          }`}
                        >
                          {plan.name === 'Personal' ? 'Get Started' : 'Upgrade Now'}
                        </StripeButton>
                      ) : (
                        <button
                          className="w-full py-3 px-4 border border-white/20 text-white text-sm font-medium rounded-sm hover:border-white/40 hover:bg-white/5 transition-all duration-200"
                        >
                          Get Started
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-white/60">
              Everything you need to know about our pricing
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Can I change plans anytime?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans."
              },
              {
                question: "Is there a free trial?",
                answer: "Yes, all paid plans come with a 14-day free trial. No credit card required."
              },
              {
                question: "Do you offer refunds?",
                answer: "We offer a 30-day money-back guarantee for all paid plans."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
