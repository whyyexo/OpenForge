import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import PublicNavigation from './components/PublicNavigation';
import Landing from './pages/Landing';
import Pricing from './pages/Pricing';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';

// Main App Component - Version simplifiée sans auth
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
          
          {/* Routes dashboard - sans auth */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
};

export default App;