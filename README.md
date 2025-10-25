# OpenForge Dashboard

A dashboard application connected to the same Supabase database as FiverFlow, featuring role-based access control.

## Features

- **Shared Authentication**: Uses the same Supabase instance as FiverFlow
- **Role-Based Access**: Admin and member roles with different permissions
- **Real-time Role Updates**: Role changes in Supabase are reflected immediately
- **Supabase Dashboard Style**: Dark theme with Inter font and green accent

## Pages

- `/login` - Authentication page
- `/dashboard` - Main dashboard (accessible to all users)
- `/admin` - Admin dashboard (admin role required)

## Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure Supabase**:
   - Copy `env.example` to `.env`
   - Add your Supabase URL and anon key (same as FiverFlow)

3. **Run the application**:
   ```bash
   npm run dev
   ```

## Role Testing

To test role-based access:

1. Change your `is_admin` field in the `profiles` table in Supabase
2. Refresh the page or navigate to see the changes
3. Admin users can access `/admin`
4. Non-admin users are redirected to `/dashboard`

## Architecture

- **Authentication**: Shared with FiverFlow via Supabase
- **Styling**: Tailwind CSS with Supabase Dashboard theme
- **Routing**: React Router with protected routes
- **State Management**: React Context for authentication
