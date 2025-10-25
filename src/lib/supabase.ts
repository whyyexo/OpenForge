import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://arnuyyyryvbfcvqauqur.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFybnV5eXlyeXZiZmN2cWF1cXVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyMjY5MjQsImV4cCI6MjA2ODgwMjkyNH0.mWzoWkBbQcCNR2BHueu8mQpV6hFMZUacbv4EobzOIZs';

// Debug: Log the environment variables
console.log('🔧 OpenForge Supabase Config:');
console.log('URL:', supabaseUrl);
console.log('Key (first 20 chars):', supabaseAnonKey?.substring(0, 20) + '...');

// Create Supabase client (singleton pattern)
let supabaseInstance: any = null;

export const supabase = (() => {
  if (!supabaseInstance) {
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
        storageKey: 'ai-agent-platform-auth'
      }
    });
  }
  return supabaseInstance;
})();

// Database types (matching our schema)
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          user_id: string;
          username: string;
          display_name: string | null;
          bio: string | null;
          avatar_url: string | null;
          banner_url: string | null;
          subscription_tier: 'lunch' | 'scale' | 'boost';
          social_links: Record<string, string>;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          username: string;
          display_name?: string | null;
          bio?: string | null;
          avatar_url?: string | null;
          banner_url?: string | null;
          subscription_tier?: 'lunch' | 'scale' | 'boost';
          social_links?: Record<string, string>;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          username?: string;
          display_name?: string | null;
          bio?: string | null;
          avatar_url?: string | null;
          banner_url?: string | null;
          subscription_tier?: 'lunch' | 'scale' | 'boost';
          social_links?: Record<string, string>;
          created_at?: string;
          updated_at?: string;
        };
      };
      ai_agents: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          description: string | null;
          thumbnail_url: string | null;
          is_public: boolean;
          is_template: boolean;
          price: number;
          category: string | null;
          tags: string[];
          canvas_data: any;
          configuration: any;
          version: number;
          clone_count: number;
          usage_count: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          name: string;
          description?: string | null;
          thumbnail_url?: string | null;
          is_public?: boolean;
          is_template?: boolean;
          price?: number;
          category?: string | null;
          tags?: string[];
          canvas_data?: any;
          configuration?: any;
          version?: number;
          clone_count?: number;
          usage_count?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          name?: string;
          description?: string | null;
          thumbnail_url?: string | null;
          is_public?: boolean;
          is_template?: boolean;
          price?: number;
          category?: string | null;
          tags?: string[];
          canvas_data?: any;
          configuration?: any;
          version?: number;
          clone_count?: number;
          usage_count?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      marketplace_listings: {
        Row: {
          id: string;
          agent_id: string;
          featured: boolean;
          rating_average: number;
          rating_count: number;
          sales_count: number;
          revenue: number;
          last_updated: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          agent_id: string;
          featured?: boolean;
          rating_average?: number;
          rating_count?: number;
          sales_count?: number;
          revenue?: number;
          last_updated?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          agent_id?: string;
          featured?: boolean;
          rating_average?: number;
          rating_count?: number;
          sales_count?: number;
          revenue?: number;
          last_updated?: string;
          created_at?: string;
        };
      };
      reviews: {
        Row: {
          id: string;
          agent_id: string;
          user_id: string;
          rating: number;
          review_text: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          agent_id: string;
          user_id: string;
          rating: number;
          review_text?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          agent_id?: string;
          user_id?: string;
          rating?: number;
          review_text?: string | null;
          created_at?: string;
        };
      };
      badges: {
        Row: {
          id: string;
          name: string;
          icon: string;
          description: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          icon: string;
          description?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          icon?: string;
          description?: string | null;
          created_at?: string;
        };
      };
      user_badges: {
        Row: {
          id: string;
          user_id: string;
          badge_id: string;
          earned_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          badge_id: string;
          earned_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          badge_id?: string;
          earned_at?: string;
        };
      };
      agent_templates: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          category: string | null;
          thumbnail_url: string | null;
          canvas_data: any;
          configuration: any;
          tags: string[];
          usage_count: number;
          is_featured: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description?: string | null;
          category?: string | null;
          thumbnail_url?: string | null;
          canvas_data?: any;
          configuration?: any;
          tags?: string[];
          usage_count?: number;
          is_featured?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string | null;
          category?: string | null;
          thumbnail_url?: string | null;
          canvas_data?: any;
          configuration?: any;
          tags?: string[];
          usage_count?: number;
          is_featured?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      agent_statistics: {
        Row: {
          id: string;
          agent_id: string;
          date: string;
          executions: number;
          success_count: number;
          error_count: number;
          avg_response_time: number;
          total_tokens_used: number;
          unique_users: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          agent_id: string;
          date: string;
          executions?: number;
          success_count?: number;
          error_count?: number;
          avg_response_time?: number;
          total_tokens_used?: number;
          unique_users?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          agent_id?: string;
          date?: string;
          executions?: number;
          success_count?: number;
          error_count?: number;
          avg_response_time?: number;
          total_tokens_used?: number;
          unique_users?: number;
          created_at?: string;
        };
      };
      chat_messages: {
        Row: {
          id: string;
          user_id: string;
          agent_id: string | null;
          message: string;
          response: string | null;
          is_from_user: boolean;
          session_id: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          agent_id?: string | null;
          message: string;
          response?: string | null;
          is_from_user: boolean;
          session_id?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          agent_id?: string | null;
          message?: string;
          response?: string | null;
          is_from_user?: boolean;
          session_id?: string | null;
          created_at?: string;
        };
      };
    };
  };
}

// Helper functions
export const supabaseHelpers = {
  // Auth helpers
  async signUp(email: string, password: string, username: string) {
    try {
      // Validate inputs
      if (!email || !password || !username) {
        throw new Error('All fields are required');
      }

      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters');
      }

      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password: password.trim(),
        options: {
          data: {
            username: username.trim(),
          },
        },
      });

      if (error) {
        console.error('Signup error:', error);
        return { data, error };
      }

      if (data.user) {
        // Wait for auth session to be established
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Create profile after successful signup
        try {
          await this.createProfile(data.user.id, username.trim());
        } catch (profileError) {
          console.error('Profile creation error:', profileError);
          // Don't fail the signup if profile creation fails
        }
      }

      return { data, error };
    } catch (err: any) {
      console.error('Signup exception:', err);
      return { data: null, error: { message: err.message || 'Signup failed' } };
    }
  },

  async signIn(email: string, password: string) {
    return await supabase.auth.signInWithPassword({
      email,
      password,
    });
  },

  async signOut() {
    return await supabase.auth.signOut();
  },

  async getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  },

  // Profile helpers
  async createProfile(userId: string, username: string) {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .insert({
          user_id: userId,
          username,
        });
      
      if (error) {
        console.error('Error creating profile:', error);
      }
      
      return { data, error };
    } catch (err) {
      console.error('Exception creating profile:', err);
      return { data: null, error: err };
    }
  },

  async getProfile(userId?: string) {
    const user = userId || (await this.getCurrentUser())?.id;
    if (!user) return null;

    const { data, error } = await supabase
      .from('profiles')
      .select(`
        *,
        user_badges (
          badge_id,
          earned_at,
          badges (*)
        )
      `)
      .eq('user_id', user)
      .single();

    return { data, error };
  },

  async updateProfile(updates: any) {
    const user = await this.getCurrentUser();
    if (!user) return null;

    return await supabase
      .from('profiles')
      .update(updates)
      .eq('user_id', user.id);
  },

  // Agent helpers
  async getAgents(filters?: {
    category?: string;
    isPublic?: boolean;
    userId?: string;
    featured?: boolean;
  }) {
    let query = supabase
      .from('ai_agents')
      .select(`
        *,
        profiles!ai_agents_user_id_fkey (
          username,
          display_name,
          avatar_url
        ),
        marketplace_listings (*)
      `);

    if (filters?.category) {
      query = query.eq('category', filters.category);
    }

    if (filters?.isPublic !== undefined) {
      query = query.eq('is_public', filters.isPublic);
    }

    if (filters?.userId) {
      query = query.eq('user_id', filters.userId);
    }

    if (filters?.featured) {
      query = query.eq('marketplace_listings.featured', true);
    }

    return await query.order('created_at', { ascending: false });
  },

  async createAgent(agentData: any) {
    const user = await this.getCurrentUser();
    if (!user) return null;

    return await supabase
      .from('ai_agents')
      .insert({
        ...agentData,
        user_id: (await this.getProfile())?.data?.id,
      });
  },

  async updateAgent(agentId: string, updates: any) {
    return await supabase
      .from('ai_agents')
      .update(updates)
      .eq('id', agentId);
  },

  async deleteAgent(agentId: string) {
    return await supabase
      .from('ai_agents')
      .delete()
      .eq('id', agentId);
  },

  // Marketplace helpers
  async getMarketplaceListings() {
    return await supabase
      .from('marketplace_listings')
      .select(`
        *,
        ai_agents!marketplace_listings_agent_id_fkey (
          *,
          profiles!ai_agents_user_id_fkey (
            username,
            display_name,
            avatar_url
          )
        )
      `)
      .order('created_at', { ascending: false });
  },

  // Review helpers
  async getReviews(agentId: string) {
    return await supabase
      .from('reviews')
      .select(`
        *,
        profiles!reviews_user_id_fkey (
          username,
          display_name,
          avatar_url
        )
      `)
      .eq('agent_id', agentId)
      .order('created_at', { ascending: false });
  },

  async createReview(agentId: string, rating: number, reviewText?: string) {
    const user = await this.getCurrentUser();
    if (!user) return null;

    const profile = await this.getProfile();
    if (!profile?.data) return null;

    return await supabase
      .from('reviews')
      .insert({
        agent_id: agentId,
        user_id: profile.data.id,
        rating,
        review_text: reviewText,
      });
  },

  // Chat helpers
  async getChatMessages(sessionId?: string) {
    const user = await this.getCurrentUser();
    if (!user) return null;

    const profile = await this.getProfile();
    if (!profile?.data) return null;

    let query = supabase
      .from('chat_messages')
      .select('*')
      .eq('user_id', profile.data.id)
      .order('created_at', { ascending: true });

    if (sessionId) {
      query = query.eq('session_id', sessionId);
    }

    return await query;
  },

  async sendMessage(message: string, agentId?: string, sessionId?: string) {
    const user = await this.getCurrentUser();
    if (!user) return null;

    const profile = await this.getProfile();
    if (!profile?.data) return null;

    return await supabase
      .from('chat_messages')
      .insert({
        user_id: profile.data.id,
        agent_id: agentId,
        message,
        is_from_user: true,
        session_id: sessionId,
      });
  },

  // Statistics helpers
  async getAgentStatistics(agentId: string, days: number = 30) {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    return await supabase
      .from('agent_statistics')
      .select('*')
      .eq('agent_id', agentId)
      .gte('date', startDate.toISOString().split('T')[0])
      .order('date', { ascending: true });
  },

  // Badge helpers
  async getBadges() {
    return await supabase
      .from('badges')
      .select('*')
      .order('name');
  },

  async getUserBadges(userId?: string) {
    const user = userId || (await this.getCurrentUser())?.id;
    if (!user) return null;

    const profile = await this.getProfile(user);
    if (!profile?.data) return null;

    return await supabase
      .from('user_badges')
      .select(`
        *,
        badges (*)
      `)
      .eq('user_id', profile.data.id)
      .order('earned_at', { ascending: false });
  },

  // Template helpers
  async getTemplates() {
    return await supabase
      .from('agent_templates')
      .select('*')
      .order('usage_count', { ascending: false });
  },

  async getFeaturedTemplates() {
    return await supabase
      .from('agent_templates')
      .select('*')
      .eq('is_featured', true)
      .order('usage_count', { ascending: false });
  },

  // OAuth helpers
  async getOAuthConnections(userId?: string) {
    const user = userId || (await this.getCurrentUser())?.id;
    if (!user) return null;

    const profile = await this.getProfile(user);
    if (!profile?.data) return null;

    return await supabase
      .from('oauth_connections')
      .select('*')
      .eq('user_id', profile.data.id)
      .eq('is_active', true)
      .order('created_at', { ascending: false });
  },

  async createOAuthConnection(connectionData: {
    provider: 'discord' | 'github' | 'google' | 'twitter' | 'linkedin' | 'spotify';
    provider_user_id: string;
    provider_username?: string;
    provider_display_name?: string;
    provider_email?: string;
    provider_avatar_url?: string;
    access_token?: string;
    refresh_token?: string;
    token_expires_at?: string;
    provider_data?: any;
  }) {
    const user = await this.getCurrentUser();
    if (!user) return null;

    const profile = await this.getProfile();
    if (!profile?.data) return null;

    return await supabase
      .from('oauth_connections')
      .upsert({
        user_id: profile.data.id,
        ...connectionData,
        updated_at: new Date().toISOString()
      }, {
        onConflict: 'user_id,provider'
      });
  },

  async updateOAuthConnection(provider: string, updates: any) {
    const user = await this.getCurrentUser();
    if (!user) return null;

    const profile = await this.getProfile();
    if (!profile?.data) return null;

    return await supabase
      .from('oauth_connections')
      .update(updates)
      .eq('user_id', profile.data.id)
      .eq('provider', provider);
  },

  async deleteOAuthConnection(provider: string) {
    const user = await this.getCurrentUser();
    if (!user) return null;

    const profile = await this.getProfile();
    if (!profile?.data) return null;

    return await supabase
      .from('oauth_connections')
      .delete()
      .eq('user_id', profile.data.id)
      .eq('provider', provider);
  },

  async setPrimaryOAuthConnection(provider: string) {
    const user = await this.getCurrentUser();
    if (!user) return null;

    const profile = await this.getProfile();
    if (!profile?.data) return null;

    // First, set all connections to non-primary
    await supabase
      .from('oauth_connections')
      .update({ is_primary: false })
      .eq('user_id', profile.data.id);

    // Then set the selected one as primary
    return await supabase
      .from('oauth_connections')
      .update({ is_primary: true })
      .eq('user_id', profile.data.id)
      .eq('provider', provider);
  },
};

export default supabase;
