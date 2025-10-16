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
      className={`fixed left-0 top-0 h-screen bg-slate-950 border-r border-slate-800 transition-all duration-300 z-50 ${
        isExpanded ? 'w-56' : 'w-16'
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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

        <nav className="flex-1 py-4 overflow-y-auto">
          {menuItems.map((item) => {
            if (item.isSeparator) {
              return (
                <div key={item.id} className="mx-4 my-3 border-b border-slate-800/30"></div>
              );
            }

            const Icon = item.icon;
            const isActive = currentPage === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`w-full flex items-center px-4 py-3 transition-all duration-300 ease-in-out ${
                  isActive
                    ? 'bg-blue-500/10 text-blue-400 border-l-2 border-blue-500'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50 border-l-2 border-transparent'
                }`}
              >
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-blue-400' : ''}`} />
                </div>
                {isExpanded && (
                  <span className="ml-3 whitespace-nowrap transition-opacity duration-300">{item.label}</span>
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
