import React from 'react';
import { motion } from 'framer-motion';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'Automation at its Core',
      description: 'Focus on your creativity while FiverFlow handles the repetitive work — client follow-ups, task tracking, and reporting are fully automated.',
      image: 'left',
      icon: '🤖'
    },
    {
      title: 'AI-Powered Insights',
      description: 'See exactly where your time goes and how to optimize your freelancing business for growth.',
      image: 'right',
      icon: '🧠'
    },
    {
      title: 'Scalable for Teams',
      description: 'Whether you\'re solo or managing a team, FiverFlow adapts to your workflow.',
      image: 'left',
      icon: '👥'
    }
  ];

  const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
    const isEven = index % 2 === 0;
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        viewport={{ once: true }}
        className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}
      >
        {/* Text Content */}
        <div className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">{feature.icon}</span>
              <h3 className="text-3xl lg:text-4xl font-bold text-white">
                {feature.title}
              </h3>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>

        {/* Visual Content */}
        <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
          <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
            {/* Mock Feature Visualization */}
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-[#00E38C] rounded-full"></div>
                  <span className="text-sm text-gray-400">{feature.title}</span>
                </div>
                <div className="text-xs text-gray-500">Live</div>
              </div>

              {/* Content based on feature */}
              {index === 0 && (
                <div className="space-y-4">
                  <div className="h-3 bg-gray-700 rounded w-full"></div>
                  <div className="h-3 bg-gray-600 rounded w-4/5"></div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-700/50 rounded-lg p-3">
                      <div className="h-2 bg-gray-600 rounded w-full mb-2"></div>
                      <div className="h-2 bg-gray-600 rounded w-3/4"></div>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-3">
                      <div className="h-2 bg-gray-600 rounded w-full mb-2"></div>
                      <div className="h-2 bg-gray-600 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              )}

              {index === 1 && (
                <div className="space-y-4">
                  <div className="h-4 bg-gradient-to-r from-[#00E38C] to-blue-500 rounded w-3/4"></div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-600 rounded w-full"></div>
                    <div className="h-2 bg-gray-600 rounded w-5/6"></div>
                    <div className="h-2 bg-gray-600 rounded w-4/5"></div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 bg-[#00E38C]/20 rounded"></div>
                    <div className="w-8 h-8 bg-blue-500/20 rounded"></div>
                    <div className="w-8 h-8 bg-purple-500/20 rounded"></div>
                  </div>
                </div>
              )}

              {index === 2 && (
                <div className="space-y-4">
                  <div className="flex space-x-2">
                    <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
                    <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
                    <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
                    <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center">
                      <span className="text-xs text-gray-400">+</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-600 rounded w-full"></div>
                    <div className="h-2 bg-gray-600 rounded w-3/4"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-8 bg-gray-700/50 rounded"></div>
                    <div className="h-8 bg-gray-700/50 rounded"></div>
                    <div className="h-8 bg-gray-700/50 rounded"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#00E38C] rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why choose FiverFlow?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the features that make FiverFlow the ultimate freelancing automation platform
          </p>
        </motion.div>

        {/* Features */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
