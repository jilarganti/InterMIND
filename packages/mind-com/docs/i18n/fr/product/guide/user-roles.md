---
title: Rôles des utilisateurs
description: Comprendre les rôles des utilisateurs InterMIND - Hôte, Modérateur, Participant et Invité. Découvrez les permissions et capacités de chaque rôle.
---

# Rôles des utilisateurs

InterMIND définit quatre rôles d'utilisateur distincts, chacun méticuleusement conçu pour améliorer les expériences de réunion sécurisées, collaboratives et adaptables. Le rôle d'Hôte est doté du plus haut niveau d'autorité, tandis que les autres rôles offrent différents niveaux d'interaction.

## Hôte

L'Hôte est responsable de l'initiation de la réunion et possède des privilèges administratifs complets. Apprenez comment [create meetings](./creating-meetings).

**Capacités clés :**

- Démarrer et terminer les réunions
- Couper le micro de tout participant
- Promouvoir ou rétrograder les modérateurs
- Démarrer et arrêter les enregistrements
  - Cela englobe tous les enregistrements initiés par le Modérateur
- Retirer tout participant de l'appel
- Admettre ou refuser les invités
- Accéder à l'[meeting history](./meeting-history)
- Utiliser toutes les [ai features](./ai-features)
- Ajuster les paramètres personnels, la mise en page, le flou et les options d'affichage (voir [Meeting Interface](./meeting-interface))

## Modérateur

Les modérateurs sont désignés par l'Hôte pour aider à gérer efficacement la session.

**Capacités principales :**

- Couper le micro de tout participant
- Démarrer et arrêter les enregistrements
  - Cela inclut tous les enregistrements initiés par l'Hôte
- Admettre ou refuser les invités
- Retirer tout participant de l'appel, à l'exception de l'Hôte
- Utiliser le [Traducteur vocal en ligne](./ai-features#online-voice-translation) et changer de langue (pour leur propre audio)
- Utiliser l'[Assistant IA](./ai-features#ai-assistant) (pour leur propre vue)
- Participer au chat, lever ou baisser la main
- Accéder aux transcriptions et à l'[historique des réunions](./meeting-history)
- Promouvoir ou rétrograder d'autres modérateurs

## Participant (Utilisateur Autorisé)

Les participants autorisés sont des utilisateurs connectés qui rejoignent la réunion sans privilèges spéciaux.

**Capacités principales :**

- Activer ou désactiver le son de leur propre microphone
- Activer ou désactiver leur propre caméra
- Partager leur écran (navigateur de bureau)
- Utiliser l'[Assistant IA](./ai-features#ai-assistant) (pour leur propre vue)
- Utiliser le [Traducteur Vocal en Ligne](./ai-features#online-voice-translation) et changer de langue (pour leur propre audio)
- Modifier la disposition personnelle et les paramètres
- Accéder au chat, lever la main, aux transcriptions et à l'[historique des réunions](./meeting-history)

## Invité (Utilisateur anonyme)

Les invités sont des utilisateurs qui rejoignent la réunion sans se connecter.

**Capacités principales :**

- Utiliser leur propre microphone et caméra
- Partager leur écran (navigateur de bureau)
- Utiliser le [Traducteur vocal en ligne](./ai-features#online-voice-translation) et changer de langue (pour leur propre audio)
- Utiliser les options de mise en page et d'affichage (personnel uniquement)
- Participer au chat et lever la main

> [!WARNING]
> Les invités ne peuvent pas gérer les autres participants.

## Tableau récapitulatif des permissions par rôle

| Fonctionnalité                 | Hôte  | Modérateur | Participant | Invité |
| ------------------------------ | ----- | ---------- | ----------- | ------ |
| Initier une réunion            | ✅    | ❌         | ❌          | ❌     |
| Couper le micro de tout participant | ✅    | ✅         | ❌          | ❌     |
| Réactiver le micro de tout participant | ❌    | ❌         | ❌          | ❌     |
| Couper/Réactiver son propre micro | ✅    | ✅         | ✅          | ✅     |
| Activer/Désactiver sa propre caméra | ✅    | ✅         | ✅          | ✅     |
| Démarrer/Arrêter l'enregistrement | ✅    | ✅         | ❌          | ❌     |
| Partage d'écran (Bureau)       | ✅    | ✅         | ✅          | ✅     |
| Utiliser l'assistant IA        | ✅    | ✅         | ✅          | ❌     |
| Utiliser la traduction en ligne | ✅    | ✅         | ✅          | ✅     |
| Changer la langue de traduction | ✅    | ✅         | ✅          | ✅     |
| Lever / Baisser la main        | ✅/✅ | ✅/✅      | ✅/❌       | ✅/❌  |
| Modifier la disposition / Paramètres | ✅    | ✅         | ✅          | ✅     |
| Activer/Désactiver le flou d'arrière-plan | ✅    | ✅         | ✅          | ✅     |
| Admettre/Refuser un invité     | ✅    | ✅         | ❌          | ❌     |
| Accéder à l'historique des réunions | ✅    | ✅         | ✅          | ❌     |
| Supprimer des participants     | ✅    | ✅         | ❌          | ❌     |
| Promouvoir/Rétrograder un modérateur | ✅    | ✅         | ❌          | ❌     |