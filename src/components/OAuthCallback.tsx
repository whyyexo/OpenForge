import { useEffect, useState } from 'react';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';
import { OAuthManager } from '../lib/oauth';
import { useAuth } from '../contexts/AuthContext';

export default function OAuthCallback() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        const state = urlParams.get('state');
        const error = urlParams.get('error');

        if (error) {
          setStatus('error');
          setMessage(`OAuth error: ${error}`);
          return;
        }

        if (!code || !state) {
          setStatus('error');
          setMessage('Missing OAuth parameters');
          return;
        }

        // Determine provider from URL or state
        const provider = window.location.pathname.split('/').pop() || 'unknown';
        
        if (provider === 'callback') {
          // Try to determine from referrer or other means
          const referrer = document.referrer;
          if (referrer.includes('discord.com')) {
            await OAuthManager.handleCallback('discord', code, state);
          } else if (referrer.includes('github.com')) {
            await OAuthManager.handleCallback('github', code, state);
          } else {
            throw new Error('Could not determine OAuth provider');
          }
        } else {
          await OAuthManager.handleCallback(provider, code, state);
        }

        setStatus('success');
        setMessage('Account connected successfully!');

        // Redirect back to connections page after 2 seconds
        setTimeout(() => {
          window.location.href = '/#connections';
        }, 2000);

      } catch (error: any) {
        console.error('OAuth callback error:', error);
        setStatus('error');
        setMessage(error.message || 'Failed to connect account');
      }
    };

    if (user) {
      handleCallback();
    } else {
      setStatus('error');
      setMessage('Please log in first');
    }
  }, [user]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center max-w-md mx-4">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-slate-800 flex items-center justify-center">
          {status === 'loading' && <Loader2 className="w-8 h-8 animate-spin text-blue-400" />}
          {status === 'success' && <CheckCircle className="w-8 h-8 text-green-400" />}
          {status === 'error' && <XCircle className="w-8 h-8 text-red-400" />}
        </div>
        
        <h1 className="text-2xl font-bold text-white mb-2">
          {status === 'loading' && 'Connecting Account...'}
          {status === 'success' && 'Connection Successful!'}
          {status === 'error' && 'Connection Failed'}
        </h1>
        
        <p className="text-slate-400 mb-6">
          {status === 'loading' && 'Please wait while we connect your account.'}
          {status === 'success' && message}
          {status === 'error' && message}
        </p>

        {status === 'success' && (
          <p className="text-sm text-slate-500">
            Redirecting back to connections...
          </p>
        )}

        {status === 'error' && (
          <button
            onClick={() => window.location.href = '/#connections'}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Back to Connections
          </button>
        )}
      </div>
    </div>
  );
}
