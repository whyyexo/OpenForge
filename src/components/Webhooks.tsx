export default function Webhooks() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Webhooks</h1>
          <p className="text-slate-400">
            Configure webhooks to receive real-time notifications about your AI agent activities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-white">Active Webhooks</h3>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                Add Webhook
              </button>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-slate-700/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-medium">Agent Completion</h4>
                  <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-full">Active</span>
                </div>
                <p className="text-slate-400 text-sm mb-2">https://api.example.com/webhooks/agent-complete</p>
                <p className="text-slate-500 text-xs">Last triggered: 2 minutes ago</p>
              </div>

              <div className="p-4 bg-slate-700/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-medium">Error Notifications</h4>
                  <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-full">Active</span>
                </div>
                <p className="text-slate-400 text-sm mb-2">https://api.example.com/webhooks/errors</p>
                <p className="text-slate-500 text-xs">Last triggered: 1 hour ago</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">Webhook Events</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <div>
                  <h4 className="text-white text-sm font-medium">agent.completed</h4>
                  <p className="text-slate-400 text-xs">Triggered when an agent finishes processing</p>
                </div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <div>
                  <h4 className="text-white text-sm font-medium">agent.failed</h4>
                  <p className="text-slate-400 text-xs">Triggered when an agent encounters an error</p>
                </div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <div>
                  <h4 className="text-white text-sm font-medium">workflow.started</h4>
                  <p className="text-slate-400 text-xs">Triggered when a workflow begins execution</p>
                </div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <div>
                  <h4 className="text-white text-sm font-medium">usage.threshold</h4>
                  <p className="text-slate-400 text-xs">Triggered when usage limits are reached</p>
                </div>
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
