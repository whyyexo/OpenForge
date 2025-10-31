import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { EXTERNAL_LINKS } from '../config/links';
import logo from './icons/Full Vert - Blanc.png';

const WebsiteNavigation: React.FC = () => {
  const { user, profile } = useAuth();
  const navigate = useNavigate();
  const { t, language, setLanguage } = useLanguage();
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [productsTimeout, setProductsTimeout] = useState<NodeJS.Timeout | null>(null);
  const [moreTimeout, setMoreTimeout] = useState<NodeJS.Timeout | null>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);

  // Fermer les dropdowns quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false);
      }
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false);
      }
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    // Sign out logic here
    navigate('/');
  };

  return (
    <nav className="bg-[#181B22]/90 backdrop-blur-sm border-b border-gray-700 px-6 py-3 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between w-full">
        {/* Logo et liens */}
        <div className="flex items-center space-x-6">
          <a 
            onClick={() => navigate('/')}
            className="flex items-center cursor-pointer"
          >
            <img 
              src={logo} 
              alt="StriveLabs Logo" 
              className="h-6 w-auto"
            />
          </a>
          
          {/* Ligne de séparation */}
          <div className="w-px h-6 bg-gray-600 transform rotate-12"></div>

          {/* Menu central */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Products Dropdown */}
            <div className="relative" ref={productsRef}>
              <button
                onMouseEnter={() => {
                  if (productsTimeout) clearTimeout(productsTimeout);
                  setIsProductsOpen(true);
                }}
                onMouseLeave={() => {
                  const timeout = setTimeout(() => setIsProductsOpen(false), 200);
                  setProductsTimeout(timeout);
                }}
                className="flex items-center space-x-1 text-gray-400 hover:text-[#EAEAEA] transition-colors text-sm"
              >
                <span>Products</span>
                <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              {isProductsOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-[#181B22] border border-gray-700 rounded-lg shadow-lg z-50"
                  onMouseEnter={() => {
                    if (productsTimeout) clearTimeout(productsTimeout);
                    setIsProductsOpen(true);
                  }}
                  onMouseLeave={() => {
                    const timeout = setTimeout(() => setIsProductsOpen(false), 200);
                    setProductsTimeout(timeout);
                  }}
                >
                  <div className="py-2">
                    <a 
                      href={EXTERNAL_LINKS.FIVERFLOW_APP} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center px-4 py-2 text-sm text-gray-300 hover:text-[#EAEAEA] transition-colors"
                    >
                      <span>FiverFlow</span>
                      <svg className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              )}
            </div>

          {/* Pricing */}
          <button
            onClick={() => navigate('/pricing')}
            className="text-gray-400 hover:text-[#EAEAEA] transition-colors text-sm"
          >
            Pricing
          </button>

          {/* Docs */}
          <a 
            href={EXTERNAL_LINKS.DOCS} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#EAEAEA] transition-colors text-sm"
          >
            Docs
          </a>

            {/* More Dropdown */}
            <div className="relative" ref={moreRef}>
              <button
                onMouseEnter={() => {
                  if (moreTimeout) clearTimeout(moreTimeout);
                  setIsMoreOpen(true);
                }}
                onMouseLeave={() => {
                  const timeout = setTimeout(() => setIsMoreOpen(false), 200);
                  setMoreTimeout(timeout);
                }}
                className="flex items-center space-x-1 text-gray-400 hover:text-[#EAEA] transition-colors text-sm"
              >
                <span>More</span>
                <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              {isMoreOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-[#181B22] border border-gray-700 rounded-lg shadow-lg z-50"
                  onMouseEnter={() => {
                    if (moreTimeout) clearTimeout(moreTimeout);
                    setIsMoreOpen(true);
                  }}
                  onMouseLeave={() => {
                    const timeout = setTimeout(() => setIsMoreOpen(false), 200);
                    setMoreTimeout(timeout);
                  }}
                >
                  <div className="py-2">
                    <a 
                      href={EXTERNAL_LINKS.COMMUNITY} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center px-4 py-2 text-sm text-gray-300 hover:text-[#EAEAEA] transition-colors"
                    >
                      <span>{t.community}</span>
                      <svg className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a 
                      href={EXTERNAL_LINKS.CAREER} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center px-4 py-2 text-sm text-gray-300 hover:text-[#EAEAEA] transition-colors"
                    >
                      <span>{t.career}</span>
                      <svg className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <div className="border-t border-gray-700 my-1"></div>
                    <a 
                      href={EXTERNAL_LINKS.LEGAL} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center px-4 py-2 text-sm text-gray-300 hover:text-[#EAEAEA] transition-colors"
                    >
                      <span>{t.legal}</span>
                      <svg className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Côté droit */}
        <div className="flex items-center space-x-4">
          {/* Try FiverFlow */}
          <a 
            href={EXTERNAL_LINKS.FIVERFLOW_APP} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#00E38C] hover:text-[#00E38C]/80 transition-colors text-sm"
          >
            Try FiverFlow
          </a>

          {/* Icônes sociales */}
          <div className="flex items-center space-x-3">
            <a 
              href="https://dsc.gg/fiverflow" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#EAEAEA] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
            <a 
              href="https://x.com/fiverflow" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#EAEAEA] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>

          {/* Boutons d'authentification */}
          {user ? (
            <div className="flex items-center space-x-3">
              {/* Bouton Dashboard */}
              <button
                onClick={() => navigate('/dashboard')}
                className="px-4 py-2 bg-[#00E38C] text-black font-medium rounded-lg hover:bg-[#00E38C]/90 transition-colors text-sm"
              >
                Dashboard
              </button>
              
              {/* Profil utilisateur */}
              <div className="relative">
                <button className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-700 transition-colors">
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-gray-200 font-medium text-sm">
                      {profile?.username?.charAt(0).toUpperCase() || user?.email?.charAt(0).toUpperCase() || 'U'}
                    </span>
                  </div>
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <button
                onClick={() => navigate('/login')}
                className="px-4 py-2 bg-[#00E38C] text-black font-medium rounded-lg hover:bg-[#00E38C]/90 transition-colors text-sm"
              >
                Sign in
              </button>
              <button
                onClick={() => navigate('/login')}
                className="px-4 py-2 border border-gray-600 text-[#EAEAEA] font-medium rounded-lg hover:bg-gray-700 transition-colors text-sm"
              >
                Create account
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default WebsiteNavigation;
