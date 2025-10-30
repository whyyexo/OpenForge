import React from 'react';
import { motion } from 'framer-motion';

const PlansPreview: React.FC = () => {
  const plans = [
    {
      name: 'Free',
      description: 'Perfect for getting started'
    },
    {
      name: 'Pro',
      description: 'For growing freelancers'
    },
    {
      name: 'Enterprise',
      description: 'For teams and agencies'
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-12">
            Try FiverFlow free today — no credit card required.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-white/60 text-sm">
                  {plan.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlansPreview;
