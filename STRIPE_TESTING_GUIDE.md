# 🧪 Guide de Test Stripe - OpenForge

## 📋 Prérequis

1. **Stripe CLI installé** : [stripe.com/docs/stripe-cli](https://stripe.com/docs/stripe-cli)
2. **Compte Stripe en mode test**
3. **Variables d'environnement configurées**

## 🔧 Configuration

### 1. Variables d'environnement
```env
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_BOOST_PRICE_ID=price_...
STRIPE_SCALE_PRICE_ID=price_...
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 2. Créer les produits dans Stripe Dashboard
- **Boost Plan** : $20/mois
- **Scale Plan** : $35/mois
- Copier les Price IDs et les mettre dans `.env`

## 🚀 Tests Locaux

### 1. Démarrer le webhook local
```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

### 2. Tester le checkout
1. Aller sur `/pricing`
2. Cliquer sur "Subscribe to Boost" ou "Subscribe to Scale"
3. Utiliser les cartes de test Stripe :
   - **Succès** : `4242 4242 4242 4242`
   - **Échec** : `4000 0000 0000 0002`

### 3. Vérifier la base de données
```sql
-- Vérifier les transactions
SELECT * FROM transactions ORDER BY created_at DESC;

-- Vérifier les plans utilisateurs
SELECT user_id, subscription_plan, stripe_customer_id 
FROM user_profiles 
WHERE stripe_customer_id IS NOT NULL;

-- Vérifier l'audit log
SELECT * FROM subscription_audit_log ORDER BY created_at DESC;
```

## 🎯 Tests Manuels

### Test 1: Checkout Session Completed
```bash
stripe trigger checkout.session.completed
```
**Résultat attendu** :
- `user_profiles.subscription_plan` mis à jour
- Transaction enregistrée dans `transactions`
- Entrée dans `subscription_audit_log`

### Test 2: Invoice Paid
```bash
stripe trigger invoice.paid
```
**Résultat attendu** :
- Plan maintenu ou mis à jour
- Transaction enregistrée

### Test 3: Payment Failed
```bash
stripe trigger invoice.payment_failed
```
**Résultat attendu** :
- `subscription_plan` remis à "Lunch"

### Test 4: Subscription Deleted
```bash
stripe trigger customer.subscription.deleted
```
**Résultat attendu** :
- `subscription_plan` remis à "Lunch"

## 🔍 Vérifications

### 1. Idempotence
- Relancer le même webhook → Pas de doublon
- Vérifier `transactions.stripe_id` unique

### 2. Sécurité
- Webhook sans signature → Erreur 400
- JWT invalide → Erreur 401
- Customer ID correctement lié

### 3. Logs
```bash
# Logs Stripe CLI
stripe logs tail

# Logs application
console.log dans le navigateur
```

## 🚨 Dépannage

### Erreurs courantes :
- ❌ "Invalid signature" → Vérifier `STRIPE_WEBHOOK_SECRET`
- ❌ "Price not found" → Vérifier les Price IDs
- ❌ "Customer not found" → Vérifier `stripe_customer_id`

### Debug :
```javascript
// Dans le webhook handler
console.log('Event type:', event.type);
console.log('Event data:', event.data.object);
```

## 📊 Monitoring

### Dashboard Stripe :
- Events → Voir tous les événements
- Customers → Vérifier les customers créés
- Subscriptions → Vérifier les abonnements

### Base de données :
```sql
-- Statistiques des plans
SELECT subscription_plan, COUNT(*) 
FROM user_profiles 
GROUP BY subscription_plan;

-- Transactions récentes
SELECT plan, status, COUNT(*) 
FROM transactions 
WHERE created_at > NOW() - INTERVAL '24 hours'
GROUP BY plan, status;
```

## 🎉 Tests de Production

### 1. Mode Live
- Changer les clés vers les clés Live
- Tester avec de vraies cartes (petits montants)
- Vérifier les webhooks en production

### 2. Webhook Production
- URL : `https://votre-domaine.com/api/stripe/webhook`
- Événements : `checkout.session.completed`, `invoice.paid`, etc.

## 📝 Checklist de Déploiement

- [ ] Variables d'environnement configurées
- [ ] Webhook créé sur Stripe Dashboard
- [ ] Price IDs corrects
- [ ] Tests locaux réussis
- [ ] Base de données migrée
- [ ] Logs de monitoring en place
