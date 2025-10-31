import React from 'react';
import { motion } from 'framer-motion';
import GlobalNavbar from '../components/GlobalNavbar';
import GlobalFooter from '../components/GlobalFooter';

const NeuralEdge: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <title>NeuralEdge | StriveLabs Product - AI Business Operating System</title>
        <meta name="description" content="NeuralEdge is the most advanced AI Business Operating System ever built. Unify every layer of enterprise operations into a single, intelligent ecosystem." />
        <meta name="keywords" content="AI business OS, enterprise platform, CRM, ERP, HR, automation, AI agents, business intelligence" />
        
        {/* Open Graph */}
        <meta property="og:title" content="NeuralEdge | StriveLabs Product" />
        <meta property="og:description" content="The most advanced AI Business Operating System ever built - unify every layer of enterprise operations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://strivelabs.com/product/neuraledge" />
        <meta property="og:image" content="https://strivelabs.com/og-image-neuraledge.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NeuralEdge | StriveLabs Product" />
        <meta name="twitter:description" content="The most advanced AI Business Operating System ever built." />
        <meta name="twitter:image" content="https://strivelabs.com/og-image-neuraledge.png" />
        
        {/* Additional */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="StriveLabs" />
        <link rel="canonical" href="https://strivelabs.com/product/neuraledge" />
      </head>

      <div className="min-h-screen bg-[#0A0A0A] text-white">
        {/* Global Navbar */}
        <GlobalNavbar />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          {/* Animated Background */}
          <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0e0e0e] to-[#0a0a0a]" />
            <motion.div
              className="absolute -inset-1 opacity-40"
              style={{
                background: 'radial-gradient(800px 800px at 50% 50%, rgba(59, 130, 246, 0.15), transparent 70%)'
              }}
              animate={{
                backgroundPosition: ['50% 50%', '55% 45%', '50% 50%']
              }}
              transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            />
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#3B82F6] rounded-full opacity-40"
                animate={{ 
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1]
                }}
                transition={{ 
                  duration: 5 + (i % 3),
                  repeat: Infinity,
                  delay: i * 0.2
                }}
                style={{ 
                  left: `${(i * 47) % 100}%`,
                  top: `${(i * 61) % 100}%`
                }}
              />
            ))}
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70 backdrop-blur mb-6"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6] animate-pulse"></span>
                AI-Native Enterprise Platform
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                NeuralEdge
              </h1>
              
              <h2 className="text-2xl md:text-4xl font-semibold text-white/80 mb-6">
                The Most Advanced AI Business Operating System Ever Built
              </h2>

              <p className="text-xl text-white/60 max-w-4xl mx-auto leading-relaxed mb-8">
                NeuralEdge is a next-generation platform designed to unify every layer of enterprise operations — from projects and finance to people and AI-driven decision-making — into a single, intelligent ecosystem.
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap justify-center gap-3"
              >
                <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/60">
                  Coming Soon
                </span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="relative z-10 py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Vision</h2>
              <div className="h-px w-24 bg-gradient-to-r from-[#3B82F6] to-transparent mb-6"></div>
              <p className="text-xl text-white/70 leading-relaxed max-w-4xl">
                To create the most complete and AI-native business system ever made, giving companies the power to operate, plan, and scale from one unified hub — powered by real intelligence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What NeuralEdge Does */}
        <section className="relative z-10 py-24 px-6 bg-white/2">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What NeuralEdge Does</h2>
              <div className="h-px w-24 bg-gradient-to-r from-[#3B82F6] to-transparent mb-6"></div>
              <p className="text-xl text-white/70 leading-relaxed max-w-4xl">
                NeuralEdge merges the best features of today's leading enterprise SaaS tools — CRM, ERP, HR, finance, communication, analytics, and automation — and combines them under one AI-driven platform that learns, adapts, and acts.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="relative z-10 py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Core Capabilities</h2>
              <div className="h-px w-24 bg-gradient-to-r from-[#3B82F6] to-transparent mb-12"></div>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              {[
                {
                  title: 'Unified Workspace',
                  description: 'One interface for every team — sales, HR, finance, creative, operations.'
                },
                {
                  title: 'AI Agents',
                  description: 'Autonomous agents that execute tasks, plan workflows, and optimize resources in real time.'
                },
                {
                  title: 'Project & Workflow Automation',
                  description: 'Plan, track, and deliver with predictive scheduling and smart workload balancing.'
                },
                {
                  title: 'CRM & Client Management',
                  description: 'Understand clients, predict needs, and automate follow-ups across all channels.'
                },
                {
                  title: 'Finance & ERP Intelligence',
                  description: 'Real-time expense tracking, billing, invoicing, and forecasting with AI accuracy.'
                },
                {
                  title: 'Human Capital Hub',
                  description: 'Payroll, onboarding, performance tracking, and predictive retention tools.'
                },
                {
                  title: 'Communication Layer',
                  description: 'Integrated chat, video, and document collaboration with AI summarization and insights.'
                },
                {
                  title: 'Data & Analytics',
                  description: 'Live dashboards, KPI forecasting, anomaly detection, and AI-generated business insights.'
                },
                {
                  title: 'Contracts & Legal Ops',
                  description: 'Smart contract generation, clause analysis, and automated approval flows.'
                },
                {
                  title: 'Security & Governance',
                  description: 'Role-based access, full audit trails, and compliance built for enterprise standards.'
                }
              ].map((capability, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group bg-white/5 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#3B82F6] transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {capability.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* AI at the Core */}
        <section className="relative z-10 py-24 px-6 bg-white/2">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">AI at the Core</h2>
              <div className="h-px w-24 bg-gradient-to-r from-[#3B82F6] to-transparent mb-6"></div>
              <p className="text-xl text-white/70 leading-relaxed mb-6">
                Unlike traditional tools that simply add AI features, <span className="font-semibold text-white">NeuralEdge is AI-native</span>.
              </p>
              <p className="text-lg text-white/60 leading-relaxed mb-6">
                Its intelligence powers every action: from creating a marketing plan to approving budgets or forecasting growth.
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                Each department benefits from its own specialized AI agent — all connected through a shared memory and unified data model.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="relative z-10 py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Benefits</h2>
              <div className="h-px w-24 bg-gradient-to-r from-[#3B82F6] to-transparent mb-12"></div>
            </motion.div>

            <motion.ul
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-6 max-w-4xl"
            >
              {[
                'Eliminate tool fragmentation — one hub replaces dozens of disconnected systems.',
                'Cut operational costs through automation and predictive planning.',
                'Gain 360° visibility across the entire organization in real time.',
                'Empower teams with intelligent assistants that act, not just suggest.',
                'Strengthen security, compliance, and scalability for enterprises of any size.',
                'Build custom automations or AI workflows without code.'
              ].map((benefit, idx) => (
                <motion.li
                  key={idx}
                  variants={fadeInUp}
                  className="flex items-start gap-4 text-lg text-white/70"
                >
                  <motion.div
                    className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-[#3B82F6]"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                  />
                  <span className="leading-relaxed">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>

        {/* For Enterprises */}
        <section className="relative z-10 py-24 px-6 bg-white/2">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">For Enterprises</h2>
              <div className="h-px w-24 bg-gradient-to-r from-[#3B82F6] to-transparent mb-6"></div>
              <p className="text-xl text-white/70 leading-relaxed max-w-4xl">
                NeuralEdge integrates seamlessly with existing infrastructure, cloud, and identity systems.
                Its modular architecture adapts to any industry — from media agencies to global finance teams — delivering the same intelligence and stability at scale.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="relative z-10 py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why It Matters</h2>
              <div className="h-px w-24 bg-gradient-to-r from-[#3B82F6] to-transparent mb-6"></div>
              <p className="text-xl text-white/70 leading-relaxed max-w-4xl mb-6">
                For decades, businesses have juggled fragmented tools that never truly communicated.
              </p>
              <p className="text-xl text-white/70 leading-relaxed max-w-4xl">
                NeuralEdge redefines enterprise management by merging all of them into one evolving intelligence — the digital nervous system of modern business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tagline CTA */}
        <section className="relative z-10 py-32 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2
                className="text-4xl md:text-6xl font-bold text-white mb-8"
                animate={{ 
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                style={{
                  background: 'linear-gradient(90deg, #ffffff 0%, #3B82F6 50%, #ffffff 100%)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Operate Smarter. Scale Faster. Think Ahead
              </motion.h2>
              <p className="text-2xl text-white/60">
                — with NeuralEdge
              </p>
            </motion.div>
          </div>
        </section>

        {/* Global Footer */}
        <GlobalFooter />
      </div>
    </>
  );
};

export default NeuralEdge;

