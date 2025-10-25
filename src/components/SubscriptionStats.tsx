import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface SubscriptionStats {
  total: number;
  lunch: number;
  boost: number;
  scale: number;
  revenue: number;
}

const SubscriptionStats: React.FC = () => {
  const [stats, setStats] = useState<SubscriptionStats>({
    total: 0,
    lunch: 0,
    boost: 0,
    scale: 0,
    revenue: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);
      
      // Récupérer toutes les statistiques depuis user_profiles
      const { data: profiles, error } = await supabase
        .from('user_profiles')
        .select('subscription');

      if (error) throw error;

      const statsData: SubscriptionStats = {
        total: profiles?.length || 0,
        lunch: profiles?.filter(p => p.subscription === 'Lunch').length || 0,
        boost: profiles?.filter(p => p.subscription === 'Boost').length || 0,
        scale: profiles?.filter(p => p.subscription === 'Scale').length || 0,
        revenue: (profiles?.filter(p => p.subscription === 'Boost').length || 0) * 20 + 
                 (profiles?.filter(p => p.subscription === 'Scale').length || 0) * 35
      };

      setStats(statsData);
    } catch (err) {
      console.error('Error fetching subscription stats:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-[#181B22] rounded-lg p-6 border border-gray-700 shadow-sm">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-700 rounded mb-4"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-20 bg-gray-700 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#181B22] rounded-lg p-6 border border-gray-700 shadow-sm">
      <h3 className="text-lg font-semibold text-[#EAEAEA] mb-6">Statistiques des abonnements</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-800/50 rounded-lg p-4">
          <div className="text-2xl font-bold text-[#EAEAEA]">{stats.total}</div>
          <div className="text-sm text-gray-400">Total utilisateurs</div>
        </div>
        
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
          <div className="text-2xl font-bold text-green-400">{stats.lunch}</div>
          <div className="text-sm text-gray-400">Lunch (Gratuit)</div>
        </div>
        
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
          <div className="text-2xl font-bold text-blue-400">{stats.boost}</div>
          <div className="text-sm text-gray-400">Boost (20 USD)</div>
        </div>
        
        <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
          <div className="text-2xl font-bold text-purple-400">{stats.revenue}</div>
          <div className="text-sm text-gray-400">Revenus USD/mois</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg font-semibold text-green-400">Lunch</div>
              <div className="text-sm text-gray-400">Gratuit</div>
            </div>
            <div className="text-2xl font-bold text-green-400">{stats.lunch}</div>
          </div>
        </div>
        
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg font-semibold text-blue-400">Boost</div>
              <div className="text-sm text-gray-400">20 USD/mois</div>
            </div>
            <div className="text-2xl font-bold text-blue-400">{stats.boost}</div>
          </div>
        </div>
        
        <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg font-semibold text-purple-400">Scale</div>
              <div className="text-sm text-gray-400">35 USD/mois</div>
            </div>
            <div className="text-2xl font-bold text-purple-400">{stats.scale}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionStats;