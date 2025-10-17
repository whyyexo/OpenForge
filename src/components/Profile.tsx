import { useState, useEffect } from 'react';
import { 
  Camera, 
  Award, 
  Link as LinkIcon, 
  Mail, 
  Calendar, 
  MapPin, 
  Edit2, 
  Save, 
  X, 
  Plus,
  ExternalLink,
  Shield,
  Key,
  Globe,
  Settings,
  User,
  Bot,
  TrendingUp,
  Users,
  Star
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabaseHelpers } from '../lib/supabase';

interface ProfileData {
  username: string;
  display_name: string | null;
  bio: string | null;
  avatar_url: string | null;
  banner_url: string | null;
  social_links: Record<string, string>;
  subscription_tier: 'lunch' | 'scale' | 'boost';
}

interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string | null;
  earned_at: string;
  badges: {
    name: string;
    icon: string;
    description: string | null;
  };
}

interface Activity {
  type: 'created' | 'updated' | 'achievement' | 'shared';
  title: string;
  detail: string;
  time: string;
}

const defaultBadges = [
  { id: '1', name: 'Early Adopter', icon: '🚀', description: 'Joined in the first month', rarity: 'Legendary' },
  { id: '2', name: 'Creator', icon: '⭐', description: 'Created 10+ agents', rarity: 'Epic' },
  { id: '3', name: 'Contributor', icon: '💎', description: 'Helped 100+ users', rarity: 'Rare' },
  { id: '4', name: 'Developer', icon: '🔧', description: 'Used API extensively', rarity: 'Epic' },
  { id: '5', name: 'Supporter', icon: '❤️', description: 'Active for 6 months', rarity: 'Rare' },
];

const defaultActivities: Activity[] = [
  { type: 'created', title: 'Created new agent', detail: 'Customer Support Bot v2', time: '2 hours ago' },
  { type: 'updated', title: 'Updated agent', detail: 'Data Analysis Agent', time: '5 hours ago' },
  { type: 'achievement', title: 'Earned badge', detail: 'Creator', time: '1 day ago' },
  { type: 'shared', title: 'Published to marketplace', detail: 'Social Media Manager', time: '2 days ago' },
];

export default function Profile() {
  const { user, profile, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>({
    username: '',
    display_name: '',
    bio: '',
    avatar_url: null,
    banner_url: null,
    social_links: {},
    subscription_tier: 'lunch'
  });
  const [badges, setBadges] = useState<Badge[]>([]);
  const [activities] = useState<Activity[]>(defaultActivities);
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState({
    agentsCreated: 0,
    totalExecutions: 0,
    marketplaceSales: 0,
    followers: 0
  });

  useEffect(() => {
    if (profile) {
      setProfileData({
        username: profile.username || '',
        display_name: profile.display_name || '',
        bio: profile.bio || '',
        avatar_url: profile.avatar_url,
        banner_url: profile.banner_url,
        social_links: profile.social_links || {},
        subscription_tier: profile.subscription_tier || 'lunch'
      });
    }
  }, [profile]);

  useEffect(() => {
    loadUserData();
  }, [user]);

  const loadUserData = async () => {
    if (!user) return;
    
    try {
      // Load user badges
      const badgesResult = await supabaseHelpers.getUserBadges();
      if (badgesResult?.data) {
        setBadges(badgesResult.data);
      }

      // Load user statistics
      const agentsResult = await supabaseHelpers.getAgents({ userId: user.id });
      if (agentsResult?.data) {
        setStats(prev => ({
          ...prev,
          agentsCreated: agentsResult.data.length,
          totalExecutions: agentsResult.data.reduce((sum, agent) => sum + (agent.usage_count || 0), 0)
        }));
      }
    } catch (error) {
      console.warn('Error loading user data:', error);
    }
  };

  const handleSave = async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      await updateProfile(profileData);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAvatarUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // For demo purposes, we'll just set a placeholder URL
    // In production, you'd upload to Supabase Storage
    const avatarUrl = URL.createObjectURL(file);
    setProfileData(prev => ({ ...prev, avatar_url: avatarUrl }));
  };

  const handleBannerUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // For demo purposes, we'll just set a placeholder URL
    const bannerUrl = URL.createObjectURL(file);
    setProfileData(prev => ({ ...prev, banner_url: bannerUrl }));
  };

  const getSubscriptionColor = (tier: string) => {
    switch (tier) {
      case 'boost': return 'from-purple-600 to-pink-600';
      case 'scale': return 'from-blue-600 to-cyan-600';
      default: return 'from-green-600 to-emerald-600';
    }
  };

  const getSubscriptionLabel = (tier: string) => {
    switch (tier) {
      case 'boost': return 'Boost Plan';
      case 'scale': return 'Scale Plan';
      default: return 'Lunch Plan';
    }
  };

  return (
    <div className="h-full bg-black overflow-y-auto">
      {/* Banner */}
      <div className="relative h-48 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        {profileData.banner_url && (
          <img 
            src={profileData.banner_url} 
            alt="Banner" 
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-purple-600/80 to-pink-600/80" />
        {isEditing && (
          <label className="absolute top-4 right-4 p-2 bg-black/30 backdrop-blur-sm hover:bg-black/50 rounded-lg transition-colors cursor-pointer">
            <Camera className="w-5 h-5 text-white" />
            <input
              type="file"
              accept="image/*"
              onChange={handleBannerUpload}
              className="hidden"
            />
          </label>
        )}
      </div>

      <div className="px-6 -mt-20 pb-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Card */}
          <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 border-4 border-slate-900 flex items-center justify-center overflow-hidden">
                  {profileData.avatar_url ? (
                    <img 
                      src={profileData.avatar_url} 
                      alt="Avatar" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-12 h-12 text-white" />
                  )}
                </div>
                {isEditing && (
                  <label className="absolute bottom-0 right-0 p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer">
                    <Camera className="w-4 h-4 text-white" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      {isEditing ? (
                        <input
                          type="text"
                          value={profileData.display_name || ''}
                          onChange={(e) => setProfileData(prev => ({ ...prev, display_name: e.target.value }))}
                          className="text-2xl font-bold text-white bg-transparent border-b border-white/20 focus:border-blue-500 outline-none"
                          placeholder="Display Name"
                        />
                      ) : (
                        <h1 className="text-2xl font-bold text-white">
                          {profileData.display_name || profileData.username || 'User'}
                        </h1>
                      )}
                      <div className={`px-3 py-1 bg-gradient-to-r ${getSubscriptionColor(profileData.subscription_tier)} rounded-full text-xs font-semibold text-white`}>
                        {getSubscriptionLabel(profileData.subscription_tier)}
                      </div>
                    </div>
                    
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.username}
                        onChange={(e) => setProfileData(prev => ({ ...prev, username: e.target.value }))}
                        className="text-slate-400 bg-transparent border-b border-white/20 focus:border-blue-500 outline-none mb-3"
                        placeholder="Username"
                      />
                    ) : (
                      <p className="text-slate-400 mb-3">@{profileData.username}</p>
                    )}
                    
                    {isEditing ? (
                      <textarea
                        value={profileData.bio || ''}
                        onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
                        className="text-slate-300 bg-transparent border border-white/20 focus:border-blue-500 rounded-lg p-2 outline-none w-full max-w-2xl resize-none"
                        placeholder="Tell us about yourself..."
                        rows={3}
                      />
                    ) : (
                      <p className="text-slate-300 max-w-2xl">
                        {profileData.bio || 'No bio available.'}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    {isEditing ? (
                      <>
                        <button
                          onClick={handleSave}
                          disabled={loading}
                          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-lg transition-colors flex items-center gap-2"
                        >
                          <Save className="w-4 h-4" />
                          {loading ? 'Saving...' : 'Save'}
                        </button>
                        <button
                          onClick={() => setIsEditing(false)}
                          className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors flex items-center gap-2"
                        >
                          <X className="w-4 h-4" />
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => setIsEditing(true)}
                        className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors flex items-center gap-2"
                      >
                        <Edit2 className="w-4 h-4" />
                        Edit Profile
                      </button>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Joined {user?.created_at ? new Date(user.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 'Recently'}
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    {user?.email}
                  </div>
                </div>

                {/* Social Links */}
                {Object.keys(profileData.social_links).length > 0 && (
                  <div className="flex gap-3 mt-4">
                    {Object.entries(profileData.social_links).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-slate-300" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-white/10">
              <div className="text-center">
                <p className="text-xl font-bold text-white mb-1">{stats.agentsCreated}</p>
                <p className="text-sm text-slate-400">Agents Created</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-white mb-1">{stats.totalExecutions.toLocaleString()}</p>
                <p className="text-sm text-slate-400">Total Executions</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-white mb-1">{stats.marketplaceSales}</p>
                <p className="text-sm text-slate-400">Marketplace Sales</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-white mb-1">{stats.followers}</p>
                <p className="text-sm text-slate-400">Followers</p>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Badges */}
            <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-yellow-400" />
                  <h2 className="text-xl font-bold text-white">Badges</h2>
                </div>
                <span className="text-sm text-slate-400">{badges.length || defaultBadges.length} earned</span>
              </div>
              <div className="space-y-3">
                {(badges.length > 0 ? badges : defaultBadges).map((badge, index) => (
                  <div
                    key={badge.id || index}
                    className="flex items-center gap-4 p-4 bg-slate-800/50 border border-white/10 rounded-xl hover:border-white/20 transition-colors"
                  >
                    <div className="text-2xl">{badge.icon}</div>
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
                          {badge.rarity || 'Common'}
                        </span>
                      </div>
                      <p className="text-sm text-slate-400">{badge.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
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
                    <div className="flex-1 pb-4 border-b border-white/10 last:border-0">
                      <p className="text-white font-medium mb-1">{activity.title}</p>
                      <p className="text-sm text-slate-400 mb-2">{activity.detail}</p>
                      <p className="text-xs text-slate-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Account Settings */}
          <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mt-6">
            <h2 className="text-xl font-bold text-white mb-6">Account Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-slate-300 mb-4">Preferences</h3>
                <div className="space-y-3">
                  <label className="flex items-center justify-between p-3 bg-slate-800/50 border border-white/10 rounded-lg">
                    <span className="text-sm text-white">Email notifications</span>
                    <input type="checkbox" className="w-5 h-5 rounded bg-slate-700 border-slate-600" defaultChecked />
                  </label>
                  <label className="flex items-center justify-between p-3 bg-slate-800/50 border border-white/10 rounded-lg">
                    <span className="text-sm text-white">Marketing emails</span>
                    <input type="checkbox" className="w-5 h-5 rounded bg-slate-700 border-slate-600" />
                  </label>
                  <label className="flex items-center justify-between p-3 bg-slate-800/50 border border-white/10 rounded-lg">
                    <span className="text-sm text-white">Public profile</span>
                    <input type="checkbox" className="w-5 h-5 rounded bg-slate-700 border-slate-600" defaultChecked />
                  </label>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-300 mb-4">Security</h3>
                <div className="space-y-3">
                  <button className="w-full p-3 bg-slate-800/50 border border-white/10 hover:bg-slate-700/50 rounded-lg text-left text-sm text-white transition-colors flex items-center gap-3">
                    <Key className="w-4 h-4" />
                    Change password
                  </button>
                  <button className="w-full p-3 bg-slate-800/50 border border-white/10 hover:bg-slate-700/50 rounded-lg text-left text-sm text-white transition-colors flex items-center gap-3">
                    <Shield className="w-4 h-4" />
                    Two-factor authentication
                  </button>
                  <button className="w-full p-3 bg-slate-800/50 border border-white/10 hover:bg-slate-700/50 rounded-lg text-left text-sm text-white transition-colors flex items-center gap-3">
                    <Globe className="w-4 h-4" />
                    Connected accounts
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
