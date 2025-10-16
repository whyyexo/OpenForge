import { Camera, Award, Link as LinkIcon, Mail, Calendar, MapPin, Edit2 } from 'lucide-react';

const badges = [
  { id: '1', name: 'Early Adopter', icon: '🚀', description: 'Joined in the first month', rarity: 'Legendary' },
  { id: '2', name: 'Creator', icon: '⭐', description: 'Created 10+ agents', rarity: 'Epic' },
  { id: '3', name: 'Contributor', icon: '💎', description: 'Helped 100+ users', rarity: 'Rare' },
  { id: '4', name: 'Developer', icon: '🔧', description: 'Used API extensively', rarity: 'Epic' },
  { id: '5', name: 'Supporter', icon: '❤️', description: 'Active for 6 months', rarity: 'Rare' },
];

const activities = [
  { type: 'created', title: 'Created new agent', detail: 'Customer Support Bot v2', time: '2 hours ago' },
  { type: 'updated', title: 'Updated agent', detail: 'Data Analysis Agent', time: '5 hours ago' },
  { type: 'achievement', title: 'Earned badge', detail: 'Creator', time: '1 day ago' },
  { type: 'shared', title: 'Published to marketplace', detail: 'Social Media Manager', time: '2 days ago' },
];

const stats = [
  { label: 'Agents Created', value: '24' },
  { label: 'Total Executions', value: '45.2K' },
  { label: 'Marketplace Sales', value: '12' },
  { label: 'Followers', value: '834' },
];

export default function Profile() {
  return (
    <div className="flex flex-col h-screen bg-slate-900 overflow-auto">
      <div className="relative h-48 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <button className="absolute top-4 right-4 p-2 bg-black/30 backdrop-blur-sm hover:bg-black/50 rounded-lg transition-colors">
          <Camera className="w-5 h-5 text-white" />
        </button>
      </div>

      <div className="max-w-5xl mx-auto w-full px-6 -mt-20">
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="relative">
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 border-4 border-slate-800" />
              <button className="absolute bottom-2 right-2 p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                <Camera className="w-4 h-4 text-white" />
              </button>
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold text-white">Alex Morgan</h1>
                    <div className="px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full text-xs font-semibold text-white">
                      Scale Plan
                    </div>
                  </div>
                  <p className="text-slate-400 mb-3">@alexmorgan</p>
                  <p className="text-slate-300 max-w-2xl">
                    AI enthusiast and developer passionate about creating intelligent automation solutions.
                    Building the future of AI-powered workflows.
                  </p>
                </div>
                <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors flex items-center gap-2">
                  <Edit2 className="w-4 h-4" />
                  Edit Profile
                </button>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  San Francisco, CA
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Joined March 2024
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  alex@example.com
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                <a href="#" className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
                  <LinkIcon className="w-5 h-5 text-slate-300" />
                </a>
                <a href="#" className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
                  <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-700">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 mb-8">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-yellow-400" />
                <h2 className="text-xl font-bold text-white">Badges</h2>
              </div>
              <span className="text-sm text-slate-400">{badges.length} earned</span>
            </div>
            <div className="space-y-3">
              {badges.map((badge) => (
                <div
                  key={badge.id}
                  className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-700 rounded-xl hover:border-slate-600 transition-colors"
                >
                  <div className="text-3xl">{badge.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-white">{badge.name}</h3>
                      <span className={`px-2 py-0.5 rounded text-xs font-semibold ${
                        badge.rarity === 'Legendary'
                          ? 'bg-yellow-500/10 text-yellow-400'
                          : badge.rarity === 'Epic'
                          ? 'bg-purple-500/10 text-purple-400'
                          : 'bg-blue-500/10 text-blue-400'
                      }`}>
                        {badge.rarity}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400">{badge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {activities.map((activity, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    activity.type === 'created' ? 'bg-green-400' :
                    activity.type === 'updated' ? 'bg-blue-400' :
                    activity.type === 'achievement' ? 'bg-yellow-400' :
                    'bg-purple-400'
                  }`} />
                  <div className="flex-1 pb-4 border-b border-slate-700 last:border-0">
                    <p className="text-white font-medium mb-1">{activity.title}</p>
                    <p className="text-sm text-slate-400 mb-2">{activity.detail}</p>
                    <p className="text-xs text-slate-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-bold text-white mb-6">Account Settings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-semibold text-slate-300 mb-4">Preferences</h3>
              <div className="space-y-3">
                <label className="flex items-center justify-between p-3 bg-slate-900/50 border border-slate-700 rounded-lg">
                  <span className="text-sm text-white">Email notifications</span>
                  <input type="checkbox" className="w-5 h-5 rounded bg-slate-700 border-slate-600" defaultChecked />
                </label>
                <label className="flex items-center justify-between p-3 bg-slate-900/50 border border-slate-700 rounded-lg">
                  <span className="text-sm text-white">Marketing emails</span>
                  <input type="checkbox" className="w-5 h-5 rounded bg-slate-700 border-slate-600" />
                </label>
                <label className="flex items-center justify-between p-3 bg-slate-900/50 border border-slate-700 rounded-lg">
                  <span className="text-sm text-white">Public profile</span>
                  <input type="checkbox" className="w-5 h-5 rounded bg-slate-700 border-slate-600" defaultChecked />
                </label>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-300 mb-4">Security</h3>
              <div className="space-y-3">
                <button className="w-full p-3 bg-slate-900/50 border border-slate-700 hover:bg-slate-700/50 rounded-lg text-left text-sm text-white transition-colors">
                  Change password
                </button>
                <button className="w-full p-3 bg-slate-900/50 border border-slate-700 hover:bg-slate-700/50 rounded-lg text-left text-sm text-white transition-colors">
                  Two-factor authentication
                </button>
                <button className="w-full p-3 bg-slate-900/50 border border-slate-700 hover:bg-slate-700/50 rounded-lg text-left text-sm text-white transition-colors">
                  Connected accounts
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
