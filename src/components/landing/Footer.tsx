import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const footerLinks = {
    Product: [
      { name: 'Features', href: '/features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Documentation', href: '/docs' },
      { name: 'API', href: '/api' }
    ],
    Company: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' }
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'GDPR', href: '/gdpr' }
    ],
    Community: [
      { name: 'Discord', href: 'https://discord.gg/strivelabs' },
      { name: 'GitHub', href: 'https://github.com/strivelabs' },
      { name: 'Twitter', href: 'https://twitter.com/strivelabs' },
      { name: 'Support', href: '/support' }
    ]
  };

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'es', name: 'Español' },
    { code: 'de', name: 'Deutsch' }
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <h3 className="text-2xl font-bold text-white mb-4">StriveLabs</h3>
              <p className="text-gray-400 leading-relaxed">
                Empowering creators and developers to build next-generation platforms with cutting-edge tools and seamless integrations.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex space-x-4"
            >
              {[
                { name: 'Discord', href: 'https://discord.gg/strivelabs', icon: '💬' },
                { name: 'GitHub', href: 'https://github.com/strivelabs', icon: '🐙' },
                { name: 'Twitter', href: 'https://twitter.com/strivelabs', icon: '🐦' }
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[#00E38C] hover:text-black transition-all duration-300"
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + categoryIndex * 0.1 }}
            >
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + linkIndex * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#00E38C] transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 StriveLabs. All rights reserved.
            </div>

            {/* Language Switcher */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Language:</span>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'en' | 'fr' | 'es' | 'de')}
                className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-1 text-sm text-white focus:border-[#00E38C] focus:outline-none"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
