export default function Billing() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Billing</h1>
          <p className="text-slate-400">
            Manage your subscription, view usage, and update payment methods.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">Current Plan</h3>
              <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                <div>
                  <h4 className="text-white font-medium">Pro Plan</h4>
                  <p className="text-slate-400 text-sm">$29/month • Billed monthly</p>
                </div>
                <div className="text-right">
                  <p className="text-white font-medium">$29.00</p>
                  <p className="text-slate-400 text-sm">Next billing: Jan 15, 2024</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">Usage This Month</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-700/50 rounded-lg">
                  <h4 className="text-white font-medium mb-1">API Calls</h4>
                  <p className="text-2xl font-bold text-blue-400">12,847</p>
                  <p className="text-slate-400 text-sm">of 50,000 included</p>
                </div>
                <div className="p-4 bg-slate-700/50 rounded-lg">
                  <h4 className="text-white font-medium mb-1">Compute Hours</h4>
                  <p className="text-2xl font-bold text-green-400">23.4</p>
                  <p className="text-slate-400 text-sm">of 100 included</p>
                </div>
                <div className="p-4 bg-slate-700/50 rounded-lg">
                  <h4 className="text-white font-medium mb-1">Storage</h4>
                  <p className="text-2xl font-bold text-purple-400">2.1GB</p>
                  <p className="text-slate-400 text-sm">of 10GB included</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">Payment Method</h3>
              <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500/10 rounded flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v12h16V6H4zm2 2h12v2H6V8zm0 4h12v2H6v-2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">•••• •••• •••• 4242</h4>
                    <p className="text-slate-400 text-sm">Expires 12/25</p>
                  </div>
                </div>
                <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                  Update
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">Billing History</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                  <div>
                    <h4 className="text-white text-sm font-medium">Dec 15, 2023</h4>
                    <p className="text-slate-400 text-xs">Pro Plan</p>
                  </div>
                  <span className="text-white font-medium">$29.00</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                  <div>
                    <h4 className="text-white text-sm font-medium">Nov 15, 2023</h4>
                    <p className="text-slate-400 text-xs">Pro Plan</p>
                  </div>
                  <span className="text-white font-medium">$29.00</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                  <div>
                    <h4 className="text-white text-sm font-medium">Oct 15, 2023</h4>
                    <p className="text-slate-400 text-xs">Pro Plan</p>
                  </div>
                  <span className="text-white font-medium">$29.00</span>
                </div>
              </div>
              <button className="w-full mt-4 text-blue-400 hover:text-blue-300 text-sm font-medium">
                View All Invoices
              </button>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium">
                  Upgrade Plan
                </button>
                <button className="w-full p-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors text-sm font-medium">
                  Download Invoice
                </button>
                <button className="w-full p-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors text-sm font-medium">
                  Update Payment
                </button>
                <button className="w-full p-3 bg-red-600/10 hover:bg-red-600/20 text-red-400 rounded-lg transition-colors text-sm font-medium">
                  Cancel Subscription
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
