import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingSimple: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]" />
          
          {/* Static Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-[#00E38C] rounded-full opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            Build.{' '}
            <span className="text-[#00E38C]">
              Connect.
            </span>{' '}
            Create.
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            StriveLabs empowers creators and developers to build next-generation platforms.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate('/signup')}
              className="bg-[#00E38C] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#00E38C]/90 transition-all duration-300 hover:scale-105"
            >
              Get Started
            </button>
            
            <button
              onClick={() => navigate('/docs')}
              className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold text-lg hover:border-[#00E38C] hover:text-[#00E38C] transition-all duration-300 hover:scale-105"
            >
              View Docs
            </button>
          </div>

          {/* 3D Element */}
          <div className="mt-16">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#00E38C] to-[#00B894] rounded-lg shadow-2xl hover:rotate-12 transition-transform duration-300" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00E38C] to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to build, deploy, and scale your applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '💡',
                title: 'Unified Accounts',
                description: 'One account across all StriveLabs products. Seamless integration between FiverFlow and StriveLabs platforms.'
              },
              {
                icon: '⚙️',
                title: 'Smart Automation',
                description: 'AI tools and integrations that save time. Automated workflows and intelligent suggestions.'
              },
              {
                icon: '🔒',
                title: 'Secure & Scalable',
                description: 'Built on Supabase & Stripe for reliability. Enterprise-grade security with infinite scalability.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-[#1a1a1a] border border-gray-800 rounded-2xl p-8 h-full transition-all duration-300 hover:border-[#00E38C]/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#00E38C]/10"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00E38C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00E38C] transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 bg-[#0a0a0a] relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00E38C]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#00E38C]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Connect with the tools you already use and love
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: 'Stripe', logo: '💳' },
              { name: 'Supabase', logo: '🗄️' },
              { name: 'Framer', logo: '🎨' },
              { name: 'OpenAI', logo: '🤖' },
              { name: 'Vercel', logo: '▲' },
              { name: 'GitHub', logo: '🐙' }
            ].map((integration, index) => (
              <div
                key={integration.name}
                className="group bg-[#1a1a1a] border border-gray-800 rounded-xl p-6 text-center transition-all duration-300 hover:border-[#00E38C]/50 hover:bg-[#1a1a1a]/80 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#00E38C]/20"
              >
                <div className="text-3xl mb-3 group-hover:rotate-12 transition-transform duration-300">
                  {integration.logo}
                </div>
                
                <h3 className="text-sm font-semibold text-white group-hover:text-[#00E38C] transition-colors">
                  {integration.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-24 bg-[#0a0a0a] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the plan that fits your needs. Start free, upgrade anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Lunch',
                price: '$0',
                period: 'forever',
                description: 'Perfect for getting started',
                features: ['Public projects', 'Basic support', 'Community access'],
                popular: false
              },
              {
                name: 'Boost',
                price: '$20',
                period: 'month',
                description: 'For growing teams',
                features: ['Everything in Lunch', 'Private projects', 'Priority support', 'Advanced analytics'],
                popular: true
              },
              {
                name: 'Scale',
                price: '$35',
                period: 'month',
                description: 'For enterprise needs',
                features: ['Everything in Boost', 'Custom integrations', 'Dedicated support', 'Advanced security'],
                popular: false
              }
            ].map((plan, index) => (
              <div
                key={plan.name}
                className={`relative group ${plan.popular ? 'md:-mt-8' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-[#00E38C] text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className={`bg-[#1a1a1a] border-2 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-[#00E38C]/50 ${plan.popular ? 'bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]' : 'border-gray-600'} group-hover:-translate-y-2 group-hover:shadow-2xl`}>
                  {plan.popular && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00E38C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#00E38C] transition-colors">
                      {plan.name}
                    </h3>
                    
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    </div>
                    
                    <p className="text-gray-400 mb-6">{plan.description}</p>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <span className="text-[#00E38C] mr-3">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => navigate('/pricing')}
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                        plan.popular
                          ? 'bg-[#00E38C] text-black hover:bg-[#00E38C]/90'
                          : 'border border-gray-600 text-gray-300 hover:border-[#00E38C] hover:text-[#00E38C]'
                      }`}
                    >
                      {plan.name === 'Lunch' ? 'Get Started' : 'Upgrade Now'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">
              All plans include 30-day money-back guarantee
            </p>
            <button
              onClick={() => navigate('/pricing')}
              className="text-[#00E38C] hover:text-[#00E38C]/80 transition-colors font-semibold"
            >
              View Full Pricing →
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00E38C]/10 via-transparent to-[#00E38C]/10" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Join StriveLabs{' '}
            <span className="text-[#00E38C]">
              Today
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Create your account and start building the future. Join thousands of developers already using StriveLabs.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={() => navigate('/signup')}
              className="bg-[#00E38C] text-black px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#00E38C]/90 transition-all duration-300 shadow-lg hover:scale-105"
            >
              Create Account
            </button>
            
            <button
              onClick={() => navigate('/docs')}
              className="border border-gray-600 text-gray-300 px-10 py-4 rounded-lg font-bold text-lg hover:border-[#00E38C] hover:text-[#00E38C] transition-all duration-300 hover:scale-105"
            >
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { number: '10K+', label: 'Active Users' },
              { number: '99.9%', label: 'Uptime' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-[#00E38C] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">StriveLabs</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Empowering creators and developers to build next-generation platforms with cutting-edge tools and seamless integrations.
              </p>
              <div className="flex space-x-4">
                {[
                  { name: 'Discord', href: 'https://discord.gg/strivelabs', icon: '💬' },
                  { name: 'GitHub', href: 'https://github.com/strivelabs', icon: '🐙' },
                  { name: 'Twitter', href: 'https://twitter.com/strivelabs', icon: '🐦' }
                ].map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[#00E38C] hover:text-black transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {[
              {
                category: 'Product',
                links: [
                  { name: 'Features', href: '/features' },
                  { name: 'Pricing', href: '/pricing' },
                  { name: 'Documentation', href: '/docs' },
                  { name: 'API', href: '/api' }
                ]
              },
              {
                category: 'Company',
                links: [
                  { name: 'About', href: '/about' },
                  { name: 'Blog', href: '/blog' },
                  { name: 'Careers', href: '/careers' },
                  { name: 'Contact', href: '/contact' }
                ]
              },
              {
                category: 'Legal',
                links: [
                  { name: 'Privacy Policy', href: '/privacy' },
                  { name: 'Terms of Service', href: '/terms' },
                  { name: 'Cookie Policy', href: '/cookies' },
                  { name: 'GDPR', href: '/gdpr' }
                ]
              },
              {
                category: 'Community',
                links: [
                  { name: 'Discord', href: 'https://discord.gg/strivelabs' },
                  { name: 'GitHub', href: 'https://github.com/strivelabs' },
                  { name: 'Twitter', href: 'https://twitter.com/strivelabs' },
                  { name: 'Support', href: '/support' }
                ]
              }
            ].map((section, index) => (
              <div key={section.category}>
                <h4 className="text-white font-semibold mb-4">{section.category}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-[#00E38C] transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 StriveLabs. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingSimple;
