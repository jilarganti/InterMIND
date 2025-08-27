# Rôles des utilisateurs

InterMIND définit quatre rôles d'utilisateurs distincts, chacun méticuleusement conçu pour améliorer les expériences de réunion sécurisées, collaboratives et adaptables. Le rôle d'Hôte est doté du plus haut niveau d'autorité, tandis que les autres rôles offrent différents niveaux d'interaction.

## Hôte

L'Hôte est responsable de l'initiation de la réunion et possède des privilèges administratifs complets.

**Capacités clés :**

- Démarrer et terminer les réunions
- Couper le son de tout participant
- Promouvoir ou rétrograder les modérateurs
- Démarrer et arrêter les enregistrements
  - Cela englobe tous les enregistrements initiés par le Modérateur
- Retirer tout participant de l'appel
- Admettre ou refuser les invités
- Accéder à l'historique des réunions
- Utiliser toutes les fonctionnalités IA
- Ajuster les paramètres personnels, la mise en page, le flou et les options d'affichage

## Modérateur

Les modérateurs sont désignés par l'hôte pour aider à gérer efficacement la session.

**Capacités principales :**

- Couper le son de tout participant
- Démarrer et arrêter les enregistrements
  - Cela inclut tous les enregistrements initiés par l'hôte
- Admettre ou refuser les invités
- Retirer tout participant de l'appel, à l'exception de l'hôte
- Utiliser le traducteur vocal en ligne et changer de langue (pour leur propre audio)
- Utiliser l'assistant IA (pour leur propre vue)
- Participer au chat, lever ou baisser la main
- Accéder aux transcriptions et à l'historique des réunions
- Promouvoir ou rétrograder d'autres modérateurs

## Participant (utilisateur autorisé)

Les participants autorisés sont des utilisateurs connectés qui rejoignent la réunion sans privilèges spéciaux.

**Capacités principales :**

- Activer ou désactiver leur propre microphone
- Activer ou désactiver leur propre caméra
- Partager leur écran (navigateur de bureau)
- Utiliser l'assistant IA (pour leur propre vue)
- Utiliser le traducteur vocal en ligne et changer de langue (pour leur propre audio)
- Modifier la disposition personnelle et les paramètres
- Accéder au chat, lever la main, aux transcriptions et à l'historique des réunions

## Invité (Utilisateur anonyme)

Les invités sont des utilisateurs qui rejoignent la réunion sans se connecter.

**Capacités principales :**

- Utiliser leur propre microphone et caméra
- Partager leur écran (navigateur de bureau)
- Utiliser le traducteur vocal en ligne et changer de langue (pour leur propre audio)
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