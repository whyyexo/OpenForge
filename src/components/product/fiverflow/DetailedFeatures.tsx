import React from 'react';
import { motion } from 'framer-motion';

interface DetailedFeatureProps {
  title: string;
  description: string;
  screenshot: React.ReactNode;
  reverse?: boolean;
}

const DetailedFeature: React.FC<DetailedFeatureProps> = ({ title, description, screenshot, reverse = false }) => {
  return (
    <div className="py-24 px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:grid-flow-dense' : ''}`}>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`space-y-6 ${reverse ? 'lg:col-start-2' : ''}`}
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-white">
              {title}
            </h3>
            <p className="text-lg text-white/60 leading-relaxed">
              {description}
            </p>
          </motion.div>

          {/* Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`${reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}
          >
            <div className="relative bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-sm shadow-2xl">
              {screenshot}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const DetailedFeatures: React.FC = () => {
  const features = [
    {
      title: 'The Smart Dashboard',
      description: 'Get a comprehensive overview of your business with real-time analytics, revenue tracking, and productivity metrics. Customize widgets to focus on what matters most to your workflow.',
      screenshot: (
        <div className="bg-black/40 rounded-lg p-6 space-y-4">
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white/10 rounded-lg p-4 h-20"></div>
            <div className="bg-white/10 rounded-lg p-4 h-20"></div>
            <div className="bg-white/10 rounded-lg p-4 h-20"></div>
            <div className="bg-white/10 rounded-lg p-4 h-20"></div>
          </div>
          <div className="bg-white/5 rounded-lg p-6 h-64">
            <div className="space-y-3">
              <div className="h-4 bg-white/20 rounded w-3/4"></div>
              <div className="h-3 bg-white/10 rounded w-full"></div>
              <div className="h-3 bg-white/10 rounded w-5/6"></div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-white/10 rounded-lg p-4 h-24"></div>
                <div className="bg-white/10 rounded-lg p-4 h-24"></div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'AI-Powered Assistant',
      description: 'Let AI handle routine tasks automatically. From client onboarding emails to invoice reminders, our intelligent assistant learns your workflow and suggests optimizations.',
      screenshot: (
        <div className="bg-black/40 rounded-lg p-6 space-y-4">
          <div className="bg-white/10 rounded-lg p-4 h-32">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full"></div>
              <div className="flex-1 space-y-2">
                <div className="h-3 bg-white/20 rounded w-full"></div>
                <div className="h-3 bg-white/10 rounded w-5/6"></div>
              </div>
            </div>
          </div>
          <div className="bg-white/5 rounded-lg p-4 space-y-3">
            <div className="h-3 bg-white/15 rounded w-full"></div>
            <div className="h-3 bg-white/10 rounded w-4/5"></div>
            <div className="h-3 bg-white/10 rounded w-3/4"></div>
          </div>
        </div>
      ),
      reverse: true
    },
    {
      title: 'Clients and Orders',
      description: 'Manage all client relationships in one place. Track project status, communication history, and order details with an intuitive CRM interface designed for freelancers.',
      screenshot: (
        <div className="bg-black/40 rounded-lg p-6 space-y-4">
          <div className="bg-white/10 rounded-lg p-4 h-12 mb-4"></div>
          <div className="space-y-3">
            <div className="bg-white/5 rounded-lg p-4 flex items-center space-x-4">
              <div className="w-10 h-10 bg-white/20 rounded-full"></div>
              <div className="flex-1 space-y-2">
                <div className="h-3 bg-white/20 rounded w-1/2"></div>
                <div className="h-2 bg-white/10 rounded w-full"></div>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 flex items-center space-x-4">
              <div className="w-10 h-10 bg-white/20 rounded-full"></div>
              <div className="flex-1 space-y-2">
                <div className="h-3 bg-white/20 rounded w-1/2"></div>
                <div className="h-2 bg-white/10 rounded w-full"></div>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 flex items-center space-x-4">
              <div className="w-10 h-10 bg-white/20 rounded-full"></div>
              <div className="flex-1 space-y-2">
                <div className="h-3 bg-white/20 rounded w-1/2"></div>
                <div className="h-2 bg-white/10 rounded w-full"></div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Calendar & Scheduling',
      description: 'Sync events, deadlines, and meetings across Google Calendar and other platforms. Never miss an important date with automated reminders and scheduling assistance.',
      screenshot: (
        <div className="bg-black/40 rounded-lg p-6">
          <div className="grid grid-cols-7 gap-2 mb-4">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="text-center text-white/40 text-xs pb-2">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'][i]}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 35 }).map((_, i) => (
              <div key={i} className={`aspect-square rounded-lg ${i % 7 === 2 || i % 7 === 5 ? 'bg-white/10' : 'bg-white/5'}`}></div>
            ))}
          </div>
        </div>
      ),
      reverse: true
    },
    {
      title: 'Invoices & Payments',
      description: 'Generate professional invoices in seconds, track payment status, and integrate with Stripe for seamless payment processing. Automate recurring billing and payment reminders.',
      screenshot: (
        <div className="bg-black/40 rounded-lg p-6 space-y-4">
          <div className="bg-white/10 rounded-lg p-6">
            <div className="space-y-4">
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
      )
    }
  ];

  return (
    <section className="bg-[#0A0A0A]">
      {features.map((feature, index) => (
        <DetailedFeature
          key={index}
          title={feature.title}
          description={feature.description}
          screenshot={feature.screenshot}
          reverse={feature.reverse}
        />
      ))}
    </section>
  );
};

export default DetailedFeatures;
