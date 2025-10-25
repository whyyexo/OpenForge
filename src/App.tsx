import { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Studio from './components/Studio';
import Agents from './components/Agents';
import Marketplace from './components/Marketplace';
import Analytics from './components/Analytics';
import Connections from './components/Connections';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Pricing from './components/Pricing';
import Chat from './components/Chat';
import Docs from './components/Docs';
import Auth from './components/Auth';
import OAuthCallback from './components/OAuthCallback';
import SimpleAdminPanel from './components/SimpleAdminPanel';
import AuthTest from './components/AuthTest';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [showAuth, setShowAuth] = useState(false);
  const { user, loading } = useAuth();

  // Handle OAuth callback
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.includes('oauth/callback') || window.location.pathname.includes('auth/callback')) {
      setCurrentPage('oauth-callback');
    }
  }, []);

  // Debug logs (removed for production)
  // console.log('AppContent - User:', user);
  // console.log('AppContent - Loading:', loading);

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'studio':
        return <Studio />;
      case 'agents':
        return <Agents />;
      case 'marketplace':
        return <Marketplace />;
      case 'analytics':
        return <Analytics />;
      case 'connections':
        return <Connections />;
      case 'profile':
        return <Profile />;
      case 'settings':
        return <Settings />;
      case 'pricing':
        return <Pricing />;
      case 'chat':
        return <Chat />;
      case 'docs':
        return <Docs />;
      case 'oauth-callback':
        return <OAuthCallback />;
      case 'admin':
        return <SimpleAdminPanel />;
      case 'auth-test':
        return <AuthTest />;
      default:
        return <Dashboard />;
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen bg-black items-center justify-center">
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
      <div className="flex h-screen bg-black items-center justify-center">
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
    <div className="flex h-screen bg-black">
      <Sidebar 
        currentPage={currentPage} 
        onPageChange={setCurrentPage} 
        onExpandedChange={() => {}}
      />
      <main className="flex-1 ml-20 overflow-hidden">
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
