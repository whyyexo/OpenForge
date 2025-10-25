import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import PublicNavigation from './components/PublicNavigation';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Pricing from './pages/Pricing';
import DashboardApp from './dashboard/App';

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode; requireAdmin?: boolean }> = ({ 
  children, 
  requireAdmin = false 
}) => {
  const { user, loading, isAdmin } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f1117] flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-[#00E38C] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (requireAdmin && !isAdmin) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

// Public Routes Component
const PublicRoutes: React.FC = () => {
  return (
    <Routes>
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
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

// Protected Routes Component
const ProtectedRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/dashboard/*" element={
        <ProtectedRoute>
          <DashboardApp />
        </ProtectedRoute>
      } />
      <Route path="/admin/*" element={
        <ProtectedRoute requireAdmin={true}>
          <DashboardApp />
        </ProtectedRoute>
      } />
      <Route path="/profile/*" element={
        <ProtectedRoute>
          <DashboardApp />
        </ProtectedRoute>
      } />
      <Route path="/settings/*" element={
        <ProtectedRoute>
          <DashboardApp />
        </ProtectedRoute>
      } />
      <Route path="/team/*" element={
        <ProtectedRoute>
          <DashboardApp />
        </ProtectedRoute>
      } />
    </Routes>
  );
};

// Main App Component
const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AuthProvider>
        <Router>
          <PublicRoutes />
          <ProtectedRoutes />
        </Router>
      </AuthProvider>
    </LanguageProvider>
  );
};

export default App;