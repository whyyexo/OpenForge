import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import GlobalNavbar from './components/GlobalNavbar';
import GlobalFooter from './components/GlobalFooter';
import AuthGuard from './components/AuthGuard';
import Landing from './pages/Landing';
import Pricing from './pages/Pricing';
import FiverFlow from './pages/FiverFlow';
import Career from './pages/Career';
import Contact from './pages/Contact';
import DocsHome from './pages/docs/DocsHome';
import FiverFlowDocs from './pages/docs/FiverFlowDocs';
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
            <div className="min-h-screen bg-[#0A0A0A]">
              <GlobalNavbar />
              <div className="pt-16">
                <Landing />
              </div>
              <GlobalFooter />
            </div>
          } />
          <Route path="/pricing" element={
            <div className="min-h-screen bg-[#0A0A0A]">
              <GlobalNavbar />
              <div className="pt-16">
                <Pricing />
              </div>
              <GlobalFooter />
            </div>
          } />
          <Route path="/product/fiverflow" element={<FiverFlow />} />
          <Route path="/career" element={
            <div className="min-h-screen bg-[#0A0A0A]">
              <GlobalNavbar />
              <div className="pt-16">
                <Career />
              </div>
              <GlobalFooter />
            </div>
          } />
          <Route path="/contact" element={
            <div className="min-h-screen bg-[#0A0A0A]">
              <GlobalNavbar />
              <div className="pt-16">
                <Contact />
              </div>
              <GlobalFooter />
            </div>
          } />
          
          {/* Documentation Routes */}
          <Route path="/docs" element={
            <div className="min-h-screen bg-[#0A0A0A]">
              <GlobalNavbar />
              <div className="pt-16">
                <DocsHome />
              </div>
              <GlobalFooter />
            </div>
          } />
          <Route path="/docs/fiverflow" element={
            <div className="min-h-screen bg-[#0A0A0A]">
              <GlobalNavbar />
              <div className="pt-16">
                <FiverFlowDocs />
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