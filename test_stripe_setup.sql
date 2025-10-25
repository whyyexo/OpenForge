-- =============================================
-- TEST STRIPE SETUP - Vérification complète
-- =============================================

-- 1) Vérifier la structure de user_profiles
SELECT 
    'user_profiles' as table_name,
    column_name,
    data_type,
    is_nullable,
    column_default
FROM information_schema.columns 
WHERE table_name = 'user_profiles' 
AND column_name IN ('subscription_plan', 'stripe_customer_id', 'user_id')
ORDER BY column_name;

-- 2) Vérifier la structure de transactions
SELECT 
    'transactions' as table_name,
    column_name,
    data_type,
    is_nullable
FROM information_schema.columns 
WHERE table_name = 'transactions' 
ORDER BY column_name;

-- 3) Vérifier les index
SELECT 
    indexname,
    tablename,
    indexdef
FROM pg_indexes 
WHERE tablename IN ('transactions', 'user_profiles')
AND indexname LIKE '%stripe%' OR indexname LIKE '%user%'
ORDER BY tablename, indexname;

-- 4) Vérifier les policies RLS
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual
FROM pg_policies 
WHERE tablename IN ('transactions', 'subscription_audit_log')
ORDER BY tablename, policyname;

-- 5) Test d'insertion (simulation)
-- Cette requête ne sera pas exécutée, juste pour vérifier la syntaxe
/*
INSERT INTO transactions (
    user_id, 
    stripe_id, 
    amount_cents, 
    currency, 
    plan, 
    status
) VALUES (
    '00000000-0000-0000-0000-000000000000', -- UUID de test
    'cs_test_123456789',
    2000,
    'usd',
    'Boost',
    'completed'
);
*/

-- 6) Vérifier les contraintes
SELECT 
    tc.table_name,
    tc.constraint_name,
    tc.constraint_type,
    kcu.column_name
FROM information_schema.table_constraints tc
JOIN information_schema.key_column_usage kcu 
    ON tc.constraint_name = kcu.constraint_name
WHERE tc.table_name IN ('transactions', 'user_profiles')
ORDER BY tc.table_name, tc.constraint_type;

-- 7) Compter les enregistrements existants
SELECT 
    'user_profiles' as table_name,
    COUNT(*) as total_records,
    COUNT(CASE WHEN subscription_plan IS NOT NULL THEN 1 END) as with_subscription_plan,
    COUNT(CASE WHEN stripe_customer_id IS NOT NULL THEN 1 END) as with_stripe_customer
FROM user_profiles

UNION ALL

SELECT 
    'transactions' as table_name,
    COUNT(*) as total_records,
    COUNT(CASE WHEN stripe_id IS NOT NULL THEN 1 END) as with_stripe_id,
    COUNT(CASE WHEN status = 'completed' THEN 1 END) as completed_transactions
FROM transactions;

