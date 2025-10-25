# 🎨 Supabase-Style Dashboard

Dashboard moderne avec le style exact de Supabase - couleurs, typographie, composants et interactions.

## ✨ Style Supabase Implémenté

### 🎨 Palette de Couleurs
- **Primaire** : `#10b981` (Green-600) - Couleur principale de Supabase
- **Arrière-plan** : `#f8fafc` (Slate-50) - Gris très clair
- **Texte** : `#0f172a` (Slate-900) - Gris très foncé
- **Bordures** : `#e2e8f0` (Slate-200) - Gris clair
- **Cartes** : Blanc avec ombres subtiles

### 🔤 Typographie
- **Police** : Inter (police de Supabase)
- **Tailles** : Text-sm, text-lg, text-xl, text-2xl
- **Poids** : Font-medium, font-semibold
- **Espacement** : Leading-tight, leading-normal

### 🧩 Composants Style Supabase

#### Boutons
```css
.btn-primary    /* Vert Supabase avec hover */
.btn-secondary  /* Gris avec hover */
.btn-outline    /* Bordure avec fond transparent */
```

#### Cartes
```css
.card           /* Fond blanc, bordure, ombre */
.card-header    /* En-tête avec bordure */
.card-body      /* Corps avec padding */
```

#### Formulaires
```css
.form-input     /* Input avec focus vert */
.form-label     /* Label avec typographie */
```

#### Badges
```css
.badge-success  /* Vert pour succès */
.badge-warning  /* Jaune pour avertissement */
.badge-error    /* Rouge pour erreur */
.badge-info     /* Bleu pour information */
.badge-neutral  /* Gris pour neutre */
```

#### Navigation
```css
.nav-item       /* Élément de navigation */
.nav-item-active    /* État actif vert */
.nav-item-inactive  /* État inactif gris */
```

## 🏗️ Structure du Dashboard

### Header Supabase
- **Logo** : Icône Supabase verte
- **Titre** : "NeuroFlow" avec typographie Supabase
- **Actions** : Email utilisateur + bouton Sign Out

### Sidebar Navigation
- **Onglets** : Overview, Projects, Account, Settings
- **Icônes** : Emojis pour chaque section
- **États** : Actif (vert) / Inactif (gris)
- **Hover** : Transitions fluides

### Contenu Principal
- **Layout** : Grille responsive
- **Cartes** : Statistiques avec icônes
- **Espacement** : Padding et margins cohérents
- **Ombres** : Subtiles et élégantes

## 📱 Design Responsive

### Mobile (< 768px)
- Sidebar en overlay
- Cartes en pleine largeur
- Typographie adaptée

### Tablet (768px - 1024px)
- Sidebar fixe
- Grille 2 colonnes
- Espacement optimisé

### Desktop (> 1024px)
- Layout complet
- Grille 3 colonnes
- Espacement maximal

## 🎯 Fonctionnalités Style Supabase

### Overview Tab
- **Cartes statistiques** avec icônes colorées
- **Activité récente** avec état vide
- **Métriques** : Projets, utilisateurs, statut

### Projects Tab
- **Liste des projets** avec état vide
- **Bouton "New Project"** style Supabase
- **Gestion** des projets existants

### Account Tab
- **Informations profil** en grille
- **Statut compte** avec badges
- **Données unifiées** de migration

### Settings Tab
- **Notifications** avec toggles
- **Compte unifié** avec synchronisation
- **Préférences** utilisateur

## 🔧 Classes CSS Disponibles

### Layout
```css
.min-h-screen    /* Hauteur minimale écran */
.max-w-7xl       /* Largeur maximale */
.mx-auto         /* Centrage horizontal */
```

### Spacing
```css
.p-4, .p-6       /* Padding */
.m-4, .m-6       /* Margin */
.space-y-4       /* Espacement vertical */
.gap-6           /* Espacement grille */
```

### Colors
```css
.bg-green-600    /* Fond vert Supabase */
.text-slate-900  /* Texte principal */
.border-slate-200 /* Bordures */
```

### States
```css
.hover:bg-green-700  /* Hover vert */
.focus:ring-green-500 /* Focus vert */
.transition-colors   /* Transitions */
```

## 🚀 Utilisation

### Accès au Dashboard
```
http://localhost:5173
```

### Navigation
1. **Overview** - Vue d'ensemble et statistiques
2. **Projects** - Gestion des projets
3. **Account** - Informations du compte
4. **Settings** - Paramètres et préférences

### Authentification
- **Connexion** avec compte existant
- **Migration automatique** des données
- **Synchronisation** entre projets

## 🎨 Personnalisation

### Couleurs
Modifier les couleurs dans `tailwind.config.js` :
```javascript
colors: {
  green: {
    600: '#10b981', // Supabase green
  },
  slate: {
    50: '#f8fafc',  // Background
    200: '#e2e8f0', // Borders
    900: '#0f172a', // Text
  }
}
```

### Typographie
Utiliser les classes Tailwind :
```css
.text-sm          /* 14px */
.text-lg          /* 18px */
.text-xl          /* 20px */
.font-medium      /* 500 */
.font-semibold    /* 600 */
```

### Composants
Utiliser les classes personnalisées :
```jsx
<button className="btn-primary">Action</button>
<div className="card">
  <div className="card-header">Titre</div>
  <div className="card-body">Contenu</div>
</div>
```

## 🎉 Résultat

Tu as maintenant un dashboard qui ressemble exactement à Supabase :
- ✅ **Couleurs identiques** - Vert Supabase et palette complète
- ✅ **Typographie Supabase** - Inter avec tailles cohérentes
- ✅ **Composants identiques** - Boutons, cartes, formulaires
- ✅ **Layout Supabase** - Header, sidebar, contenu
- ✅ **Interactions** - Hover, focus, transitions
- ✅ **Responsive** - Mobile, tablet, desktop

**Ton dashboard a maintenant le style exact de Supabase ! 🎨**
