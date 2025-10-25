import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { signIn, user, isAdmin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      // Redirect based on role
      if (isAdmin) {
        navigate('/admin');
      } else {
        navigate('/dashboard');
      }
    }
  }, [user, isAdmin, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error } = await signIn(email, password);
    
    if (error) {
      setError(error.message);
    } else {
      // Navigation will be handled by useEffect
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0f1117] flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-[#00E38C] rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <h1 className="text-2xl font-semibold text-[#EAEAEA] mb-2">OpenForge</h1>
          <p className="text-gray-400">Sign in to your account</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-[#181B22] border border-gray-600 rounded-md text-[#EAEAEA] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00E38C] focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[#181B22] border border-gray-600 rounded-md text-[#EAEAEA] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00E38C] focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-md p-3">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-[#00E38C] hover:bg-[#00E38C]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00E38C] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <div className="text-center">
          <p className="text-gray-400 text-sm">
            Using the same credentials as FiverFlow
          </p>
          <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-md">
            <p className="text-blue-400 text-sm">
              Connected to FiverFlow database
            </p>
            <p className="text-blue-300 text-xs mt-1">
              Your account is shared between FiverFlow and OpenForge
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;