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
    // Vider le cache local au démarrage
    console.log('🧹 Clearing auth cache...');
    localStorage.removeItem('openforge-auth');
    sessionStorage.clear();
    
    // Timeout de sécurité pour éviter le loading infini
    const loadingTimeout = setTimeout(() => {
      console.warn('⚠️ Loading timeout - forcing loading to false');
      setLoading(false);
    }, 5000); // 5 secondes max

    // Get initial session
    const initializeAuth = async () => {
      try {
        console.log('🔍 Checking existing session...');
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('❌ Session error:', error);
          setLoading(false);
          clearTimeout(loadingTimeout);
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
        clearTimeout(loadingTimeout);
      } catch (error) {
        console.error('❌ Auth initialization error:', error);
        setLoading(false);
        clearTimeout(loadingTimeout);
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

    return () => {
      subscription.unsubscribe();
      clearTimeout(loadingTimeout);
    };
  }, []);

  const fetchProfile = async (userId: string) => {
    try {
      console.log('🔍 Fetching profile for user:', userId);
      console.log('📧 User email:', user?.email);
      
      // Essayer d'abord avec user_id
      let { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', userId)
        .single();

      console.log('🔍 First attempt result:', { data, error });

      // Si pas trouvé, essayer avec l'ID direct
      if (error && error.code === 'PGRST116') {
        console.log('🔄 Trying with direct ID...');
        const { data: data2, error: error2 } = await supabase
          .from('user_profiles')
          .select('*')
          .eq('id', userId)
          .single();
        
        console.log('🔍 Second attempt result:', { data: data2, error: error2 });
        
        if (!error2) {
          data = data2;
          error = null;
        }
      }

      // Si toujours pas trouvé, essayer avec l'email
      if (error && user?.email) {
        console.log('🔄 Trying with email...');
        const { data: data3, error: error3 } = await supabase
          .from('user_profiles')
          .select('*')
          .eq('email', user.email)
          .single();
        
        console.log('🔍 Third attempt result:', { data: data3, error: error3 });
        
        if (!error3) {
          data = data3;
          error = null;
        }
      }

      if (error) {
        console.error('❌ Error fetching profile:', error);
        console.log('🔧 Creating new profile for user...');
        
        // Créer un nouveau profil dans la base
        const newProfile = {
          user_id: userId,
          username: user?.email?.split('@')[0] || 'user',
          display_name: user?.email?.split('@')[0] || 'User',
          is_admin: false, // Vous pourrez changer ça manuellement dans Supabase
          subscription_tier: 'lunch',
          is_active: true
        };
        
        try {
          const { data: createdProfile, error: createError } = await supabase
            .from('user_profiles')
            .insert(newProfile)
            .select()
            .single();
          
          if (createError) {
            console.error('❌ Error creating profile:', createError);
            // Utiliser un profil temporaire
            setProfile({
              ...newProfile,
              id: userId,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString()
            });
          } else {
            console.log('✅ Profile created successfully:', createdProfile);
            setProfile(createdProfile);
          }
        } catch (createErr) {
          console.error('❌ Error creating profile:', createErr);
          // Utiliser un profil temporaire
          setProfile({
            ...newProfile,
            id: userId,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          });
        }
        
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
        is_active: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
      setProfile(fallbackProfile);
      setLoading(false); // Important : arrêter le loading même en cas d'erreur
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

  const isAdmin = profile?.role === 'admin';

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
