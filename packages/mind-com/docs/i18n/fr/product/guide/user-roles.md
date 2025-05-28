# Rôles des Utilisateurs

iMind Meeting définit quatre rôles d\'utilisateurs distincts, chacun méticuleusement conçu pour améliorer la sécurité, la collaboration et l\'adaptabilité des expériences de réunion. Le rôle d\'Hôte est doté du plus haut niveau d\'autorité, tandis que les autres rôles offrent différents niveaux d\'interaction.

## Hôte

L\'Hôte est responsable du lancement de la réunion et dispose de privilèges administratifs complets.

**Capacités principales:**

- Démarrer et terminer les réunions
- Couper le son de n\'importe quel participant
- Promouvoir ou rétrograder les modérateurs
- Démarrer et arrêter les enregistrements
  - Cela inclut tous les enregistrements initiés par le Modérateur
- Retirer tout participant de l\'appel
- Activer ou désactiver l\'assistant vocal (Jarvis)
- Admettre ou refuser des invités
- Accéder à l\'historique des réunions
- Utiliser toutes les fonctionnalités d\'IA
- Ajuster les paramètres personnels, la disposition, le flou et les options d\'affichage

## Modérateur

Les modérateurs sont désignés par l\'Hôte pour aider à gérer efficacement la session.

**Capacités principales :**

- Couper le son de n\'importe quel participant
- Démarrer et arrêter les enregistrements
  - Cela inclut tous les enregistrements initiés par l\'Hôte
- Activer ou désactiver l\'assistant vocal (Jarvis)
- Admettre ou refuser des invités
- Retirer n\'importe quel participant de l\'appel, à l\'exception de l\'Hôte
- Utiliser le Traducteur Vocal en Ligne et changer de langue (pour leur propre audio)
- Utiliser l\'Assistant IA (pour leur propre vue)
- Participer au chat, lever ou baisser la main
- Accéder aux transcriptions et à l\'historique des réunions
- Promouvoir ou rétrograder d\'autres modérateurs

## Participant (Utilisateur Autorisé)

Les participants autorisés sont des utilisateurs connectés qui rejoignent la réunion sans privilèges spéciaux.

**Capacités Principales:**

- Activer ou désactiver leur propre microphone
- Activer ou désactiver leur propre caméra
- Partager leur écran (navigateur de bureau)
- Communiquer avec l\'Assistant Vocal IA
  - À condition qu\'il ait été activé par l\'Hôte ou le Modérateur
- Utiliser l\'Assistant IA (pour leur propre vue)
- Utiliser le Traducteur Vocal en Ligne et changer de langue (pour leur propre audio)
- Modifier la disposition et les paramètres personnels
- Accéder au chat, lever la main, consulter les transcriptions et l\'historique des réunions

## Invité (Utilisateur Anonyme)

Les invités sont des utilisateurs qui rejoignent la réunion sans se connecter.

**Capacités principales :**

- Utiliser leur propre microphone et caméra
- Partager leur écran (navigateur de bureau)
- Utiliser le Traducteur Vocal en Ligne et changer de langue (pour leur propre audio)
- Utiliser les options de mise en page et d\'affichage (personnelles uniquement)
- Participer au chat et lever la main

> [!WARNING]
> Les invités ne peuvent pas accéder aux fonctionnalités d\'IA, consulter les transcriptions ou gérer d\'autres participants.

## Résumé des Permissions des Rôles

| Fonctionnalité                              | Hôte  | Modérateur | Participant | Invité |
| ------------------------------------------ | ----- | ---------- | ----------- | ------ |
| Démarrer la Réunion                        | ✅    | ❌         | ❌          | ❌     |
| Couper le Son de Tout Participant          | ✅    | ✅         | ❌          | ❌     |
| Rétablir le Son de Tout Participant        | ❌    | ❌         | ❌          | ❌     |
| Activer/Désactiver Son Propre Micro        | ✅    | ✅         | ✅          | ✅     |
| Activer/Désactiver Sa Propre Caméra        | ✅    | ✅         | ✅          | ✅     |
| Démarrer/Arrêter l\'Enregistrement         | ✅    | ✅         | ❌          | ❌     |
| Partage d\'Écran (Bureau)                  | ✅    | ✅         | ✅          | ✅     |
| Activer/Désactiver l\'Assistant Vocal      | ✅    | ✅         | ❌          | ❌     |
| Utiliser l\'Assistant IA                   | ✅    | ✅         | ✅          | ❌     |
| Utiliser la Traduction en Ligne            | ✅    | ✅         | ✅          | ✅     |
| Changer la Langue de Traduction            | ✅    | ✅         | ✅          | ✅     |
| Lever / Baisser la Main                    | ✅/✅ | ✅/✅      | ✅/❌       | ✅/❌  |
| Voir la Transcription                      | ✅    | ✅         | ✅          | ❌     |
| Modifier la Disposition / les Paramètres    | ✅    | ✅         | ✅          | ✅     |
| Activer/Désactiver le Flou d\'Arrière-plan | ✅    | ✅         | ✅          | ✅     |
| Admettre/Refuser un Invité                 | ✅    | ✅         | ❌          | ❌     |
| Accéder à l\'Historique des Réunions       | ✅    | ✅         | ✅          | ❌     |
| Retirer des Participants                   | ✅    | ✅         | ❌          | ❌     |
| Promouvoir/Rétrograder un Modérateur       | ✅    | ✅         | ❌          | ❌     |