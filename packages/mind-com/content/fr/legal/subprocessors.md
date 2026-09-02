---
title: Sous-traitants
description: Les fournisseurs d'infrastructure et de services qu'InterMIND utilise pour traiter les données personnelles — l'objectif de chaque fournisseur, la région de traitement et les garanties.
updated: "2026-09-02"
---

Pour faire fonctionner InterMIND, nous utilisons un petit ensemble de fournisseurs d'infrastructure et de services (« sous-traitants »). Cette page répertorie chacun d'entre eux, ce qu'il traite, où, et sous quelles garanties. **Opérateur de service et entité contractante :** Golden Fish LLC (Émirats arabes unis). **Éditeur et propriétaire de la propriété intellectuelle :** MindMeeting OÜ (EE).

Le traitement a lieu par défaut dans l'UE. Lorsqu'une entité corporative d'un fournisseur se trouve en dehors de l'UE/EEE, les transferts sont couverts par les clauses contractuelles types (CCT) et/ou le cadre de protection des données UE-États-Unis (DPF). Nous mettons à jour cette liste chaque fois qu'un sous-traitant est ajouté ou supprimé.

| Sous-traitant | Domicile de l'entité | Objectif | Données personnelles traitées | Lieu de traitement | Garanties |
| --- | --- | --- | --- | --- | --- |
| Vercel Inc. | US | Hébergement d'applications web, fonctions sans serveur, AI Gateway (proxy) | Tout le trafic de l'application, y compris les métadonnées de réunion, le chat | Fonctions épinglées à Francfort (fra1) ; AI Gateway a une politique de rétention des données nulle (aucune rétention d'invites) | DPA + CCT ; ZDR |
| Fly.io Inc. | US | Hébergement de serveurs WebSocket en temps réel | Diffusion de chat, événements de conférence, mots de transcription en transit | Paris (CDG) | DPA + CCT |
| Neon Inc. | US | Postgres (base de données primaire) | Comptes, réunions, messages, transcriptions, utilisation de la facturation | Francfort (AWS eu-central-1) | DPA + CCT ; chiffrement au repos |
| Tigris Data Inc. | US | Stockage d'objets | Enregistrements de réunions, pièces jointes de chat, documents, archives d'exportation | Multi-régions UE (Francfort + Amsterdam) | DPA ; TLS |
| MindMeeting OÜ (Mind API) | EE | Média de réunion (SFU), reconnaissance vocale, traduction en temps réel | Flux audio/vidéo, parole, noms/rôles des participants | OVH, France | Accord intra-groupe |
| Mistral AI SAS | FR | Résumé de réunion par IA | Transcription de réunion (une fois, à la fin de la réunion) | UE | DPA ; rétention des données nulle ; pas de formation sur les données d'API payantes |
| DeepL SE | DE | Traduction de documents | Contenu des documents que les utilisateurs soumettent pour traduction | UE (Cologne) | DPA ; pas de rétention pour la formation |
| Stripe Payments Europe Ltd / Stripe Inc. | IE / US | Facturation | Nom, e-mail, adresse de facturation, méthode de paiement (la carte ne transite jamais par InterMIND) | UE / États-Unis | DPA + CCT ; PCI-DSS |
| PostHog | US (EU Cloud) | Analyse de produits, relecture de session | Événements d'utilisation, console/relecture (soumis au consentement, option de retrait par défaut ; la parole de réunion est nettoyée des journaux) | UE (eu.posthog.com) | DPA ; résidence UE |
| Functional Software Inc. (Sentry) | US (EU region) | Surveillance des erreurs | Traces d'erreurs, fils d'Ariane (aucun contenu de réunion) | UE (de.sentry.io) | DPA ; résidence UE |
| Resend | US | E-mail transactionnel (codes de connexion, notifications) | E-mail du destinataire, contenu du message | Irlande (eu-west-1) | DPA + CCT |
| Upstash Inc. | US | Cache de session OIDC (Redis) | Cache de session/jeton chiffré | Francfort (fra1) | DPA + CCT ; charges utiles chiffrées |
| Pipedrive OÜ | EE | CRM de vente (formulaires de contact / partenaire) | Nom du prospect, e-mail, entreprise, message | UE | DPA |
| Google LLC / Microsoft Corp. | US | Connexion OAuth uniquement | Nom, e-mail, photo de profil (étendues OAuth standard) | États-Unis | DPF / CCT |

Pour toute question concernant cette liste ou pour demander une copie des garanties de transfert pertinentes, contactez privacy@mind.com.
