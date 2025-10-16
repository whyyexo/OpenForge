export default function HelpCenter() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Help Center</h1>
          <p className="text-slate-400">
            Find answers to common questions and get support for your AI agent projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div className="border-b border-slate-700 pb-4">
                  <h4 className="text-white font-medium mb-2">How do I create my first AI agent?</h4>
                  <p className="text-slate-400 text-sm">
                    Start by using our Studio interface to design your agent's workflow. You can drag and drop components to build your automation logic.
                  </p>
                </div>
                <div className="border-b border-slate-700 pb-4">
                  <h4 className="text-white font-medium mb-2">What programming languages are supported?</h4>
                  <p className="text-slate-400 text-sm">
                    Our platform supports JavaScript, Python, and TypeScript. You can also use our visual workflow builder for no-code solutions.
                  </p>
                </div>
                <div className="border-b border-slate-700 pb-4">
                  <h4 className="text-white font-medium mb-2">How much does it cost to run an agent?</h4>
                  <p className="text-slate-400 text-sm">
                    Pricing is based on usage. Check our Pricing page for detailed information about our tiered plans and usage-based billing.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Can I integrate with external APIs?</h4>
                  <p className="text-slate-400 text-sm">
                    Yes! Our platform supports webhooks, REST APIs, and many popular third-party integrations. Visit the Connections page to set up integrations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">Contact Support</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-700/50 rounded-lg">
                  <h4 className="text-white font-medium mb-2">Email Support</h4>
                  <p className="text-slate-400 text-sm mb-3">Get help via email within 24 hours</p>
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                    support@neuroflow.com
                  </button>
                </div>
                <div className="p-4 bg-slate-700/50 rounded-lg">
                  <h4 className="text-white font-medium mb-2">Live Chat</h4>
                  <p className="text-slate-400 text-sm mb-3">Chat with our support team in real-time</p>
                  <button className="text-green-400 hover:text-green-300 text-sm font-medium">
                    Start Chat
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a href="#" className="block text-blue-400 hover:text-blue-300 text-sm">
                  Getting Started Guide
                </a>
                <a href="#" className="block text-blue-400 hover:text-blue-300 text-sm">
                  API Documentation
                </a>
                <a href="#" className="block text-blue-400 hover:text-blue-300 text-sm">
                  Video Tutorials
                </a>
                <a href="#" className="block text-blue-400 hover:text-blue-300 text-sm">
                  Community Forum
                </a>
                <a href="#" className="block text-blue-400 hover:text-blue-300 text-sm">
                  Status Page
                </a>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">System Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">API Services</span>
                  <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-full">Operational</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">Studio</span>
                  <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-full">Operational</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">Marketplace</span>
                  <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 text-xs rounded-full">Degraded</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">Webhooks</span>
                  <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-full">Operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
