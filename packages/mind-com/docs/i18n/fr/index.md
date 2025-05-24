---
layout: home
title: "Traducteur Vocal IA pour Appels Vidéo en Direct"
description: "Les réunions multilingues n'ont pas besoin de Zoom, de plugins ou d'interprètes. InterMind est un traducteur vocal IA pour les appels vidéo en temps réel — parlez et traduisez instantanément."
isHome: true
---

<!-- text="Concentrez-vous sur la croissance — laissez InterMind gérer les langues." -->
<!-- text="Les salles de classe prennent des années ; InterMind offre une compréhension en temps réel aujourd'hui, dans toutes les langues." -->
<!-- text="Réunions Vidéo **Multilingues** avec Interprétation **Vocale**" -->
<!-- title="Réunions Vidéo avec **Interprétation** en Direct" -->

<HeroSection
title="Communiquez dans **Toutes** les Langues"
text="Nouvelle génération d'appels vidéo. Traduction vocale IA — évoluée en interprétation en temps réel.">

<AuthButton text="Écoutez la différence" buttonClass="brand"/>
<!-- <ContactFormModalNav buttonText="Demander une Démo"/>
<NavButton to="#pricing" buttonClass="alt" buttonLabel="Tarifs" /> -->
</HeroSection>

> **Pour qui est-ce ?**  
> Pour les équipes internationales où les barrières linguistiques entraînent des pertes de contrats, des retards ou des malentendus.

<span id="1"></span>
<FeatureBlock :card="{
  title: 'Traduction ≠ Compréhension. Voici la suite.',
  details: 'Quelle que soit la langue, **votre voix est entendue — et comprise** — comme si vous parliez la même langue.',
    items: [
      '⚡︎ Naturellement, en [temps réel](/product/how-it-works), et sans sous-titres ni décalage.',
      '✧ L\'interprétation alimentée par l\'IA capture le ton, l\'intention et la terminologie spécifique à l\'industrie.',
    ],
  link: './product/what-is-intermind',
  src: {
    light: '/1.png',
    dark: '/1.png',
  },
  inversion: false
}" />

<span id="3"></span>
<FeatureBlock :card="{
    title: 'L\'Intelligence au Cœur de Vos Réunions',
    details: 'InterMind transforme chaque appel multilingue en connaissances claires et consultables.',
    items: [
      '🔍 **Posez n\'importe quelle question** — l\'IA trouve des réponses **dans toutes vos réunions**.',
      '✧ Extrait automatiquement les tâches, les responsables et les délais.',
      '✧ Résume les points clés dans n\'importe quelle langue — instantanément.',
    ],
    link: '/product/how-it-works#🧩-deep-memory-deep-understanding',
    src: {
      light: '/2l.png',
      dark: '/2d.png',
    },
    inversion: true
  }" />

<span id="2"></span>
<FeatureBlock :card="{
    title: 'Conçu pour les Réunions Professionnelles — Pas Juste pour Parler',
    details: 'InterMind est une **plateforme de réunion vidéo** de niveau professionnel, pas un simple complément ou plugin.',
    items: [
      '✧ Résolution 1080p, suppression intelligente du bruit, planification, modération, partage d\'écran, enregistrement, chat entre participants et intégration complète du calendrier — tout est intégré, **prêt à l\'emploi**.',
    ],
    link: '/product/how-it-works',
    src: {
      light: '/3l.png',
      dark: '/3d.png',
    },
    inversion: false
  }" />

<span id="4"></span>
<FeatureBlock
  :card="{
    title: 'Confidentialité Là Où C\'est Important',
    details:
      'InterMind est conçu pour les conversations critiques en matière de confiance — où la confidentialité et le contrôle sont essentiels.',
    items: [
      '⚡︎ [Confidentialité basée sur les régions](/product/privacy-architecture) — UE, États-Unis, Asie du Sud-Est',
      '✧ Conforme : RGPD, CCPA, UAE PDPL',
      '✧ **Zéro entraînement de données**. Aucun accès tiers.'
    ],
    link: '/product/privacy-architecture',
    src: {
      light: '/4.png',
      dark: '/4.png',
    },
    inversion: true
  }"
/>

<span id="Pricing"></span>

## Prix Clairs et Simples

Choisissez le forfait qui correspond aux besoins de communication multilingue de votre organisation.

<PricingPlans :plans="[
  {
    title: '**Basic** &nbsp 1 utilisateur',
    price: '**Gratuit**',
    details: '25 réunions gratuites',
    items: [
      'Réunions vidéo de 100 participants + 30 Go de stockage mutualisé par utilisateur [💬](#2)',
      'Interprétation voix-à-voix [💬](#1)',
      'Assistant IA [💬](#3)',
    ],
  },
  {
    title: '**Pro** &nbsp 1-99 utilisateurs',
    price: '**20€** /mois/utilisateur, facturation annuelle',
    details: 'ou 25€ facturation mensuelle',
    items: [
      'Réunions vidéo de 150 participants + 2 To de stockage mutualisé par utilisateur [💬](#2)',
      'Interprétation voix-à-voix [💬](#1)',
      'Assistant IA [💬](#3)',
    ],
  },
  {
    title: '**Business** &nbsp 1-500 utilisateurs',
    price: '**Confidentialité**',
    details: 'Sécurité niveau entreprise',
    items: [
      'Réunions vidéo de 500 participants + 5 To de stockage mutualisé par utilisateur [💬](#2)',
      'Interprétation voix-à-voix [💬](#1)',
      'Assistant IA [💬](#3)',
      'Confidentialité basée sur la région [💬](#4)',
    ],
  }
]">
<AuthButton text="Essayer gratuitement" buttonClass="alt"/>
<AuthButton text="Acheter maintenant" buttonClass="brand"/>
<ContactFormModalNav buttonText="Demander l'accès" buttonClass="alt"/>
</PricingPlans>

<span id="FAQ"></span>

## Questions Fréquemment Posées

<AccordionGroup :items="[
  {
    q: 'Quelle est la différence entre un utilisateur licencié et un participant ?',
    a: 'Un utilisateur licencié dispose d\'une licence gratuite ou payante et peut planifier des réunions avec des participants selon la capacité autorisée par son forfait. Un participant est une personne invitée à une réunion programmée par quelqu\'un disposant d\'une licence. Un participant n\'a pas besoin de compte ni de licence pour rejoindre une réunion et peut **participer gratuitement**. Les participants peuvent rejoindre une réunion depuis un ordinateur, un mobile ou une tablette.'
  },
  {
    q: 'Combien de participants peuvent rejoindre la réunion ?',
    a: 'Le nombre de participants dépend de votre forfait : Basic permet jusqu\'à 100 participants, Pro jusqu\'à 150 participants, et Business accueille jusqu\'à 500 participants par réunion.'
  },
  {
    q: 'Combien de personnes peuvent utiliser une licence InterMind ?',
    a: 'Un utilisateur licencié peut organiser un nombre illimité de réunions. Cependant, si plusieurs utilisateurs doivent programmer des réunions séparées en même temps, vous aurez besoin de licences supplémentaires par utilisateur.'
  },
  {
    q: 'L\'interprétation vocale fonctionne-t-elle sur tous les forfaits ?',
    a: 'Oui, l\'interprétation vocale en temps réel fonctionne sur tous les forfaits, y compris le forfait Basic gratuit. Cependant, le forfait Basic est limité à 25 réunions au total. Les forfaits Pro et Business permettent des réunions illimitées avec des limites de participants plus élevées et des fonctionnalités supplémentaires.'
  },
  {
    q: 'Quelle est la durée maximale d\'une réunion ?',
    a: 'Les réunions peuvent durer jusqu\'à 24 heures sur tous les forfaits.'
  },
  {
    q: 'Puis-je enregistrer les réunions ?',
    a: 'Oui, tous les forfaits permettent l\'enregistrement des réunions. Les enregistrements sont stockés dans votre compte et peuvent être consultés ultérieurement.'
  },
  {
    q: 'Y a-t-il une limite au nombre de réunions que je peux organiser ?',
    a: 'Le forfait Basic permet jusqu\'à 25 réunions, tandis que les forfaits Pro et Business permettent des réunions illimitées.'
  },
  {
    q: 'Puis-je utiliser InterMind sur des appareils mobiles ?',
    a: 'Oui, InterMind est entièrement compatible avec les ordinateurs, mobiles et tablettes.'
  },
  {
    q: 'Que faire si j\'ai besoin de plus de stockage pour les enregistrements ?',
    a: 'Le forfait Pro offre 2 To de stockage mutualisé par utilisateur, tandis que le forfait Business fournit 5 To. Si vous avez besoin de plus, contactez-nous pour des solutions personnalisées.'
  },
  {
    q: 'Comment InterMind assure-t-il la confidentialité et la sécurité des données ?',
    a: 'InterMind est conçu en pensant à la confidentialité. Nous proposons un traitement basé sur la région, des paramètres privés par défaut et la conformité aux normes GDPR, CCPA et UAE PDPL.'
  },
  {
    q: 'Puis-je essayer InterMind avant d\'acheter un forfait ?',
    a: 'Oui, vous pouvez commencer avec le forfait Basic gratuit pour découvrir les fonctionnalités avant de passer aux forfaits Pro ou Business.'
  },
  {
    q: 'Que faire si j\'ai besoin d\'aide ou de support ?',
    a: 'Nous offrons une assistance via notre centre d\'aide, par email et par chat en direct. Pour les utilisateurs du forfait Business, un support dédié est disponible.'
  },
  {
    q: 'Puis-je annuler mon abonnement à tout moment ?',
    a: 'Oui, vous pouvez annuler votre abonnement à tout moment. Pour les forfaits mensuels, l\'annulation prend effet à la fin du cycle de facturation en cours. Les forfaits annuels peuvent être annulés avec un remboursement au prorata.'
  },
  {
    q: 'Comment puis-je mettre à niveau ou rétrograder mon forfait ?',
    a: 'Vous pouvez mettre à niveau ou rétrograder votre forfait à tout moment via les paramètres de votre compte. Les changements prennent effet immédiatement.'
  },
  {
    q: 'Quelles langues InterMind prend-il en charge pour l\'interprétation vocale ?',
    a: 'InterMind prend en charge un large éventail de langues pour l\'interprétation vocale en temps réel. La liste s\'élargit continuellement, veuillez consulter notre site web pour les dernières mises à jour.'
  }
]" />

<span id="Testimonials"></span>

## Ce Que Disent Nos Clients

<AutoScrollTestimonials testimonialsUrl="/testimonials.json"/>