---
layout: BlogPost
title: "Support Multi-langues dans InterMIND"
date: 2025-03-05
author: Équipe de Localisation
---

# Support Multi-langues dans InterMIND

InterMIND est fier d'offrir un support multi-langues complet, rendant notre plateforme accessible aux utilisateurs du monde entier.

<!--more-->

## Langues prises en charge

Actuellement, InterMIND prend en charge **plus de 19 langues**, notamment :

- Anglais, Espagnol, Français, Allemand
- Chinois (Simplifié & Traditionnel)
- Japonais, Coréen
- Arabe, Hébreu
- Russe, Polonais
- Et bien d'autres !

## Comment Ça Fonctionne

Notre système de traduction utilise :

1. **Traductions alimentées par l'IA** : Utilisation des modèles OpenAI et Anthropic
2. **Basculement automatique** : Si un service échoue, nous passons à un autre
3. **Support RTL** : Prise en charge complète des langues de droite à gauche

## Premiers pas avec les traductions

Pour accéder à InterMIND dans votre langue :

1. Visitez l'URL spécifique à votre langue (par ex. `/es/`, `/fr/`, `/ar/`)
2. L'IA de chat détecte automatiquement et répond dans votre langue
3. Toute la documentation est disponible dans votre langue préférée

## Pour les Développeurs

L'ajout d'une nouvelle langue est simple :

```javascript
// Dans translateConfig.ts
languages: {
  "pt": "Portuguese",
  // Ajoutez votre langue ici
}
```

Puis exécutez : `pnpm translate`

Rejoignez-nous pour rendre InterMIND accessible à tous, quelle que soit la langue !