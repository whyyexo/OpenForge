import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

interface StripeButtonProps {
  planName: string;
  priceId: string;
  className?: string;
}

const StripeButton: React.FC<StripeButtonProps> = ({ 
  planName, 
  priceId, 
  className = '' 
}) => {
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    try {
      setLoading(true);
      
      // Vérifier si l'utilisateur est connecté
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        // Rediriger vers la page de connexion
        window.location.href = '/dashboard/sign-in';
        return;
      }

      // Créer une session Stripe Checkout
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: priceId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { url } = await response.json();
      
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('Error creating checkout session. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleSubscribe}
      disabled={loading}
      className={`w-full py-3 px-4 rounded-lg font-medium transition-colors disabled:opacity-50 ${className}`}
    >
      {loading ? 'Processing...' : `Subscribe to ${planName}`}
    </button>
  );
};

export default StripeButton;