import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingMinimal: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-8 leading-tight">
            Build.{' '}
            <span className="text-[#00E38C] font-normal">
              Connect.
            </span>{' '}
            Create.
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            OpenForge empowers creators and developers to build next-generation platforms.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate('/signup')}
              className="bg-[#00E38C] text-black px-6 py-3 rounded-md font-medium text-sm hover:bg-[#00E38C]/90 transition-all duration-200"
            >
              Get Started
            </button>
            
            <button
              onClick={() => navigate('/docs')}
              className="border border-gray-700 text-gray-300 px-6 py-3 rounded-md font-medium text-sm hover:border-[#00E38C] hover:text-[#00E38C] transition-all duration-200"
            >
              View Docs
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto font-light">
              Everything you need to build, deploy, and scale your applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Unified Accounts',
                description: 'One account across all OpenForge products. Seamless integration between FiverFlow and OpenForge platforms.'
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: 'Smart Automation',
                description: 'AI tools and integrations that save time. Automated workflows and intelligent suggestions.'
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: 'Secure & Scalable',
                description: 'Built on Supabase & Stripe for reliability. Enterprise-grade security with infinite scalability.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-[#111111] border border-gray-800 rounded-lg p-6 transition-all duration-200 hover:border-gray-700"
              >
                <div className="text-[#00E38C] mb-4 group-hover:text-[#00E38C]/80 transition-colors">
                  {feature.icon}
                </div>
                
                <h3 className="text-lg font-medium text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto font-light">
              Connect with the tools you already use and love
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { 
                name: 'Stripe', 
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.274 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.35-2.354 1.35-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/>
                  </svg>
                )
              },
              { 
                name: 'Supabase', 
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12v8.959a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.66z"/>
                  </svg>
                )
              },
              { 
                name: 'Framer', 
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 0h16v8h-8zm0 8h8v8H4zm0 8h8v8H4zm10-8h8v8h-8zm0 8h8v8h-8z"/>
                  </svg>
                )
              },
              { 
                name: 'OpenAI', 
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.281 9.28l-7.19 3.2A4 4 0 0016 12a4 4 0 00-4-4 4 4 0 00-4 4 4 4 0 004 4 4 4 0 001.09-.11l7.19 3.2a1 1 0 001.3-1.3l-3.2-7.19a1 1 0 00-1.3-1.3l-7.19 3.2a1 1 0 00-1.3 1.3l3.2 7.19a1 1 0 001.3 1.3l7.19-3.2a1 1 0 001.3-1.3l-3.2-7.19z"/>
                  </svg>
                )
              },
              { 
                name: 'Vercel', 
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 22.525H0l12-21.05 12 21.05z"/>
                  </svg>
                )
              },
              { 
                name: 'GitHub', 
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                )
              }
            ].map((integration, index) => (
              <div
                key={integration.name}
                className="group bg-[#111111] border border-gray-800 rounded-lg p-4 text-center transition-all duration-200 hover:border-gray-700"
              >
                <div className="text-gray-400 mb-2 group-hover:text-[#00E38C] transition-colors">
                  {integration.icon}
                </div>
                
                <h3 className="text-xs font-medium text-white group-hover:text-[#00E38C] transition-colors">
                  {integration.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Simple Pricing
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto font-light">
              Choose the plan that fits your needs. Start free, upgrade anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
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
                className={`relative ${plan.popular ? 'md:-mt-4' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-[#00E38C] text-black px-3 py-1 rounded-full text-xs font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className={`bg-[#111111] border rounded-lg p-6 h-full transition-all duration-200 hover:border-gray-700 ${plan.popular ? 'border-[#00E38C]/50' : 'border-gray-800'}`}>
                  <h3 className="text-lg font-medium text-white mb-2">
                    {plan.name}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="text-3xl font-light text-white">{plan.price}</span>
                    <span className="text-gray-400 text-sm ml-1">/{plan.period}</span>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <svg className="w-4 h-4 text-[#00E38C] mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => navigate('/pricing')}
                    className={`w-full py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                      plan.popular
                        ? 'bg-[#00E38C] text-black hover:bg-[#00E38C]/90'
                        : 'border border-gray-700 text-gray-300 hover:border-[#00E38C] hover:text-[#00E38C]'
                    }`}
                  >
                    {plan.name === 'Lunch' ? 'Get Started' : 'Upgrade Now'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/pricing')}
              className="text-[#00E38C] hover:text-[#00E38C]/80 transition-colors text-sm font-medium"
            >
              View Full Pricing →
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Join OpenForge{' '}
            <span className="text-[#00E38C]">
              Today
            </span>
          </h2>

          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto font-light">
            Create your account and start building the future. Join thousands of developers already using OpenForge.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => navigate('/signup')}
              className="bg-[#00E38C] text-black px-6 py-3 rounded-md font-medium text-sm hover:bg-[#00E38C]/90 transition-all duration-200"
            >
              Create Account
            </button>
            
            <button
              onClick={() => navigate('/docs')}
              className="border border-gray-700 text-gray-300 px-6 py-3 rounded-md font-medium text-sm hover:border-[#00E38C] hover:text-[#00E38C] transition-all duration-200"
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
                <div className="text-2xl font-light text-[#00E38C] mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-lg font-medium text-white mb-4">OpenForge</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Empowering creators and developers to build next-generation platforms with cutting-edge tools and seamless integrations.
              </p>
              <div className="flex space-x-3">
                {[
                  { name: 'Discord', href: 'https://discord.gg/openforge', icon: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                  )},
                  { name: 'GitHub', href: 'https://github.com/openforge', icon: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  )},
                  { name: 'Twitter', href: 'https://twitter.com/openforge', icon: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  )}
                ].map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-800 rounded-md flex items-center justify-center text-gray-400 hover:bg-[#00E38C] hover:text-black transition-all duration-200"
                  >
                    {social.icon}
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
                  { name: 'Discord', href: 'https://discord.gg/openforge' },
                  { name: 'GitHub', href: 'https://github.com/openforge' },
                  { name: 'Twitter', href: 'https://twitter.com/openforge' },
                  { name: 'Support', href: '/support' }
                ]
              }
            ].map((section, index) => (
              <div key={section.category}>
                <h4 className="text-white font-medium mb-3 text-sm">{section.category}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-[#00E38C] transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 mt-8 pt-6">
            <div className="text-gray-400 text-sm">
              © 2024 OpenForge. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingMinimal;
