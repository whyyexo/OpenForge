import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navigation from '../components/Navigation';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Team from './pages/Team';


// Dashboard Layout
const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0f1117]">
      <Navigation />
      <div className="flex pt-12">
        <Sidebar />
        <main className="ml-16 min-h-screen flex-1 transition-all duration-300">
          {children}
        </main>
      </div>
    </div>
  );
};

// Dashboard App Component
const DashboardApp: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
        }
      />
      <Route
        path="/dashboard"
        element={
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
        }
      />
      <Route
        path="/admin"
        element={
          <DashboardLayout>
            <Admin />
          </DashboardLayout>
        }
      />
      <Route
        path="/profile"
        element={
          <DashboardLayout>
            <Profile />
          </DashboardLayout>
        }
      />
      <Route
        path="/settings"
        element={
          <DashboardLayout>
            <Settings />
          </DashboardLayout>
        }
      />
      <Route
        path="/team"
        element={
          <DashboardLayout>
            <Team />
          </DashboardLayout>
        }
      />
    </Routes>
  );
};

export default DashboardApp;
