import { useState, useEffect } from 'react';
import { 
  Plus, 
  Settings, 
  Trash2, 
  ExternalLink, 
  CheckCircle, 
  XCircle,
  AlertCircle,
  Zap,
  Globe,
  Shield,
  Star,
  Loader2,
  RefreshCw
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { OAuthManager, OAUTH_PROVIDERS } from '../lib/oauth';
import { supabaseHelpers } from '../lib/supabase';

interface OAuthConnection {
  id: string;
  provider: string;
  provider_user_id: string;
  provider_username?: string;
  provider_display_name?: string;
  provider_email?: string;
  provider_avatar_url?: string;
  is_primary: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export default function Connections() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('connected');
  const [connections, setConnections] = useState<OAuthConnection[]>([]);
  const [loading, setLoading] = useState(true);
  const [connecting, setConnecting] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadConnections();
  }, [user]);

  const loadConnections = async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      const result = await supabaseHelpers.getOAuthConnections();
      if (result?.data) {
        setConnections(result.data);
      }
    } catch (error) {
      console.error('Error loading connections:', error);
      setError('Failed to load connections');
    } finally {
      setLoading(false);
    }
  };

  const handleConnect = async (provider: string) => {
    if (!user) return;
    
    setConnecting(provider);
    setError(null);
    
    try {
      await OAuthManager.initiateOAuth(provider);
    } catch (error: any) {
      console.error('Error connecting to provider:', error);
      setError(error.message || 'Failed to connect to provider');
      setConnecting(null);
    }
  };

  const handleDisconnect = async (provider: string) => {
    if (!confirm(`Are you sure you want to disconnect ${provider}?`)) return;
    
    try {
      await OAuthManager.disconnectProvider(provider);
      await loadConnections();
    } catch (error) {
      console.error('Error disconnecting provider:', error);
      setError('Failed to disconnect provider');
    }
  };

  const handleSetPrimary = async (provider: string) => {
    try {
      await OAuthManager.setPrimaryProvider(provider);
      await loadConnections();
    } catch (error) {
      console.error('Error setting primary provider:', error);
      setError('Failed to set primary provider');
    }
  };

  const getStatusIcon = (isActive: boolean) => {
    return isActive ? (
      <CheckCircle className="w-5 h-5 text-green-400" />
    ) : (
      <XCircle className="w-5 h-5 text-gray-400" />
    );
  };

  const getStatusColor = (isActive: boolean) => {
    return isActive 
      ? 'border-green-500/20 bg-green-500/5' 
      : 'border-gray-500/20 bg-gray-500/5';
  };

  const getProviderInfo = (provider: string) => {
    return OAUTH_PROVIDERS[provider] || {
      name: provider,
      icon: '🔗',
      color: '#666',
      description: `${provider} connection`
    };
  };

  const connectedProviders = connections.map(conn => conn.provider);
  const availableProviders = Object.values(OAUTH_PROVIDERS).filter(provider => 
    provider.enabled && !connectedProviders.includes(provider.id)
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full bg-black">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-blue-400 mx-auto mb-4" />
          <p className="text-slate-400">Loading connections...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-black overflow-auto">
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">Connections</h1>
            <p className="text-slate-400">Connect your accounts to access additional features</p>
          </div>
          <button 
            onClick={loadConnections}
            className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            <RefreshCw className="w-4 h-4 text-slate-300" />
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        <div className="flex gap-1 bg-slate-900/50 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab('connected')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'connected'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Connected ({connections.filter(c => c.is_active).length})
          </button>
          <button
            onClick={() => setActiveTab('available')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'available'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Available ({availableProviders.length})
          </button>
        </div>
      </div>

      <div className="flex-1 p-6">
        {activeTab === 'connected' ? (
          <div className="space-y-4">
            {connections.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-slate-800 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No connections yet</h3>
                <p className="text-slate-400 mb-6">Connect your accounts to get started</p>
                <button
                  onClick={() => setActiveTab('available')}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  Browse Available Connections
                </button>
              </div>
            ) : (
              connections.map((connection) => {
                const providerInfo = getProviderInfo(connection.provider);
                return (
                  <div
                    key={connection.id}
                    className={`p-6 bg-slate-900/50 border rounded-xl transition-colors ${getStatusColor(connection.is_active)}`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                          style={{ backgroundColor: `${providerInfo.color}20` }}
                        >
                          {providerInfo.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="text-lg font-semibold text-white">
                              {providerInfo.name}
                            </h3>
                            {getStatusIcon(connection.is_active)}
                            {connection.is_primary && (
                              <span className="px-2 py-0.5 bg-yellow-500/10 text-yellow-400 rounded text-xs font-medium flex items-center gap-1">
                                <Star className="w-3 h-3" />
                                Primary
                              </span>
                            )}
                          </div>
                          <p className="text-slate-400 text-sm">
                            {connection.provider_display_name || connection.provider_username || connection.provider_email || 'Connected account'}
                          </p>
                          <p className="text-slate-500 text-xs mt-1">
                            Connected {new Date(connection.created_at).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {!connection.is_primary && (
                          <button 
                            onClick={() => handleSetPrimary(connection.provider)}
                            className="p-2 bg-yellow-500/10 hover:bg-yellow-500/20 rounded-lg transition-colors"
                            title="Set as primary"
                          >
                            <Star className="w-4 h-4 text-yellow-400" />
                          </button>
                        )}
                        {connection.provider_avatar_url && (
                          <button className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
                            <ExternalLink className="w-4 h-4 text-slate-300" />
                          </button>
                        )}
                        <button 
                          onClick={() => handleDisconnect(connection.provider)}
                          className="p-2 bg-red-900/20 hover:bg-red-900/30 rounded-lg transition-colors"
                          title="Disconnect"
                        >
                          <Trash2 className="w-4 h-4 text-red-400" />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-slate-400">
                          <Shield className="w-4 h-4" />
                          OAuth 2.0
                        </div>
                        <div className="flex items-center gap-2 text-slate-400">
                          <Zap className="w-4 h-4" />
                          {connection.is_active ? 'Active' : 'Inactive'}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <span className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs">
                          {connection.provider}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableProviders.map((provider) => (
              <div
                key={provider.id}
                className="p-6 bg-slate-900/50 border border-white/10 rounded-xl hover:border-white/20 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${provider.color}20` }}
                  >
                    {provider.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-white">{provider.name}</h3>
                      {(provider.id === 'discord' || provider.id === 'github') && (
                        <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded text-xs font-medium">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="text-slate-400 text-sm">{provider.description}</p>
                  </div>
                </div>
                <button 
                  onClick={() => handleConnect(provider.id)}
                  disabled={connecting === provider.id}
                  className="w-full py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {connecting === provider.id ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Connecting...
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      Connect
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}