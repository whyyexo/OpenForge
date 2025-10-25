import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import StripeButton from '../components/StripeButton';

const Pricing: React.FC = () => {
  const { user, profile } = useAuth();
  const { t } = useLanguage();
  const [loading, setLoading] = useState<string | null>(null);

  const plans = [
    {
      name: 'Personal',
      price: '0',
      period: '/month',
      description: 'For individuals to get started with OpenForge.',
      features: [
        'Everything in Personal and:',
        'OpenForge\'s fully browser-based IDE',
        'Unlimited public projects and collections',
        'Open and edit public GitHub repositories',
        'Up to 1MB of file uploads per project',
        'Community support',
        'Plus all the features of Bolt Personal'
      ],
      popular: false,
      priceId: null // Free plan
    },
    {
      name: 'Boost',
      price: '20',
      period: '/month',
      description: 'For individuals to get started with OpenForge.',
      features: [
        'Everything in Personal and:',
        'OpenForge\'s fully browser-based IDE',
        'Unlimited public projects and collections',
        'Open and edit public GitHub repositories',
        'Up to 1MB of file uploads per project',
        'Community support',
        'Plus all the features of Bolt Personal'
      ],
      popular: true,
      priceId: process.env.NEXT_PUBLIC_STRIPE_BOOST_PRICE_ID || 'price_boost_placeholder'
    },
    {
      name: 'Scale',
      price: '35',
      period: '/month',
      description: 'For individuals to get started with OpenForge.',
      features: [
        'Everything in Personal and:',
        'OpenForge\'s fully browser-based IDE',
        'Unlimited public projects and collections',
        'Open and edit public GitHub repositories',
        'Up to 1MB of file uploads per project',
        'Community support',
        'Plus all the features of Bolt Personal'
      ],
      popular: false,
      priceId: process.env.NEXT_PUBLIC_STRIPE_SCALE_PRICE_ID || 'price_scale_placeholder'
    }
  ];

  // OLD HANDLERS - REMOVED
  // const handleSuccess = (planName: string) => {
  //   alert(`Successfully subscribed to ${planName} plan!`);
  //   window.location.reload();
  // };

  // const handleError = (error: string) => {
  //   alert(`Error: ${error}`);
  // };

  return (
    <div className="min-h-screen bg-[#0f1117] pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-medium text-[#EAEAEA] mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Start with a free account to speed up your workflow on public projects or boost your entire team with instantly-opening production environments.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-lg p-8 h-full ${
                plan.popular
                  ? 'bg-gradient-to-br from-[#181B22] to-[#00E38C]/20 border border-[#00E38C]/30'
                  : 'bg-[#181B22] border border-gray-600'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#00E38C] text-black px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-left mb-8">
                <h3 className="text-2xl font-medium text-[#EAEAEA] mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-medium text-[#EAEAEA]">${plan.price}</span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 text-left">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[#00E38C] mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-[#EAEAEA]">{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.name === 'Personal' ? (
                <button
                  className="w-full py-3 px-6 rounded-lg font-medium transition-colors duration-200 bg-gray-700 text-[#EAEAEA] hover:bg-gray-600"
                  onClick={() => {
                    alert('Personal plan is free!');
                  }}
                >
                  Sign in with GitHub
                </button>
              ) : (
                <StripeButton
                  planName={plan.name}
                  priceId={plan.priceId!}
                  className="w-full py-3 px-6 rounded-lg font-medium transition-colors duration-200 bg-gray-700 text-[#EAEAEA] hover:bg-gray-600"
                />
              )}
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl font-medium text-[#EAEAEA] mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-[#181B22] rounded-lg p-6 border border-gray-600">
              <h3 className="text-lg font-medium text-[#EAEAEA] mb-2">Can I change plans anytime?</h3>
              <p className="text-gray-400">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div className="bg-[#181B22] rounded-lg p-6 border border-gray-600">
              <h3 className="text-lg font-medium text-[#EAEAEA] mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-400">We accept all major credit cards, PayPal, and bank transfers through Stripe.</p>
            </div>
            <div className="bg-[#181B22] rounded-lg p-6 border border-gray-600">
              <h3 className="text-lg font-medium text-[#EAEAEA] mb-2">Is there a free trial?</h3>
              <p className="text-gray-400">Yes! The Personal plan is completely free forever. No credit card required.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
