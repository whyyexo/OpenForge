-- =============================================
-- FIX STRIPE TABLES - Vérification et correction
-- =============================================

-- 1) Vérifier si la table transactions existe
DO $$
BEGIN
    IF NOT EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'transactions') THEN
        -- Créer la table transactions
        CREATE TABLE transactions (
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
        
        RAISE NOTICE 'Table transactions created';
    ELSE
        RAISE NOTICE 'Table transactions already exists';
    END IF;
END $$;

-- 2) Vérifier si la colonne stripe_id existe
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'transactions' AND column_name = 'stripe_id'
    ) THEN
        ALTER TABLE transactions ADD COLUMN stripe_id text UNIQUE;
        RAISE NOTICE 'Column stripe_id added to transactions';
    ELSE
        RAISE NOTICE 'Column stripe_id already exists in transactions';
    END IF;
END $$;

-- 3) Vérifier les colonnes user_profiles
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'user_profiles' AND column_name = 'subscription_plan'
    ) THEN
        ALTER TABLE user_profiles ADD COLUMN subscription_plan text DEFAULT 'Lunch';
        RAISE NOTICE 'Column subscription_plan added to user_profiles';
    ELSE
        RAISE NOTICE 'Column subscription_plan already exists in user_profiles';
    END IF;
END $$;

DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'user_profiles' AND column_name = 'stripe_customer_id'
    ) THEN
        ALTER TABLE user_profiles ADD COLUMN stripe_customer_id text;
        RAISE NOTICE 'Column stripe_customer_id added to user_profiles';
    ELSE
        RAISE NOTICE 'Column stripe_customer_id already exists in user_profiles';
    END IF;
END $$;

-- 4) Créer les index si nécessaire
CREATE INDEX IF NOT EXISTS idx_transactions_user_id ON transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_transactions_stripe_id ON transactions(stripe_id);
CREATE INDEX IF NOT EXISTS idx_user_profiles_stripe_customer_id ON user_profiles(stripe_customer_id);

-- 5) Activer RLS sur transactions
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;

-- 6) Créer les policies si elles n'existent pas
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'transactions' AND policyname = 'Users can view their own transactions'
    ) THEN
        CREATE POLICY "Users can view their own transactions" ON transactions
            FOR SELECT TO authenticated
            USING (auth.uid() = user_id);
        RAISE NOTICE 'Policy created: Users can view their own transactions';
    END IF;
END $$;

DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'transactions' AND policyname = 'Users can insert their own transactions'
    ) THEN
        CREATE POLICY "Users can insert their own transactions" ON transactions
            FOR INSERT TO authenticated
            WITH CHECK (auth.uid() = user_id);
        RAISE NOTICE 'Policy created: Users can insert their own transactions';
    END IF;
END $$;

-- 7) Créer la table audit log si nécessaire
DO $$
BEGIN
    IF NOT EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'subscription_audit_log') THEN
        CREATE TABLE subscription_audit_log (
            id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
            user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
            old_plan text,
            new_plan text,
            stripe_event_id text,
            created_at timestamptz DEFAULT now()
        );
        
        ALTER TABLE subscription_audit_log ENABLE ROW LEVEL SECURITY;
        
        CREATE POLICY "Users can view their own audit log" ON subscription_audit_log
            FOR SELECT TO authenticated
            USING (auth.uid() = user_id);
            
        RAISE NOTICE 'Table subscription_audit_log created';
    ELSE
        RAISE NOTICE 'Table subscription_audit_log already exists';
    END IF;
END $$;

-- 8) Mettre à jour les données existantes
UPDATE user_profiles 
SET subscription_plan = 'Lunch' 
WHERE subscription_plan IS NULL;

-- 9) Vérification finale
SELECT 
    'user_profiles' as table_name,
    column_name,
    data_type
FROM information_schema.columns 
WHERE table_name = 'user_profiles' 
AND column_name IN ('subscription_plan', 'stripe_customer_id')

UNION ALL

SELECT 
    'transactions' as table_name,
    column_name,
    data_type
FROM information_schema.columns 
WHERE table_name = 'transactions' 
AND column_name IN ('stripe_id', 'user_id', 'plan', 'status')

ORDER BY table_name, column_name;
