import { Check, Zap, Rocket, Coffee } from 'lucide-react';
import { useState } from 'react';

const plans = [
  {
    id: 'lunch',
    name: 'Lunch',
    icon: Coffee,
    price: 0,
    description: 'Perfect for getting started',
    features: [
      '3 AI agents',
      '1,000 executions/month',
      'Basic analytics',
      'Community support',
      'Public marketplace access',
    ],
    color: 'from-green-500 to-emerald-600',
    popular: false,
  },
  {
    id: 'scale',
    name: 'Scale',
    icon: Rocket,
    price: 49,
    description: 'For growing teams',
    features: [
      'Unlimited AI agents',
      '50,000 executions/month',
      'Advanced analytics',
      'Priority support',
      'Private agents',
      'API access',
      'Custom integrations',
      'Team collaboration',
    ],
    color: 'from-blue-500 to-cyan-600',
    popular: true,
  },
  {
    id: 'boost',
    name: 'Boost',
    icon: Zap,
    price: null,
    description: 'Pay only for what you use',
    features: [
      'Everything in Scale',
      'Pay-per-execution pricing',
      'Custom rate limits',
      'Dedicated support',
      'SLA guarantee',
      'White-label options',
    ],
    color: 'from-purple-500 to-pink-600',
    popular: false,
  },
];

export default function Pricing() {
  const [boostUsage, setBoostUsage] = useState(100000);
  const basePrice = 0.0005;
  const calculatedPrice = (boostUsage * basePrice).toFixed(2);

  return (
    <div className="flex flex-col h-screen bg-slate-900 overflow-auto">
      <div className="px-6 py-6 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-2">Pricing</h1>
          <p className="text-slate-400">Choose the perfect plan for your needs</p>
        </div>
      </div>

      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <div
                  key={plan.id}
                  className={`relative bg-slate-800 border rounded-2xl p-8 transition-all hover:scale-[1.02] ${
                    plan.popular
                      ? 'border-blue-500 shadow-xl shadow-blue-500/20'
                      : 'border-slate-700'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="px-4 py-1 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full text-xs font-semibold text-white">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-400 text-sm mb-6">{plan.description}</p>

                  <div className="mb-6">
                    {plan.price !== null ? (
                      <div className="flex items-baseline">
                        <span className="text-5xl font-bold text-white">${plan.price}</span>
                        <span className="text-slate-400 ml-2">/month</span>
                      </div>
                    ) : (
                      <div className="text-3xl font-bold text-white">Custom</div>
                    )}
                  </div>

                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition-all mb-8 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white'
                        : 'bg-slate-700 hover:bg-slate-600 text-white'
                    }`}
                  >
                    {plan.price === 0 ? 'Get Started' : 'Upgrade Now'}
                  </button>

                  <div className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Boost Plan Calculator</h3>
                <p className="text-slate-400">Adjust the slider to see your estimated costs</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-sm font-medium text-slate-300">
                      Estimated Monthly Executions
                    </label>
                    <span className="text-lg font-bold text-white">
                      {boostUsage.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="1000000"
                    step="10000"
                    value={boostUsage}
                    onChange={(e) => setBoostUsage(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-2">
                    <span>10K</span>
                    <span>1M</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                    <p className="text-sm text-slate-400 mb-1">Price per execution</p>
                    <p className="text-2xl font-bold text-white">${basePrice}</p>
                  </div>
                  <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                    <p className="text-sm text-slate-400 mb-1">Total cost</p>
                    <p className="text-2xl font-bold text-white">${calculatedPrice}</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h4 className="font-semibold text-white mb-4">Boost Plan Includes</h4>
                <div className="space-y-3">
                  {plans[2].features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-semibold transition-all">
                  Get Started with Boost
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold text-white mb-4">Need a custom solution?</h3>
            <p className="text-slate-400 mb-6">
              Contact our sales team for enterprise pricing and custom integrations
            </p>
            <button className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(to right, #a855f7, #ec4899);
          cursor: pointer;
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.5);
        }

        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(to right, #a855f7, #ec4899);
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.5);
        }
      `}</style>
    </div>
  );
}
