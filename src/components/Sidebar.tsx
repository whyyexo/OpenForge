import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const { signOut, isAdmin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    ...(isAdmin ? [{ path: '/admin', label: 'Admin', icon: '⚙️' }] : []),
  ];

  const handleLogout = async () => {
    await signOut();
    navigate('/login');
  };

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-supabase-dark-800 border-r border-supabase-dark-700 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-supabase-dark-700">
        <h1 className="text-xl font-bold text-white">OpenForge</h1>
        <p className="text-supabase-dark-400 text-sm">Dashboard</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <button
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                  location.pathname === item.path
                    ? 'bg-accent-green/10 text-accent-green border border-accent-green/20'
                    : 'text-supabase-dark-300 hover:bg-supabase-dark-700 hover:text-white'
                }`}
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-supabase-dark-700">
        <button
          onClick={handleLogout}
          className="w-full flex items-center px-4 py-3 rounded-lg text-left text-supabase-dark-300 hover:bg-supabase-dark-700 hover:text-white transition-colors"
        >
          <span className="mr-3 text-lg">🚪</span>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
