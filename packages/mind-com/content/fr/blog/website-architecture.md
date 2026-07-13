---
title: "Comment le site web Mind.com est construit : une architecture Nuxt 4"
description: "Une présentation technique du site marketing Mind.com — Nuxt 4 SSR, @nuxt/content, i18n, routes de serveur Nitro et les compromis derrière chaque choix."
date: "2025-08-15"
author: "[Jilarganti](https://github.com/jilarganti)"
image: "/blog/iStock-681469612.jpg"
---

# Comment le site web Mind.com est construit : une architecture Nuxt 4

<img src="/blog/iStock-681469612.jpg" alt="Architecture Mind.com" width="500" align="right" style="padding: 1.5rem"/>

Voici une présentation de la manière dont [mind.com](https://mind.com) est réellement construit, et pourquoi nous avons fait les choix que nous avons faits. C'est un site marketing — une surface d'atterrissage, un blog, des pages légales et un formulaire de contact — donc la partie intéressante n'est pas une technologie en particulier. C'est là où nous avons tracé les limites : ce qui est rendu sur le serveur, ce qui est envoyé au navigateur, et ce qui reste un script de temps de compilation. Là où une décision était un compromis plutôt qu'une victoire évidente, nous le précisons.

Le site est un package dans un monorepo pnpm (le dépôt est nommé `InterMIND`). Il fonctionne sur **Nuxt 4** et se déploie sur Vercel. Rien ici n'est exotique ; la valeur réside dans l'intégration des différentes pièces.

## Pourquoi Nuxt 4 avec SSR, et non une compilation statique

Un site marketing pourrait être une sortie purement statique. Nous effectuons le rendu sur le serveur à la place, en utilisant le moteur Nitro de Nuxt avec le preset `vercel`, et les raisons sont concrètes plutôt qu'ambitieuses.

Nous avons un formulaire de contact qui envoie des données à un backend, un routage par locale sur sept langues, et du contenu qui change suffisamment souvent pour que nous ne voulions pas nous soucier des pages obsolètes. Le SSR permet à une seule base de code de gérer les pages marketing, les routes localisées et le point d'accès du formulaire sans ajouter un service séparé à un bundle statique. Nitro compile le serveur en fonctions Vercel au moment de la compilation, ce qui nous permet d'obtenir un rendu côté serveur sans avoir à exécuter ou maintenir notre propre serveur.

Le compromis est honnête : le SSR implique un travail au moment de la requête qu'un site entièrement statique n'aurait pas. Pour un site de cette taille, ce coût est faible, et en échange, nous évitons les problèmes de coordination liés à la liaison d'un frontend statique à une API distincte. S'il s'agissait d'un site de documentation de 10 000 pages sans surface dynamique, la génération statique serait un meilleur choix. Ce n'est pas le cas, donc le SSR l'emporte.

## Contenu : @nuxt/content et MDC

Le contenu du blog et les contenus légaux sont des fichiers Markdown sous `content/blog/` et `content/legal/`. Nous utilisons **@nuxt/content v3**, qui analyse ces fichiers dans une base de données locale better-sqlite3 au moment de la compilation et nous permet de les interroger comme des données. La forme du frontmatter est appliquée avec des schémas Zod dans `content.config.ts`, de sorte qu'un article sans `title` ou avec une `date` mal formée échoue à la compilation au lieu d'être publié cassé.

Le blog est écrit en **MDC** — Markdown avec des composants. Une note (callout) est `:::tip{title="..."}` plutôt que du HTML brut, ce qui maintient la source lisible et nous permet de contrôler le rendu à un seul endroit (le composant `ProseTip`) au lieu de disperser le balisage dans chaque article.

Conserver le contenu sous forme de fichiers dans le dépôt signifie qu'il est versionné, révisé lors des pull requests et diffusable. Il n'y a pas de CMS séparé pour se connecter et pas de base de données à sauvegarder. La limite est le revers de la médaille : l'édition nécessite un commit, ce qui convient donc à une équipe qui vit déjà dans Git, et non à un grand personnel éditorial non technique.

## Internationalisation et fonctionnement de la traduction

Le site est livré en sept locales — anglais, espagnol, portugais, français, allemand, russe et chinois — via **@nuxtjs/i18n** avec la stratégie `prefix_except_default`. L'anglais est servi depuis la racine ; toutes les autres locales se trouvent sous leur propre préfixe de chemin. Les chaînes d'interface utilisateur vivent dans `app/locales/<code>.json`.

La traduction est un travail à deux voies, et nous maintenons ces voies séparées. Les chaînes d'interface utilisateur et le contenu sont traduits par deux scripts Node — `scripts/i18n-translate-ui.ts` et `scripts/i18n-translate-content.ts` — basés sur l'AI SDK avec les modèles Anthropic. Ceux-ci s'exécutent comme une étape de création au moment de la compilation, et non au moment de la requête : un humain les déclenche, examine la sortie et la valide. Les traductions sont des fichiers ordinaires dans le dépôt, comme tout le reste.

C'est la limite délibérée. Il n'y a pas de traduction à l'exécution, pas d'appel de modèle linguistique à la volée lorsqu'un visiteur charge une page. Les traductions sont générées à l'avance et servies sous forme de routes localisées simples, ce qui maintient le rendu prévisible et nous permet de relire avant toute mise en ligne.

## Système de design : Tailwind v4 et @nuxt/ui

Le style est **Tailwind CSS v4** avec **@nuxt/ui v4** par-dessus. Les nouveaux visiteurs arrivent en mode sombre par défaut ; l'arrière-plan de la page est un noir presque pur délibéré, `#0a0b0d`, plutôt qu'un noir pur. Chaque page et composant est construit pour fonctionner en mode clair et sombre — c'est une contrainte que nous respectons, pas une réflexion après coup, donc rien ne code en dur une couleur uniquement claire.

S'appuyer sur @nuxt/ui signifie que nous héritons de composants accessibles et cohérents au lieu de reconstruire les boutons, les contrôles de formulaire et les superpositions à partir de zéro. Le coût est une dépendance dont nous suivons les conventions plutôt qu'un système entièrement sur mesure, ce qui, pour un site marketing, est le bon côté de cet échange.

## Le backend : routes de serveur Nitro et Pipedrive

Le backend est petit et vit dans le même projet, en tant que routes de serveur Nitro sous `server/` :

- `server/api/submit-form.post.ts` gère le formulaire de contact.
- `server/api/health.get.ts` est une vérification de l'état de santé.
- `server/api/__sitemap__/urls.ts` alimente le sitemap.
- `server/routes/llms.txt.ts` et `llms-full.txt.ts` servent des résumés lisibles par machine pour les robots d'IA.
- `server/middleware/` contient la logique transversale, y compris un gestionnaire 410-gone pour les URL retirées et la gestion de l'audience.

Quand quelqu'un soumet le formulaire de contact, la piste est envoyée à **Pipedrive** via `server/utils/pipedrive.ts`, qui crée une personne et une piste. C'est la seule intégration CRM et le seul endroit où vont les données du formulaire. Il n'y a pas de file d'attente, pas de pipeline de données, pas de stockage d'objets intermédiaires — le point de terminaison valide l'entrée et appelle une API. Maintenir cette simplicité signifie qu'il y a très peu de choses à casser et très peu à comprendre quand quelque chose se produit.

Il n'y a pas non plus, délibérément, d'authentification utilisateur sur le site marketing. C'est une brochure et un formulaire de contact, pas une application ; ajouter des identifiants et des sessions créerait une surface que nous devrions sécuriser sans aucun avantage.

## Observabilité : Sentry et PostHog, avec gestion du consentement

Nous utilisons deux outils d'observabilité, et ils remplissent des fonctions différentes.

**Sentry** (`@sentry/nuxt`) détecte les erreurs. Il est intégré comme un module de compilation et reste désactivé en développement, afin que le bruit local ne l'atteigne pas. Son travail est de nous informer quand quelque chose se casse en production.

**PostHog** (`nuxt-posthog`) gère l'analyse produit, et son comportement autour du consentement est la partie qui mérite d'être expliquée. Il est **désactivé** par défaut. Rien n'est capturé tant que la plateforme de consentement Usercentrics n'accorde pas la permission, moment auquel `app/plugins/posthog-consent.client.ts` l'active. La valeur par défaut est l'absence de suivi ; le consentement l'active, et non l'inverse. PostHog couvre l'analyse et Sentry couvre les erreurs — c'est l'image complète, sans gestionnaire de balises séparé ou couche d'analyse tierce ajoutée.

## SEO et robots d'IA

Le SEO est géré par `@nuxtjs/sitemap` et `@nuxtjs/robots` pour le sitemap et les directives robots. Les redirections et les en-têtes de cache — y compris la longue liste de redirections d'URL obsolètes que le site a accumulées — se trouvent dans `vercel.json`, près de l'endroit où elles prennent effet en périphérie.

Les routes `llms.txt` et `llms-full.txt` mentionnées ci-dessus sont un clin d'œil à la façon dont le web est lu aujourd'hui : elles offrent aux robots d'IA un résumé propre et structuré du site au lieu de les laisser parcourir des pages rendues. C'est peu coûteux à servir et cela signifie que les machines lisant le site obtiennent une version précise de celui-ci.

## Déploiement

Tout se déploie sur **Vercel**. Le preset `vercel` de Nitro transforme les routes du serveur en fonctions Vercel et les pages en sortie rendue côté serveur, de sorte qu'un `git push` devient un déploiement sans pipeline de construction et d'expédition séparé à maintenir. Situé à l'intérieur du monorepo pnpm, mind.com partage les outils et la discipline des fichiers de verrouillage avec les autres packages tout en restant déployable indépendamment.

## La forme de l'ensemble

Rien de tout cela n'est inhabituel, et c'est là l'essentiel. Nuxt 4 nous offre le SSR sans exécuter de serveurs ; @nuxt/content maintient les articles et les pages légales sous forme de fichiers révisables ; i18n et les scripts de traduction localisent le site comme une étape de compilation que nous pouvons relire ; un mince backend Nitro transmet les prospects à Pipedrive ; Sentry et PostHog surveillent les pannes et le comportement, avec l'analyse désactivée jusqu'à ce que le consentement indique le contraire.

Le site est facile à comprendre car nous avons maintenu un nombre limité de composants mobiles et placé chacun là où il doit être. Pour un site marketing, l'ennui et la lisibilité l'emportent toujours sur l'ingéniosité.
