import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const FiverFlowDocs: React.FC = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('getting-started');

  const sections = [
    { id: 'getting-started', title: 'Getting Started', icon: '🚀' },
    { id: 'features', title: 'Features', icon: '⚡' },
    { id: 'api', title: 'API Reference', icon: '🔧' },
    { id: 'integrations', title: 'Integrations', icon: '🔗' },
    { id: 'examples', title: 'Examples', icon: '📝' },
    { id: 'troubleshooting', title: 'Troubleshooting', icon: '🛠️' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'getting-started':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Getting Started with FiverFlow</h2>
              <p className="text-white/60 text-lg leading-relaxed">
                FiverFlow is an AI-powered automation platform designed specifically for freelancers and small teams. 
                This guide will help you set up your account and start automating your workflow.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">1. Create Your Account</h3>
                <p className="text-white/60 mb-4">
                  Sign up for FiverFlow using your email or social accounts. We support GitHub, Google, and Discord authentication.
                </p>
                <div className="bg-black/20 border border-white/10 rounded-sm p-4">
                  <code className="text-green-400 text-sm">
                    Visit <span className="text-white">https://fiverflow.com</span> and click "Sign Up"
                  </code>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">2. Connect Your Tools</h3>
                <p className="text-white/60 mb-4">
                  Connect your existing tools to get started. FiverFlow integrates with popular platforms like Stripe, Supabase, and more.
                </p>
                <ul className="space-y-2 text-white/60">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Connect your Stripe account for payment processing
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Set up Supabase for data management
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Configure your email templates
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">3. Create Your First Workflow</h3>
                <p className="text-white/60 mb-4">
                  Start by creating a simple automation workflow. Our AI will help you set up common freelancing tasks.
                </p>
                <div className="bg-black/20 border border-white/10 rounded-sm p-4">
                  <code className="text-green-400 text-sm">
                    Dashboard → Workflows → Create New → Choose Template
                  </code>
                </div>
              </div>
            </div>
          </div>
        );

      case 'features':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">FiverFlow Features</h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Discover all the powerful features that make FiverFlow the perfect automation tool for freelancers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Automated Client Onboarding',
                  description: 'Capture client requests, set tasks, and reply automatically with AI-powered responses.',
                  icon: '👥'
                },
                {
                  title: 'Integrated Billing',
                  description: 'Connect Stripe and get paid automatically. Generate invoices and track payments.',
                  icon: '💳'
                },
                {
                  title: 'Actionable Analytics',
                  description: 'Understand revenue, time spent, and conversion rates with detailed reports.',
                  icon: '📊'
                },
                {
                  title: 'Seamless Integrations',
                  description: 'Connect with your favorite tools and platforms for a unified workflow.',
                  icon: '🔗'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="text-2xl">{feature.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'api':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">API Reference</h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Integrate FiverFlow into your applications using our RESTful API.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Authentication</h3>
                <p className="text-white/60 mb-4">
                  All API requests require authentication using your API key.
                </p>
                <div className="bg-black/20 border border-white/10 rounded-sm p-4">
                  <code className="text-green-400 text-sm">
                    curl -H "Authorization: Bearer YOUR_API_KEY" https://api.fiverflow.com/v1/workflows
                  </code>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Endpoints</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-black/20 border border-white/10 rounded-sm">
                    <span className="text-white font-mono text-sm">GET /workflows</span>
                    <span className="text-green-400 text-sm">List all workflows</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-black/20 border border-white/10 rounded-sm">
                    <span className="text-white font-mono text-sm">POST /workflows</span>
                    <span className="text-green-400 text-sm">Create a new workflow</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-black/20 border border-white/10 rounded-sm">
                    <span className="text-white font-mono text-sm">GET /workflows/:id</span>
                    <span className="text-green-400 text-sm">Get workflow details</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'integrations':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Integrations</h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Connect FiverFlow with your favorite tools and services.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Stripe', description: 'Payment processing', status: 'Available' },
                { name: 'Supabase', description: 'Database management', status: 'Available' },
                { name: 'Slack', description: 'Team communication', status: 'Available' },
                { name: 'Discord', description: 'Community management', status: 'Available' },
                { name: 'GitHub', description: 'Code repository', status: 'Available' },
                { name: 'Notion', description: 'Documentation', status: 'Coming Soon' }
              ].map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-lg p-6"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white">{integration.name}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        integration.status === 'Available' 
                          ? 'bg-green-400/20 text-green-400' 
                          : 'bg-yellow-400/20 text-yellow-400'
                      }`}>
                        {integration.status}
                      </span>
                    </div>
                    <p className="text-white/60 text-sm">{integration.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'examples':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Examples</h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Real-world examples of how to use FiverFlow effectively.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Client Onboarding Automation</h3>
                <p className="text-white/60 mb-4">
                  Automatically handle new client requests and set up projects.
                </p>
                <div className="bg-black/20 border border-white/10 rounded-sm p-4">
                  <pre className="text-green-400 text-sm">
{`// Example workflow configuration
{
  "trigger": "new_client_request",
  "actions": [
    {
      "type": "send_welcome_email",
      "template": "client_onboarding"
    },
    {
      "type": "create_project",
      "name": "{{client.name}} - {{request.title}}"
    },
    {
      "type": "schedule_followup",
      "delay": "7_days"
    }
  ]
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        );

      case 'troubleshooting':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Troubleshooting</h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Common issues and their solutions.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "My workflow isn't triggering",
                  answer: "Check that your trigger conditions are properly configured and that the data source is connected."
                },
                {
                  question: "Payments aren't processing",
                  answer: "Verify your Stripe integration is active and your API keys are correct."
                },
                {
                  question: "Email notifications not sending",
                  answer: "Ensure your email service is configured and check your spam folder."
                },
                {
                  question: "API rate limits exceeded",
                  answer: "Check your usage in the dashboard and consider upgrading your plan."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-lg p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-black/20 border-r border-white/10 min-h-screen p-6">
          <div className="mb-8">
            <button
              onClick={() => navigate('/docs')}
              className="flex items-center text-white/60 hover:text-white transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Docs
            </button>
          </div>

          <div className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full text-left px-3 py-2 rounded-sm transition-colors duration-200 ${
                  activeSection === section.id
                    ? 'bg-green-400/20 text-green-400 border border-green-400/30'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="mr-2">{section.icon}</span>
                {section.title}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-4xl">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {renderContent()}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiverFlowDocs;
