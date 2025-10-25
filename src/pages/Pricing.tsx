import React, { useState } from 'react';
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
    <div className="min-h-screen bg-[#0f1117] pt-8 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-[56px] font-medium text-[#EAEAEA] mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-[15px] text-gray-400 max-w-3xl mx-auto mb-8">
            Start with a free account to speed up your workflow on public projects or boost your entire team with instantly-opening production environments.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className={`text-sm ${!isAnnual ? 'text-[#EAEAEA]' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-[#00E38C]' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-[#EAEAEA]' : 'text-gray-400'}`}>Annual</span>
          </div>
          
          {!isAnnual && (
            <p className="text-sm text-[#00E38C]">Save 20% on annual billing</p>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative rounded-lg p-8 h-full bg-[#181B22] border border-gray-600"
            >
              <div className="text-left mb-8">
                <h3 className="text-2xl font-medium text-[#EAEAEA] mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-medium text-[#EAEAEA]">
                    ${plan.name === 'Personal' ? '0' : isAnnual ? Math.round(parseInt(plan.price) * 12 * 0.8) : plan.price}
                  </span>
                  <span className="text-gray-400 ml-1">
                    {plan.name === 'Personal' ? '/month' : isAnnual ? '/year' : plan.period}
                  </span>
                </div>
              </div>

              {plan.name === 'Personal' ? (
                <button
                  className="w-full py-3 px-6 rounded-lg font-medium transition-colors duration-200 bg-gray-700 text-[#EAEAEA] hover:bg-gray-600 mb-8"
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
                  className="w-full py-3 px-6 rounded-lg font-medium transition-colors duration-200 bg-gray-700 text-[#EAEAEA] hover:bg-gray-600 mb-8"
                />
              )}

              <ul className="space-y-3 text-left">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    {feature.startsWith('Everything in') ? (
                      <span className="text-[13px] font-bold text-[#EAEAEA]">{feature}</span>
                    ) : (
                      <>
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
                        <span className="text-[13px] text-[#EAEAEA]">{feature}</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-medium text-[#EAEAEA] mb-8 text-left">Frequently Asked Questions</h2>
          <div className="max-w-3xl space-y-8">
            <div>
              <h3 className="text-lg font-medium text-[#EAEAEA] mb-2">Can I change plans anytime?</h3>
              <p className="text-[#EAEAEA]">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-[#EAEAEA] mb-2">What payment methods do you accept?</h3>
              <p className="text-[#EAEAEA]">We accept all major credit cards, PayPal, and bank transfers through Stripe.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-[#EAEAEA] mb-2">Is there a free trial?</h3>
              <p className="text-[#EAEAEA]">Yes! The Personal plan is completely free forever. No credit card required.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
