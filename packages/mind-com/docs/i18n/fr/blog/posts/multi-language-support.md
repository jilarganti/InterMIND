---
layout: BlogPost
title: "Support multilingue dans InterMIND"
date: 2025-03-05
author: "Équipe de localisation"
---

# Support multilingue dans InterMIND

InterMIND est fier d'offrir un support multilingue complet, rendant notre plateforme accessible aux utilisateurs du monde entier.

## Langues prises en charge

Actuellement, InterMIND prend en charge **plus de 19 langues** notamment :

- Anglais, espagnol, français, allemand
- Chinois (simplifié et traditionnel)
- Japonais, coréen
- Arabe, hébreu
- Russe, polonais
- Et bien d'autres !

## Comment ça fonctionne

Notre système de traduction utilise :

1. **Traductions alimentées par l'IA** : Utilisant les modèles OpenAI et Anthropic
2. **Basculement automatique** : Si un service échoue, nous basculons vers un autre
3. **Support RTL** : Support complet pour les langues de droite à gauche

## Commencer avec les traductions

Pour accéder à InterMIND dans votre langue :

1. Visitez l'URL spécifique à votre langue (par exemple, `/es/`, `/fr/`, `/ar/`)
2. Le chat IA détecte automatiquement et répond dans votre langue
3. Toute la documentation est disponible dans votre langue préférée

## Pour les développeurs

Ajouter une nouvelle langue est simple :

```javascript
// Dans translateConfig.ts
languages: {
  "pt": "Portuguese",
  // Ajoutez votre langue ici
}
```

Puis exécutez : `pnpm translate`

Rejoignez-nous pour rendre InterMIND accessible à tous, quelle que soit la langue !