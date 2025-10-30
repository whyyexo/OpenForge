import React from 'react';
import { motion } from 'framer-motion';

const Legal: React.FC = () => {
  const legalSections = [
    {
      title: 'Terms of Service',
      description: 'Our terms and conditions for using StriveLabs services and products.',
      lastUpdated: 'Last updated: December 2024',
      link: '/terms'
    },
    {
      title: 'Privacy Policy',
      description: 'How we collect, use, and protect your personal information.',
      lastUpdated: 'Last updated: December 2024',
      link: '/privacy'
    },
    {
      title: 'Cookie Policy',
      description: 'Information about how we use cookies and similar technologies.',
      lastUpdated: 'Last updated: December 2024',
      link: '#'
    },
    {
      title: 'Data Processing Agreement',
      description: 'Terms for processing personal data in compliance with GDPR.',
      lastUpdated: 'Last updated: December 2024',
      link: '#'
    },
    {
      title: 'Service Level Agreement',
      description: 'Our commitments regarding service availability and performance.',
      lastUpdated: 'Last updated: December 2024',
      link: '#'
    },
    {
      title: 'Intellectual Property',
      description: 'Information about our intellectual property rights and licensing.',
      lastUpdated: 'Last updated: December 2024',
      link: '#'
    }
  ];

  const complianceInfo = [
    {
      title: 'GDPR Compliance',
      description: 'We are fully compliant with the General Data Protection Regulation (GDPR) and respect your privacy rights.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: 'SOC 2 Type II',
      description: 'Our security controls have been independently verified through SOC 2 Type II certification.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'ISO 27001',
      description: 'We maintain ISO 27001 certification for information security management.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
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
              Legal
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Legal information, policies, and compliance documentation for StriveLabs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Legal Documents Section */}
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
              Legal Documents
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Important legal information and policies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {legalSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <a
                  href={section.link}
                  className="block bg-white/5 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all duration-300 h-full"
                >
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white group-hover:text-white/80 transition-colors duration-200">
                      {section.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {section.description}
                    </p>
                    <p className="text-xs text-white/40">
                      {section.lastUpdated}
                    </p>
                    <div className="flex items-center text-sm text-white/60 group-hover:text-white transition-colors duration-200">
                      View Document
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
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
              Compliance & Security
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              We maintain the highest standards of security and compliance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {complianceInfo.map((item, index) => (
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
                      {item.icon}
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Legal Section */}
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
              Legal Questions?
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              If you have any legal questions or concerns, please don't hesitate to contact our legal team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:legal@strivelabs.com"
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

export default Legal;
