import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingModern: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section - Full width with overlay */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2300E38C%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00E38C]/10 border border-[#00E38C]/20 text-[#00E38C] text-sm mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Trusted by 10,000+ developers
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Build the{' '}
            <span className="bg-gradient-to-r from-[#00E38C] to-[#00B894] bg-clip-text text-transparent">
              Future
            </span>
            <br />
            of Development
          </h1>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            StriveLabs is the all-in-one platform that empowers developers to build, deploy, and scale applications with unprecedented speed and efficiency.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => navigate('/signup')}
              className="bg-[#00E38C] text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#00E38C]/90 transition-all duration-200 shadow-lg hover:shadow-[#00E38C]/25"
            >
              Get Started Free
            </button>
            <button
              onClick={() => navigate('/docs')}
              className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-xl font-bold text-lg hover:border-[#00E38C] hover:text-[#00E38C] transition-all duration-200"
            >
              Watch Demo
            </button>
          </div>

          {/* Floating Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-[#111111]/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-[#00E38C]/50 transition-all duration-300">
              <div className="text-2xl font-bold text-white mb-2">10x</div>
              <div className="text-gray-400 text-sm">Faster Development</div>
            </div>
            <div className="bg-[#111111]/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-[#00E38C]/50 transition-all duration-300">
              <div className="text-2xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime Guarantee</div>
            </div>
            <div className="bg-[#111111]/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-[#00E38C]/50 transition-all duration-300">
              <div className="text-2xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Expert Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Card Grid */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everything You Need to{' '}
              <span className="text-[#00E38C]">Succeed</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Powerful tools and integrations that work together seamlessly to accelerate your development workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                ),
                title: 'Lightning Fast',
                description: 'Build and deploy applications 10x faster with our AI-powered development environment.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                  </svg>
                ),
                title: 'Enterprise Security',
                description: 'Bank-grade security with end-to-end encryption and compliance with industry standards.',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                ),
                title: 'Smart Automation',
                description: 'AI-powered workflows that adapt to your development patterns and optimize productivity.',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ),
                title: 'Unlimited Scale',
                description: 'Scale from prototype to production seamlessly with our auto-scaling infrastructure.',
                color: 'from-orange-500 to-red-500'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                ),
                title: 'Quality Assurance',
                description: 'Automated testing and quality checks ensure your code is production-ready.',
                color: 'from-teal-500 to-cyan-500'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                ),
                title: 'Global CDN',
                description: 'Lightning-fast content delivery with our global network of edge servers.',
                color: 'from-indigo-500 to-purple-500'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-[#1a1a1a] border border-gray-800 rounded-2xl p-8 hover:border-[#00E38C]/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#00E38C] transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section - Horizontal Scroll */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Integrates with{' '}
              <span className="text-[#00E38C]">Everything</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Connect with your favorite tools and services in seconds. No complex setup required.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'Stripe', logo: '💳' },
              { name: 'Supabase', logo: '🗄️' },
              { name: 'Framer', logo: '🎨' },
              { name: 'OpenAI', logo: '🤖' },
              { name: 'Vercel', logo: '▲' },
              { name: 'GitHub', logo: '🐙' },
              { name: 'Discord', logo: '💬' },
              { name: 'Slack', logo: '💼' },
              { name: 'Notion', logo: '📝' },
              { name: 'Figma', logo: '🎨' },
              { name: 'Linear', logo: '📊' },
              { name: 'Zapier', logo: '⚡' }
            ].map((integration, index) => (
              <div
                key={integration.name}
                className="group bg-[#111111] border border-gray-800 rounded-xl p-6 text-center hover:border-[#00E38C]/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
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

      {/* Pricing Section - Modern Cards */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, Transparent{' '}
              <span className="text-[#00E38C]">Pricing</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the plan that fits your needs. Start free and scale as you grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Lunch',
                price: '$0',
                period: 'forever',
                description: 'Perfect for getting started',
                features: ['Public projects', 'Basic support', 'Community access', '5GB storage'],
                popular: false,
                buttonText: 'Get Started',
                buttonStyle: 'border border-gray-600 text-gray-300 hover:border-[#00E38C] hover:text-[#00E38C]'
              },
              {
                name: 'Boost',
                price: '$20',
                period: 'month',
                description: 'For growing teams',
                features: ['Everything in Lunch', 'Private projects', 'Priority support', 'Advanced analytics', '50GB storage'],
                popular: true,
                buttonText: 'Start Free Trial',
                buttonStyle: 'bg-[#00E38C] text-black hover:bg-[#00E38C]/90'
              },
              {
                name: 'Scale',
                price: '$35',
                period: 'month',
                description: 'For enterprise needs',
                features: ['Everything in Boost', 'Custom integrations', 'Dedicated support', 'Advanced security', 'Unlimited storage'],
                popular: false,
                buttonText: 'Contact Sales',
                buttonStyle: 'border border-gray-600 text-gray-300 hover:border-[#00E38C] hover:text-[#00E38C]'
              }
            ].map((plan, index) => (
              <div
                key={plan.name}
                className={`relative ${plan.popular ? 'md:-mt-8' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-[#00E38C] text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className={`bg-[#1a1a1a] border-2 rounded-2xl p-8 h-full transition-all duration-300 hover:border-[#00E38C]/50 ${plan.popular ? 'border-[#00E38C] bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]' : 'border-gray-800'}`}>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
                  </div>
                  
                  <p className="text-gray-400 mb-8">{plan.description}</p>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-[#00E38C] mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => navigate('/pricing')}
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${plan.buttonStyle}`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Full width gradient */}
      <section className="py-24 bg-gradient-to-r from-[#00E38C]/10 via-[#00E38C]/5 to-[#00E38C]/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to{' '}
            <span className="bg-gradient-to-r from-[#00E38C] to-[#00B894] bg-clip-text text-transparent">
              Transform
            </span>
            <br />
            Your Development?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join thousands of developers who are already building the future with StriveLabs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/signup')}
              className="bg-[#00E38C] text-black px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#00E38C]/90 transition-all duration-200 shadow-lg hover:shadow-[#00E38C]/25"
            >
              Start Building Now
            </button>
            <button
              onClick={() => navigate('/docs')}
              className="border-2 border-gray-600 text-gray-300 px-10 py-4 rounded-xl font-bold text-lg hover:border-[#00E38C] hover:text-[#00E38C] transition-all duration-200"
            >
              View Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="bg-[#0a0a0a] border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">StriveLabs</h3>
              <p className="text-gray-400">
                The future of development is here.
              </p>
            </div>
            <div className="flex space-x-8">
              <a href="/docs" className="text-gray-400 hover:text-[#00E38C] transition-colors">Docs</a>
              <a href="/pricing" className="text-gray-400 hover:text-[#00E38C] transition-colors">Pricing</a>
              <a href="/support" className="text-gray-400 hover:text-[#00E38C] transition-colors">Support</a>
              <a href="/blog" className="text-gray-400 hover:text-[#00E38C] transition-colors">Blog</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 StriveLabs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingModern;
