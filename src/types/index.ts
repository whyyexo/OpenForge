export interface Profile {
  id: string;
  username: string;
  display_name?: string;
  bio?: string;
  avatar_url?: string;
  banner_url?: string;
  badges: Badge[];
  social_links: Record<string, string>;
  subscription_tier: 'lunch' | 'scale' | 'boost';
  created_at: string;
  updated_at: string;
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  earned_at: string;
}

export interface AIAgent {
  id: string;
  user_id: string;
  name: string;
  description?: string;
  thumbnail_url?: string;
  is_public: boolean;
  is_template: boolean;
  price: number;
  category?: string;
  tags: string[];
  canvas_data: CanvasData;
  configuration: Record<string, any>;
  version: number;
  clone_count: number;
  usage_count: number;
  created_at: string;
  updated_at: string;
}

export interface CanvasData {
  blocks: Block[];
  connections: Connection[];
  viewport: { x: number; y: number; zoom: number };
}

export interface Block {
  id: string;
  type: 'input' | 'process' | 'output' | 'condition' | 'transform' | 'api';
  position: { x: number; y: number };
  data: {
    label: string;
    config: Record<string, any>;
  };
}

export interface Connection {
  id: string;
  source: string;
  target: string;
  sourcePort?: string;
  targetPort?: string;
}

export interface AgentConnection {
  id: string;
  agent_id: string;
  service_type: 'discord' | 'slack' | 'webhook' | 'api' | 'email';
  service_name: string;
  configuration: Record<string, any>;
  is_active: boolean;
  last_used_at?: string;
  created_at: string;
}

export interface AgentStatistics {
  id: string;
  agent_id: string;
  date: string;
  executions: number;
  success_count: number;
  error_count: number;
  avg_response_time: number;
  total_tokens_used: number;
  unique_users: number;
}

export interface MarketplaceListing {
  id: string;
  agent_id: string;
  agent: AIAgent;
  featured: boolean;
  rating_average: number;
  rating_count: number;
  sales_count: number;
  revenue: number;
  last_updated: string;
  created_at: string;
}

export interface Review {
  id: string;
  agent_id: string;
  user_id: string;
  user: Profile;
  rating: number;
  review_text?: string;
  created_at: string;
}

export interface UsageTracking {
  id: string;
  user_id: string;
  agent_id?: string;
  resource_type: 'api_call' | 'tokens' | 'storage' | 'execution';
  amount: number;
  cost: number;
  timestamp: string;
}
