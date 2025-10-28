import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-sm border-b border-white/4' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/10 rounded-sm flex items-center justify-center">
                <div className="w-5 h-5 bg-white/60 rounded-sm"></div>
              </div>
              <span className="text-white font-medium text-lg">OpenForge</span>
            </div>
            
            {/* Vertical separator */}
            <div className="w-px h-6 bg-white/6"></div>
            
            {/* Menu items */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm font-medium">
                Docs
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm font-medium">
                Pricing
              </a>
              
              {/* More dropdown */}
              <div className="relative" ref={moreRef}>
                <button
                  onClick={() => setIsMoreOpen(!isMoreOpen)}
                  className="flex items-center space-x-1 text-white/60 hover:text-white transition-colors duration-200 text-sm font-medium"
                >
                  <span>More</span>
                  <motion.svg
                    animate={{ rotate: isMoreOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {isMoreOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-sm border border-white/10 rounded-lg py-2"
                    >
                      <a href="#" className="block px-4 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors duration-200">
                        Community
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors duration-200">
                        Careers
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors duration-200">
                        Legal
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right: Social icons and buttons */}
          <div className="flex items-center space-x-4">
            {/* Social icons */}
            <div className="hidden md:flex items-center space-x-3">
              <a href="#" className="text-white/40 hover:text-white transition-colors duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>

            {/* Buttons */}
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors duration-200">
                Sign in
              </button>
              <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-sm transition-colors duration-200">
                Create a project
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
