# 🏗️ Restructuration OpenForge - Site Web + Dashboard

## ✅ Modifications effectuées

### **1. Structure des dossiers**
```
src/
├── pages/           # Pages du site web public
│   ├── Landing.tsx  # Page d'accueil
│   ├── Pricing.tsx  # Page de tarification
│   └── Login.tsx    # Page de connexion
├── dashboard/       # Application dashboard
│   ├── components/  # Composants du dashboard
│   ├── pages/       # Pages du dashboard
│   ├── contexts/    # Contextes du dashboard
│   └── App.tsx      # App du dashboard
└── App.tsx          # App principal
```

### **2. Pages du site web public**
- **Landing** (`/`) : Page d'accueil avec hero, features, CTA
- **Pricing** (`/pricing`) : Page de tarification (reste publique)
- **Login** (`/login`) : Page de connexion

### **3. Dashboard séparé**
- **Routes** : `/dashboard/*`, `/admin/*`, `/profile/*`, etc.
- **Layout** : Navigation + Sidebar + contenu
- **Authentification** : Requise pour toutes les routes

### **4. Navigation mise à jour**
- **Bouton "Go to Dashboard"** : Redirige vers `/dashboard`
- **Bouton "View Pricing"** : Redirige vers `/pricing`
- **Taille** : Reste la même (pas de changement)

### **5. Fonctionnalités ajoutées**
- **Switcher annuel/mensuel** : Sur la page Pricing
- **Texte de réduction** : "Save 20% on annual billing"
- **Prix dynamiques** : Changent selon le mode sélectionné

## 🎯 Navigation

### **Site Web Public**
1. **Landing** → Boutons vers Pricing ou Dashboard
2. **Pricing** → Accessible sans authentification
3. **Login** → Redirige vers Dashboard si connecté

### **Dashboard**
1. **Authentification requise** pour toutes les routes
2. **Layout complet** : Navigation + Sidebar + contenu
3. **Routes protégées** : Dashboard, Admin, Profile, Settings, Team

## 🧪 Test

1. **URL racine** : `http://localhost:3001/` → Landing page
2. **Pricing** : `http://localhost:3001/pricing` → Page tarification
3. **Dashboard** : `http://localhost:3001/dashboard` → Dashboard (auth requise)
4. **Login** : `http://localhost:3001/login` → Connexion

## 📝 Notes

- **Pricing** reste une page publique du site web
- **Dashboard** est maintenant une application séparée
- **Navigation** garde la même taille
- **Switcher** fonctionne avec les prix dynamiques
