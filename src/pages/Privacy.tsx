import React from 'react';
import { motion } from 'framer-motion';

const Privacy: React.FC = () => {
  const privacySections = [
    {
      title: 'Information We Collect',
      content: [
        'Personal information you provide when creating an account (name, email address)',
        'Usage data and analytics to improve our services',
        'Payment information processed securely through Stripe',
        'Communication data when you contact our support team',
        'Device and browser information for security purposes'
      ]
    },
    {
      title: 'How We Use Your Information',
      content: [
        'To provide and maintain our services',
        'To process payments and manage your subscription',
        'To communicate with you about updates and support',
        'To improve our products and user experience',
        'To ensure security and prevent fraud'
      ]
    },
    {
      title: 'Data Sharing',
      content: [
        'We do not sell your personal information to third parties',
        'We may share data with trusted service providers (Stripe, Supabase)',
        'We may disclose information if required by law',
        'We may share aggregated, anonymized data for analytics',
        'Your data is never shared without your explicit consent'
      ]
    },
    {
      title: 'Data Security',
      content: [
        'We use industry-standard encryption for data transmission',
        'All data is stored securely with access controls',
        'We regularly audit our security practices',
        'We comply with SOC 2 Type II and ISO 27001 standards',
        'We have incident response procedures in place'
      ]
    },
    {
      title: 'Your Rights',
      content: [
        'Right to access your personal data',
        'Right to correct inaccurate information',
        'Right to delete your data (right to be forgotten)',
        'Right to data portability',
        'Right to object to processing of your data'
      ]
    },
    {
      title: 'Cookies and Tracking',
      content: [
        'We use essential cookies for website functionality',
        'We use analytics cookies to understand usage patterns',
        'We use preference cookies to remember your settings',
        'You can control cookie preferences in your browser',
        'We do not use tracking cookies for advertising'
      ]
    }
  ];

  const dataTypes = [
    {
      category: 'Account Data',
      description: 'Information you provide when creating and managing your account',
      examples: ['Email address', 'Name', 'Profile information', 'Account preferences']
    },
    {
      category: 'Usage Data',
      description: 'Information about how you use our services',
      examples: ['Feature usage', 'Session duration', 'Error logs', 'Performance metrics']
    },
    {
      category: 'Payment Data',
      description: 'Information related to your subscription and payments',
      examples: ['Billing address', 'Payment method', 'Transaction history', 'Subscription status']
    },
    {
      category: 'Communication Data',
      description: 'Information from your interactions with our support team',
      examples: ['Support tickets', 'Email communications', 'Feedback', 'Survey responses']
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
              Privacy Policy
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              How we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-white/40">
              Last updated: December 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-lg p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Introduction
            </h2>
            <p className="text-white/60 leading-relaxed mb-4">
              At OpenForge, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
            </p>
            <p className="text-white/60 leading-relaxed">
              By using our services, you agree to the collection and use of information in accordance with this policy. 
              We will not use or share your information with anyone except as described in this Privacy Policy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Data Types Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Types of Data We Collect
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              We collect different types of information to provide and improve our services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {dataTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {type.category}
                </h3>
                <p className="text-white/60 mb-4">
                  {type.description}
                </p>
                <ul className="space-y-2">
                  {type.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="flex items-center text-sm text-white/60">
                      <svg className="w-3 h-3 text-white/40 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {example}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Privacy Practices
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Detailed information about our privacy practices
            </p>
          </motion.div>

          <div className="space-y-8">
            {privacySections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-lg p-8"
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-white/60">
                      <svg className="w-4 h-4 text-white/40 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Questions About Privacy?
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              If you have any questions about this Privacy Policy or our data practices, please contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:privacy@openforge.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-all duration-200"
              >
                Contact Privacy Team
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:border-white/40 hover:bg-white/5 transition-all duration-200"
              >
                General Contact
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
