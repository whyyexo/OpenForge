import React from 'react';
import { useSubscription } from '../hooks/useSubscription';

const SubscriptionManager: React.FC = () => {
  const { 
    subscription, 
    loading, 
    error, 
    createSubscription, 
    getPlanPrice, 
    getPlanFeatures,
    getPlanColor
  } = useSubscription();

  const handleCreateSubscription = async (planType: 'Lunch' | 'Boost' | 'Scale') => {
    try {
      await createSubscription(planType);
    } catch (err) {
      console.error('Error updating subscription:', err);
    }
  };

  if (loading) {
    return (
      <div className="bg-[#181B22] rounded-lg p-6 border border-gray-700 shadow-sm">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-700 rounded mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#181B22] rounded-lg p-6 border border-gray-700 shadow-sm">
      <h3 className="text-lg font-semibold text-[#EAEAEA] mb-6">Gestion des abonnements</h3>
      
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-md p-3 mb-4">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      {/* Abonnement actuel */}
      <div className="mb-6">
        <h4 className="text-md font-medium text-[#EAEAEA] mb-3">Abonnement actuel</h4>
        <div className={`p-4 rounded-lg border ${getPlanColor(subscription)}`}>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold text-[#EAEAEA]">{subscription}</p>
              <p className="text-sm text-gray-400">
                {getPlanPrice(subscription) === 0 ? 'Gratuit' : `${getPlanPrice(subscription)} USD/mois`}
              </p>
            </div>
            <div className="text-right">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <p className="text-sm text-gray-400 mt-1">Actif</p>
            </div>
          </div>
        </div>
      </div>

      {/* Plans disponibles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {(['Lunch', 'Boost', 'Scale'] as const).map((plan) => (
          <div
            key={plan}
            className={`p-4 rounded-lg border cursor-pointer transition-all hover:scale-105 ${
              subscription === plan
                ? getPlanColor(plan)
                : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
            }`}
            onClick={() => handleCreateSubscription(plan)}
          >
            <div className="text-center">
              <h5 className="text-lg font-semibold text-[#EAEAEA] mb-2">{plan}</h5>
              <p className="text-2xl font-bold text-[#EAEAEA] mb-2">
                {getPlanPrice(plan) === 0 ? 'Gratuit' : `${getPlanPrice(plan)} USD`}
                {getPlanPrice(plan) > 0 && <span className="text-sm text-gray-400">/mois</span>}
              </p>
              <ul className="text-sm text-gray-400 space-y-1 mb-4">
                {getPlanFeatures(plan).map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
              <button
                className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
                  subscription === plan
                    ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                    : 'bg-[#00E38C] text-black hover:bg-[#00E38C]/90'
                }`}
                disabled={subscription === plan || loading}
              >
                {subscription === plan ? 'Plan actuel' : 'Choisir ce plan'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Informations supplémentaires */}
      <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
        <h5 className="text-sm font-medium text-[#EAEAEA] mb-2">Informations importantes</h5>
        <ul className="text-xs text-gray-400 space-y-1">
          <li>• Lunch est gratuit et accessible à tous</li>
          <li>• Les changements d'abonnement sont effectifs immédiatement</li>
          <li>• Les fonctionnalités sont mises à jour en temps réel</li>
          <li>• Pas de frais cachés, facturation transparente</li>
        </ul>
      </div>
    </div>
  );
};

export default SubscriptionManager;