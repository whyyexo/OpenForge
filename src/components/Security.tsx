export default function Security() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Security</h1>
          <p className="text-slate-400">
            Manage your account security settings and authentication methods.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">Password</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-white font-medium mb-2">Current Password</label>
                  <input 
                    type="password" 
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white"
                    placeholder="Enter current password"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">New Password</label>
                  <input 
                    type="password" 
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white"
                    placeholder="Enter new password"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Confirm New Password</label>
                  <input 
                    type="password" 
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white"
                    placeholder="Confirm new password"
                  />
                </div>
                <button className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium">
                  Update Password
                </button>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">Two-Factor Authentication</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                  <div>
                    <h4 className="text-white font-medium">Authenticator App</h4>
                    <p className="text-slate-400 text-sm">Use an app like Google Authenticator</p>
                  </div>
                  <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-full">Enabled</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                  <div>
                    <h4 className="text-white font-medium">SMS Backup</h4>
                    <p className="text-slate-400 text-sm">Receive codes via text message</p>
                  </div>
                  <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 text-xs rounded-full">Not Set</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                  <div>
                    <h4 className="text-white font-medium">Recovery Codes</h4>
                    <p className="text-slate-400 text-sm">Backup codes for account recovery</p>
                  </div>
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                    Generate
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">Active Sessions</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                  <div>
                    <h4 className="text-white text-sm font-medium">Current Session</h4>
                    <p className="text-slate-400 text-xs">Chrome on Windows • Paris, France</p>
                  </div>
                  <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-full">Active</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                  <div>
                    <h4 className="text-white text-sm font-medium">Mobile App</h4>
                    <p className="text-slate-400 text-xs">iOS App • Paris, France</p>
                  </div>
                  <button className="text-red-400 hover:text-red-300 text-sm font-medium">
                    Revoke
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                  <div>
                    <h4 className="text-white text-sm font-medium">Safari on Mac</h4>
                    <p className="text-slate-400 text-xs">Safari on macOS • Paris, France</p>
                  </div>
                  <button className="text-red-400 hover:text-red-300 text-sm font-medium">
                    Revoke
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">API Security</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium">IP Whitelist</h4>
                    <p className="text-slate-400 text-sm">Restrict API access to specific IPs</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium">Rate Limiting</h4>
                    <p className="text-slate-400 text-sm">Enable automatic rate limiting</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium">Audit Logs</h4>
                    <p className="text-slate-400 text-sm">Log all API access attempts</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">Danger Zone</h3>
              <div className="space-y-3">
                <button className="w-full p-3 bg-yellow-600/10 hover:bg-yellow-600/20 text-yellow-400 rounded-lg transition-colors text-sm font-medium">
                  Export Account Data
                </button>
                <button className="w-full p-3 bg-red-600/10 hover:bg-red-600/20 text-red-400 rounded-lg transition-colors text-sm font-medium">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
