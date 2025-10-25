# 🔧 Configuration des Credentials OpenForge

## Étape 1 : Créer le fichier .env

1. **Copiez le fichier `config.env` vers `.env`** :
   ```bash
   copy config.env .env
   ```

2. **Ou créez manuellement un fichier `.env`** dans le dossier `openforge/` avec :
   ```env
   VITE_SUPABASE_URL=https://votre-projet.supabase.co
   VITE_SUPABASE_ANON_KEY=votre-cle-anon
   ```

## Étape 2 : Récupérer vos credentials FiverFlow

### Option A : Si vous avez un fichier .env dans FiverFlow
1. Ouvrez le fichier `.env` de FiverFlow
2. Copiez les valeurs de `VITE_SUPABASE_URL` et `VITE_SUPABASE_ANON_KEY`
3. Collez-les dans le fichier `.env` d'OpenForge

### Option B : Si vous n'avez pas de fichier .env
1. Allez sur [supabase.com](https://supabase.com)
2. Connectez-vous à votre compte
3. Sélectionnez votre projet FiverFlow
4. Allez dans **Settings** > **API**
5. Copiez :
   - **Project URL** → `VITE_SUPABASE_URL`
   - **anon public** key → `VITE_SUPABASE_ANON_KEY`

## Étape 3 : Tester la configuration

1. **Lancez OpenForge** :
   ```bash
   npm run dev
   ```

2. **Ouvrez** `http://localhost:3001`

3. **Vérifiez** que le message "Demo Mode" a disparu

4. **Connectez-vous** avec vos identifiants FiverFlow

## Étape 4 : Tester les rôles

1. **Connectez-vous** à Supabase
2. **Allez dans l'éditeur SQL**
3. **Exécutez** cette requête pour vous donner le rôle admin :
   ```sql
   UPDATE profiles 
   SET is_admin = true 
   WHERE user_id = 'votre-user-id';
   ```
4. **Rafraîchissez** OpenForge
5. **Vous devriez avoir accès** à `/admin`

## 🚨 Problèmes courants

- **"Failed to fetch"** → Vérifiez que l'URL Supabase est correcte
- **"Invalid API key"** → Vérifiez que la clé anon est correcte
- **Pas d'accès admin** → Vérifiez que `is_admin = true` dans Supabase
