# 🎨 Redesign Page Pricing - OpenForge

## ✅ Modifications effectuées

### **1. Structure des plans**
- **Avant** : Lunch, Boost, Scale
- **Après** : Personal, Boost, Scale
- **Description** : "For individuals to get started with OpenForge."
- **Prix** : $0, $20, $35 par mois

### **2. Layout et espacement**
- **Titre** : Police moins grasse (`font-medium` au lieu de `font-bold`)
- **Position** : Plus bas dans la page (`pt-24` au lieu de `py-16`)
- **Cartes** : Plus hautes, moins larges (`h-full`)
- **Coins** : Moins arrondis (`rounded-lg` au lieu de `rounded-2xl`)

### **3. Alignement du contenu**
- **Titre, description, prix** : Alignés à gauche (`text-left`)
- **Liste des fonctionnalités** : Alignée à gauche
- **Boutons** : Même style pour tous

### **4. Style des cartes**
- **Contour** : Très mince (`border border-gray-600`)
- **Couleur** : Gris clair, pas de vert
- **Hover** : Pas d'effet d'agrandissement
- **Boutons** : Même couleur (`bg-gray-700`) avec hover plus clair

### **5. Boutons**
- **Personal** : "Sign in with GitHub"
- **Boost/Scale** : "Subscribe to [Plan]"
- **Style** : Uniforme, pas d'effet scale
- **Hover** : Transition de couleur uniquement

### **6. FAQ Section**
- **Style** : Cohérent avec les cartes
- **Contour** : Gris clair (`border-gray-600`)
- **Titres** : Police moins grasse (`font-medium`)

## 🎯 Résultat attendu

- **Design** : Plus épuré et professionnel
- **Navigation** : Cohérente avec le reste de l'app
- **UX** : Boutons uniformes, pas d'effets distrayants
- **Responsive** : Adapté mobile et desktop

## 🧪 Test

1. **URL** : `http://localhost:3001/pricing`
2. **Navigation** : Clic sur "Pricing" dans le menu
3. **Vérification** : Style cohérent, pas d'effets scale
4. **Boutons** : Même couleur, hover uniforme
