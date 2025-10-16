import {
  LayoutDashboard,
  Sparkles,
  Bot,
  Store,
  BarChart3,
  Plug,
  User,
  Settings,
  CreditCard,
  MessageSquare,
  BookOpen,
  LogOut
} from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  onExpandedChange: (expanded: boolean) => void;
}

const menuItems = [
  { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { id: 'studio', icon: Sparkles, label: 'Studio' },
  { id: 'agents', icon: Bot, label: 'Agents' },
  { id: 'marketplace', icon: Store, label: 'Marketplace' },
  { id: 'analytics', icon: BarChart3, label: 'Analytics' },
  { id: 'separator1', isSeparator: true },
  { id: 'connections', icon: Plug, label: 'Connections' },
  { id: 'profile', icon: User, label: 'Profile' },
  { id: 'settings', icon: Settings, label: 'Settings' },
  { id: 'separator2', isSeparator: true },
  { id: 'pricing', icon: CreditCard, label: 'Pricing' },
  { id: 'chat', icon: MessageSquare, label: 'Chat AI' },
  { id: 'docs', icon: BookOpen, label: 'Docs' },
];

export default function Sidebar({ currentPage, onPageChange, onExpandedChange }: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { profile, signOut } = useAuth();

  const handleMouseEnter = () => {
    setIsExpanded(true);
    onExpandedChange(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
    onExpandedChange(false);
  };

  return (
    <div
      className={`fixed left-0 top-0 h-screen bg-black/95 backdrop-blur-xl border-r border-white/10 transition-all duration-500 z-50 ${
        isExpanded ? 'w-64 shadow-2xl shadow-black/50' : 'w-20'
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center h-20 px-6 border-b border-white/10">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
            <LayoutDashboard className="w-6 h-6 text-white" />
          </div>
          {isExpanded && (
            <span className="ml-4 font-black text-white text-lg tracking-wide whitespace-nowrap">
              NEUROFLOW
            </span>
          )}
        </div>

        <nav className="flex-1 py-4 overflow-y-auto">
          {menuItems.map((item) => {
            if (item.isSeparator) {
              return (
                <div key={item.id} className="mx-6 my-4 border-b border-white/10"></div>
              );
            }

            const Icon = item.icon;
            const isActive = currentPage === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`w-full flex items-center px-6 py-4 transition-all duration-500 ease-out ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600/20 to-blue-500/10 text-blue-400 border-l-4 border-blue-500 shadow-lg shadow-blue-500/20'
                    : 'text-white/60 hover:text-white hover:bg-white/5 border-l-4 border-transparent hover:border-white/20'
                }`}
              >
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <Icon className={`w-6 h-6 ${isActive ? 'text-blue-400' : 'text-white/60'}`} />
                </div>
                {isExpanded && (
                  <span className="ml-4 whitespace-nowrap transition-opacity duration-500 font-medium text-sm tracking-wide">{item.label}</span>
                )}
              </button>
            );
          })}
        </nav>

        <div className="p-6 border-t border-white/10">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex-shrink-0 flex items-center justify-center shadow-lg shadow-blue-500/30">
              {profile?.avatar_url ? (
                <img 
                  src={profile.avatar_url} 
                  alt="Avatar" 
                  className="w-full h-full rounded-xl object-cover"
                />
              ) : (
                <User className="w-5 h-5 text-white" />
              )}
            </div>
            {isExpanded && (
              <div className="ml-4 overflow-hidden flex-1">
                <p className="text-sm font-semibold text-white truncate">
                  {profile?.display_name || profile?.username || 'User'}
                </p>
                <p className="text-xs text-white/60 truncate uppercase tracking-wider">
                  {profile?.subscription_tier || 'VIP'} Plan
                </p>
              </div>
            )}
          </div>
          {isExpanded && (
            <button
              onClick={signOut}
              className="w-full mt-4 px-4 py-3 bg-transparent border border-white/20 hover:bg-white/5 text-white/60 hover:text-white rounded-xl transition-all duration-300 flex items-center gap-3 text-sm font-medium"
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
