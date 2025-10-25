import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

type SubscriptionType = 'Lunch' | 'Boost' | 'Scale';

export const useSubscription = () => {
  const { user, profile } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const subscription = profile?.subscription || 'Lunch';

  const createSubscription = async (planType: SubscriptionType) => {
    try {
      setLoading(true);
      setError(null);

      // Mettre à jour le profil utilisateur avec le nouveau plan
      const { error } = await supabase
        .from('user_profiles')
        .update({ subscription: planType })
        .eq('user_id', user?.id);

      if (error) throw error;

      // Recharger la page pour mettre à jour le profil
      window.location.reload();
    } catch (err: any) {
      console.error('Error updating subscription:', err);
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getPlanPrice = (planType: string): number => {
    switch (planType) {
      case 'Lunch': return 0; // Gratuit
      case 'Boost': return 20; // 20 USD
      case 'Scale': return 35; // 35 USD
      default: return 0;
    }
  };

  const getPlanFeatures = (planType: string): string[] => {
    switch (planType) {
      case 'Lunch':
        return ['Accès de base', 'Support email', '3 projets max', 'Gratuit'];
      case 'Boost':
        return ['Tout de Lunch', 'Support prioritaire', '10 projets max', 'API access', '20 USD/mois'];
      case 'Scale':
        return ['Tout de Boost', 'Support 24/7', 'Projets illimités', 'Analytics avancés', '35 USD/mois'];
      default:
        return [];
    }
  };

  const getPlanColor = (planType: string): string => {
    switch (planType) {
      case 'Lunch': return 'border-green-500 bg-green-500/10';
      case 'Boost': return 'border-blue-500 bg-blue-500/10';
      case 'Scale': return 'border-purple-500 bg-purple-500/10';
      default: return 'border-gray-500 bg-gray-500/10';
    }
  };

  const isActive = subscription !== null;
  const isLunch = subscription === 'Lunch';
  const isBoost = subscription === 'Boost';
  const isScale = subscription === 'Scale';

  return {
    subscription,
    loading,
    error,
    createSubscription,
    getPlanPrice,
    getPlanFeatures,
    getPlanColor,
    isActive,
    isLunch,
    isBoost,
    isScale
  };
};