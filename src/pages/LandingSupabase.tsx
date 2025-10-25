import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingSupabase: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section - Animated background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]" />
          
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2300E38C%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse" />
          </div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-[#00E38C] rounded-full opacity-30 animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00E38C]/10 border border-[#00E38C]/20 text-[#00E38C] text-sm mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Trusted by 10,000+ developers
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            Build the{' '}
            <span className="bg-gradient-to-r from-[#00E38C] to-[#00B894] bg-clip-text text-transparent">
              Future
            </span>
            <br />
            of Development
          </h1>

          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            OpenForge is the all-in-one platform that empowers developers to build, deploy, and scale applications with unprecedented speed and efficiency.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => navigate('/docs')}
              className="bg-[#00E38C] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#00E38C]/90 transition-all duration-200 shadow-lg hover:shadow-[#00E38C]/25"
            >
              Explore Tools
            </button>
            <button
              onClick={() => navigate('/dashboard/sign-in')}
              className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200"
            >
              Sign In
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

      {/* Features Section - Left aligned */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-left">
              Everything You Need to{' '}
              <span className="text-[#00E38C]">Succeed</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl text-left">
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

      {/* Integrations Section - Left aligned */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-left">
              Integrates with{' '}
              <span className="text-[#00E38C]">Everything</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl text-left">
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

      {/* Stats Section - Remplace Pricing */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by{' '}
              <span className="text-[#00E38C]">Developers</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join thousands of developers who are already building the future with OpenForge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#00E38C] mb-4">10K+</div>
              <div className="text-xl text-white mb-2">Active Users</div>
              <div className="text-gray-400">Building amazing applications</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#00E38C] mb-4">99.9%</div>
              <div className="text-xl text-white mb-2">Uptime</div>
              <div className="text-gray-400">Reliable infrastructure</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#00E38C] mb-4">24/7</div>
              <div className="text-xl text-white mb-2">Support</div>
              <div className="text-gray-400">Expert help when you need it</div>
            </div>
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
            Join thousands of developers who are already building the future with OpenForge.
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
              className="border-2 border-gray-600 text-gray-300 px-10 py-4 rounded-xl font-bold text-lg hover:border-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200"
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
              <h3 className="text-2xl font-bold text-white mb-2">OpenForge</h3>
              <p className="text-gray-400">
                The future of development is here.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="/docs" className="text-gray-400 hover:text-[#00E38C] transition-colors">Docs</a>
              <a href="/pricing" className="text-gray-400 hover:text-[#00E38C] transition-colors">Pricing</a>
              <a href="/support" className="text-gray-400 hover:text-[#00E38C] transition-colors">Support</a>
              <a href="/blog" className="text-gray-400 hover:text-[#00E38C] transition-colors">Blog</a>
            </div>
          </div>
          
          {/* Social Icons */}
          <div className="flex justify-center space-x-4 mt-8">
            {[
              { name: 'Discord', href: 'https://discord.gg/openforge', icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              )},
              { name: 'GitHub', href: 'https://github.com/openforge', icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              )},
              { name: 'Twitter', href: 'https://twitter.com/openforge', icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              )}
            ].map((social, index) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 OpenForge. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingSupabase;
