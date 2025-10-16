export default function Performance() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Performance</h1>
          <p className="text-slate-400">
            Monitor and optimize your AI agents' performance metrics and resource usage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">Response Times</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Average Response</span>
                <span className="text-green-400 font-medium">245ms</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">95th Percentile</span>
                <span className="text-yellow-400 font-medium">890ms</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">99th Percentile</span>
                <span className="text-red-400 font-medium">1.2s</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">Resource Usage</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">CPU Usage</span>
                <span className="text-blue-400 font-medium">23%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Memory Usage</span>
                <span className="text-blue-400 font-medium">1.2GB</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">API Calls</span>
                <span className="text-blue-400 font-medium">1,247</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">Success Rate</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Total Requests</span>
                <span className="text-white font-medium">15,432</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Successful</span>
                <span className="text-green-400 font-medium">14,891 (96.5%)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Failed</span>
                <span className="text-red-400 font-medium">541 (3.5%)</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">Cost Analysis</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">This Month</span>
                <span className="text-white font-medium">$127.43</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Last Month</span>
                <span className="text-slate-400 font-medium">$98.21</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Cost per Request</span>
                <span className="text-blue-400 font-medium">$0.008</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
