import { createClient } from '@supabase/supabase-js';

// Supabase configuration - using same credentials as FiverFlow
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://demo.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'demo-key';

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
        storageKey: 'openforge-auth'
      }
    });
  }
  return supabaseInstance;
})();

// Database types (matching FiverFlow schema)
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
          social_links: any;
          is_admin: boolean;
          first_name: string | null;
          last_name: string | null;
          phone: string | null;
          date_of_birth: string | null;
          gender: string | null;
          location: string | null;
          timezone: string | null;
          language: string;
          preferences: any;
          is_verified: boolean;
          is_active: boolean;
          last_login: string | null;
          login_count: number;
          subscription_start_date: string | null;
          subscription_end_date: string | null;
          subscription_status: string;
          email_notifications: boolean;
          push_notifications: boolean;
          sms_notifications: boolean;
          profile_visibility: string;
          show_email: boolean;
          show_phone: boolean;
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
          social_links?: any;
          is_admin?: boolean;
          first_name?: string | null;
          last_name?: string | null;
          phone?: string | null;
          date_of_birth?: string | null;
          gender?: string | null;
          location?: string | null;
          timezone?: string | null;
          language?: string;
          preferences?: any;
          is_verified?: boolean;
          is_active?: boolean;
          last_login?: string | null;
          login_count?: number;
          subscription_start_date?: string | null;
          subscription_end_date?: string | null;
          subscription_status?: string;
          email_notifications?: boolean;
          push_notifications?: boolean;
          sms_notifications?: boolean;
          profile_visibility?: string;
          show_email?: boolean;
          show_phone?: boolean;
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
          social_links?: any;
          is_admin?: boolean;
          first_name?: string | null;
          last_name?: string | null;
          phone?: string | null;
          date_of_birth?: string | null;
          gender?: string | null;
          location?: string | null;
          timezone?: string | null;
          language?: string;
          preferences?: any;
          is_verified?: boolean;
          is_active?: boolean;
          last_login?: string | null;
          login_count?: number;
          subscription_start_date?: string | null;
          subscription_end_date?: string | null;
          subscription_status?: string;
          email_notifications?: boolean;
          push_notifications?: boolean;
          sms_notifications?: boolean;
          profile_visibility?: string;
          show_email?: boolean;
          show_phone?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}

export type Profile = Database['public']['Tables']['profiles']['Row'];
