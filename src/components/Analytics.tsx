import { useState } from 'react';

export default function Analytics() {
  const [timeRange, setTimeRange] = useState('7d');

  const metrics = [
    { label: 'Total Requests', value: '15,432', change: '+12.5%', positive: true },
    { label: 'Success Rate', value: '96.5%', change: '+0.3%', positive: true },
    { label: 'Avg Response Time', value: '245ms', change: '-8.2%', positive: true },
    { label: 'Error Rate', value: '3.5%', change: '-0.8%', positive: true },
    { label: 'Active Users', value: '1,247', change: '+5.2%', positive: true },
    { label: 'Revenue', value: '$2,847', change: '+18.3%', positive: true }
  ];

  const topAgents = [
    { name: 'Email Assistant', requests: 5420, successRate: 98.2 },
    { name: 'Data Processor', requests: 3890, successRate: 95.8 },
    { name: 'Content Generator', requests: 2156, successRate: 92.1 },
    { name: 'Support Bot', requests: 1987, successRate: 96.5 },
    { name: 'Analytics Agent', requests: 1979, successRate: 94.3 }
  ];

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Analytics</h1>
              <p className="text-slate-400">
                Comprehensive insights into your AI agents' performance and usage.
              </p>
            </div>
            <div className="flex space-x-2">
              {['24h', '7d', '30d', '90d'].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    timeRange === range
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <p className="text-slate-400 text-sm">{metric.label}</p>
                <span className={`text-xs font-medium ${
                  metric.positive ? 'text-green-400' : 'text-red-400'
                }`}>
                  {metric.change}
                </span>
              </div>
              <p className="text-2xl font-bold text-white">{metric.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">Request Volume</h3>
            <div className="h-64 flex items-end justify-between space-x-2">
              {[65, 78, 82, 75, 88, 92, 85, 78, 95, 88, 92, 98].map((height, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className="w-8 bg-blue-500 rounded-t"
                    style={{ height: `${height}%` }}
                  ></div>
                  <span className="text-xs text-slate-400 mt-2">
                    {index + 1}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-between text-sm text-slate-400">
              <span>Jan 1</span>
              <span>Jan 12</span>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">Response Time Distribution</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-sm">0-100ms</span>
                <div className="flex-1 mx-4">
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '35%' }}></div>
                  </div>
                </div>
                <span className="text-white text-sm">35%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-sm">100-500ms</span>
                <div className="flex-1 mx-4">
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <span className="text-white text-sm">45%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-sm">500ms-1s</span>
                <div className="flex-1 mx-4">
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
                <span className="text-white text-sm">15%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-sm">1s+</span>
                <div className="flex-1 mx-4">
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: '5%' }}></div>
                  </div>
                </div>
                <span className="text-white text-sm">5%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">Top Performing Agents</h3>
            <div className="space-y-4">
              {topAgents.map((agent, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-blue-400 font-medium text-sm">#{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{agent.name}</h4>
                      <p className="text-slate-400 text-sm">{agent.requests.toLocaleString()} requests</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-medium">{agent.successRate}%</p>
                    <p className="text-slate-400 text-sm">success rate</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">Error Analysis</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <div>
                  <h4 className="text-white font-medium">Rate Limit Exceeded</h4>
                  <p className="text-slate-400 text-sm">API calls exceeded limits</p>
                </div>
                <span className="text-red-400 font-medium">45%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <div>
                  <h4 className="text-white font-medium">Invalid Input</h4>
                  <p className="text-slate-400 text-sm">Malformed or missing data</p>
                </div>
                <span className="text-red-400 font-medium">28%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <div>
                  <h4 className="text-white font-medium">Timeout</h4>
                  <p className="text-slate-400 text-sm">Request processing timeout</p>
                </div>
                <span className="text-red-400 font-medium">15%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <div>
                  <h4 className="text-white font-medium">Other</h4>
                  <p className="text-slate-400 text-sm">Miscellaneous errors</p>
                </div>
                <span className="text-red-400 font-medium">12%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
