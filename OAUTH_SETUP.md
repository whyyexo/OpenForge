# OAuth Setup Guide

This guide explains how to set up OAuth integrations for Discord and GitHub.

## Discord OAuth Setup

### 1. Create a Discord Application
1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application"
3. Give your application a name
4. Go to the "OAuth2" section

### 2. Configure OAuth2
1. Add redirect URI: `http://localhost:5173/auth/callback` (for development)
2. Copy the Client ID
3. Copy the Client Secret (keep this secure!)

### 3. Set Scopes
Required scopes:
- `identify` - Get user's basic information
- `email` - Get user's email

## GitHub OAuth Setup

### 1. Create a GitHub OAuth App
1. Go to GitHub Settings > Developer settings > OAuth Apps
2. Click "New OAuth App"
3. Fill in the details:
   - Application name: Your app name
   - Homepage URL: `http://localhost:5173`
   - Authorization callback URL: `http://localhost:5173/auth/callback`

### 2. Get Credentials
1. Copy the Client ID
2. Generate and copy the Client Secret

## Environment Variables

Create a `.env` file in your project root:

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

# OAuth Client IDs
VITE_DISCORD_CLIENT_ID=your-discord-client-id
VITE_GITHUB_CLIENT_ID=your-github-client-id
```

## Database Setup

Run the SQL schema to create the OAuth connections table:

```sql
-- The schema is already included in supabase-schema.sql
-- Just run the migration in your Supabase dashboard
```

## How It Works

1. **User clicks "Connect"** on a provider
2. **Redirect to OAuth provider** (Discord/GitHub)
3. **User authorizes** your application
4. **Callback to your app** with authorization code
5. **Exchange code for tokens** (handled by backend)
6. **Save connection** to database
7. **User can now authenticate** with that provider

## Security Notes

- **Never expose client secrets** in frontend code
- **Use HTTPS** in production
- **Validate state parameter** to prevent CSRF
- **Store tokens securely** in database
- **Implement token refresh** for long-lived sessions

## Backend Implementation

For production, you'll need a backend to:
1. Exchange authorization codes for access tokens
2. Store client secrets securely
3. Handle token refresh
4. Validate tokens

The current implementation includes placeholder functions that you'll need to implement with your backend.
