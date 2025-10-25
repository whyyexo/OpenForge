-- Ajouter la colonne subscription à user_profiles
ALTER TABLE user_profiles 
ADD COLUMN subscription VARCHAR(20) DEFAULT 'Lunch' CHECK (subscription IN ('Lunch', 'Boost', 'Scale'));

-- Mettre à jour tous les utilisateurs existants avec 'Lunch' par défaut
UPDATE user_profiles 
SET subscription = 'Lunch' 
WHERE subscription IS NULL;

-- Créer un index pour les recherches par subscription
CREATE INDEX idx_user_profiles_subscription ON user_profiles(subscription);

-- Commentaire pour documenter la colonne
COMMENT ON COLUMN user_profiles.subscription IS 'Plan d''abonnement: Lunch (gratuit), Boost (20 USD), Scale (35 USD)';
