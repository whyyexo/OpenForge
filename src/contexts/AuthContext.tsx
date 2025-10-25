import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { User } from '@supabase/supabase-js';

interface Profile {
  id: string;
  user_id: string;
  username: string;
  full_name: string;
  email: string;
  role: string;
  subscription: string;
  created_at: string;
}

interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  loading: boolean;
  isAdmin: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
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
  const [loading, setLoading] = useState(true);

  // Fetch user profile
  const fetchProfile = async (userId: string) => {
    try {
      console.log('🔍 Fetching profile for user:', userId);
      
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (error) {
        console.log('❌ Error fetching profile:', error);
        // Créer un profil temporaire si pas trouvé
        return {
          id: userId,
          user_id: userId,
          username: 'user',
          full_name: 'User',
          email: '',
          role: 'member',
          subscription: 'Lunch',
          created_at: new Date().toISOString()
        };
      }

      console.log('✅ Profile loaded:', data);
      return data;
    } catch (err) {
      console.log('❌ Error in fetchProfile:', err);
      // Créer un profil temporaire en cas d'erreur
      return {
        id: userId,
        user_id: userId,
        username: 'user',
        full_name: 'User',
        email: '',
        role: 'member',
        subscription: 'Lunch',
        created_at: new Date().toISOString()
      };
    }
  };

  // Refresh profile
  const refreshProfile = async () => {
    if (user) {
      const profileData = await fetchProfile(user.id);
      setProfile(profileData);
    }
  };

  // Sign in
  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    return { error };
  };

  // Sign out
  const signOut = async () => {
    await supabase.auth.signOut();
  };

  // Check if user is admin
  const isAdmin = profile?.role === 'admin';

  useEffect(() => {
    let mounted = true;
    let timeoutId: NodeJS.Timeout;

    // Timeout pour éviter le loading infini
    timeoutId = setTimeout(() => {
      if (mounted) {
        console.log('⏰ Loading timeout - forcing setLoading(false)');
        setLoading(false);
      }
    }, 10000); // 10 secondes max

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!mounted) return;
      
      console.log('🔍 Initial session:', session?.user?.email);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        fetchProfile(session.user.id).then((profileData) => {
          if (mounted) {
            clearTimeout(timeoutId);
            setProfile(profileData);
            setLoading(false);
          }
        });
      } else {
        clearTimeout(timeoutId);
        setLoading(false);
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (!mounted) return;
        
        console.log('🔄 Auth state changed:', event);
        console.log('👤 User:', session?.user?.email);
        
        setUser(session?.user ?? null);
        
        if (session?.user) {
          const profileData = await fetchProfile(session.user.id);
          if (mounted) {
            setProfile(profileData);
            setLoading(false);
          }
        } else {
          if (mounted) {
            setProfile(null);
            setLoading(false);
          }
        }
      }
    );

    return () => {
      mounted = false;
      clearTimeout(timeoutId);
      subscription.unsubscribe();
    };
  }, []);

  const value = {
    user,
    profile,
    loading,
    isAdmin,
    signIn,
    signOut,
    refreshProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};