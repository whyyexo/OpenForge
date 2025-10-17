-- AI Agent Platform Database Schema
-- This file contains all the necessary tables for the AI Agent Platform

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create custom types
CREATE TYPE subscription_tier AS ENUM ('lunch', 'scale', 'boost');
CREATE TYPE block_type AS ENUM ('input', 'process', 'output', 'condition', 'transform', 'api');
CREATE TYPE service_type AS ENUM ('discord', 'slack', 'webhook', 'api', 'email');
CREATE TYPE resource_type AS ENUM ('api_call', 'tokens', 'storage', 'execution');
CREATE TYPE oauth_provider AS ENUM ('discord', 'github', 'google', 'twitter', 'linkedin', 'spotify');

-- Users/Profiles table
CREATE TABLE profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID UNIQUE NOT NULL, -- This will reference auth.users
    username VARCHAR(50) UNIQUE NOT NULL,
    display_name VARCHAR(100),
    bio TEXT,
    avatar_url TEXT,
    banner_url TEXT,
    subscription_tier subscription_tier DEFAULT 'lunch',
    social_links JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- OAuth connections table
CREATE TABLE oauth_connections (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    provider oauth_provider NOT NULL,
    provider_user_id VARCHAR(255) NOT NULL,
    provider_username VARCHAR(255),
    provider_display_name VARCHAR(255),
    provider_email VARCHAR(255),
    provider_avatar_url TEXT,
    access_token TEXT,
    refresh_token TEXT,
    token_expires_at TIMESTAMP WITH TIME ZONE,
    provider_data JSONB DEFAULT '{}',
    is_primary BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, provider),
    UNIQUE(provider, provider_user_id)
);

-- Badges table
CREATE TABLE badges (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    icon VARCHAR(100) NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User badges (many-to-many relationship)
CREATE TABLE user_badges (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    badge_id UUID REFERENCES badges(id) ON DELETE CASCADE,
    earned_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, badge_id)
);

-- AI Agents table
CREATE TABLE ai_agents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    name VARCHAR(200) NOT NULL,
    description TEXT,
    thumbnail_url TEXT,
    is_public BOOLEAN DEFAULT false,
    is_template BOOLEAN DEFAULT false,
    price DECIMAL(10,2) DEFAULT 0.00,
    category VARCHAR(100),
    tags TEXT[] DEFAULT '{}',
    canvas_data JSONB NOT NULL DEFAULT '{"blocks": [], "connections": [], "viewport": {"x": 0, "y": 0, "zoom": 1}}',
    configuration JSONB DEFAULT '{}',
    version INTEGER DEFAULT 1,
    clone_count INTEGER DEFAULT 0,
    usage_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Agent connections table
CREATE TABLE agent_connections (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    agent_id UUID REFERENCES ai_agents(id) ON DELETE CASCADE,
    service_type service_type NOT NULL,
    service_name VARCHAR(200) NOT NULL,
    configuration JSONB DEFAULT '{}',
    is_active BOOLEAN DEFAULT true,
    last_used_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Agent statistics table
CREATE TABLE agent_statistics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    agent_id UUID REFERENCES ai_agents(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    executions INTEGER DEFAULT 0,
    success_count INTEGER DEFAULT 0,
    error_count INTEGER DEFAULT 0,
    avg_response_time DECIMAL(10,3) DEFAULT 0.000,
    total_tokens_used INTEGER DEFAULT 0,
    unique_users INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(agent_id, date)
);

-- Marketplace listings table
CREATE TABLE marketplace_listings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    agent_id UUID REFERENCES ai_agents(id) ON DELETE CASCADE,
    featured BOOLEAN DEFAULT false,
    rating_average DECIMAL(3,2) DEFAULT 0.00,
    rating_count INTEGER DEFAULT 0,
    sales_count INTEGER DEFAULT 0,
    revenue DECIMAL(12,2) DEFAULT 0.00,
    last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Reviews table
CREATE TABLE reviews (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    agent_id UUID REFERENCES ai_agents(id) ON DELETE CASCADE,
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5) NOT NULL,
    review_text TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(agent_id, user_id)
);

-- Usage tracking table
CREATE TABLE usage_tracking (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    agent_id UUID REFERENCES ai_agents(id) ON DELETE SET NULL,
    resource_type resource_type NOT NULL,
    amount DECIMAL(12,4) NOT NULL,
    cost DECIMAL(10,4) DEFAULT 0.0000,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Chat messages table (for AI Chat feature)
CREATE TABLE chat_messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    agent_id UUID REFERENCES ai_agents(id) ON DELETE SET NULL,
    message TEXT NOT NULL,
    response TEXT,
    is_from_user BOOLEAN NOT NULL,
    session_id UUID,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Notifications table
CREATE TABLE notifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    title VARCHAR(200) NOT NULL,
    message TEXT,
    type VARCHAR(50) NOT NULL,
    is_read BOOLEAN DEFAULT false,
    data JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Templates table (for agent templates)
CREATE TABLE agent_templates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(200) NOT NULL,
    description TEXT,
    category VARCHAR(100),
    thumbnail_url TEXT,
    canvas_data JSONB NOT NULL,
    configuration JSONB DEFAULT '{}',
    tags TEXT[] DEFAULT '{}',
    usage_count INTEGER DEFAULT 0,
    is_featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for better performance
CREATE INDEX idx_profiles_username ON profiles(username);
CREATE INDEX idx_profiles_user_id ON profiles(user_id);
CREATE INDEX idx_oauth_connections_user_id ON oauth_connections(user_id);
CREATE INDEX idx_oauth_connections_provider ON oauth_connections(provider);
CREATE INDEX idx_oauth_connections_provider_user_id ON oauth_connections(provider, provider_user_id);
CREATE INDEX idx_ai_agents_user_id ON ai_agents(user_id);
CREATE INDEX idx_ai_agents_is_public ON ai_agents(is_public);
CREATE INDEX idx_ai_agents_category ON ai_agents(category);
CREATE INDEX idx_ai_agents_tags ON ai_agents USING GIN(tags);
CREATE INDEX idx_agent_connections_agent_id ON agent_connections(agent_id);
CREATE INDEX idx_agent_statistics_agent_id_date ON agent_statistics(agent_id, date);
CREATE INDEX idx_marketplace_listings_agent_id ON marketplace_listings(agent_id);
CREATE INDEX idx_marketplace_listings_featured ON marketplace_listings(featured);
CREATE INDEX idx_reviews_agent_id ON reviews(agent_id);
CREATE INDEX idx_reviews_user_id ON reviews(user_id);
CREATE INDEX idx_usage_tracking_user_id ON usage_tracking(user_id);
CREATE INDEX idx_usage_tracking_timestamp ON usage_tracking(timestamp);
CREATE INDEX idx_chat_messages_user_id ON chat_messages(user_id);
CREATE INDEX idx_chat_messages_session_id ON chat_messages(session_id);
CREATE INDEX idx_notifications_user_id ON notifications(user_id);
CREATE INDEX idx_notifications_is_read ON notifications(is_read);

-- Row Level Security (RLS) policies
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE oauth_connections ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_agents ENABLE ROW LEVEL SECURITY;
ALTER TABLE agent_connections ENABLE ROW LEVEL SECURITY;
ALTER TABLE agent_statistics ENABLE ROW LEVEL SECURITY;
ALTER TABLE marketplace_listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE usage_tracking ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_badges ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view all profiles" ON profiles FOR SELECT USING (true);
CREATE POLICY "Users can update their own profile" ON profiles FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own profile" ON profiles FOR INSERT WITH CHECK (auth.uid() = user_id);

-- RLS Policies for oauth_connections
CREATE POLICY "Users can view their own OAuth connections" ON oauth_connections FOR SELECT USING (auth.uid() = (SELECT user_id FROM profiles WHERE id = oauth_connections.user_id));
CREATE POLICY "Users can insert their own OAuth connections" ON oauth_connections FOR INSERT WITH CHECK (auth.uid() = (SELECT user_id FROM profiles WHERE id = oauth_connections.user_id));
CREATE POLICY "Users can update their own OAuth connections" ON oauth_connections FOR UPDATE USING (auth.uid() = (SELECT user_id FROM profiles WHERE id = oauth_connections.user_id));
CREATE POLICY "Users can delete their own OAuth connections" ON oauth_connections FOR DELETE USING (auth.uid() = (SELECT user_id FROM profiles WHERE id = oauth_connections.user_id));

-- Temporarily disable RLS for profiles table to allow initial profile creation
ALTER TABLE profiles DISABLE ROW LEVEL SECURITY;

-- RLS Policies for ai_agents
CREATE POLICY "Users can view public agents and their own agents" ON ai_agents FOR SELECT USING (is_public = true OR auth.uid() = (SELECT user_id FROM profiles WHERE id = ai_agents.user_id));
CREATE POLICY "Users can insert their own agents" ON ai_agents FOR INSERT WITH CHECK (auth.uid() = (SELECT user_id FROM profiles WHERE id = ai_agents.user_id));
CREATE POLICY "Users can update their own agents" ON ai_agents FOR UPDATE USING (auth.uid() = (SELECT user_id FROM profiles WHERE id = ai_agents.user_id));
CREATE POLICY "Users can delete their own agents" ON ai_agents FOR DELETE USING (auth.uid() = (SELECT user_id FROM profiles WHERE id = ai_agents.user_id));

-- RLS Policies for reviews
CREATE POLICY "Users can view all reviews" ON reviews FOR SELECT USING (true);
CREATE POLICY "Users can insert reviews for their own purchases" ON reviews FOR INSERT WITH CHECK (auth.uid() = (SELECT user_id FROM profiles WHERE id = reviews.user_id));
CREATE POLICY "Users can update their own reviews" ON reviews FOR UPDATE USING (auth.uid() = (SELECT user_id FROM profiles WHERE id = reviews.user_id));
CREATE POLICY "Users can delete their own reviews" ON reviews FOR DELETE USING (auth.uid() = (SELECT user_id FROM profiles WHERE id = reviews.user_id));

-- RLS Policies for chat_messages
CREATE POLICY "Users can view their own chat messages" ON chat_messages FOR SELECT USING (auth.uid() = (SELECT user_id FROM profiles WHERE id = chat_messages.user_id));
CREATE POLICY "Users can insert their own chat messages" ON chat_messages FOR INSERT WITH CHECK (auth.uid() = (SELECT user_id FROM profiles WHERE id = chat_messages.user_id));

-- RLS Policies for notifications
CREATE POLICY "Users can view their own notifications" ON notifications FOR SELECT USING (auth.uid() = (SELECT user_id FROM profiles WHERE id = notifications.user_id));
CREATE POLICY "Users can update their own notifications" ON notifications FOR UPDATE USING (auth.uid() = (SELECT user_id FROM profiles WHERE id = notifications.user_id));

-- RLS Policies for usage_tracking
CREATE POLICY "Users can view their own usage tracking" ON usage_tracking FOR SELECT USING (auth.uid() = (SELECT user_id FROM profiles WHERE id = usage_tracking.user_id));
CREATE POLICY "Users can insert their own usage tracking" ON usage_tracking FOR INSERT WITH CHECK (auth.uid() = (SELECT user_id FROM profiles WHERE id = usage_tracking.user_id));

-- Functions for updating timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers for updating timestamps
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_oauth_connections_updated_at BEFORE UPDATE ON oauth_connections FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_ai_agents_updated_at BEFORE UPDATE ON ai_agents FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_agent_templates_updated_at BEFORE UPDATE ON agent_templates FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to update marketplace listing stats when reviews change
CREATE OR REPLACE FUNCTION update_marketplace_stats()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' OR TG_OP = 'UPDATE' THEN
        UPDATE marketplace_listings
        SET 
            rating_average = (
                SELECT COALESCE(AVG(rating), 0.00)
                FROM reviews
                WHERE agent_id = NEW.agent_id
            ),
            rating_count = (
                SELECT COUNT(*)
                FROM reviews
                WHERE agent_id = NEW.agent_id
            ),
            last_updated = NOW()
        WHERE agent_id = NEW.agent_id;
        RETURN NEW;
    ELSIF TG_OP = 'DELETE' THEN
        UPDATE marketplace_listings
        SET 
            rating_average = (
                SELECT COALESCE(AVG(rating), 0.00)
                FROM reviews
                WHERE agent_id = OLD.agent_id
            ),
            rating_count = (
                SELECT COUNT(*)
                FROM reviews
                WHERE agent_id = OLD.agent_id
            ),
            last_updated = NOW()
        WHERE agent_id = OLD.agent_id;
        RETURN OLD;
    END IF;
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Trigger for updating marketplace stats
CREATE TRIGGER update_marketplace_stats_trigger
    AFTER INSERT OR UPDATE OR DELETE ON reviews
    FOR EACH ROW EXECUTE FUNCTION update_marketplace_stats();

-- Function to create marketplace listing when agent is made public
CREATE OR REPLACE FUNCTION create_marketplace_listing()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.is_public = true AND OLD.is_public = false THEN
        INSERT INTO marketplace_listings (agent_id)
        VALUES (NEW.id)
        ON CONFLICT (agent_id) DO NOTHING;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for creating marketplace listing
CREATE TRIGGER create_marketplace_listing_trigger
    AFTER UPDATE ON ai_agents
    FOR EACH ROW EXECUTE FUNCTION create_marketplace_listing();

-- Insert sample badges
INSERT INTO badges (name, icon, description) VALUES
('First Agent', 'sparkles', 'Created your first AI agent'),
('Public Creator', 'globe', 'Published your first public agent'),
('Popular Agent', 'trending-up', 'Your agent reached 100+ clones'),
('Top Seller', 'dollar-sign', 'Generated $1000+ in revenue'),
('Community Helper', 'users', 'Received 50+ positive reviews'),
('Innovator', 'lightbulb', 'Created a trending agent template'),
('Power User', 'zap', 'Used 1000+ API calls'),
('Early Adopter', 'rocket', 'Joined during beta phase');

-- Insert sample agent templates
INSERT INTO agent_templates (name, description, category, thumbnail_url, canvas_data, configuration, tags, is_featured) VALUES
('Customer Support Bot', 'Automated customer service agent with natural language understanding', 'Customer Service', 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400', '{"blocks": [{"id": "input-1", "type": "input", "position": {"x": 100, "y": 100}, "data": {"label": "User Input", "config": {}}}, {"id": "process-1", "type": "process", "position": {"x": 300, "y": 100}, "data": {"label": "NLP Processing", "config": {}}}, {"id": "output-1", "type": "output", "position": {"x": 500, "y": 100}, "data": {"label": "Response", "config": {}}}], "connections": [], "viewport": {"x": 0, "y": 0, "zoom": 1}}', '{"model": "gpt-3.5-turbo", "temperature": 0.7}', '{"Support", "NLP", "Automation"}', true),
('Data Analysis Agent', 'Analyze and visualize complex datasets with AI-powered insights', 'Analytics', 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400', '{"blocks": [{"id": "input-1", "type": "input", "position": {"x": 100, "y": 100}, "data": {"label": "Data Input", "config": {}}}, {"id": "process-1", "type": "process", "position": {"x": 300, "y": 100}, "data": {"label": "Analysis", "config": {}}}, {"id": "transform-1", "type": "transform", "position": {"x": 300, "y": 250}, "data": {"label": "Visualization", "config": {}}}, {"id": "output-1", "type": "output", "position": {"x": 500, "y": 175}, "data": {"label": "Insights", "config": {}}}], "connections": [{"id": "conn-1", "source": "input-1", "target": "process-1"}, {"id": "conn-2", "source": "process-1", "target": "transform-1"}, {"id": "conn-3", "source": "transform-1", "target": "output-1"}], "viewport": {"x": 0, "y": 0, "zoom": 1}}', '{"model": "gpt-4", "temperature": 0.3}', '{"Analytics", "Data", "Visualization"}', true),
('Social Media Manager', 'Automate your social media posting and engagement', 'Marketing', 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400', '{"blocks": [{"id": "input-1", "type": "input", "position": {"x": 100, "y": 100}, "data": {"label": "Content Input", "config": {}}}, {"id": "process-1", "type": "process", "position": {"x": 300, "y": 100}, "data": {"label": "Content Generation", "config": {}}}, {"id": "api-1", "type": "api", "position": {"x": 500, "y": 100}, "data": {"label": "Social API", "config": {}}}], "connections": [{"id": "conn-1", "source": "input-1", "target": "process-1"}, {"id": "conn-2", "source": "process-1", "target": "api-1"}], "viewport": {"x": 0, "y": 0, "zoom": 1}}', '{"platforms": ["twitter", "linkedin", "facebook"], "schedule": "daily"}', '{"Social", "Marketing", "Automation"}', false);
