// OAuth Configuration and Helpers
import { supabaseHelpers } from './supabase';

export interface OAuthProvider {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  authUrl: string;
  scopes: string[];
  enabled: boolean;
}

export const OAUTH_PROVIDERS: Record<string, OAuthProvider> = {
  discord: {
    id: 'discord',
    name: 'Discord',
    icon: '💬',
    color: '#5865F2',
    description: 'Connect your Discord account',
    authUrl: 'https://discord.com/api/oauth2/authorize',
    scopes: ['identify', 'email'],
    enabled: true,
  },
  github: {
    id: 'github',
    name: 'GitHub',
    icon: '🐙',
    color: '#333',
    description: 'Connect your GitHub account',
    authUrl: 'https://github.com/login/oauth/authorize',
    scopes: ['user:email', 'read:user'],
    enabled: true,
  },
  google: {
    id: 'google',
    name: 'Google',
    icon: '🔍',
    color: '#4285F4',
    description: 'Connect your Google account',
    authUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
    scopes: ['openid', 'profile', 'email'],
    enabled: false, // Disabled for now
  },
  twitter: {
    id: 'twitter',
    name: 'Twitter',
    icon: '🐦',
    color: '#1DA1F2',
    description: 'Connect your Twitter account',
    authUrl: 'https://twitter.com/i/oauth2/authorize',
    scopes: ['tweet.read', 'users.read'],
    enabled: false, // Disabled for now
  },
  linkedin: {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: '💼',
    color: '#0077B5',
    description: 'Connect your LinkedIn account',
    authUrl: 'https://www.linkedin.com/oauth/v2/authorization',
    scopes: ['r_liteprofile', 'r_emailaddress'],
    enabled: false, // Disabled for now
  },
  spotify: {
    id: 'spotify',
    name: 'Spotify',
    icon: '🎵',
    color: '#1DB954',
    description: 'Connect your Spotify account',
    authUrl: 'https://accounts.spotify.com/authorize',
    scopes: ['user-read-email', 'user-read-private'],
    enabled: false, // Disabled for now
  },
};

// OAuth Client Configuration
export const OAUTH_CONFIG = {
  redirectUri: `${window.location.origin}/auth/callback`,
  state: () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
};

// OAuth Helper Functions
export class OAuthManager {
  static async initiateOAuth(provider: string): Promise<void> {
    const providerConfig = OAUTH_PROVIDERS[provider];
    if (!providerConfig || !providerConfig.enabled) {
      throw new Error(`Provider ${provider} is not available`);
    }

    const state = OAUTH_CONFIG.state();
    sessionStorage.setItem('oauth_state', state);

    const params = new URLSearchParams({
      client_id: this.getClientId(provider),
      redirect_uri: OAUTH_CONFIG.redirectUri,
      scope: providerConfig.scopes.join(' '),
      response_type: 'code',
      state: state,
    });

    // Add provider-specific parameters
    if (provider === 'github') {
      params.append('allow_signup', 'false');
    }

    const authUrl = `${providerConfig.authUrl}?${params.toString()}`;
    window.location.href = authUrl;
  }

  static async handleCallback(provider: string, code: string, state: string): Promise<any> {
    const storedState = sessionStorage.getItem('oauth_state');
    if (!storedState || storedState !== state) {
      throw new Error('Invalid state parameter');
    }

    sessionStorage.removeItem('oauth_state');

    try {
      const tokenResponse = await this.exchangeCodeForToken(provider, code);
      const userInfo = await this.getUserInfo(provider, tokenResponse.access_token);
      
      // Save connection to database
      await supabaseHelpers.createOAuthConnection({
        provider: provider as any,
        provider_user_id: userInfo.id,
        provider_username: userInfo.username || userInfo.login,
        provider_display_name: userInfo.display_name || userInfo.name,
        provider_email: userInfo.email,
        provider_avatar_url: userInfo.avatar_url,
        access_token: tokenResponse.access_token,
        refresh_token: tokenResponse.refresh_token,
        token_expires_at: tokenResponse.expires_at ? new Date(Date.now() + tokenResponse.expires_in * 1000).toISOString() : undefined,
        provider_data: userInfo,
      });

      return userInfo;
    } catch (error) {
      console.error('OAuth callback error:', error);
      throw error;
    }
  }

  private static getClientId(provider: string): string {
    // In production, these should come from environment variables
    const clientIds: Record<string, string> = {
      discord: import.meta.env.VITE_DISCORD_CLIENT_ID || 'your-discord-client-id',
      github: import.meta.env.VITE_GITHUB_CLIENT_ID || 'your-github-client-id',
      google: import.meta.env.VITE_GOOGLE_CLIENT_ID || 'your-google-client-id',
      twitter: import.meta.env.VITE_TWITTER_CLIENT_ID || 'your-twitter-client-id',
      linkedin: import.meta.env.VITE_LINKEDIN_CLIENT_ID || 'your-linkedin-client-id',
      spotify: import.meta.env.VITE_SPOTIFY_CLIENT_ID || 'your-spotify-client-id',
    };

    return clientIds[provider] || '';
  }

  private static async exchangeCodeForToken(provider: string, code: string): Promise<any> {
    // In production, this should be handled by your backend
    // For now, we'll simulate the token exchange
    const response = await fetch('/api/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        provider,
        code,
        redirect_uri: OAUTH_CONFIG.redirectUri,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to exchange code for token');
    }

    return await response.json();
  }

  private static async getUserInfo(provider: string, accessToken: string): Promise<any> {
    const endpoints: Record<string, string> = {
      discord: 'https://discord.com/api/users/@me',
      github: 'https://api.github.com/user',
      google: 'https://www.googleapis.com/oauth2/v2/userinfo',
      twitter: 'https://api.twitter.com/2/users/me',
      linkedin: 'https://api.linkedin.com/v2/people/~',
      spotify: 'https://api.spotify.com/v1/me',
    };

    const endpoint = endpoints[provider];
    if (!endpoint) {
      throw new Error(`No endpoint defined for provider: ${provider}`);
    }

    const response = await fetch(endpoint, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user info');
    }

    const userInfo = await response.json();
    
    // Normalize user info across providers
    return this.normalizeUserInfo(provider, userInfo);
  }

  private static normalizeUserInfo(provider: string, userInfo: any): any {
    switch (provider) {
      case 'discord':
        return {
          id: userInfo.id,
          username: userInfo.username,
          display_name: userInfo.global_name || userInfo.username,
          email: userInfo.email,
          avatar_url: userInfo.avatar ? `https://cdn.discordapp.com/avatars/${userInfo.id}/${userInfo.avatar}.png` : null,
        };
      case 'github':
        return {
          id: userInfo.id.toString(),
          username: userInfo.login,
          display_name: userInfo.name || userInfo.login,
          email: userInfo.email,
          avatar_url: userInfo.avatar_url,
        };
      default:
        return userInfo;
    }
  }

  static async disconnectProvider(provider: string): Promise<void> {
    await supabaseHelpers.deleteOAuthConnection(provider);
  }

  static async setPrimaryProvider(provider: string): Promise<void> {
    await supabaseHelpers.setPrimaryOAuthConnection(provider);
  }

  static async getConnections(): Promise<any[]> {
    const result = await supabaseHelpers.getOAuthConnections();
    return result?.data || [];
  }
}

export default OAuthManager;
