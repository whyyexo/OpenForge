import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { EXTERNAL_LINKS } from '../config/links';
import { supabase } from '../lib/supabase';
import logo from './icons/Full Vert - Blanc.png';

const PublicNavigation: React.FC = () => {
  const navigate = useNavigate();
  const { t, language, setLanguage } = useLanguage();
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const productsRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  // Vérifier l'état d'authentification
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        setUser(session?.user || null);
      } catch (error) {
        console.error('Error checking auth:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();

    // Écouter les changements d'authentification
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

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
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  if (loading) {
    return (
      <nav className="bg-[#181B22]/90 backdrop-blur-sm border-b border-gray-700 px-6 py-3 fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-6">
            <img src={logo} alt="StriveLabs Logo" className="h-6 w-auto" />
          </div>
          <div className="text-gray-400">Loading...</div>
        </div>
      </nav>
    );
  }

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
          <div className="w-px h-6 bg-gray-600 transform rotate-12 mx-2"></div>

          {/* Menu central */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Products Dropdown */}
            <div className="relative" ref={productsRef}>
              <button
                onMouseEnter={() => {
                  setIsProductsOpen(true);
                }}
                onMouseLeave={() => {
                  setTimeout(() => setIsProductsOpen(false), 500);
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
                    setIsProductsOpen(true);
                  }}
                  onMouseLeave={() => {
                    setTimeout(() => setIsProductsOpen(false), 500);
                  }}
                >
                  <div className="py-2">
                    <a
                      href={EXTERNAL_LINKS.FIVERFLOW}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsProductsOpen(false)}
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
                  setIsMoreOpen(true);
                }}
                onMouseLeave={() => {
                  setTimeout(() => setIsMoreOpen(false), 500);
                }}
                className="flex items-center space-x-1 text-gray-400 hover:text-[#EAEAEA] transition-colors text-sm"
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
                    setIsMoreOpen(true);
                  }}
                  onMouseLeave={() => {
                    setTimeout(() => setIsMoreOpen(false), 500);
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

          {/* Discord */}
          <a 
            href={EXTERNAL_LINKS.COMMUNITY} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#EAEAEA] transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
          </a>

          {/* X (Twitter) */}
          <a 
            href="https://x.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#EAEAEA] transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>

          {/* Authentification */}
          {user ? (
            // Utilisateur connecté
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/dashboard')}
                className="bg-[#00E38C] text-black px-3 py-1.5 rounded-lg hover:bg-[#00E38C]/90 transition-colors text-sm font-medium"
              >
                Dashboard
              </button>
              
              {/* Profile Dropdown */}
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
                >
                  <span className="text-gray-200 font-medium text-sm">
                    {user.email?.charAt(0).toUpperCase() || 'U'}
                  </span>
                </button>

                {isProfileOpen && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-[#181B22] border border-gray-700 rounded-lg shadow-lg z-50">
                    <div className="py-2">
                      {/* User Info */}
                      <div className="px-4 py-3 border-b border-gray-700">
                        <div className="text-sm font-medium text-[#EAEAEA]">
                          {user.user_metadata?.full_name || 'User'}
                        </div>
                        <div className="text-xs text-gray-400">
                          @{user.user_metadata?.username || 'user'}
                        </div>
                      </div>
                      
                      {/* Menu Items */}
                      <div className="py-2">
                        <button
                          onClick={() => {
                            navigate('/dashboard');
                            setIsProfileOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-[#EAEAEA] hover:bg-gray-700 transition-colors"
                        >
                          Your Dashboard
                        </button>
                        <button
                          onClick={() => {
                            navigate('/dashboard/profile');
                            setIsProfileOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-[#EAEAEA] hover:bg-gray-700 transition-colors"
                        >
                          Your Profile
                        </button>
                        <button
                          onClick={() => {
                            navigate('/dashboard/settings');
                            setIsProfileOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-[#EAEAEA] hover:bg-gray-700 transition-colors"
                        >
                          Your Settings
                        </button>
                        <button
                          onClick={() => {
                            navigate('/dashboard/team');
                            setIsProfileOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-[#EAEAEA] hover:bg-gray-700 transition-colors"
                        >
                          Your Team
                        </button>
                      </div>
                      
                      {/* Separator */}
                      <div className="border-t border-gray-700"></div>
                      
                      {/* Sign Out */}
                      <div className="py-2">
                        <button
                          onClick={async () => {
                            await supabase.auth.signOut();
                            setIsProfileOpen(false);
                            window.location.href = '/';
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-gray-700 transition-colors"
                        >
                          Sign out
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            // Utilisateur non connecté
            <div className="flex items-center space-x-3">
              <button
                onClick={() => navigate('/dashboard/sign-in')}
                className="bg-[#00E38C] text-black px-4 py-2 rounded-lg hover:bg-[#00E38C]/90 transition-colors text-sm font-medium"
              >
                Sign in
              </button>
              <button
                onClick={() => navigate('/signup')}
                className="border border-[#00E38C] text-[#00E38C] px-4 py-2 rounded-lg hover:bg-[#00E38C]/10 transition-colors text-sm font-medium"
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

export default PublicNavigation;