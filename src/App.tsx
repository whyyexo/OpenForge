import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import PublicNavigation from './components/PublicNavigation';
import AuthGuard from './components/AuthGuard';
import Landing from './pages/Landing';
import Pricing from './pages/Pricing';
import FiverFlow from './pages/FiverFlow';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';

// Main App Component - Flux Supabase correct
const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          {/* Routes publiques */}
          <Route path="/" element={
            <div className="min-h-screen bg-[#0f1117]">
              <PublicNavigation />
              <div className="pt-16">
                <Landing />
              </div>
            </div>
          } />
          <Route path="/pricing" element={
            <div className="min-h-screen bg-[#0f1117]">
              <PublicNavigation />
              <div className="pt-16">
                <Pricing />
              </div>
            </div>
          } />
          <Route path="/product/fiverflow" element={
            <div className="min-h-screen bg-[#0A0A0A]">
              <PublicNavigation />
              <div className="pt-16">
                <FiverFlow />
              </div>
            </div>
          } />
          
          {/* Page de connexion */}
          <Route path="/dashboard/sign-in" element={<SignIn />} />
          
          {/* Routes protégées avec AuthGuard */}
          <Route path="/dashboard" element={
            <AuthGuard>
              <Dashboard />
            </AuthGuard>
          } />
          <Route path="/admin" element={
            <AuthGuard>
              <Admin />
            </AuthGuard>
          } />
        </Routes>
      </Router>
    </LanguageProvider>
  );
};

export default App;