import { Plus, Check, X, ExternalLink, Settings } from 'lucide-react';

const availableServices = [
  {
    id: 'discord',
    name: 'Discord',
    description: 'Connect your agents to Discord servers',
    icon: '💬',
    color: 'from-indigo-500 to-blue-600',
    connected: true,
    agents: 3,
  },
  {
    id: 'slack',
    name: 'Slack',
    description: 'Integrate with Slack workspaces',
    icon: '💼',
    color: 'from-purple-500 to-pink-600',
    connected: true,
    agents: 2,
  },
  {
    id: 'telegram',
    name: 'Telegram',
    description: 'Send messages via Telegram bots',
    icon: '✈️',
    color: 'from-blue-500 to-cyan-600',
    connected: false,
    agents: 0,
  },
  {
    id: 'webhook',
    name: 'Webhooks',
    description: 'Custom HTTP webhooks',
    icon: '🔗',
    color: 'from-green-500 to-emerald-600',
    connected: true,
    agents: 5,
  },
  {
    id: 'email',
    name: 'Email',
    description: 'Send automated emails',
    icon: '📧',
    color: 'from-red-500 to-orange-600',
    connected: false,
    agents: 0,
  },
  {
    id: 'twilio',
    name: 'Twilio',
    description: 'SMS and voice integration',
    icon: '📱',
    color: 'from-pink-500 to-rose-600',
    connected: false,
    agents: 0,
  },
  {
    id: 'github',
    name: 'GitHub',
    description: 'Automate GitHub workflows',
    icon: '🐙',
    color: 'from-gray-600 to-gray-700',
    connected: true,
    agents: 1,
  },
  {
    id: 'stripe',
    name: 'Stripe',
    description: 'Payment processing',
    icon: '💳',
    color: 'from-blue-600 to-indigo-700',
    connected: false,
    agents: 0,
  },
];

const connectedDetails = [
  {
    service: 'Discord',
    agentName: 'Customer Support Bot',
    status: 'active',
    lastUsed: '2 minutes ago',
    executions: 1234,
  },
  {
    service: 'Discord',
    agentName: 'Community Manager',
    status: 'active',
    lastUsed: '15 minutes ago',
    executions: 892,
  },
  {
    service: 'Slack',
    agentName: 'Team Notifier',
    status: 'active',
    lastUsed: '1 hour ago',
    executions: 456,
  },
  {
    service: 'Webhook',
    agentName: 'Data Sync Agent',
    status: 'paused',
    lastUsed: '3 days ago',
    executions: 2341,
  },
  {
    service: 'GitHub',
    agentName: 'PR Reviewer',
    status: 'active',
    lastUsed: '5 hours ago',
    executions: 189,
  },
];

export default function Connections() {
  return (
    <div className="flex flex-col h-screen bg-slate-900 overflow-auto">
      <div className="px-6 py-6 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-2">Connections</h1>
          <p className="text-slate-400">Connect your AI agents to external services</p>
        </div>
      </div>

      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Available Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {availableServices.map((service) => (
                <div
                  key={service.id}
                  className={`bg-slate-800 border rounded-xl p-5 transition-all hover:scale-[1.02] ${
                    service.connected
                      ? 'border-blue-500/50 shadow-lg shadow-blue-500/10'
                      : 'border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl`}>
                      {service.icon}
                    </div>
                    {service.connected ? (
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    ) : (
                      <button className="w-6 h-6 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center transition-colors">
                        <Plus className="w-4 h-4 text-white" />
                      </button>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{service.name}</h3>
                  <p className="text-sm text-slate-400 mb-4">{service.description}</p>
                  {service.connected ? (
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">{service.agents} agents</span>
                      <button className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1">
                        Configure
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  ) : (
                    <button className="w-full py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-medium transition-colors">
                      Connect
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
            <div className="p-6 border-b border-slate-700">
              <h2 className="text-xl font-bold text-white">Active Connections</h2>
              <p className="text-sm text-slate-400 mt-1">Manage your connected agents and services</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-900/50">
                  <tr>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-300">Service</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-300">Agent</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-300">Status</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-300">Last Used</th>
                    <th className="text-right py-4 px-6 text-sm font-semibold text-slate-300">Executions</th>
                    <th className="text-right py-4 px-6 text-sm font-semibold text-slate-300">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {connectedDetails.map((connection, idx) => {
                    const service = availableServices.find(s => s.name === connection.service);
                    return (
                      <tr key={idx} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service?.color} flex items-center justify-center text-xl`}>
                              {service?.icon}
                            </div>
                            <span className="text-sm font-medium text-white">{connection.service}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span className="text-sm text-slate-300">{connection.agentName}</span>
                        </td>
                        <td className="py-4 px-6">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            connection.status === 'active'
                              ? 'bg-green-500/10 text-green-400'
                              : 'bg-yellow-500/10 text-yellow-400'
                          }`}>
                            {connection.status}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <span className="text-sm text-slate-400">{connection.lastUsed}</span>
                        </td>
                        <td className="py-4 px-6 text-right">
                          <span className="text-sm font-medium text-white">
                            {connection.executions.toLocaleString()}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center justify-end gap-2">
                            <button className="p-2 hover:bg-slate-600 rounded-lg transition-colors" title="Configure">
                              <Settings className="w-4 h-4 text-slate-400" />
                            </button>
                            <button className="p-2 hover:bg-slate-600 rounded-lg transition-colors" title="Disconnect">
                              <X className="w-4 h-4 text-slate-400" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                <Plus className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">Need a custom integration?</h3>
                <p className="text-slate-300 mb-4">
                  Request a new service integration or build your own using our API and webhook system.
                </p>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                    Request Integration
                  </button>
                  <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors">
                    View API Docs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}