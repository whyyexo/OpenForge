import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { EXTERNAL_LINKS } from '../config/links';
import logo from '../Icon/Icon - Vert.png';

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
    <nav className="bg-[#181B22] border-b border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo et liens principaux */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <a 
            href={EXTERNAL_LINKS.FIVERFLOW} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <img 
              src={logo} 
              alt="OpenForge Logo" 
              className="w-8 h-8"
            />
            <span className="text-xl font-semibold text-[#EAEAEA]">OpenForge</span>
          </a>

          {/* Liens de navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href={EXTERNAL_LINKS.DOCS} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#EAEAEA] transition-colors"
            >
              Docs
            </a>
            <a 
              href={EXTERNAL_LINKS.PRICING} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#EAEAEA] transition-colors"
            >
              Pricing
            </a>
            
            {/* Dropdown More */}
            <div className="relative" ref={moreRef}>
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className="flex items-center space-x-1 text-gray-300 hover:text-[#EAEAEA] transition-colors"
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

        {/* Bouton Try FiverFlow et profil */}
        <div className="flex items-center space-x-4">
          {/* Bouton Try FiverFlow */}
          <a 
            href={EXTERNAL_LINKS.FIVERFLOW_APP} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#00E38C] text-black rounded-md font-medium hover:bg-[#00E38C]/90 transition-colors"
          >
            Try FiverFlow
          </a>

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
