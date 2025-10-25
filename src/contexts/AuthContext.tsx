import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase, Profile } from '../lib/supabase';

interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  session: Session | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    const initializeAuth = async () => {
      try {
        console.log('🔍 Checking existing session...');
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('❌ Session error:', error);
          setLoading(false);
          return;
        }

        if (session?.user) {
          console.log('✅ User already logged in:', session.user.email);
          setSession(session);
          setUser(session.user);
          await fetchProfile(session.user.id);
        } else {
          console.log('ℹ️ No existing session');
          setLoading(false);
        }
      } catch (error) {
        console.error('❌ Auth initialization error:', error);
        setLoading(false);
      }
    };

    initializeAuth();

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('🔄 Auth state changed:', event);
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        console.log('👤 User logged in:', session.user.email);
        await fetchProfile(session.user.id);
      } else {
        console.log('👋 User logged out');
        setProfile(null);
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchProfile = async (userId: string) => {
    try {
      console.log('🔍 Fetching profile for user:', userId);
      
      // Essayer d'abord avec user_id
      let { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .single();

      // Si pas trouvé, essayer avec l'ID direct
      if (error && error.code === 'PGRST116') {
        console.log('🔄 Trying with direct ID...');
        const { data: data2, error: error2 } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', userId)
          .single();
        
        if (!error2) {
          data = data2;
          error = null;
        }
      }

      if (error) {
        console.error('❌ Error fetching profile:', error);
        // Créer un profil temporaire avec les infos de base
        const tempProfile = {
          id: userId,
          user_id: userId,
          username: user?.email?.split('@')[0] || 'user',
          display_name: user?.email?.split('@')[0] || 'User',
          is_admin: false,
          subscription_tier: 'lunch',
          is_active: true,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };
        console.log('🔧 Using temporary profile:', tempProfile);
        setProfile(tempProfile);
        setLoading(false); // Important : arrêter le loading
      } else {
        console.log('✅ Profile loaded:', data);
        console.log('🔑 Admin status:', data.is_admin);
        console.log('👤 Username:', data.username);
        setProfile(data);
      }
    } catch (error) {
      console.error('❌ Error fetching profile:', error);
      // Profil de fallback
      const fallbackProfile = {
        id: userId,
        user_id: userId,
        username: user?.email?.split('@')[0] || 'user',
        display_name: user?.email?.split('@')[0] || 'User',
        is_admin: false,
        subscription_tier: 'lunch',
        is_active: true
      };
      setProfile(fallbackProfile);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { error };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const isAdmin = profile?.is_admin || false;

  const value = {
    user,
    profile,
    session,
    loading,
    signIn,
    signOut,
    isAdmin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
