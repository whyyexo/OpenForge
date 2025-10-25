-- =============================================
-- STRIPE INTEGRATION MIGRATIONS
-- =============================================

-- 1) Assure la colonne qui stocke le plan
ALTER TABLE IF EXISTS user_profiles
  ADD COLUMN IF NOT EXISTS subscription_plan text DEFAULT 'Lunch';

-- 2) Champ pour lier le customer Stripe
ALTER TABLE IF EXISTS user_profiles
  ADD COLUMN IF NOT EXISTS stripe_customer_id text;

-- 3) Table transactions si pas encore existante
CREATE TABLE IF NOT EXISTS transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  stripe_id text UNIQUE,
  amount_cents integer,
  currency text DEFAULT 'usd',
  plan text,
  status text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 4) Index pour performance
CREATE INDEX IF NOT EXISTS idx_transactions_user_id ON transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_transactions_stripe_id ON transactions(stripe_id);
CREATE INDEX IF NOT EXISTS idx_user_profiles_stripe_customer_id ON user_profiles(stripe_customer_id);

-- 5) RLS Policies pour transactions
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;

-- Policy pour que les utilisateurs voient leurs propres transactions
CREATE POLICY "Users can view their own transactions" ON transactions
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

-- Policy pour que les utilisateurs insèrent leurs propres transactions
CREATE POLICY "Users can insert their own transactions" ON transactions
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- 6) Mise à jour des données existantes
UPDATE user_profiles 
SET subscription_plan = 'Lunch' 
WHERE subscription_plan IS NULL;

-- 7) Audit log pour les changements de subscription (optionnel)
CREATE TABLE IF NOT EXISTS subscription_audit_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  old_plan text,
  new_plan text,
  stripe_event_id text,
  created_at timestamptz DEFAULT now()
);

-- Policy pour audit log
ALTER TABLE subscription_audit_log ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own audit log" ON subscription_audit_log
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

