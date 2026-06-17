---
title: Sous-traitants
description: Les fournisseurs d'infrastructure et de services qu'InterMIND utilise pour traiter les données personnelles — le but, la région de traitement et les garanties de chaque fournisseur.
updated: "2026-06-17"
---

Pour faire fonctionner InterMIND, nous utilisons un petit ensemble de fournisseurs d'infrastructure et de services ("sous-traitants"). Cette page liste chacun d'eux, ce qu'il traite, où, et sous quelles garanties. **Opérateur de service et entité contractante :** Golden Fish CSP LLC (EAU). **Éditeur et propriétaire de la propriété intellectuelle :** MindMeeting OÜ (EE).

Le traitement a lieu par défaut dans l'UE. Lorsqu'une entité corporative de fournisseur est située en dehors de l'UE/EEE, les transferts sont couverts par les Clauses Contractuelles Types (CCT) et/ou le Cadre de Confidentialité des Données UE–US (DPF). Nous mettons à jour cette liste chaque fois qu'un sous-traitant est ajouté ou supprimé.

| Sous-traitant | Domicile de l'entité | But | Données personnelles traitées | Lieu de traitement | Garanties |
| --- | --- | --- | --- | --- | --- |
| Vercel Inc. | US | Hébergement d'applications web, fonctions sans serveur, AI Gateway (proxy) | Tout le trafic de l'application, y compris les métadonnées de réunion, le chat | Fonctions épinglées à Francfort (fra1) ; AI Gateway a une politique de zéro rétention des données (pas de rétention des invites) | DPA + CCT ; ZDR |
| Fly.io Inc. | US | Hébergement de serveur WebSocket en temps réel | Diffusion de chat, événements de conférence, mots de transcription en transit | Paris (CDG) | DPA + CCT |
| Neon Inc. | US | Postgres (base de données primaire) | Comptes, réunions, messages, transcriptions, utilisation de la facturation | Francfort (AWS eu-central-1) | DPA + CCT ; chiffrement au repos |
| Tigris Data Inc. | US | Stockage d'objets | Enregistrements de réunions, pièces jointes de chat, documents, archives d'exportation | Multi-régions UE (Francfort + Amsterdam) | DPA ; TLS |
| MindMeeting OÜ (Mind API) | EE | Média de réunion (SFU), reconnaissance vocale, traduction en temps réel | Flux audio/vidéo, parole, noms/rôles des participants | OVH, France | Accord intra-groupe |
| Mistral AI SAS | FR | Résumé IA post-réunion | Transcription de réunion (une fois, à la fin de la réunion) | UE | DPA ; zéro rétention des données ; pas de formation sur les données d'API payantes |
| DeepL SE | DE | Traduction de documents | Contenu des documents soumis par les utilisateurs pour traduction | UE (Cologne) | DPA ; pas de rétention pour la formation |
| Stripe Payments Europe Ltd / Stripe Inc. | IE / US | Facturation | Nom, e-mail, adresse de facturation, méthode de paiement (la carte ne touche jamais InterMIND) | UE / US | DPA + CCT ; PCI-DSS |
| PostHog | US (EU Cloud) | Analyse de produit, relecture de session | Événements d'utilisation, console/relecture (soumis au consentement, opt-out par défaut ; la parole de réunion est supprimée des journaux) | UE (eu.posthog.com) | DPA ; résidence UE |
| Functional Software Inc. (Sentry) | US (EU region) | Surveillance des erreurs | Traces d'erreurs, miettes de pain (pas de contenu de réunion) | UE (de.sentry.io) | DPA ; résidence UE |
| Resend | US | E-mails transactionnels (codes de connexion, notifications) | E-mail du destinataire, contenu du message | Irlande (eu-west-1) | DPA + CCT |
| Upstash Inc. | US | Cache de session OIDC (Redis) | Cache de session/jetons chiffrés | Francfort (fra1) | DPA + CCT ; charges utiles chiffrées |
| Pipedrive OÜ | EE | CRM de ventes (formulaires de contact / partenaire) | Nom du prospect, e-mail, entreprise, message | UE | DPA |
| Google LLC / Microsoft Corp. | US | Connexion OAuth uniquement | Nom, e-mail, photo de profil (scopes OAuth standards) | US | DPF / CCT |

Pour toute question concernant cette liste ou pour demander une copie des garanties de transfert pertinentes, contactez privacy@mind.com.
