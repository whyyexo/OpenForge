import {
  LayoutDashboard,
  Sparkles,
  Store,
  BarChart3,
  CreditCard,
  User,
  Plug,
  MessageSquare,
  LogOut
} from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const menuItems = [
  { id: 'studio', icon: Sparkles, label: 'Studio' },
  { id: 'marketplace', icon: Store, label: 'Marketplace' },
  { id: 'statistics', icon: BarChart3, label: 'Statistics' },
  { id: 'connections', icon: Plug, label: 'Connections' },
  { id: 'pricing', icon: CreditCard, label: 'Pricing' },
  { id: 'profile', icon: User, label: 'Profile' },
  { id: 'chat', icon: MessageSquare, label: 'AI Chat' },
];

export default function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { profile, signOut } = useAuth();

  return (
    <div
      className={`fixed left-0 top-0 h-screen bg-slate-950 border-r border-slate-800 transition-all duration-300 z-50 ${
        isExpanded ? 'w-56' : 'w-16'
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center h-16 px-4 border-b border-slate-800">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <LayoutDashboard className="w-5 h-5 text-white" />
          </div>
          {isExpanded && (
            <span className="ml-3 font-semibold text-white whitespace-nowrap">
              AI Agents
            </span>
          )}
        </div>

        <nav className="flex-1 py-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`w-full flex items-center px-4 py-3 transition-all ${
                  isActive
                    ? 'bg-blue-500/10 text-blue-400 border-l-2 border-blue-500'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-blue-400' : ''}`} />
                {isExpanded && (
                  <span className="ml-3 whitespace-nowrap">{item.label}</span>
                )}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0 flex items-center justify-center">
              {profile?.avatar_url ? (
                <img 
                  src={profile.avatar_url} 
                  alt="Avatar" 
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <User className="w-4 h-4 text-white" />
              )}
            </div>
            {isExpanded && (
              <div className="ml-3 overflow-hidden flex-1">
                <p className="text-sm font-medium text-white truncate">
                  {profile?.display_name || profile?.username || 'User'}
                </p>
                <p className="text-xs text-slate-400 truncate capitalize">
                  {profile?.subscription_tier || 'lunch'} Plan
                </p>
              </div>
            )}
          </div>
          {isExpanded && (
            <button
              onClick={signOut}
              className="w-full mt-3 px-3 py-2 bg-slate-800/50 hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg transition-colors flex items-center gap-2 text-sm"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
