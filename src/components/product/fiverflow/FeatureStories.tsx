import React from 'react';
import { motion } from 'framer-motion';

// 1. Full-width immersive demo
const ImmersiveDemo: React.FC = () => {
  return (
    <section className="relative py-32 px-6 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Dashboard screenshot with parallax container */}
          <div className="relative rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-4">
              <div className="bg-black/60 rounded-lg p-8 min-h-[600px]">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-3 space-y-4">
                    <div className="bg-white/5 rounded-lg p-4 h-12"></div>
                    <div className="space-y-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="bg-white/5 rounded-lg p-3 h-10"></div>
                      ))}
                    </div>
                  </div>
                  <div className="col-span-9 space-y-4">
                    <div className="grid grid-cols-4 gap-4">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="bg-white/5 rounded-lg p-4 h-28"></div>
                      ))}
                    </div>
                    <div className="bg-white/5 rounded-lg p-6 h-80">
                      <div className="space-y-4">
                        <div className="h-4 bg-white/20 rounded w-3/4"></div>
                        <div className="h-3 bg-white/10 rounded w-full"></div>
                        <div className="grid grid-cols-3 gap-4 mt-6">
                          <div className="bg-white/10 rounded-lg p-4 h-32"></div>
                          <div className="bg-white/10 rounded-lg p-4 h-32"></div>
                          <div className="bg-white/10 rounded-lg p-4 h-32"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Overlaid text with glass blur */}
            <div className="absolute inset-0 flex items-end">
              <div className="w-full bg-black/60 backdrop-blur-md border-t border-white/10 p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="max-w-3xl"
                >
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    The Smart Dashboard — Everything in One Place
                  </h3>
                  <p className="text-lg text-white/70 leading-relaxed">
                    Get real-time analytics, manage tasks, track client interactions, and access automation shortcuts — all from a single, intuitive interface designed for speed and clarity.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// 2. Split layout with floating elements
const FloatingElements: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-white">
              AI-Powered Automation That Learns Your Workflow
            </h3>
            <p className="text-lg text-white/60 leading-relaxed">
              Our intelligent assistant understands your business patterns and suggests automations that save hours every week. From client onboarding to invoice generation, AI handles repetitive tasks seamlessly.
            </p>
            <ul className="space-y-3">
              {[
                'Automated client communication',
                'Smart task prioritization',
                'Intelligent invoice reminders',
                'Workflow optimization suggestions'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-white/60">
                  <svg className="w-5 h-5 text-white/40 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Floating screenshots */}
          <div className="relative h-[500px]">
            {[
              { top: '10%', left: '10%', delay: 0 },
              { top: '40%', right: '10%', delay: 0.2 },
              { bottom: '20%', left: '20%', delay: 0.4 }
            ].map((pos, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: pos.delay }}
                viewport={{ once: true }}
                animate={{ 
                  y: [0, -10, 0],
                  transition: { duration: 3, repeat: Infinity, delay: pos.delay }
                }}
                className="absolute bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-sm shadow-lg"
                style={{ ...pos, width: '200px' }}
              >
                <div className="bg-black/60 rounded p-3 space-y-2">
                  <div className="h-2 bg-white/20 rounded w-full"></div>
                  <div className="h-2 bg-white/10 rounded w-5/6"></div>
                  <div className="h-8 bg-white/5 rounded mt-2"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// 3. Feature grid (3-column)
const FeatureGrid: React.FC = () => {
  const features = [
    {
      title: 'AI Assistant',
      description: 'Automate repetitive actions and get intelligent suggestions for workflow optimization.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Client CRM',
      description: 'Manage all client data, communication history, and project details in one centralized system.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Integrated Calendar',
      description: 'Never miss a meeting with seamless sync across Google Calendar and other platforms.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  <div className="text-white/40 mx-auto w-fit">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 4. Spotlight section
const SpotlightSection: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-[#0A0A0A] via-[#111111] to-[#0A0A0A] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Invoices & Payments
            </h3>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Professional invoicing with seamless payment processing
            </p>
          </div>

          {/* Centered mockup */}
          <div className="flex justify-center">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm max-w-md w-full">
              <div className="bg-black/60 rounded-lg p-6 space-y-4">
                <div className="h-4 bg-white/20 rounded w-3/4"></div>
                <div className="h-3 bg-white/10 rounded w-full"></div>
                <div className="h-3 bg-white/10 rounded w-5/6"></div>
                <div className="border-t border-white/10 pt-4 mt-4">
                  <div className="flex justify-between mb-2">
                    <div className="h-3 bg-white/10 rounded w-24"></div>
                    <div className="h-3 bg-white/20 rounded w-20"></div>
                  </div>
                  <div className="flex justify-between">
                    <div className="h-4 bg-white/20 rounded w-32"></div>
                    <div className="h-4 bg-white/30 rounded w-24"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bullet points */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Generate invoices instantly',
              'Manage recurring billing',
              'Track payments in real-time'
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-lg p-6"
              >
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-white/40" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/80">{item}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// 5. Showcase strip (horizontal scrolling)
const ShowcaseStrip: React.FC = () => {
  const items = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    title: ['Dashboard', 'AI Assistant', 'Clients', 'Calendar', 'Invoices', 'Analytics'][i]
  }));

  return (
    <section className="py-24 px-6 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Explore the Platform
          </h3>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            See how different areas of FiverFlow work together
          </p>
        </motion.div>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex space-x-6 pb-4" style={{ width: 'max-content' }}>
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[400px]"
              >
                <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all duration-300">
                  <div className="bg-black/60 rounded-lg p-8 h-[300px] mb-4">
                    <div className="space-y-3">
                      <div className="h-4 bg-white/20 rounded w-3/4"></div>
                      <div className="h-3 bg-white/10 rounded w-full"></div>
                      <div className="h-3 bg-white/10 rounded w-5/6"></div>
                      <div className="grid grid-cols-2 gap-3 mt-4">
                        <div className="bg-white/5 rounded-lg p-4 h-24"></div>
                        <div className="bg-white/5 rounded-lg p-4 h-24"></div>
                      </div>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-white">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Main component combining all feature stories
const FeatureStories: React.FC = () => {
  return (
    <>
      <ImmersiveDemo />
      <FloatingElements />
      <FeatureGrid />
      <SpotlightSection />
      <ShowcaseStrip />
    </>
  );
};

export default FeatureStories;
