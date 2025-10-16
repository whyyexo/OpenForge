import { useAuth } from '../contexts/AuthContext';

export default function Dashboard() {
  const { profile } = useAuth();

  return (
    <div className="p-8 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl font-black text-white mb-4 tracking-tight">Dashboard</h1>
          <p className="text-xl text-white/70 font-medium">
            Welcome back, <span className="text-blue-400 font-semibold">{profile?.display_name || profile?.username || 'User'}</span>! Here's your VIP overview.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="card-vip-hover p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-white/60 text-sm font-medium uppercase tracking-wider">Total Agents</p>
                <p className="text-4xl font-black text-white mt-2">12</p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <p className="text-green-400 text-sm font-semibold">+2 this week</p>
          </div>

          <div className="card-vip-hover p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-white/60 text-sm font-medium uppercase tracking-wider">Active Workflows</p>
                <p className="text-4xl font-black text-white mt-2">8</p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-green-600/20 to-green-500/10 rounded-2xl flex items-center justify-center border border-green-500/20">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <p className="text-green-400 text-sm font-semibold">+1 this week</p>
          </div>

          <div className="card-vip-hover p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-white/60 text-sm font-medium uppercase tracking-wider">API Calls Today</p>
                <p className="text-4xl font-black text-white mt-2">1,247</p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600/20 to-purple-500/10 rounded-2xl flex items-center justify-center border border-purple-500/20">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <p className="text-green-400 text-sm font-semibold">+15% from yesterday</p>
          </div>

          <div className="card-vip-hover p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-white/60 text-sm font-medium uppercase tracking-wider">Success Rate</p>
                <p className="text-4xl font-black text-white mt-2">96.5%</p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-600/20 to-yellow-500/10 rounded-2xl flex items-center justify-center border border-yellow-500/20">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <p className="text-green-400 text-sm font-semibold">+0.3% this week</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card-vip p-8">
            <h3 className="text-2xl font-black text-white mb-8 tracking-tight">Recent Activity</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600/20 to-green-500/10 rounded-xl flex items-center justify-center border border-green-500/20">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold">Email Agent completed successfully</p>
                  <p className="text-white/60 text-sm">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold">New workflow "Data Processing" created</p>
                  <p className="text-white/60 text-sm">15 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-600/20 to-yellow-500/10 rounded-xl flex items-center justify-center border border-yellow-500/20">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold">API rate limit warning</p>
                  <p className="text-white/60 text-sm">1 hour ago</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-vip p-8">
            <h3 className="text-2xl font-black text-white mb-8 tracking-tight">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-6">
              <button className="btn-vip-secondary p-6 text-left h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-blue-500/10 rounded-xl flex items-center justify-center mb-4 border border-blue-500/20">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold text-base mb-2">Create Agent</h4>
                <p className="text-white/60 text-sm">Build a new AI agent</p>
              </button>
              <button className="btn-vip-secondary p-6 text-left h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600/20 to-green-500/10 rounded-xl flex items-center justify-center mb-4 border border-green-500/20">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold text-base mb-2">New Workflow</h4>
                <p className="text-white/60 text-sm">Automate your processes</p>
              </button>
              <button className="btn-vip-secondary p-6 text-left h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600/20 to-purple-500/10 rounded-xl flex items-center justify-center mb-4 border border-purple-500/20">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold text-base mb-2">View Analytics</h4>
                <p className="text-white/60 text-sm">Check performance metrics</p>
              </button>
              <button className="btn-vip-secondary p-6 text-left h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-600/20 to-yellow-500/10 rounded-xl flex items-center justify-center mb-4 border border-yellow-500/20">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold text-base mb-2">Browse Docs</h4>
                <p className="text-white/60 text-sm">Learn and explore</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
