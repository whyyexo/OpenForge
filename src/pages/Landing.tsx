import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { EXTERNAL_LINKS } from '../config/links';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen text-white">
      {/* Global animated dark background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0e0e0e] to-[#0a0a0a]" />

        {/* Slow moving radial spotlight */}
        <motion.div
          className="absolute -inset-1 opacity-40"
          style={{
            background:
              'radial-gradient(600px 600px at 20% 30%, rgba(59, 130, 246, 0.12), transparent 60%), radial-gradient(600px 600px at 80% 70%, rgba(59, 130, 246, 0.08), transparent 60%)'
          }}
          animate={{
            backgroundPosition: [
              '20% 30%, 80% 70%',
              '25% 35%, 75% 65%',
              '20% 30%, 80% 70%'
            ]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Subtle animated particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 24 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#3B82F6] rounded-full opacity-50"
              animate={{ y: [0, -20, 0], opacity: [0.3, 0.9, 0.3] }}
              transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.12 }}
              style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%`, boxShadow: '0 0 12px rgba(59,130,246,0.45)' }}
            />
          ))}
        </div>
      </div>

      {/* Floating Menu */}
      <div className="fixed bottom-6 inset-x-0 z-40 flex justify-center px-4">
        <nav className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-md px-3 py-2 shadow-lg">
          <a href="#top" className="px-3 py-1.5 text-sm text-white/80 hover:text-white transition-colors">Home</a>
          <span className="h-4 w-px bg-white/10" />
          <a href="#products" className="px-3 py-1.5 text-sm text-white/80 hover:text-white transition-colors">Products</a>
          <span className="h-4 w-px bg-white/10" />
          <a href="#features" className="px-3 py-1.5 text-sm text-white/80 hover:text-white transition-colors">Features</a>
          <span className="h-4 w-px bg-white/10" />
          <a href="#faq" className="px-3 py-1.5 text-sm text-white/80 hover:text-white transition-colors">FAQ</a>
          <span className="h-4 w-px bg-white/10" />
          <button
            onClick={() => navigate('/contact')}
            className="px-3 py-1.5 text-sm text-white/80 hover:text-white transition-colors"
          >
            Contact
          </button>
        </nav>
      </div>
      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/2 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/1 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]"></span>
                AI‑first, design‑driven, performance‑obsessed
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
              We build the AI Software of Tomorrow
            </h1>

            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Intentional UX, realtime interactivity and production‑ready AI. We build powerful software products that transform how teams work and scale.
            </p>

            <div className="flex flex-wrap justify-center gap-3 text-xs text-white/60">
              <div className="rounded-full border border-white/10 px-3 py-1 bg-white/5">LLM agents & tools</div>
              <div className="rounded-full border border-white/10 px-3 py-1 bg-white/5">Streaming UX</div>
              <div className="rounded-full border border-white/10 px-3 py-1 bg-white/5">Vector & RAG</div>
              <div className="rounded-full border border-white/10 px-3 py-1 bg-white/5">Stripe & subscriptions</div>
              <div className="rounded-full border border-white/10 px-3 py-1 bg-white/5">Supabase</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#products"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium rounded-sm hover:bg-white/90 transition-all duration-200 transform hover:scale-[1.02]"
              >
                Explore Products
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              
              <button
                onClick={() => navigate('/pricing')}
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-medium rounded-sm hover:border-white/40 hover:bg-white/5 transition-all duration-200"
              >
                View Pricing
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-16 px-6 bg-transparent border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {[
              { value: '10K+', label: 'Active Users' },
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '24/7', label: 'Support' },
              { value: '2+', label: 'Products Live' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative z-10 py-24 px-6 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Built with Modern Stack</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              We leverage cutting-edge technologies to build fast, scalable, and secure applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', icon: '⚛️' },
              { name: 'TypeScript', icon: '📘' },
              { name: 'Supabase', icon: '🔷' },
              { name: 'Stripe', icon: '💳' },
              { name: 'Vercel', icon: '▲' },
              { name: 'OpenAI', icon: '🤖' },
              { name: 'Tailwind', icon: '🎨' },
              { name: 'Framer', icon: '✨' },
              { name: 'GitHub', icon: '🐙' },
              { name: 'Postgres', icon: '🐘' },
              { name: 'Redis', icon: '🔴' },
              { name: 'Docker', icon: '🐳' }
            ].map((tech, idx) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center hover:border-white/20 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <div className="text-sm text-white/80 font-medium">{tech.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section id="products" className="relative z-10 py-24 px-6 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Products</h2>
            <p className="text-lg text-white/60 max-w-xl mx-auto">Built with AI at the core, designed for the future of work.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                t: 'FiverFlow', 
                d: 'Automation platform for freelancers — AI & workflows.', 
                h: EXTERNAL_LINKS.FIVERFLOW, 
                comingSoon: false,
                preview: (
                  <div className="h-full bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent rounded-lg p-4 backdrop-blur-sm border border-white/10">
                    <div className="bg-black/60 rounded-lg p-4 space-y-3 h-full">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                        </div>
                        <span className="text-xs text-white/40 ml-2">preview</span>
                      </div>
                      <div className="space-y-2.5">
                        <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3 border border-white/10">
                          <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                            <div className="w-6 h-6 rounded-full bg-blue-500/40"></div>
                          </div>
                          <div className="flex-1">
                            <div className="text-xs font-semibold text-white">Active Tasks</div>
                            <div className="text-[10px] text-white/50">12 in progress</div>
                          </div>
                          <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3 border border-white/10">
                          <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                            <div className="w-6 h-6 rounded-full bg-purple-500/40"></div>
                          </div>
                          <div className="flex-1">
                            <div className="text-xs font-semibold text-white">Client Management</div>
                            <div className="text-[10px] text-white/50">45 clients</div>
                          </div>
                          <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3 border border-white/10">
                          <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center">
                            <div className="w-6 h-6 rounded-full bg-teal-500/40"></div>
                          </div>
                          <div className="flex-1">
                            <div className="text-xs font-semibold text-white">Revenue This Month</div>
                            <div className="text-[10px] text-white/50">$12,450</div>
                          </div>
                          <div className="flex items-center gap-1">
                            <svg className="w-3 h-3 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                            <span className="text-[10px] text-teal-400 font-semibold">32%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              },
              { 
                t: 'NeuralEdge', 
                d: 'The most advanced AI Business Operating System ever built.', 
                h: '/product/neuraledge', 
                comingSoon: true 
              },
              { 
                t: 'More Products', 
                d: 'We\'re building the next generation of AI-powered tools. Stay tuned.', 
                h: '#', 
                comingSoon: false 
              }
            ].map((w, i) => (
              <motion.div
                key={w.t}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="block group"
              >
                <a
                  href={w.h}
                  onClick={(e) => {
                    e.preventDefault();
                    if (w.h !== '#') {
                      navigate(w.h);
                    }
                  }}
                  className="block cursor-pointer"
                >
                  <div className="aspect-video rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-white/0 group-hover:border-white/20 transition-colors relative overflow-hidden">
                    {w.preview ? (
                      <div className="absolute inset-0 p-1">
                        {w.preview}
                      </div>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-white/5 to-white/0"></div>
                    )}
                    {w.comingSoon && (
                      <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-white/10 border border-white/20 backdrop-blur-sm z-10">
                        <span className="text-xs text-white/60 font-medium">Coming Soon</span>
                      </div>
                    )}
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-white">{w.t}</h3>
                      {w.comingSoon && (
                        <span className="text-xs text-white/40 font-medium">Coming Soon</span>
                      )}
                    </div>
                    <p className="text-white/60 text-sm mt-1">{w.d}</p>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative z-10 py-24 px-6 bg-transparent">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How We Build</h2>
            <p className="text-lg text-white/60 max-w-xl mx-auto">Our approach to creating products that matter — fast, intelligent, and built to last.</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'User First', text: 'Start with real problems. Build solutions that users actually need and love.' },
              { step: '02', title: 'AI Native', text: 'Intelligence built-in from day one. Not an add-on, but the foundation.' },
              { step: '03', title: 'Ship & Iterate', text: 'Launch fast, learn faster. Continuous improvement driven by user feedback.' },
              { step: '04', title: 'Scale Smart', text: 'Built to grow. Architecture that scales with your success.' }
            ].map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="bg-white/5 border border-white/10 rounded-lg p-6"
              >
                <div className="text-white/40 text-sm">{p.step}</div>
                <div className="text-white text-lg font-semibold mt-1">{p.title}</div>
                <div className="text-white/60 text-sm mt-2">{p.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-24 px-6 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Everything you need to work smarter, not harder. Built into every product.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'AI-Powered Automation',
                description: 'Let AI handle repetitive tasks. Our products learn from your workflow and automate intelligently.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              },
              {
                title: 'Real-time Collaboration',
                description: 'Work together seamlessly. Share updates, collaborate on projects, and stay in sync across teams.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              {
                title: 'Enterprise Security',
                description: 'Your data is protected with bank-level encryption, compliance, and continuous monitoring.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                )
              },
              {
                title: 'Always Available',
                description: '99.9% uptime with 24/7 monitoring. Your workflows never stop, your data never sleeps.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )
              }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-white/20 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 text-white/40 group-hover:text-white/60 transition-colors duration-300">
                      {benefit.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                      <p className="text-white/60 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 py-24 px-6 bg-transparent">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Users Say</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: 'FiverFlow transformed how I manage clients. The AI automation is incredible.', author: 'Sarah, Freelancer' },
              { quote: 'Finally, a platform that understands what I need. The workflow automation is game-changing.', author: 'Mike, Designer' },
              { quote: 'Best investment I\'ve made for my business. The time saved is remarkable.', author: 'Emma, Consultant' }
            ].map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="bg-white/5 border border-white/10 rounded-lg p-6"
              >
                <div className="text-white/80">“{t.quote}”</div>
                <div className="text-white/40 text-sm mt-3">{t.author}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative z-10 py-24 px-6 bg-transparent">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-white/60 max-w-xl mx-auto">
              Everything you need to know about our products.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: 'How do I get started?',
                answer: 'Simply sign up for an account. Most products offer a free tier to get you started. You can upgrade to a paid plan anytime to unlock advanced features and higher usage limits.'
              },
              {
                question: 'What makes your products different?',
                answer: 'All our products are AI-native from the ground up. We don\'t add AI as an afterthought — intelligence is built into every feature, making our tools more powerful and intuitive than traditional alternatives.'
              },
              {
                question: 'Do you offer support?',
                answer: 'Yes, we provide 24/7 customer support for all users. Premium plans include priority support with faster response times and dedicated account assistance.'
              },
              {
                question: 'Can I integrate with my existing tools?',
                answer: 'Absolutely. Our products offer extensive integrations with popular tools and services. We provide APIs and webhooks for custom integrations as well.'
              },
              {
                question: 'What is your pricing model?',
                answer: 'We offer transparent, usage-based pricing with multiple tiers. Visit our pricing page to see detailed plans for each product. Most products include a free tier to get you started.'
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-white/60 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 px-6 bg-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white">Ready to Transform Your Workflow?</h2>

            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">Join thousands of users who are already working smarter with our AI-powered products.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/pricing')}
                className="group inline-flex items-center justify-center px-10 py-4 bg-white text-black font-medium rounded-sm hover:bg-white/90 transition-all duration-200 transform hover:scale-[1.02]"
              >
                Get Started Free
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
              
              <a
                href="#products"
                className="inline-flex items-center justify-center px-10 py-4 border border-white/20 text-white font-medium rounded-sm hover:border-white/40 hover:bg-white/5 transition-all duration-200"
              >
                Explore Products
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Landing;