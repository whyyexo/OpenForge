import React, { createContext, useContext, useState, useEffect } from 'react';

// Language types
export type Language = 'en' | 'fr' | 'es' | 'de';

// Translation interface
interface Translations {
  // Navigation
  docs: string;
  pricing: string;
  feedback: string;
  more: string;
  community: string;
  career: string;
  legal: string;
  tryFiverFlow: string;
  
  // Sidebar
  dashboard: string;
  admin: string;
  logout: string;
  
  // Profile dropdown
  yourDashboard: string;
  yourProfile: string;
  yourSettings: string;
  yourTeam: string;
  signOut: string;
  theme: string;
  dark: string;
  light: string;
  language: string;
  
  // Subscription plans
  lunchPlan: string;
  boostPlan: string;
  scalePlan: string;
  free: string;
  
  // Common
  loading: string;
  error: string;
  success: string;
}

// Translation data
const translations: Record<Language, Translations> = {
  en: {
    // Navigation
    docs: 'Docs',
    pricing: 'Pricing',
    feedback: 'Feedback',
    more: 'More',
    community: 'Community',
    career: 'Career',
    legal: 'Legal',
    tryFiverFlow: 'Try FiverFlow',
    
    // Sidebar
    dashboard: 'Dashboard',
    admin: 'Admin',
    logout: 'Sign out',
    
    // Profile dropdown
    yourDashboard: 'Your Dashboard',
    yourProfile: 'Your Profile',
    yourSettings: 'Your Settings',
    yourTeam: 'Your Team',
    signOut: 'Sign out',
    theme: 'Theme',
    dark: 'Dark',
    light: 'Light',
    language: 'Language',
    
    // Subscription plans
    lunchPlan: 'Lunch Plan',
    boostPlan: 'Boost Plan',
    scalePlan: 'Scale Plan',
    free: 'Free',
    
    // Common
    loading: 'Loading...',
    error: 'Error',
    success: 'Success'
  },
  fr: {
    // Navigation
    docs: 'Docs',
    pricing: 'Tarifs',
    feedback: 'Retour',
    more: 'Plus',
    community: 'Communauté',
    career: 'Carrière',
    legal: 'Légal',
    tryFiverFlow: 'Essayer FiverFlow',
    
    // Sidebar
    dashboard: 'Tableau de bord',
    admin: 'Admin',
    logout: 'Se déconnecter',
    
    // Profile dropdown
    yourDashboard: 'Votre Tableau de bord',
    yourProfile: 'Votre Profil',
    yourSettings: 'Vos Paramètres',
    yourTeam: 'Votre Équipe',
    signOut: 'Se déconnecter',
    theme: 'Thème',
    dark: 'Sombre',
    light: 'Clair',
    language: 'Langue',
    
    // Subscription plans
    lunchPlan: 'Plan Lunch',
    boostPlan: 'Plan Boost',
    scalePlan: 'Plan Scale',
    free: 'Gratuit',
    
    // Common
    loading: 'Chargement...',
    error: 'Erreur',
    success: 'Succès'
  },
  es: {
    // Navigation
    docs: 'Docs',
    pricing: 'Precios',
    feedback: 'Comentarios',
    more: 'Más',
    community: 'Comunidad',
    career: 'Carrera',
    legal: 'Legal',
    tryFiverFlow: 'Probar FiverFlow',
    
    // Sidebar
    dashboard: 'Panel',
    admin: 'Admin',
    logout: 'Cerrar sesión',
    
    // Profile dropdown
    yourDashboard: 'Tu Panel',
    yourProfile: 'Tu Perfil',
    yourSettings: 'Tus Configuraciones',
    yourTeam: 'Tu Equipo',
    signOut: 'Cerrar sesión',
    theme: 'Tema',
    dark: 'Oscuro',
    light: 'Claro',
    language: 'Idioma',
    
    // Subscription plans
    lunchPlan: 'Plan Lunch',
    boostPlan: 'Plan Boost',
    scalePlan: 'Plan Scale',
    free: 'Gratis',
    
    // Common
    loading: 'Cargando...',
    error: 'Error',
    success: 'Éxito'
  },
  de: {
    // Navigation
    docs: 'Docs',
    pricing: 'Preise',
    feedback: 'Feedback',
    more: 'Mehr',
    community: 'Community',
    career: 'Karriere',
    legal: 'Rechtliches',
    tryFiverFlow: 'FiverFlow testen',
    
    // Sidebar
    dashboard: 'Dashboard',
    admin: 'Admin',
    logout: 'Abmelden',
    
    // Profile dropdown
    yourDashboard: 'Ihr Dashboard',
    yourProfile: 'Ihr Profil',
    yourSettings: 'Ihre Einstellungen',
    yourTeam: 'Ihr Team',
    signOut: 'Abmelden',
    theme: 'Thema',
    dark: 'Dunkel',
    light: 'Hell',
    language: 'Sprache',
    
    // Subscription plans
    lunchPlan: 'Lunch Plan',
    boostPlan: 'Boost Plan',
    scalePlan: 'Scale Plan',
    free: 'Kostenlos',
    
    // Common
    loading: 'Laden...',
    error: 'Fehler',
    success: 'Erfolg'
  }
};

// Language context
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Language provider
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Load language from localStorage
    const savedLanguage = localStorage.getItem('openforge-language') as Language;
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('openforge-language', lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook to use language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
