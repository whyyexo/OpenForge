import React from 'react';
import { motion } from 'framer-motion';

const Terms: React.FC = () => {
  const termsSections = [
    {
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using OpenForge services, you accept and agree to be bound by the terms and provision of this agreement.',
        'If you do not agree to abide by the above, please do not use this service.',
        'These terms apply to all visitors, users, and others who access or use the service.',
        'We reserve the right to modify these terms at any time without prior notice.'
      ]
    },
    {
      title: 'Use License',
      content: [
        'Permission is granted to temporarily use OpenForge services for personal, non-commercial transitory viewing only.',
        'This is the grant of a license, not a transfer of title, and under this license you may not modify or copy the materials.',
        'Use the materials for any commercial purpose or for any public display (commercial or non-commercial).',
        'Attempt to decompile or reverse engineer any software contained on the OpenForge website.'
      ]
    },
    {
      title: 'Service Availability',
      content: [
        'We strive to maintain high service availability but do not guarantee uninterrupted access.',
        'We may temporarily suspend services for maintenance, updates, or technical issues.',
        'We will provide reasonable notice for planned maintenance when possible.',
        'We are not liable for any downtime or service interruptions.'
      ]
    },
    {
      title: 'User Accounts',
      content: [
        'You are responsible for maintaining the confidentiality of your account credentials.',
        'You agree to provide accurate and complete information when creating an account.',
        'You are responsible for all activities that occur under your account.',
        'You must notify us immediately of any unauthorized use of your account.'
      ]
    },
    {
      title: 'Payment Terms',
      content: [
        'Subscription fees are billed in advance on a monthly or annual basis.',
        'All fees are non-refundable except as required by law.',
        'We may change our pricing with 30 days notice to existing subscribers.',
        'Failure to pay may result in suspension or termination of your account.'
      ]
    },
    {
      title: 'Intellectual Property',
      content: [
        'The OpenForge service and its original content, features, and functionality are owned by OpenForge.',
        'Our trademarks and trade dress may not be used without our prior written consent.',
        'You retain ownership of any content you create using our services.',
        'You grant us a license to use your content as necessary to provide our services.'
      ]
    },
    {
      title: 'Prohibited Uses',
      content: [
        'Use our service for any unlawful purpose or to solicit others to perform unlawful acts.',
        'Violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances.',
        'Transmit, or procure the sending of, any advertising or promotional material without our prior written consent.',
        'Impersonate or attempt to impersonate OpenForge, an employee, another user, or any other person or entity.'
      ]
    },
    {
      title: 'Limitation of Liability',
      content: [
        'In no event shall OpenForge, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages.',
        'This includes, without limitation, loss of profits, data, use, goodwill, or other intangible losses.',
        'Our total liability to you for all damages shall not exceed the amount you paid us in the 12 months preceding the claim.',
        'Some jurisdictions do not allow the limitation of liability, so these limitations may not apply to you.'
      ]
    },
    {
      title: 'Termination',
      content: [
        'We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever.',
        'Upon termination, your right to use the service will cease immediately.',
        'You may terminate your account at any time by contacting our support team.',
        'All provisions of the terms which by their nature should survive termination shall survive termination.'
      ]
    }
  ];

  const importantPoints = [
    {
      title: 'Service Level Agreement',
      description: 'We provide a 99.9% uptime guarantee for our paid services.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Data Protection',
      description: 'We comply with GDPR and other data protection regulations.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: 'Support Policy',
      description: 'We provide support during business hours with response times based on your plan.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
        </svg>
      )
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
              Terms of Service
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Terms and conditions for using OpenForge services and products.
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
              These Terms of Service ("Terms") govern your use of OpenForge's website and services (the "Service") 
              operated by OpenForge ("us", "we", or "our").
            </p>
            <p className="text-white/60 leading-relaxed">
              By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part 
              of these terms, then you may not access the Service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Important Points */}
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
              Key Points
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Important highlights from our terms of service
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {importantPoints.map((point, index) => (
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
                      {point.icon}
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-white">
                        {point.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Sections */}
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
              Terms and Conditions
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Detailed terms and conditions for using our services
            </p>
          </motion.div>

          <div className="space-y-8">
            {termsSections.map((section, index) => (
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
              Questions About Terms?
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              If you have any questions about these Terms of Service, please contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:legal@openforge.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-all duration-200"
              >
                Contact Legal Team
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

export default Terms;
