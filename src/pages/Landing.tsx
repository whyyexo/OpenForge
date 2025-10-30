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
              'radial-gradient(600px 600px at 20% 30%, rgba(0, 227, 140, 0.12), transparent 60%), radial-gradient(600px 600px at 80% 70%, rgba(0, 227, 140, 0.08), transparent 60%)'
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
              className="absolute w-2 h-2 bg-[#00E38C] rounded-full opacity-50"
              animate={{ y: [0, -20, 0], opacity: [0.3, 0.9, 0.3] }}
              transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.12 }}
              style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%`, boxShadow: '0 0 12px rgba(0,227,140,0.45)' }}
            />
          ))}
        </div>
      </div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/2 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/1 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
              Studio de création d'applications web
            </h1>

            <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              Nous concevons et développons des expériences digitales élégantes et performantes. De l'idée au produit, sur mesure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#work"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium rounded-sm hover:bg-white/90 transition-all duration-200 transform hover:scale-[1.02]"
              >
                Voir nos projets
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-medium rounded-sm hover:border-white/40 hover:bg-white/5 transition-all duration-200"
              >
                Nous contacter
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Everything you need to build, deploy, and scale your applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Unified Accounts',
                description: 'One account across all OpenForge products. Seamless integration between FiverFlow and OpenForge platforms.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: 'Smart Automation',
                description: 'AI tools and integrations that save time. Automated workflows and intelligent suggestions.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: 'Secure & Scalable',
                description: 'Built on Supabase & Stripe for reliability. Enterprise-grade security with infinite scalability.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
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

      {/* Réalisations */}
      <section id="work" className="py-24 px-6 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Réalisations</h2>
            <p className="text-lg text-white/60 max-w-xl mx-auto">Une sélection de projets conçus et développés par notre studio.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: 'FiverFlow', d: "Plateforme d'automatisation pour freelances — IA & workflows.", h: EXTERNAL_LINKS.FIVERFLOW },
              { t: 'Dashboard Finance', d: 'Admin sur mesure, analytics temps réel, intégrations API.', h: '#' },
              { t: 'Sites Marketing', d: 'Vitrines ultra‑rapides, SEO, animations et assets brandés.', h: '#' }
            ].map((w, i) => (
              <motion.a
                key={w.t}
                href={w.h}
                target={w.h.startsWith('http') ? '_blank' : undefined}
                rel={w.h.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
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
      <section className="py-24 px-6 bg-transparent">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Notre méthode</h2>
            <p className="text-lg text-white/60 max-w-xl mx-auto">Un processus clair, collaboratif et orienté impact.</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Découverte', text: "Objectifs, contraintes, audience et KPI." },
              { step: '02', title: 'Design', text: "Wireframes, UI/UX, prototypage et validations." },
              { step: '03', title: 'Build', text: "Développement, intégrations et qualité." },
              { step: '04', title: 'Lancement', text: "Mise en production, suivi et amélioration." }
            ].map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                viewport={{ once: true }}
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

      {/* Testimonials */}
      <section className="py-24 px-6 bg-transparent">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "Une équipe incroyablement pro, résultat impeccable.", author: 'Amélie, COO' },
              { quote: "Design magnifique et app ultra‑fluide.", author: 'Lucas, Founder' },
              { quote: "Livré à temps, au‑delà des attentes.", author: 'Maya, PM' }
            ].map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-lg p-6"
              >
                <div className="text-white/80">“{t.quote}”</div>
                <div className="text-white/40 text-sm mt-3">{t.author}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white">Un projet en tête ? Parlons‑en.</h2>

            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">Contactez‑nous pour transformer votre idée en une application remarquable.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/contact')}
                className="group inline-flex items-center justify-center px-10 py-4 bg-white text-black font-medium rounded-sm hover:bg-white/90 transition-all duration-200 transform hover:scale-[1.02]"
              >
                Démarrer mon projet
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
              
              <button
                onClick={() => navigate('/team')}
                className="inline-flex items-center justify-center px-10 py-4 border border-white/20 text-white font-medium rounded-sm hover:border-white/40 hover:bg-white/5 transition-all duration-200"
              >
                En savoir plus
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Landing;