import React from 'react';
import { motion } from 'framer-motion';

const Career: React.FC = () => {
  const positions = [
    {
      title: 'Senior Frontend Developer',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build beautiful, performant user interfaces for our platform using React, TypeScript, and modern web technologies.',
      requirements: [
        '5+ years of React/TypeScript experience',
        'Strong understanding of modern CSS and design systems',
        'Experience with state management (Redux, Zustand)',
        'Familiarity with testing frameworks (Jest, Cypress)',
        'Experience with build tools (Vite, Webpack)'
      ]
    },
    {
      title: 'Backend Engineer',
      location: 'Remote',
      type: 'Full-time',
      description: 'Design and implement scalable backend services using Node.js, PostgreSQL, and cloud infrastructure.',
      requirements: [
        '4+ years of Node.js/TypeScript experience',
        'Strong database design and optimization skills',
        'Experience with RESTful APIs and GraphQL',
        'Knowledge of cloud platforms (AWS, Vercel)',
        'Understanding of security best practices'
      ]
    },
    {
      title: 'Product Designer',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create intuitive user experiences and beautiful interfaces that delight our users.',
      requirements: [
        '3+ years of product design experience',
        'Proficiency in Figma and design systems',
        'Strong understanding of UX principles',
        'Experience with user research and testing',
        'Portfolio demonstrating design thinking'
      ]
    },
    {
      title: 'DevOps Engineer',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build and maintain our infrastructure, ensuring reliability and scalability.',
      requirements: [
        '3+ years of DevOps experience',
        'Experience with Docker and Kubernetes',
        'Knowledge of CI/CD pipelines',
        'Experience with monitoring and logging',
        'Understanding of security and compliance'
      ]
    }
  ];

  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Flexible Work',
      description: 'Work from anywhere with flexible hours that fit your lifestyle.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Growth Opportunities',
      description: 'Continuous learning with conferences, courses, and mentorship programs.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: 'Competitive Package',
      description: 'Competitive salary, equity, and comprehensive health benefits.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Great Team',
      description: 'Work with talented, passionate people who care about quality.'
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
              Join Our Team
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Help us build the future of development tools. We're looking for passionate people who want to make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Work With Us
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              We offer more than just a job - we offer a place to grow and make an impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all duration-300 h-full">
                  <div className="space-y-4">
                    <div className="text-white/40 group-hover:text-white/60 transition-colors duration-300">
                      {benefit.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-white">
                        {benefit.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
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
              Open Positions
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              We're always looking for talented people to join our team.
            </p>
          </motion.div>

          <div className="space-y-6">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                      <h3 className="text-xl font-semibold text-white">
                        {position.title}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-white/60">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <p className="text-white/60 mb-4">
                      {position.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-white">Requirements:</h4>
                      <ul className="space-y-1">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-sm text-white/60">
                            <svg className="w-3 h-3 text-white/40 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="lg:ml-8">
                    <button className="w-full lg:w-auto px-6 py-3 bg-white text-black font-medium rounded-sm hover:bg-white/90 transition-all duration-200">
                      Apply Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Don't See Your Role?
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              We're always interested in meeting talented people. Send us your resume and let us know how you'd like to contribute.
            </p>
            <button className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-medium rounded-sm hover:border-white/40 hover:bg-white/5 transition-all duration-200">
              Send Resume
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Career;
