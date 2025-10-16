import { Search, Star, TrendingUp, Download, DollarSign, Filter } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabaseHelpers } from '../lib/supabase';

const mockAgents = [
  {
    id: '1',
    name: 'Customer Support Bot',
    description: 'Automated customer service agent with natural language understanding',
    thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Customer Service',
    price: 29.99,
    rating: 4.8,
    reviews: 234,
    sales: 1240,
    featured: true,
    tags: ['Support', 'NLP', 'Automation'],
  },
  {
    id: '2',
    name: 'Data Analysis Agent',
    description: 'Analyze and visualize complex datasets with AI-powered insights',
    thumbnail: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Analytics',
    price: 49.99,
    rating: 4.9,
    reviews: 189,
    sales: 892,
    featured: true,
    tags: ['Analytics', 'Data', 'Visualization'],
  },
  {
    id: '3',
    name: 'Social Media Manager',
    description: 'Automate your social media posting and engagement',
    thumbnail: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Marketing',
    price: 19.99,
    rating: 4.6,
    reviews: 456,
    sales: 2103,
    featured: false,
    tags: ['Social', 'Marketing', 'Automation'],
  },
  {
    id: '4',
    name: 'Code Review Assistant',
    description: 'AI-powered code review and optimization suggestions',
    thumbnail: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Development',
    price: 39.99,
    rating: 4.7,
    reviews: 312,
    sales: 743,
    featured: false,
    tags: ['Code', 'Development', 'Review'],
  },
  {
    id: '5',
    name: 'Email Campaign Generator',
    description: 'Create personalized email campaigns with AI assistance',
    thumbnail: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Marketing',
    price: 24.99,
    rating: 4.5,
    reviews: 201,
    sales: 1567,
    featured: false,
    tags: ['Email', 'Marketing', 'Content'],
  },
  {
    id: '6',
    name: 'Meeting Summarizer',
    description: 'Automatically transcribe and summarize meetings',
    thumbnail: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Productivity',
    price: 34.99,
    rating: 4.9,
    reviews: 178,
    sales: 634,
    featured: true,
    tags: ['Meetings', 'Productivity', 'Transcription'],
  },
];

const categories = ['All', 'Customer Service', 'Analytics', 'Marketing', 'Development', 'Productivity'];

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState<'popular' | 'rating' | 'price'>('popular');
  const [agents, setAgents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAgents();
  }, []);

  const loadAgents = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabaseHelpers.getMarketplaceListings();
      if (data && !error) {
        // Transform the data to match our expected format
        const transformedAgents = data.map((listing: any) => ({
          id: listing.ai_agents.id,
          name: listing.ai_agents.name,
          description: listing.ai_agents.description,
          thumbnail: listing.ai_agents.thumbnail_url || 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
          category: listing.ai_agents.category,
          price: listing.ai_agents.price,
          rating: listing.rating_average || 0,
          reviews: listing.rating_count || 0,
          sales: listing.sales_count || 0,
          featured: listing.featured,
          tags: listing.ai_agents.tags || [],
          profiles: listing.ai_agents.profiles,
        }));
        setAgents(transformedAgents);
      }
    } catch (error) {
      console.error('Error loading agents:', error);
      // Fallback to mock data if there's an error
      setAgents(mockAgents);
    } finally {
      setLoading(false);
    }
  };

  const filteredAgents = agents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (agent.description && agent.description.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || agent.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col h-screen bg-slate-900">
      <div className="px-6 py-6 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-2">Marketplace</h1>
          <p className="text-slate-400">Discover and clone AI agents from the community</p>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search agents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div className="flex gap-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price">Price: Low to High</option>
              </select>
              <button className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white hover:bg-slate-700 transition-colors flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </button>
            </div>
          </div>

          <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              <h2 className="text-xl font-bold text-white">Featured Agents</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAgents.filter(a => a.featured).map(agent => (
                <AgentCard key={agent.id} agent={agent} featured />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-4">All Agents</h2>
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 animate-pulse">
                    <div className="h-48 bg-slate-700"></div>
                    <div className="p-5">
                      <div className="h-6 bg-slate-700 rounded mb-2"></div>
                      <div className="h-4 bg-slate-700 rounded mb-3"></div>
                      <div className="h-8 bg-slate-700 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAgents.map(agent => (
                  <AgentCard key={agent.id} agent={agent} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function AgentCard({ agent, featured = false }: { agent: typeof mockAgents[0]; featured?: boolean }) {
  return (
    <div className={`bg-slate-800 rounded-xl overflow-hidden border transition-all hover:scale-[1.02] hover:shadow-xl ${
      featured ? 'border-blue-500/50 shadow-lg shadow-blue-500/10' : 'border-slate-700'
    }`}>
      <div className="relative h-48 overflow-hidden bg-slate-900">
        <img
          src={agent.thumbnail}
          alt={agent.name}
          className="w-full h-full object-cover"
        />
        {featured && (
          <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full text-xs font-semibold text-white">
            Featured
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-white">{agent.name}</h3>
          <div className="flex items-center gap-1 text-yellow-400">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">{agent.rating}</span>
          </div>
        </div>
        <p className="text-sm text-slate-400 mb-3 line-clamp-2">{agent.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {agent.tags.slice(0, 3).map(tag => (
            <span key={tag} className="px-2 py-1 bg-slate-700/50 text-xs text-slate-300 rounded">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mb-4 text-sm text-slate-400">
          <span>{agent.reviews} reviews</span>
          <span className="flex items-center gap-1">
            <Download className="w-4 h-4" />
            {agent.sales}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <DollarSign className="w-5 h-5 text-green-400" />
            <span className="text-xl font-bold text-white">{agent.price.toFixed(2)}</span>
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg transition-all font-medium text-sm">
            Clone Agent
          </button>
        </div>
      </div>
    </div>
  );
}
