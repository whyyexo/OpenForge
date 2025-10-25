# 🔧 Guide de Configuration Stripe pour OpenForge

## 📋 Étapes de Configuration

### 1. **Créer un compte Stripe**
- Aller sur [stripe.com](https://stripe.com)
- Créer un compte développeur
- Activer le mode test

### 2. **Récupérer les clés API**

#### **Clé Publique (Publishable Key)**
```
pk_test_51ABC123...XYZ789
```
- Dashboard Stripe → Developers → API Keys
- Copier la "Publishable key"

#### **Clé Secrète (Secret Key)**
```
sk_test_51ABC123...XYZ789
```
- Dashboard Stripe → Developers → API Keys
- Copier la "Secret key"

#### **Webhook Secret**
```
whsec_ABC123...XYZ789
```
- Dashboard Stripe → Developers → Webhooks
- Créer un endpoint : `https://votre-domaine.com/api/webhook-stripe`
- Copier le "Signing secret"

### 3. **Configurer le fichier .env**

Mettre à jour votre fichier `env.local` :

```env
# Supabase (déjà configuré)
VITE_SUPABASE_URL=https://arnuyyyryvbfcvqauqur.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Stripe Configuration
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_51ABC123...XYZ789
STRIPE_SECRET_KEY=sk_test_51ABC123...XYZ789
STRIPE_WEBHOOK_SECRET=whsec_ABC123...XYZ789
```

### 4. **Créer les produits et prix dans Stripe**

#### **Produit Boost ($20/mois)**
1. Dashboard Stripe → Products → Add product
2. Nom : "Boost Plan"
3. Prix : $20.00 USD (recurring monthly)
4. Récupérer le Price ID : `price_1ABC123...XYZ789`

#### **Produit Scale ($35/mois)**
1. Dashboard Stripe → Products → Add product
2. Nom : "Scale Plan"
3. Prix : $35.00 USD (recurring monthly)
4. Récupérer le Price ID : `price_1DEF456...UVW012`

### 5. **Mettre à jour les Price IDs**

Dans `src/components/StripeCheckout.tsx`, ligne 45-50 :

```typescript
const getPriceId = (plan: string): string => {
  switch (plan) {
    case 'Boost':
      return 'price_1ABC123...XYZ789'; // Votre vrai Price ID
    case 'Scale':
      return 'price_1DEF456...UVW012'; // Votre vrai Price ID
    default:
      return '';
  }
};
```

### 6. **Configurer les webhooks**

1. Dashboard Stripe → Developers → Webhooks
2. Add endpoint : `https://votre-domaine.com/api/webhook-stripe`
3. Sélectionner les événements :
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
4. Copier le "Signing secret" dans `.env`

### 7. **Exécuter le script SQL**

Dans Supabase SQL Editor, exécuter `add-stripe-columns.sql` :

```sql
-- Ajouter les colonnes Stripe
ALTER TABLE public.user_profiles 
ADD COLUMN IF NOT EXISTS stripe_customer_id TEXT,
ADD COLUMN IF NOT EXISTS subscription_status TEXT DEFAULT 'active',
ADD COLUMN IF NOT EXISTS stripe_subscription_id TEXT,
ADD COLUMN IF NOT EXISTS current_period_end TIMESTAMP WITH TIME ZONE;
```

### 8. **Tester la configuration**

1. **Mode Test** : Utiliser les cartes de test Stripe
   - Succès : `4242 4242 4242 4242`
   - Échec : `4000 0000 0000 0002`

2. **Vérifier les logs** :
   - Console du navigateur
   - Logs Stripe Dashboard
   - Logs Supabase

## 🚀 Déploiement en Production

### 1. **Passer en mode Live**
- Dashboard Stripe → Toggle "Test mode" → OFF
- Récupérer les nouvelles clés Live
- Mettre à jour `.env`

### 2. **Configurer le domaine**
- Ajouter votre domaine dans Stripe
- Mettre à jour les webhooks avec l'URL de production

### 3. **Variables d'environnement Vercel**
```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

## 🔍 Dépannage

### **Erreurs courantes :**
- ❌ "Invalid API key" → Vérifier les clés dans `.env`
- ❌ "Webhook signature invalid" → Vérifier le webhook secret
- ❌ "Price not found" → Vérifier les Price IDs dans le code

### **Logs utiles :**
- Stripe Dashboard → Events
- Supabase → Logs
- Console du navigateur

## 📞 Support

- [Documentation Stripe](https://stripe.com/docs)
- [Guide Supabase](https://supabase.com/docs)
- [Stripe Testing](https://stripe.com/docs/testing)

