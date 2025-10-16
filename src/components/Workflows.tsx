export default function Workflows() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Workflows</h1>
          <p className="text-slate-400">
            Create and manage automated workflows to streamline your AI agent operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Data Processing</h3>
            <p className="text-slate-400 text-sm mb-4">
              Automate data collection, processing, and analysis workflows.
            </p>
            <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
              Create Workflow →
            </button>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Quality Assurance</h3>
            <p className="text-slate-400 text-sm mb-4">
              Automated testing and validation workflows for your AI agents.
            </p>
            <button className="text-green-400 hover:text-green-300 text-sm font-medium">
              Create Workflow →
            </button>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Scheduled Tasks</h3>
            <p className="text-slate-400 text-sm mb-4">
              Set up recurring tasks and automated maintenance workflows.
            </p>
            <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
              Create Workflow →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
