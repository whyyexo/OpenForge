import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import GlobalNavbar from './components/GlobalNavbar';
import GlobalFooter from './components/GlobalFooter';
import AuthGuard from './components/AuthGuard';
import Landing from './pages/Landing';
import Pricing from './pages/Pricing';
import FiverFlow from './pages/FiverFlow';
import NeuralEdge from './pages/NeuralEdge';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Community from './pages/Community';
import Legal from './pages/Legal';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
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
          <Route path="/product/neuraledge" element={<NeuralEdge />} />
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
          <Route path="/community" element={
            <div className="min-h-screen bg-[#0A0A0A]">
              <GlobalNavbar />
              <div className="pt-16">
                <Community />
              </div>
              <GlobalFooter />
            </div>
          } />
          <Route path="/legal" element={
            <div className="min-h-screen bg-[#0A0A0A]">
              <GlobalNavbar />
              <div className="pt-16">
                <Legal />
              </div>
              <GlobalFooter />
            </div>
          } />
          <Route path="/privacy" element={
            <div className="min-h-screen bg-[#0A0A0A]">
              <GlobalNavbar />
              <div className="pt-16">
                <Privacy />
              </div>
              <GlobalFooter />
            </div>
          } />
          <Route path="/terms" element={
            <div className="min-h-screen bg-[#0A0A0A]">
              <GlobalNavbar />
              <div className="pt-16">
                <Terms />
              </div>
              <GlobalFooter />
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