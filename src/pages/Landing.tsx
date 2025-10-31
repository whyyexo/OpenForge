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
          <a href="#capabilities" className="px-3 py-1.5 text-sm text-white/80 hover:text-white transition-colors">Capabilities</a>
          <span className="h-4 w-px bg-white/10" />
          <a href="#work" className="px-3 py-1.5 text-sm text-white/80 hover:text-white transition-colors">Work</a>
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
              We craft AI‑first web apps
              <span className="text-white/50"> — built for what’s next.</span>
            </h1>

            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Intentional UX, realtime interactivity and production‑ready AI. We partner with teams to ship modern, resilient software that feels effortless.
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
                href="#work"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium rounded-sm hover:bg-white/90 transition-all duration-200 transform hover:scale-[1.02]"
              >
                View our work
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-medium rounded-sm hover:border-white/40 hover:bg-white/5 transition-all duration-200"
              >
                Contact us
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
              { value: '50+', label: 'Projects Delivered' },
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '24/7', label: 'Support' },
              { value: '5+', label: 'Years Experience' }
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

      {/* Services Section */}
      <section id="capabilities" className="relative z-10 py-24 px-6 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Services
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              AI‑native capabilities to elevate your product.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 7l5 5L5 17m7-10h7M12 12h7m-7 5h7" />
                  </svg>
                ),
                title: 'LLM Agents & Orchestration',
                description: 'Autonomous agents, tool use, evals and safe guardrails for production.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.4 15A7.5 7.5 0 116.6 9" />
                  </svg>
                ),
                title: 'Realtime & Streaming UX',
                description: 'Latency‑aware interfaces, progressive streaming and optimistic updates.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h18l-2 12H5L3 3zM7 21h10" />
                  </svg>
                ),
                title: 'Data & Integrations',
                description: 'RAG, vector DBs, Stripe subscriptions, analytics and partner APIs.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-white/20 transition-all duration-300 h-full">
                  <div className="space-y-6">
                    <div className="text-white/40 group-hover:text-white/60 transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-white">
                        {feature.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
      <section id="work" className="relative z-10 py-24 px-6 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Selected Work</h2>
            <p className="text-lg text-white/60 max-w-xl mx-auto">A selection of projects designed and built by our studio.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: 'FiverFlow', d: 'Automation platform for freelancers — AI & workflows.', h: EXTERNAL_LINKS.FIVERFLOW },
              { t: 'Finance Dashboard', d: 'Custom admin, real‑time analytics, API integrations.', h: '#' },
              { t: 'Marketing Sites', d: 'Ultra‑fast showcases, SEO, animations and branded assets.', h: '#' }
            ].map((w, i) => (
              <motion.a
                key={w.t}
                href={w.h}
                target={w.h.startsWith('http') ? '_blank' : undefined}
                rel={w.h.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="block group"
              >
                <div className="aspect-video rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-white/0 group-hover:border-white/20 transition-colors" />
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-white">{w.t}</h3>
                  <p className="text-white/60 text-sm mt-1">{w.d}</p>
                </div>
              </motion.a>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Principles</h2>
            <p className="text-lg text-white/60 max-w-xl mx-auto">Clarity over complexity. Speed without compromise. AI where it matters.</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Define Impact', text: 'Pinpoint outcomes, success metrics and constraints.' },
              { step: '02', title: 'Design for Flow', text: 'UI/UX that reduces friction and elevates intent.' },
              { step: '03', title: 'Ship Fast', text: 'Iterate in weeks, not months. Test, measure, refine.' },
              { step: '04', title: 'AI‑native', text: 'Agents, context and signals embedded where they help.' }
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

      {/* Benefits Section */}
      <section className="relative z-10 py-24 px-6 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Us</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              We combine technical excellence with design thinking to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Rapid Development',
                description: 'Ship features in weeks, not months. Our agile process ensures fast iteration and delivery.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: 'Scalable Architecture',
                description: 'Built to grow with your business. Our solutions handle millions of users without breaking a sweat.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              },
              {
                title: 'Security First',
                description: 'Enterprise-grade security with encryption, authentication, and compliance built-in from day one.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                )
              },
              {
                title: '24/7 Support',
                description: 'Round-the-clock assistance. We\'re here when you need us, ensuring your app stays online and optimized.',
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
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: 'Incredibly professional team, flawless results.', author: 'Amelia, COO' },
              { quote: 'Beautiful design and ultra‑smooth app.', author: 'Lucas, Founder' },
              { quote: 'Delivered on time, beyond expectations.', author: 'Maya, PM' }
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
              Everything you need to know about working with us.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary based on scope and complexity. Most MVP projects take 4-8 weeks, while full-featured applications typically require 8-16 weeks. We provide detailed timelines during our initial consultation.'
              },
              {
                question: 'What technologies do you specialize in?',
                answer: 'We specialize in modern web technologies including React, TypeScript, Node.js, Supabase, and AI integrations. Our stack is optimized for performance, scalability, and developer experience.'
              },
              {
                question: 'Do you provide ongoing support?',
                answer: 'Yes, we offer comprehensive support packages including maintenance, updates, monitoring, and 24/7 assistance. Support can be tailored to your specific needs and budget.'
              },
              {
                question: 'Can you work with our existing team?',
                answer: 'Absolutely. We are experienced in collaborating with in-house teams, providing technical leadership, code reviews, and knowledge transfer to ensure seamless integration.'
              },
              {
                question: 'What is your pricing model?',
                answer: 'We offer flexible pricing models including fixed-price projects, time-based billing, and retainer agreements. Contact us for a custom quote tailored to your project requirements.'
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
            <h2 className="text-4xl md:text-6xl font-bold text-white">Build with an AI‑native team.</h2>

            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">Let’s turn your product vision into a fast, intelligent experience.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/contact')}
                className="group inline-flex items-center justify-center px-10 py-4 bg-white text-black font-medium rounded-sm hover:bg-white/90 transition-all duration-200 transform hover:scale-[1.02]"
              >
                Start my project
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
              
              <button
                onClick={() => navigate('/team')}
                className="inline-flex items-center justify-center px-10 py-4 border border-white/20 text-white font-medium rounded-sm hover:border-white/40 hover:bg-white/5 transition-all duration-200"
              >
                Learn more
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Landing;