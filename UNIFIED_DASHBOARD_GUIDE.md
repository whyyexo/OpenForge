# 🚀 NeuroFlow Unified Dashboard

Un dashboard moderne style StackBlitz/Supabase avec authentification unifiée.

## ✨ Fonctionnalités

### 🔐 Authentification Unifiée
- **Connexion automatique** à ton autre projet Supabase
- **Migration transparente** des utilisateurs existants
- **Synchronisation bidirectionnelle** des données
- **Compte unifié** pour tous tes projets

### 🎨 Interface Moderne
- **Design style StackBlitz/Supabase** - propre et professionnel
- **Navigation par onglets** - Overview, Projects, Account, Settings
- **Responsive design** - fonctionne sur tous les appareils
- **Animations fluides** - expérience utilisateur optimale

## 🚀 Comment Utiliser

### 1. Accès au Dashboard
```
http://localhost:5173
```

### 2. Connexion avec ton Compte Existant
1. Clique sur "Sign In / Sign Up"
2. Utilise ton email et mot de passe de l'autre projet
3. Le système va automatiquement :
   - Vérifier si tu existes dans l'autre projet
   - Migrer tes données vers NeuroFlow
   - Créer un compte unifié

### 3. Création d'un Nouveau Compte
1. Clique sur "Sign In / Sign Up"
2. Sélectionne "Sign Up"
3. Remplis les informations
4. Le système vérifiera qu'aucun compte n'existe déjà

## 📊 Onglets du Dashboard

### 📈 Overview
- **Statistiques générales** de ton compte
- **Statut de connexion** unifié
- **Projets actifs** et informations

### 🚀 Projects
- **Gestion des projets** NeuroFlow
- **Création de nouveaux projets**
- **Vue d'ensemble** de tous tes projets

### 👤 Account
- **Informations du compte** unifié
- **Détails de migration** depuis l'autre projet
- **Statut d'abonnement** et permissions
- **Données originales** préservées

### ⚙️ Settings
- **Préférences de compte**
- **Notifications**
- **Synchronisation** avec l'autre projet
- **Paramètres de sécurité**

## 🔄 Système de Migration

### Migration Automatique
Quand tu te connectes avec un compte de l'autre projet :

1. **Vérification** - Le système vérifie si tu existes dans l'autre projet
2. **Migration** - Tes données sont migrées vers NeuroFlow
3. **Synchronisation** - Les deux comptes restent liés
4. **Unification** - Tu as un seul compte pour tous tes projets

### Données Migrées
- ✅ **Email** et informations de base
- ✅ **Nom d'utilisateur** et nom d'affichage
- ✅ **Abonnement** (Lunch, Scale, Boost)
- ✅ **Statut admin** et permissions
- ✅ **Toutes les 44 colonnes** de l'autre projet
- ✅ **Données originales** préservées

## 🛠️ Configuration Technique

### Variables d'Environnement
```env
VITE_SUPABASE_URL=https://gcohjfjhktpqswqwiczb.supabase.co
VITE_SUPABASE_ANON_KEY=your-neuroflow-anon-key
```

### Connexions Configurées
- **Autre projet** : `https://arnuyyyryvbfcvqauqur.supabase.co`
- **NeuroFlow** : `https://gcohjfjhktpqswqwiczb.supabase.co`

## 🧪 Tests Disponibles

```bash
# Tester le système unifié
node test-unified-auth.js

# Vérifier les connexions
node test-supabase-connection.js

# Diagnostiquer les problèmes
node fix-auth-timeout.js
```

## 🎯 Avantages

### Pour Toi
- **Un seul compte** pour tous tes projets
- **Données synchronisées** automatiquement
- **Interface moderne** et intuitive
- **Migration transparente** des utilisateurs

### Pour Tes Utilisateurs
- **Connexion simplifiée** avec leur compte existant
- **Données préservées** lors de la migration
- **Expérience unifiée** sur tous tes projets
- **Synchronisation automatique** des changements

## 🔧 Dépannage

### Problèmes de Connexion
1. Vérifie que les variables d'environnement sont correctes
2. Assure-toi que les deux projets Supabase sont actifs
3. Teste les connexions avec les scripts fournis

### Problèmes de Migration
1. Vérifie que l'autre projet est accessible
2. Assure-toi que la table `user_profiles` existe
3. Vérifie les permissions des clés API

### Interface Ne Se Charge Pas
1. Vide le cache du navigateur (Ctrl+Shift+R)
2. Redémarre le serveur de développement
3. Vérifie la console du navigateur pour les erreurs

## 🎉 Résultat

Tu as maintenant un dashboard moderne et unifié qui :
- Se connecte automatiquement à ton autre projet
- Migre les utilisateurs de façon transparente
- Offre une expérience utilisateur moderne
- Synchronise les données entre les projets

**Ton système d'authentification unifié est prêt ! 🚀**
