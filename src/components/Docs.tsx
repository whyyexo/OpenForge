export default function Docs() {
  const sections = [
    {
      title: 'Getting Started',
      items: [
        { title: 'Quick Start Guide', description: 'Get up and running in minutes' },
        { title: 'Creating Your First Agent', description: 'Step-by-step tutorial' },
        { title: 'Basic Concepts', description: 'Understanding AI agents and workflows' },
        { title: 'Account Setup', description: 'Configure your workspace' }
      ]
    },
    {
      title: 'Agent Development',
      items: [
        { title: 'Agent Types', description: 'Different types of AI agents' },
        { title: 'Workflow Builder', description: 'Visual workflow creation' },
        { title: 'Custom Functions', description: 'Writing custom logic' },
        { title: 'Testing & Debugging', description: 'Test and troubleshoot agents' }
      ]
    },
    {
      title: 'API Reference',
      items: [
        { title: 'Authentication', description: 'API keys and authentication' },
        { title: 'REST API', description: 'Complete API documentation' },
        { title: 'Webhooks', description: 'Real-time event notifications' },
        { title: 'Rate Limits', description: 'API usage limits and quotas' }
      ]
    },
    {
      title: 'Integrations',
      items: [
        { title: 'Third-party Services', description: 'Connect external services' },
        { title: 'Database Connections', description: 'Link your databases' },
        { title: 'Cloud Platforms', description: 'AWS, GCP, Azure integration' },
        { title: 'Webhook Configuration', description: 'Set up webhook endpoints' }
      ]
    },
    {
      title: 'Deployment',
      items: [
        { title: 'Production Setup', description: 'Deploy to production' },
        { title: 'Scaling Agents', description: 'Handle increased load' },
        { title: 'Monitoring', description: 'Track performance and health' },
        { title: 'Backup & Recovery', description: 'Data protection strategies' }
      ]
    },
    {
      title: 'Troubleshooting',
      items: [
        { title: 'Common Issues', description: 'Frequently encountered problems' },
        { title: 'Error Codes', description: 'Understanding error messages' },
        { title: 'Performance Optimization', description: 'Improve agent performance' },
        { title: 'Support Resources', description: 'Get help when you need it' }
      ]
    }
  ];

  const popularArticles = [
    { title: 'How to Create a Customer Support Bot', views: '12.5k', category: 'Tutorial' },
    { title: 'API Rate Limiting Best Practices', views: '8.2k', category: 'Guide' },
    { title: 'Setting Up Webhooks for Real-time Updates', views: '6.7k', category: 'Tutorial' },
    { title: 'Optimizing Agent Performance', views: '5.9k', category: 'Guide' },
    { title: 'Database Integration Patterns', views: '4.8k', category: 'Reference' }
  ];

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Documentation</h1>
          <p className="text-slate-400">
            Comprehensive guides, tutorials, and API reference for building with AI agents.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-6">Documentation Sections</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                    <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
                    <div className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="group cursor-pointer">
                          <h4 className="text-blue-400 group-hover:text-blue-300 transition-colors font-medium mb-1">
                            {item.title}
                          </h4>
                          <p className="text-slate-400 text-sm">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Start</h3>
              <div className="space-y-4">
                <div className="p-4 bg-slate-700/50 rounded-lg">
                  <h4 className="text-white font-medium mb-2">1. Create Your First Agent</h4>
                  <p className="text-slate-400 text-sm mb-3">
                    Start by creating a simple agent using our visual workflow builder.
                  </p>
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                    Start Tutorial →
                  </button>
                </div>
                <div className="p-4 bg-slate-700/50 rounded-lg">
                  <h4 className="text-white font-medium mb-2">2. Connect to APIs</h4>
                  <p className="text-slate-400 text-sm mb-3">
                    Learn how to integrate your agent with external services and APIs.
                  </p>
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                    View Guide →
                  </button>
                </div>
                <div className="p-4 bg-slate-700/50 rounded-lg">
                  <h4 className="text-white font-medium mb-2">3. Deploy to Production</h4>
                  <p className="text-slate-400 text-sm mb-3">
                    Deploy your agent and start processing real-world requests.
                  </p>
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                    Deploy Now →
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">Popular Articles</h3>
              <div className="space-y-4">
                {popularArticles.map((article, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="text-blue-400 group-hover:text-blue-300 transition-colors font-medium text-sm">
                        {article.title}
                      </h4>
                      <span className="px-2 py-1 bg-slate-700 text-slate-400 text-xs rounded-full ml-2">
                        {article.category}
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs">{article.views} views</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">Search Documentation</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search docs..."
                  className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400"
                />
                <svg className="absolute right-3 top-3 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">Need Help?</h3>
              <div className="space-y-3">
                <button className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium">
                  Contact Support
                </button>
                <button className="w-full p-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors text-sm font-medium">
                  Join Community
                </button>
                <button className="w-full p-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors text-sm font-medium">
                  Report Issue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
