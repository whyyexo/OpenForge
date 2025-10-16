import { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Sidebar from './components/Sidebar';
import Studio from './components/Studio';
import Marketplace from './components/Marketplace';
import Statistics from './components/Statistics';
import Pricing from './components/Pricing';
import Profile from './components/Profile';
import Connections from './components/Connections';
import Chat from './components/Chat';
import Auth from './components/Auth';
import Workflows from './components/Workflows';
import Performance from './components/Performance';
import ApiKeys from './components/ApiKeys';
import Webhooks from './components/Webhooks';
import Documentation from './components/Documentation';
import HelpCenter from './components/HelpCenter';
import Billing from './components/Billing';
import Settings from './components/Settings';
import Security from './components/Security';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('studio');
  const [showAuth, setShowAuth] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const { user, loading } = useAuth();

  // Debug logs (removed for production)
  // console.log('AppContent - User:', user);
  // console.log('AppContent - Loading:', loading);

  const renderPage = () => {
    switch (currentPage) {
      case 'studio':
        return <Studio />;
      case 'workflows':
        return <Workflows />;
      case 'marketplace':
        return <Marketplace />;
      case 'statistics':
        return <Statistics />;
      case 'performance':
        return <Performance />;
      case 'connections':
        return <Connections />;
      case 'api':
        return <ApiKeys />;
      case 'webhooks':
        return <Webhooks />;
      case 'chat':
        return <Chat />;
      case 'documentation':
        return <Documentation />;
      case 'help':
        return <HelpCenter />;
      case 'profile':
        return <Profile />;
      case 'billing':
        return <Billing />;
      case 'settings':
        return <Settings />;
      case 'security':
        return <Security />;
      default:
        return <Studio />;
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen bg-slate-900 items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Loading...</h3>
          <p className="text-slate-400 text-sm">Setting up your workspace</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex h-screen bg-slate-900 items-center justify-center">
        <div className="text-center max-w-md mx-4">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 flex items-center justify-center">
            <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Welcome to AI Agents</h1>
          <p className="text-slate-400 mb-8">
            Create, share, and discover powerful AI agents. Build your automation workflows with our visual studio.
          </p>
          <button
            onClick={() => setShowAuth(true)}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg transition-all font-medium text-lg"
          >
            Get Started
          </button>
        </div>
        {showAuth && <Auth onClose={() => setShowAuth(false)} />}
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-slate-900">
      <Sidebar 
        currentPage={currentPage} 
        onPageChange={setCurrentPage} 
        onExpandedChange={setIsSidebarExpanded}
      />
      <main className={`flex-1 transition-all duration-300 ease-in-out ${
        isSidebarExpanded ? 'ml-56' : 'ml-16'
      }`}>
        {renderPage()}
      </main>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
