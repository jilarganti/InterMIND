---
layout: home
title: "Appels vidéo alimentés par l'interprétation simultanée"

isHome: true
---

<!-- text="Appels vidéo alimentés par la traduction vocale simultanée." -->
<!-- text="Les salles de classe prennent des années ; InterMind offre une compréhension en temps réel aujourd'hui, dans toutes les langues." -->
<!-- text="Réunions vidéo **multilingues** avec interprétation **vocale**" -->
<!-- title="Réunions vidéo avec interprétation **en direct**" -->

<HeroSection
title="Communiquez dans **Toutes** les Langues"
text="Parlez votre langue maternelle. Écoutez les autres — comme s'ils la parlaient aussi.">

<AuthButton text="Découvrez la différence" buttonClass="brand"/>
<!-- <ContactFormModalNav buttonText="Demander une démo"/>
<NavButton to="#pricing" buttonClass="alt" buttonLabel="Tarifs" /> -->
</HeroSection>

> **Pour qui est-ce ?**  
> Conçu pour les **équipes internationales** où les barrières linguistiques causent des retards, des opportunités manquées ou des malentendus coûteux. En savoir plus dans notre section [Markets](./product/markets).

<span id="1"></span>
<FeatureBlock :card="{
  title: 'Traduction ≠ Compréhension. Voici la suite.',
  details: 'Quelle que soit la langue, **votre voix est entendue — et comprise** — comme si vous parliez la même langue.',
    items: [
      '⚡︎ Naturellement, en [temps réel](/product/how-it-works), sans sous-titres ni décalage.',
      '✧ L\'interprétation alimentée par l\'IA capture le ton, l\'intention et la terminologie spécifique à l\'industrie.',
    ],
  link: './product/what-is-intermind',
  src: {
    light: '/1.png',
    dark: '/1.png',
  },
  inversion: false
}" />

<span id="2"></span>
<FeatureBlock :card="{
    title: 'L\'Intelligence au Cœur de Vos Réunions',
    details: 'InterMind transforme chaque appel multilingue en connaissances claires et consultables.',
    items: [
      '🔍 **Posez n\'importe quelle question** — l\'IA trouve des réponses **dans toutes vos réunions**.',
      '✧ Extrait automatiquement les tâches, les responsables et les échéances.',
      '✧ Résume les points clés dans n\'importe quelle langue — instantanément.',
    ],
    link: '/product/how-it-works#🧩-deep-memory-deep-understanding',
    src: {
      light: '/2l.png',
      dark: '/2d.png',
    },
    inversion: true
  }" />

<span id="3"></span>
<FeatureBlock :card="{
    title: 'Conçu pour les Réunions Professionnelles — Pas Juste pour Parler',
    details: 'InterMind est une **plateforme de réunion vidéo de niveau professionnel**, pas un simple module complémentaire ou plugin.',
    items: [
      '✧ Résolution 1080p, suppression intelligente du bruit, planification, modération, partage d\'écran, enregistrement, sous-titrage, chat entre participants et intégration du calendrier — tout est intégré, prêt à l\'emploi.',
    ],
    link: '/product/how-it-works',
    src: {
      light: '/3.png',
      dark: '/3.png',
    },
    inversion: false
  }" />

<span id="4"></span>
<FeatureBlock
  :card="{
    title: 'Confidentialité Là Où Elle Compte',
    details:
      'InterMind est conçu pour les conversations critiques — où la confidentialité et le contrôle sont essentiels.',
    items: [
      '⚡︎ [Confidentialité basée sur les régions](/product/privacy-architecture) — UE, États-Unis, Asie du Sud-Est',
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

Choisissez le forfait qui vous correspond. Des sous-titres à l'interprétation vocale complète — évoluez au rythme de votre équipe.

<PricingPlans :plans="[
  {
    title: '**Basic** 1 utilisateur',
    price: '**Gratuit**',
    details: '25 réunions gratuites',
    items: [
      'Réunions vidéo jusqu\'à 100 participants [💬](#3)',
      '30 Go de stockage mutualisé par utilisateur',
      'Assistant de réunion IA pour les notes et résumés [💬](#2)',
      '**Interprétation simultanée** [💬](#1)',
    ],
  },
  {
    title: '**Pro** 1-99 utilisateurs',
    price: '**20 €** /mois/utilisateur, facturation annuelle',
    details: 'ou 25 € facturation mensuelle',
    items: [
      'Réunions vidéo jusqu\'à 150 participants [💬](#3)',
      '2 To de stockage mutualisé par utilisateur',
      'Assistant de réunion IA pour les notes et résumés [💬](#2)',
      '**Interprétation simultanée** [💬](#1)',
    ],
  },
  {
    title: '**Business** 1-250 utilisateurs',
    price: '**Prix personnalisé**',
    details: 'Conçu pour la confidentialité',
    items: [
      'Réunions vidéo jusqu\'à 500 participants [💬](#3)',
      '5 To de stockage mutualisé par utilisateur',
      'Assistant de réunion IA pour les notes et résumés [💬](#2)',
      '**Interprétation simultanée** [💬](#1)',
      '**Routage privé par région** (UE / États-Unis / Asie) [💬](#4)',
      '**Collègue IA**. Apparence humaine. Voix naturelle. (version ⍺)',
    ],
  }
]">
<AuthButton text="Essayer gratuitement" buttonClass="alt"/>
<AuthButton text="Acheter maintenant" buttonClass="brand"/>
<ContactFormModalNav buttonText="Parler à notre équipe" buttonClass="alt"/>
</PricingPlans>

<span id="FAQ"></span>

## Questions Fréquemment Posées

<AccordionGroup :items="
[
  {
    q: 'Qu\'est-ce qu\'un utilisateur sous licence et qu\'est-ce qu\'un participant ?',
    a: 'Un *utilisateur sous licence* dispose d\'une licence gratuite ou payante et peut planifier des réunions selon les limites de son forfait. Les *participants* sont les invités — ils **n\'ont pas besoin de compte ni de licence** pour rejoindre et peuvent se connecter depuis n\'importe quel appareil **gratuitement**.'
  },
  {
    q: 'Combien de participants peuvent rejoindre une réunion ?',
    a: 'Cela dépend de votre forfait : *Basic* prend en charge jusqu\'à **100 participants**, *Pro* jusqu\'à **150**, et *Business* jusqu\'à **500**.'
  },
  {
    q: 'Combien de personnes peuvent utiliser une licence InterMind ?',
    a: 'Chaque *utilisateur sous licence* peut organiser des **réunions illimitées**. Si plusieurs membres de l\'équipe doivent organiser des réunions simultanément, chacun aura besoin de sa propre licence.'
  },
  {
    q: 'L\'interprétation vocale fonctionne-t-elle sur tous les forfaits ?',
    a: 'Oui, *l\'interprétation vocale* est disponible sur tous les forfaits. Sur *Basic*, elle fonctionne avec **sous-titres uniquement**. *Pro* et *Business* débloquent **l\'interprétation voix-à-voix bidirectionnelle** complète, plus de capacité et des fonctionnalités avancées.'
  },
  {
    q: 'Quelle est la durée maximale d\'une réunion ?',
    a: 'Les réunions peuvent durer jusqu\'à **24 heures** sur tous les forfaits.'
  },
  {
    q: 'Puis-je enregistrer les réunions ?',
    a: 'Oui, tous les forfaits prennent en charge **l\'enregistrement des réunions**. Les enregistrements sont stockés en toute sécurité dans votre compte et accessibles à tout moment.'
  },
  {
    q: 'Y a-t-il une limite au nombre de réunions que je peux organiser ?',
    a: 'Non. Vous pouvez organiser des **réunions illimitées** — même avec le forfait *Basic gratuit*. Les forfaits *Pro* et *Business* offrent plus de puissance, de participants et de contrôle.'
  },
  {
    q: 'Que faire si j\'ai besoin de plus de stockage pour les enregistrements ?',
    a: '*Pro* inclut **2 To** de stockage mutualisé par utilisateur. *Business* offre **5 To**. Besoin de plus ? **Contactez-nous** pour des options personnalisées.'
  },
  {
    q: 'Comment InterMind assure-t-il la confidentialité et la sécurité des données ?',
    a: 'InterMind est **privé par conception**. Toutes les données sont traitées et stockées dans votre région sélectionnée — *UE, États-Unis ou Asie*. Nous respectons le **RGPD, le CCPA et l\'UAE PDPL**, et **n\'utilisons jamais votre contenu** pour la formation ou l\'accès par des tiers.'
  },
  {
    q: 'Puis-je essayer InterMind avant d\'acheter un forfait ?',
    a: 'Absolument. Le forfait *Basic gratuit* vous donne un accès complet aux fonctionnalités de base — y compris les **réunions multilingues**, les **sous-titres** et un **assistant IA**. Pas de carte de crédit, **pas de limite de temps**. Passez à la version supérieure à tout moment.'
  },
  {
    q: 'Que faire si j\'ai besoin d\'aide ou de support ?',
    a: 'Le support est disponible via notre **centre d\'aide**, par **email** et par **chat en direct**. Les utilisateurs *Business* bénéficient d\'un **support prioritaire** avec un contact dédié.'
  },
  {
    q: 'Puis-je annuler mon abonnement à tout moment ?',
    a: 'Oui. Les *forfaits mensuels* s\'annulent à la fin du cycle de facturation. Les *forfaits annuels* peuvent être annulés avec un **remboursement au prorata**.'
  },
  {
    q: 'Comment puis-je mettre à niveau ou rétrograder mon forfait ?',
    a: 'Vous pouvez modifier votre forfait à tout moment dans vos **paramètres de compte**. Les changements prennent effet **immédiatement**.'
  },
  {
    q: 'Quelles langues InterMind prend-il en charge pour l\'interprétation vocale ?',
    a: 'Nous prenons en charge **plus de 100 langues** avec interprétation vocale en temps réel. La liste ne cesse de s\'allonger — consultez notre site web pour les mises à jour.'
  },
  {
    q: 'Puis-je utiliser InterMind pour des webinaires ou de grands événements ?',
    a: 'Oui. Les forfaits *Pro* et *Business* sont idéaux pour les **grandes réunions et webinaires** — avec prise en charge jusqu\'à **500 participants** sur *Business*.'
  }
]
"/>

<span id="Testimonials"></span>

## Ce Que Disent Nos Clients

<AutoScrollTestimonials testimonialsUrl="/testimonials.json"/>