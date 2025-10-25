# 🚀 OpenForge Setup Guide

## Configuration Supabase

Pour connecter OpenForge à la même base de données que FiverFlow :

### 1. Récupérer les credentials FiverFlow

1. Allez dans votre projet FiverFlow
2. Copiez les valeurs de `VITE_SUPABASE_URL` et `VITE_SUPABASE_ANON_KEY`
3. Ou vérifiez dans votre fichier `.env` de FiverFlow

### 2. Configurer OpenForge

1. Renommez `env.local` en `.env` dans le dossier `openforge/`
2. Remplacez les valeurs par vos credentials FiverFlow :

```env
VITE_SUPABASE_URL=https://votre-projet-fiverflow.supabase.co
VITE_SUPABASE_ANON_KEY=votre-cle-fiverflow
```

### 3. Lancer l'application

```bash
cd openforge
npm run dev
```

L'application sera disponible sur `http://localhost:3001`

## Test des rôles

### Connexion
1. Utilisez les mêmes identifiants que FiverFlow
2. Vous serez redirigé vers `/dashboard` ou `/admin` selon votre rôle

### Test du rôle admin
1. Connectez-vous à Supabase
2. Allez dans l'éditeur SQL
3. Exécutez cette requête pour vous donner le rôle admin :

```sql
UPDATE profiles 
SET is_admin = true 
WHERE user_id = 'votre-user-id';
```

4. Rafraîchissez OpenForge
5. Vous devriez maintenant avoir accès à `/admin`

### Retirer le rôle admin
```sql
UPDATE profiles 
SET is_admin = false 
WHERE user_id = 'votre-user-id';
```

## Fonctionnalités

✅ **Authentification partagée** avec FiverFlow  
✅ **Gestion des rôles** (admin/member)  
✅ **Redirection automatique** selon le rôle  
✅ **Style Supabase Dashboard** (fond sombre, Inter, accent vert)  
✅ **Mise à jour en temps réel** des rôles  
✅ **Interface responsive** et minimaliste  

## Pages disponibles

- `/login` - Page de connexion
- `/dashboard` - Dashboard principal (tous les utilisateurs)
- `/admin` - Dashboard admin (rôle admin requis)

## Architecture

- **Base de données** : Même Supabase que FiverFlow
- **Authentification** : Sessions partagées
- **Rôles** : Table `profiles` avec champ `is_admin`
- **Style** : Tailwind CSS avec thème Supabase
- **Routing** : React Router avec routes protégées
