import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PricingHero from '../components/pricing/PricingHero';
import PricingGrid from '../components/pricing/PricingGrid';
import EnterpriseCTA from '../components/pricing/EnterpriseCTA';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [isAllInOne, setIsAllInOne] = useState(true);

  const handleToggleAnnual = () => {
    setIsAnnual(!isAnnual);
  };

  const handleTogglePlan = () => {
    setIsAllInOne(!isAllInOne);
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <title>Pricing – StriveLabs</title>
        <meta name="description" content="Flexible, transparent pricing for StriveLabs tools and suite. Choose the full StriveLabs Suite or subscribe per product. No hidden fees." />
        <meta name="keywords" content="StriveLabs pricing, FiverFlow pricing, CoreAI pricing, FlowSync pricing, enterprise pricing" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Pricing – StriveLabs" />
        <meta property="og:description" content="Flexible, transparent pricing for StriveLabs tools and suite. Choose the full StriveLabs Suite or subscribe per product." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://strivelabs.com/pricing" />
        <meta property="og:image" content="https://strivelabs.com/og-image-pricing.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pricing – StriveLabs" />
        <meta name="twitter:description" content="Flexible, transparent pricing for StriveLabs tools and suite. Choose the full StriveLabs Suite or subscribe per product." />
        <meta name="twitter:image" content="https://strivelabs.com/og-image-pricing.png" />
        
        {/* Additional */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="StriveLabs" />
        <link rel="canonical" href="https://strivelabs.com/pricing" />
      </head>

      <div className="min-h-screen bg-[#0A0A0A] text-white">
        {/* Hero Section */}
        <PricingHero 
          isAnnual={isAnnual} 
          onToggle={handleToggleAnnual} 
        />

        {/* Pricing Grid */}
        <PricingGrid 
          isAnnual={isAnnual}
          isAllInOne={isAllInOne}
          onTogglePlan={handleTogglePlan}
        />

        {/* Enterprise CTA */}
        <EnterpriseCTA />

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
                  answer: "Yes, all plans come with a 14-day free trial. No credit card required."
                },
                {
                  question: "Do you offer refunds?",
                  answer: "We offer a 30-day money-back guarantee for all paid plans."
                },
                {
                  question: "What's included in the StriveLabs Suite?",
                  answer: "The Suite includes unlimited access to FiverFlow, CoreAI, FlowSync, and all future StriveLabs products."
                },
                {
                  question: "Can I use individual tools without the Suite?",
                  answer: "Absolutely. You can subscribe to individual tools at their respective monthly rates."
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
    </>
  );
};

export default Pricing;