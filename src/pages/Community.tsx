import React from 'react';
import { motion } from 'framer-motion';

const Community: React.FC = () => {
  const platforms = [
    {
      name: 'Discord',
      description: 'Join our Discord server for real-time discussions, support, and community events.',
      members: '2,500+ members',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>
      ),
      link: 'https://dsc.gg/fiverflow',
      color: 'text-indigo-400'
    },
    {
      name: 'GitHub',
      description: 'Contribute to our open-source projects and collaborate with developers worldwide.',
      members: '1,200+ contributors',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      link: 'https://github.com/openforge',
      color: 'text-gray-400'
    },
    {
      name: 'Twitter',
      description: 'Follow us for product updates, announcements, and industry insights.',
      members: '5,000+ followers',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      link: 'https://twitter.com/openforge',
      color: 'text-blue-400'
    }
  ];

  const events = [
    {
      title: 'StriveLabs Developer Meetup',
      date: 'Monthly',
      description: 'Join our monthly virtual meetup to discuss new features, share projects, and connect with fellow developers.',
      type: 'Virtual Event'
    },
    {
      title: 'AI Automation Workshop',
      date: 'Bi-weekly',
      description: 'Learn how to build powerful AI workflows with FiverFlow and CoreAI in our hands-on workshops.',
      type: 'Workshop'
    },
    {
      title: 'Community Showcase',
      date: 'Weekly',
      description: 'Showcase your projects built with StriveLabs tools and get feedback from the community.',
      type: 'Showcase'
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
              Community
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Join thousands of developers, creators, and innovators building the future with StriveLabs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Platforms Section */}
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
              Join Our Platforms
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Connect with our community across multiple platforms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white/5 border border-white/10 rounded-lg p-8 hover:border-white/20 transition-all duration-300 h-full"
                >
                  <div className="space-y-6">
                    <div className={`${platform.color} group-hover:scale-110 transition-transform duration-300`}>
                      {platform.icon}
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-white">
                        {platform.name}
                      </h3>
                      <p className="text-white/60 leading-relaxed">
                        {platform.description}
                      </p>
                      <p className="text-sm text-white/40">
                        {platform.members}
                      </p>
                    </div>
                    <div className="flex items-center text-sm text-white/60 group-hover:text-white transition-colors duration-200">
                      Join Now
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

      {/* Events Section */}
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
              Community Events
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Regular events to learn, share, and connect
            </p>
          </motion.div>

          <div className="space-y-6">
            {events.map((event, index) => (
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
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-semibold text-white">
                        {event.title}
                      </h3>
                      <span className="px-2 py-1 bg-white/10 text-white/60 text-xs rounded-full">
                        {event.type}
                      </span>
                    </div>
                    <p className="text-white/60 mb-2">
                      {event.description}
                    </p>
                    <p className="text-sm text-white/40">
                      {event.date}
                    </p>
                  </div>
                  <div className="lg:ml-8">
                    <button className="px-6 py-3 border border-white/20 text-white font-medium rounded-lg hover:border-white/40 hover:bg-white/5 transition-all duration-200">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
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
              Community Guidelines
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Help us maintain a welcoming and productive environment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Be Respectful',
                description: 'Treat all community members with respect and kindness. No harassment, discrimination, or hate speech.'
              },
              {
                title: 'Stay On Topic',
                description: 'Keep discussions relevant to StriveLabs products, development, and related topics.'
              },
              {
                title: 'Share Knowledge',
                description: 'Help others learn and grow by sharing your knowledge and experience.'
              },
              {
                title: 'Follow Platform Rules',
                description: 'Respect the terms of service and community guidelines of each platform.'
              }
            ].map((guideline, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {guideline.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {guideline.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
