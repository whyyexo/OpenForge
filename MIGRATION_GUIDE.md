# 🚀 User Migration Guide - NeuroFlow

Ce guide explique comment migrer tous les utilisateurs de ton autre projet Supabase vers NeuroFlow.

## 📋 Prérequis

1. **Node.js** installé sur ton système
2. **Accès** à ton projet Supabase source
3. **Variables d'environnement** configurées pour NeuroFlow

## 🔧 Configuration

### 1. Variables d'environnement

Crée un fichier `.env` dans le dossier racine de NeuroFlow :

```env
# NeuroFlow Supabase Configuration
VITE_SUPABASE_URL=https://ton-projet-neuroflow.supabase.co
VITE_SUPABASE_ANON_KEY=ton-anon-key-neuroflow
```

### 2. Installation des dépendances

```bash
npm install @supabase/supabase-js
```

## 🚀 Méthodes de Migration

### Méthode 1: Script Automatique (Recommandé)

1. **Exécute le script de migration :**
```bash
node migrate-users.js
```

2. **Le script va :**
   - Se connecter à ton projet source
   - Analyser la structure des données
   - Migrer tous les utilisateurs
   - Générer un code de synchronisation
   - Afficher des statistiques détaillées

### Méthode 2: Interface Web

1. **Démarre le serveur de développement :**
```bash
npm run dev
```

2. **Accède à l'interface d'administration :**
```
http://localhost:5173/admin
```

3. **Utilise l'outil de migration intégré**

## 📊 Données Migrées

### Champs Principaux
- ✅ **Nom** → `display_name`
- ✅ **Email** → `email` (via auth.users)
- ✅ **Username** → `username`
- ✅ **Admin** → `is_admin`
- ✅ **Abonnement** → `subscription_tier`

### Abonnements Mappés
- `lunch` → Lunch (Gratuit)
- `boost` → Boost ($20)
- `scale` → Scale ($35)

### Champs Étendus
- ✅ **Toutes les 44 colonnes** de `user_profiles`
- ✅ **Données originales** stockées dans `original_data`
- ✅ **Liens sociaux** extraits automatiquement
- ✅ **Préférences** utilisateur
- ✅ **Statistiques** de connexion

## 🔄 Synchronisation

Après la migration, ton autre projet peut se synchroniser avec NeuroFlow :

### Code de Synchronisation Généré

Le script génère automatiquement `neuroflow-sync.js` avec :

```javascript
// Synchroniser un utilisateur vers NeuroFlow
await NeuroFlowSync.syncUserToNeuroFlow(userData);

// Récupérer des données depuis NeuroFlow
const userData = await NeuroFlowSync.getUserFromNeuroFlow(userId);
```

### Intégration dans ton Autre Projet

1. **Copie** le fichier `neuroflow-sync.js` dans ton autre projet
2. **Importe** la classe `NeuroFlowSync`
3. **Utilise** les méthodes de synchronisation

## 📈 Statistiques de Migration

Le script affiche :
- **Total** d'utilisateurs trouvés
- **Migrés** avec succès
- **Ignorés** (déjà existants)
- **Erreurs** rencontrées
- **Durée** de la migration

## 🛠️ Dépannage

### Erreurs Communes

1. **"Invalid API key"**
   - Vérifie tes clés Supabase
   - Assure-toi que les URLs sont correctes

2. **"Rate limit exceeded"**
   - Le script inclut des délais automatiques
   - Réduis la vitesse si nécessaire

3. **"User already exists"**
   - Normal, le script ignore les doublons
   - Vérifie les logs pour plus de détails

### Logs Détaillés

Le script affiche :
- ✅ Succès (utilisateurs migrés)
- ℹ️ Informations (utilisateurs ignorés)
- ❌ Erreurs (problèmes rencontrés)

## 🔐 Sécurité

- **Clés de service** utilisées uniquement pour la migration
- **Données originales** préservées dans `original_data`
- **Pas de perte** de données
- **Migration réversible** possible

## 📞 Support

Si tu rencontres des problèmes :

1. **Vérifie** les logs de migration
2. **Teste** avec quelques utilisateurs d'abord
3. **Contacte-moi** avec les détails de l'erreur

## 🎯 Prochaines Étapes

Après la migration :

1. **Teste** la connexion des utilisateurs
2. **Vérifie** les abonnements
3. **Configure** la synchronisation
4. **Mets à jour** ton autre projet

---

**🚀 Prêt à migrer ? Lance le script et suis les instructions !**
