import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { EXTERNAL_LINKS } from '../config/links';
import logo from './icons/Icon - Vert.png';

const Navigation: React.FC = () => {
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);

  // Fermer les dropdowns quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  return (
    <nav className="bg-[#181B22] border-b border-gray-700 px-6 py-1 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between w-full">
        {/* Logo et liens principaux */}
        <div className="flex items-center space-x-6">
          {/* Logo avec Dashboard */}
          <div className="flex items-center space-x-3">
            <a 
              href={EXTERNAL_LINKS.FIVERFLOW} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <img 
                src={logo} 
                alt="OpenForge Logo" 
                className="h-6 w-auto"
              />
            </a>
            
            {/* Ligne diagonale de séparation */}
            <div className="w-px h-6 bg-gray-600 transform rotate-12"></div>
            
            {/* Dashboard */}
            <button
              onClick={() => navigate('/dashboard')}
              className="p-1 rounded hover:bg-gray-700 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Liens de navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href={EXTERNAL_LINKS.DOCS} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#EAEAEA] transition-colors text-sm"
            >
              Docs
            </a>
            <a 
              href={EXTERNAL_LINKS.PRICING} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#EAEAEA] transition-colors text-sm"
            >
              Pricing
            </a>
            <a 
              href="https://fiverflow.com/feedback" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#EAEAEA] transition-colors text-sm"
            >
              Feedback
            </a>
            
            {/* Dropdown More */}
            <div className="relative" ref={moreRef}>
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className="flex items-center space-x-1 text-gray-300 hover:text-[#EAEAEA] transition-colors text-sm"
              >
                <span>More</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              {isMoreOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#181B22] border border-gray-700 rounded-lg shadow-lg z-50">
                  <div className="py-2">
                    <a 
                      href={EXTERNAL_LINKS.COMMUNITY} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-[#EAEAEA] transition-colors"
                    >
                      Community
                    </a>
                    <a 
                      href={EXTERNAL_LINKS.CAREER} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-[#EAEAEA] transition-colors"
                    >
                      Career
                    </a>
                    <div className="border-t border-gray-700 my-1"></div>
                    <a 
                      href={EXTERNAL_LINKS.LEGAL} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-[#EAEAEA] transition-colors"
                    >
                      Legal
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Liens et profil */}
        <div className="flex items-center space-x-6">
          {/* Try FiverFlow aligné avec les autres liens */}
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
              href="https://discord.gg/fiverflow" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#EAEAEA] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
            <a 
              href="https://twitter.com/fiverflow" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#EAEAEA] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>

          {/* Profil utilisateur */}
          {user && (
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-gray-200 font-medium text-sm">
                    {profile?.username?.charAt(0).toUpperCase() || user?.email?.charAt(0).toUpperCase() || 'U'}
                  </span>
                </div>
              </button>

              {isProfileOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-[#181B22] border border-gray-700 rounded-lg shadow-lg z-50">
                  <div className="p-4 border-b border-gray-700">
                    <p className="text-[#EAEAEA] font-medium">
                      {profile?.display_name || profile?.username || 'User'}
                    </p>
                    <p className="text-gray-400 text-sm">
                      @{profile?.username || user?.email?.split('@')[0] || 'user'}
                    </p>
                  </div>
                  
                  <div className="py-2">
                    <button
                      onClick={() => {
                        navigate('/dashboard');
                        setIsProfileOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-[#EAEAEA] transition-colors"
                    >
                      Your Dashboard
                    </button>
                    <button
                      onClick={() => {
                        navigate('/profile');
                        setIsProfileOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-[#EAEAEA] transition-colors"
                    >
                      Your Profile
                    </button>
                    <button
                      onClick={() => {
                        navigate('/settings');
                        setIsProfileOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-[#EAEAEA] transition-colors"
                    >
                      Your Settings
                    </button>
                    
                    <div className="border-t border-gray-700 my-1"></div>
                    
                    <button
                      onClick={() => {
                        navigate('/team');
                        setIsProfileOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-[#EAEAEA] transition-colors"
                    >
                      Your Team
                    </button>
                    
                    <div className="border-t border-gray-700 my-1"></div>
                    
                    {/* Theme Selector */}
                    <div className="px-4 py-2">
                      <p className="text-xs text-gray-400 mb-2">Theme</p>
                      <div className="flex items-center space-x-3">
                        <button className="flex items-center space-x-2 text-sm text-gray-300 hover:text-[#EAEAEA] transition-colors">
                          <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                          <span>Dark</span>
                        </button>
                        <button className="flex items-center space-x-2 text-sm text-gray-300 hover:text-[#EAEAEA] transition-colors">
                          <div className="w-3 h-3 rounded-full border border-gray-500"></div>
                          <span>Light</span>
                        </button>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-700 my-1"></div>
                    
                    <button
                      onClick={handleSignOut}
                      className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
