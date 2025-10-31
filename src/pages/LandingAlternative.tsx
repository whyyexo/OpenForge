import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingAlternative: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Hero Section - Asymétrique */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00E38C]/5 to-transparent" />
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#00E38C]/10 border border-[#00E38C]/20 text-[#00E38C] text-sm">
                    <span className="w-2 h-2 bg-[#00E38C] rounded-full mr-2"></span>
                    Now Available
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    The Future of{' '}
                    <span className="text-[#00E38C]">Development</span>
                    <br />
                    is Here
                  </h1>
                  <p className="text-lg text-gray-400 max-w-md">
                    StriveLabs revolutionizes how developers build, deploy, and scale applications with cutting-edge AI and automation.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => navigate('/signup')}
                    className="bg-[#00E38C] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#00E38C]/90 transition-all duration-200"
                  >
                    Start Building
                  </button>
                  <button
                    onClick={() => navigate('/docs')}
                    className="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:border-[#00E38C] hover:text-[#00E38C] transition-all duration-200"
                  >
                    View Documentation
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div>
                    <div className="text-2xl font-bold text-white">10K+</div>
                    <div className="text-sm text-gray-400">Active Users</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">99.9%</div>
                    <div className="text-sm text-gray-400">Uptime</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-sm text-gray-400">Support</div>
                  </div>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative">
                <div className="relative w-full h-96 bg-gradient-to-br from-[#00E38C]/10 to-[#00E38C]/5 rounded-2xl border border-[#00E38C]/20">
                  {/* Floating Elements */}
                  <div className="absolute top-8 left-8 w-16 h-16 bg-[#00E38C]/20 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#00E38C]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div className="absolute top-16 right-12 w-12 h-12 bg-[#00E38C]/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#00E38C]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div className="absolute bottom-8 left-12 w-20 h-20 bg-[#00E38C]/20 rounded-lg flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#00E38C]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div className="absolute bottom-12 right-8 w-14 h-14 bg-[#00E38C]/20 rounded-full flex items-center justify-center">
                    <svg className="w-7 h-7 text-[#00E38C]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Grid asymétrique */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose StriveLabs?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Built for developers, by developers. Experience the next generation of development tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 - Large */}
            <div className="lg:col-span-2 bg-gradient-to-br from-[#00E38C]/10 to-[#00E38C]/5 rounded-2xl p-8 border border-[#00E38C]/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#00E38C]/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#00E38C]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Lightning Fast Development</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Build and deploy applications 10x faster with our AI-powered development environment. 
                Automated code generation, intelligent debugging, and seamless deployment.
              </p>
              <div className="flex items-center text-[#00E38C] text-sm font-medium">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800">
              <div className="w-10 h-10 bg-[#00E38C]/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#00E38C]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Enterprise Security</h3>
              <p className="text-gray-400 text-sm">
                Bank-grade security with end-to-end encryption and compliance with industry standards.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800">
              <div className="w-10 h-10 bg-[#00E38C]/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#00E38C]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Smart Automation</h3>
              <p className="text-gray-400 text-sm">
                AI-powered workflows that adapt to your development patterns and optimize your productivity.
              </p>
            </div>

            {/* Feature 4 - Large */}
            <div className="lg:col-span-2 bg-gradient-to-br from-[#00E38C]/5 to-transparent rounded-2xl p-8 border border-gray-800">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#00E38C]/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#00E38C]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Unlimited Scalability</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Scale from prototype to production seamlessly. Our infrastructure automatically adapts to your needs, 
                ensuring optimal performance at any scale.
              </p>
              <div className="flex items-center text-[#00E38C] text-sm font-medium">
                Explore Scaling
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section - Timeline style */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Seamless Integrations
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Connect with your favorite tools and services in seconds
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#00E38C] to-transparent"></div>

            <div className="space-y-12">
              {[
                {
                  name: 'Stripe',
                  description: 'Accept payments seamlessly',
                  icon: (
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.274 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.35-2.354 1.35-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/>
                    </svg>
                  )
                },
                {
                  name: 'Supabase',
                  description: 'Real-time database and auth',
                  icon: (
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12v8.959a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.66z"/>
                    </svg>
                  )
                },
                {
                  name: 'OpenAI',
                  description: 'AI-powered development',
                  icon: (
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.281 9.28l-7.19 3.2A4 4 0 0016 12a4 4 0 00-4-4 4 4 0 00-4 4 4 4 0 004 4 4 4 0 001.09-.11l7.19 3.2a1 1 0 001.3-1.3l-3.2-7.19a1 1 0 00-1.3-1.3l-7.19 3.2a1 1 0 00-1.3 1.3l3.2 7.19a1 1 0 001.3 1.3l7.19-3.2a1 1 0 001.3-1.3l-3.2-7.19z"/>
                    </svg>
                  )
                }
              ].map((integration, index) => (
                <div key={integration.name} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-[#111111] rounded-xl p-6 border border-gray-800">
                      <h3 className="text-lg font-bold mb-2">{integration.name}</h3>
                      <p className="text-gray-400 text-sm">{integration.description}</p>
                    </div>
                  </div>
                  
                  <div className="w-16 h-16 bg-[#00E38C]/20 rounded-full flex items-center justify-center border-4 border-[#0a0a0a] relative z-10">
                    <div className="text-[#00E38C]">
                      {integration.icon}
                    </div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Cards asymétriques */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Plan
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Start free and scale as you grow. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Lunch',
                price: '$0',
                period: 'forever',
                description: 'Perfect for getting started',
                features: ['Public projects', 'Basic support', 'Community access'],
                popular: false,
                color: 'border-gray-800'
              },
              {
                name: 'Boost',
                price: '$20',
                period: 'month',
                description: 'For growing teams',
                features: ['Everything in Lunch', 'Private projects', 'Priority support', 'Advanced analytics'],
                popular: true,
                color: 'border-[#00E38C]'
              },
              {
                name: 'Scale',
                price: '$35',
                period: 'month',
                description: 'For enterprise needs',
                features: ['Everything in Boost', 'Custom integrations', 'Dedicated support', 'Advanced security'],
                popular: false,
                color: 'border-gray-800'
              }
            ].map((plan, index) => (
              <div key={plan.name} className={`relative ${plan.popular ? 'md:-mt-8' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-[#00E38C] text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className={`bg-[#1a1a1a] border-2 rounded-2xl p-8 h-full transition-all duration-200 hover:border-[#00E38C]/50 ${plan.color} ${plan.popular ? 'bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]' : ''}`}>
                  <h3 className="text-2xl font-bold text-white mb-2">
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
                        <svg className="w-5 h-5 text-[#00E38C] mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => navigate('/pricing')}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-[#00E38C] text-black hover:bg-[#00E38C]/90'
                        : 'border border-gray-600 text-gray-300 hover:border-[#00E38C] hover:text-[#00E38C]'
                    }`}
                  >
                    {plan.name === 'Lunch' ? 'Get Started' : 'Upgrade Now'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Full width */}
      <section className="py-24 bg-gradient-to-r from-[#00E38C]/10 to-[#00E38C]/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are already building the next generation of applications with StriveLabs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/signup')}
              className="bg-[#00E38C] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#00E38C]/90 transition-all duration-200"
            >
              Start Building Now
            </button>
            <button
              onClick={() => navigate('/docs')}
              className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-bold text-lg hover:border-[#00E38C] hover:text-[#00E38C] transition-all duration-200"
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
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-white mb-2">StriveLabs</h3>
              <p className="text-gray-400 text-sm">
                The future of development is here.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="/docs" className="text-gray-400 hover:text-[#00E38C] transition-colors">Docs</a>
              <a href="/pricing" className="text-gray-400 hover:text-[#00E38C] transition-colors">Pricing</a>
              <a href="/support" className="text-gray-400 hover:text-[#00E38C] transition-colors">Support</a>
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

export default LandingAlternative;
