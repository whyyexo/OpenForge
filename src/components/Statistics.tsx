import { TrendingUp, TrendingDown, Activity, Users, Zap, Clock } from 'lucide-react';

const stats = [
  { label: 'Total Executions', value: '24,531', change: '+12.5%', up: true, icon: Activity },
  { label: 'Active Users', value: '1,834', change: '+8.2%', up: true, icon: Users },
  { label: 'Success Rate', value: '98.4%', change: '+2.1%', up: true, icon: Zap },
  { label: 'Avg Response Time', value: '245ms', change: '-15.3%', up: true, icon: Clock },
];

const agentPerformance = [
  { name: 'Customer Support Bot', executions: 8423, success: 99.2, tokens: 2.4e6, color: 'from-green-500 to-emerald-600' },
  { name: 'Data Analysis Agent', executions: 5621, success: 97.8, tokens: 4.1e6, color: 'from-blue-500 to-cyan-600' },
  { name: 'Social Media Manager', executions: 4892, success: 98.9, tokens: 1.8e6, color: 'from-purple-500 to-pink-600' },
  { name: 'Code Review Assistant', executions: 3215, success: 96.5, tokens: 3.2e6, color: 'from-orange-500 to-red-600' },
  { name: 'Email Campaign Generator', executions: 2380, success: 99.1, tokens: 1.5e6, color: 'from-yellow-500 to-orange-600' },
];

const timelineData = [
  { day: 'Mon', executions: 3200, success: 3150, errors: 50 },
  { day: 'Tue', executions: 3800, success: 3740, errors: 60 },
  { day: 'Wed', executions: 4200, success: 4130, errors: 70 },
  { day: 'Thu', executions: 3600, success: 3540, errors: 60 },
  { day: 'Fri', executions: 4500, success: 4425, errors: 75 },
  { day: 'Sat', executions: 2800, success: 2760, errors: 40 },
  { day: 'Sun', executions: 2400, success: 2370, errors: 30 },
];

export default function Statistics() {
  const maxExecutions = Math.max(...timelineData.map(d => d.executions));

  return (
    <div className="flex flex-col h-screen bg-slate-900 overflow-auto">
      <div className="px-6 py-6 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-2">Statistics</h1>
          <p className="text-slate-400">Monitor your AI agents performance and usage</p>
        </div>
      </div>

      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="w-8 h-8 text-blue-400" />
                    <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${
                      stat.up ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
                    }`}>
                      {stat.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      {stat.change}
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-sm text-slate-400">{stat.label}</p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Weekly Activity</h3>
              <div className="space-y-4">
                {timelineData.map((data) => (
                  <div key={data.day}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-300">{data.day}</span>
                      <span className="text-sm text-slate-400">{data.executions.toLocaleString()}</span>
                    </div>
                    <div className="relative h-8 bg-slate-900 rounded-lg overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg transition-all"
                        style={{ width: `${(data.success / maxExecutions) * 100}%` }}
                      />
                      <div
                        className="absolute inset-y-0 bg-gradient-to-r from-red-600 to-red-500 rounded-r-lg transition-all"
                        style={{
                          left: `${(data.success / maxExecutions) * 100}%`,
                          width: `${(data.errors / maxExecutions) * 100}%`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-6 mt-6 pt-6 border-t border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <span className="text-sm text-slate-400">Success</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="text-sm text-slate-400">Errors</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Token Usage by Agent</h3>
              <div className="space-y-6">
                {agentPerformance.map((agent, idx) => {
                  const maxTokens = Math.max(...agentPerformance.map(a => a.tokens));
                  const percentage = (agent.tokens / maxTokens) * 100;

                  return (
                    <div key={idx}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-white truncate">{agent.name}</span>
                        <span className="text-sm text-slate-400">{(agent.tokens / 1e6).toFixed(1)}M</span>
                      </div>
                      <div className="relative h-3 bg-slate-900 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${agent.color} rounded-full transition-all`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Agent Performance</h3>
              <select className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-300">Agent Name</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-slate-300">Executions</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-slate-300">Success Rate</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-slate-300">Tokens Used</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-slate-300">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {agentPerformance.map((agent, idx) => (
                    <tr key={idx} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${agent.color} flex-shrink-0`} />
                          <span className="text-sm font-medium text-white">{agent.name}</span>
                        </div>
                      </td>
                      <td className="text-right py-4 px-4 text-sm text-white font-medium">
                        {agent.executions.toLocaleString()}
                      </td>
                      <td className="text-right py-4 px-4">
                        <span className="text-sm font-medium text-green-400">{agent.success}%</span>
                      </td>
                      <td className="text-right py-4 px-4 text-sm text-slate-300">
                        {(agent.tokens / 1e6).toFixed(2)}M
                      </td>
                      <td className="text-right py-4 px-4">
                        <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-semibold">
                          Active
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
