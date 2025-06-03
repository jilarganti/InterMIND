---
layout: home
title: "Traduction simultanée pour les appels vidéo des équipes internationales"
isHome: true
---

<!-- title: "Appels vidéo alimentés par l'interprétation simultanée" -->
<!-- text="Parlez votre langue maternelle. Écoutez tout le monde — comme s'ils la parlaient aussi." -->
<!-- title="Traduction vocale en direct pour les appels vidéo" -->

<HeroSection
  title="Communiquez dans **Toutes** les Langues"
  text="Traduction vocale en direct pour les équipes internationales — **sans** délais, **sans** opportunités manquées, **sans** barrières linguistiques.">

  <!-- <AuthButton text="Écoutez la différence" buttonClass="brand"/> -->
  <AuthButton text="Essayez dans votre langue" buttonClass="brand"/>
</HeroSection>

> **Pour qui est-ce ?**  
> Conçu pour les équipes internationales où les barrières linguistiques causent des **retards, des opportunités manquées ou des malentendus coûteux**. [En savoir plus ...](./product/overview/markets)

<br>

<span id="1"></span>
<FeatureBlock :card="{
  title: 'Traduction ≠ Compréhension. Voici la suite.',
  details: 'Quelle que soit la langue, **votre voix est entendue — et comprise** — comme si vous parliez la même langue.',
    items: [
      '⚡︎ Naturellement, en [temps réel](./product/overview/how-it-works), sans sous-titres ni latence.',
      '✧ L\'interprétation alimentée par l\'IA capture le ton, l\'intention et la terminologie spécifique à l\'industrie.',
    ],
  link: './product/overview/what-is-intermind',
  src: {
    light: '/1l.png',
    dark: '/1d.png',
  },
  inversion: false
}" />

<span id="2"></span>
<FeatureBlock :card="{
    title: 'L\'Intelligence au Cœur de Vos Réunions',
    details: 'InterMind transforme chaque appel multilingue en connaissances claires et consultables.',
    items: [
      '🔍 **Posez n\'importe quelle question** — l\'IA trouve des réponses **à travers vos réunions**.',
      '✧ Extrait automatiquement les tâches, les responsables et les délais.',
      '✧ Résume les points clés dans n\'importe quelle langue — instantanément.',
    ],
    link: './product/overview/how-it-works#🧩-deep-memory-deep-understanding',
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
    link: './product/overview/how-it-works',
    src: {
      light: '/3l.mp4',
      dark: '/3d.mp4',
    },
    inversion: false
  }" />

<span id="4"></span>
<FeatureBlock
  :card="{
    title: 'Confidentialité Là Où Elle Compte',
    details:
      'InterMind est conçu pour les conversations critiques en matière de confiance — où la confidentialité et le contrôle sont essentiels.',
    items: [
      '⚡︎ [Zones de Confidentialité](./product/overview/privacy-architecture) — UE, États-Unis, Asie du Sud-Est',
      '✧ **Zéro entraînement de données**. Aucun accès tiers.'
    ],
    link: './product/overview/privacy-architecture',
    src: {
      light: '/4l.png',
      dark: '/4d.png',
    },
    inversion: true
  }"
/>

<span id="Pricing"></span>

## Prix Clairs et Simples

Du premier appel aux conversations fluides — à toute échelle.

<PricingPlans :plans="[
  {
    title: '**Basic** &nbsp 1 utilisateur',
    price: '**Gratuit**',
    details: 'aucune carte bancaire requise',
    items: [
      '**25** réunions',
      '**100** participants en réunion vidéo [💬](#3)',
      '**30** Go de stockage mutualisé par utilisateur',
      'Recherche dans toutes vos réunions [💬](#2)',
      'Interprétation simultanée [💬](#1)',
    ],
  },
  {
    title: '**Pro** &nbsp 1-99 utilisateurs',
    price: '**20€** /mois/utilisateur, facturation annuelle',
    details: 'ou 25€ facturation mensuelle',
    items: [
      'Réunions **illimitées**',
      '**150** participants en réunion vidéo [💬](#3)',
      '**2** To de stockage mutualisé par utilisateur',
      'Recherche dans toutes vos réunions [💬](#2)',
      'Interprétation simultanée [💬](#1)',
    ],
  },
  {
    title: '**Business** &nbsp 100+ utilisateurs',
    price: '**Prix personnalisé**',
    details: 'Conçu pour la confidentialité',
    items: [
      'Réunions **illimitées**',
      '**500** participants en réunion vidéo [💬](#3)',
      '**5** To de stockage mutualisé par utilisateur',
      'Recherche dans toutes vos réunions [💬](#2)',
      'Interprétation simultanée [💬](#1)',
      '**Zones de confidentialité** [💬](#4)',
    ],
  }
]">
<AuthButton text="Essayer gratuitement" buttonClass="alt"/>
<AuthButton text="Acheter maintenant" buttonClass="brand"/>
<ContactFormModalNav buttonText="Parler à notre équipe" buttonClass="alt"/>
</PricingPlans>

<span id="Testimonials"></span>

## Ce Que Disent Nos Clients

<AutoScrollTestimonials testimonialsUrl="/testimonials.json"/>

<span id="FAQ"></span>

## Questions Fréquemment Posées

<AccordionGroup :items="
[
  {
    q: 'Qu\'est-ce qu\'un utilisateur sous licence et qu\'est-ce qu\'un participant ?',
    a: 'Un *utilisateur sous licence* dispose d\'une licence gratuite ou payante et peut planifier des réunions dans les limites de son forfait. Les *participants* sont les invités — ils **n\'ont pas besoin de compte ni de licence** pour rejoindre et peuvent se connecter depuis n\'importe quel appareil **gratuitement**.'
  },
  {
    q: 'Combien de personnes peuvent utiliser une licence InterMind ?',
    a: 'Chaque *utilisateur sous licence* peut organiser des **réunions illimitées**. Si plusieurs membres de l\'équipe doivent organiser des réunions simultanément, chacun aura besoin de sa propre licence.'
  },
  {
    q: 'Quelle est la durée maximale d\'une réunion ?',
    a: 'Les réunions peuvent durer jusqu\'à **24 heures** sur tous les forfaits.'
  },
  {
    q: 'Y a-t-il une limite au nombre de réunions que je peux organiser ?',
    a: 'Le forfait *Free Basic* inclut **25 réunions gratuites**. Les forfaits *Pro* et *Business* offrent des réunions illimitées avec plus de participants et de contrôle.'
  },
  {
    q: 'Comment InterMind assure-t-il la confidentialité et la sécurité des données ?',
    a: 'InterMind est **privé par conception**. Toutes les données sont traitées et stockées dans votre **Privacy Zone** sélectionnée — _EU_, _US_, ou _Asia_. Nous respectons le [**GDPR**](https://gdpr.eu), le [**CCPA**](https://oag.ca.gov/privacy/ccpa), et l\'UAE PDPL, et **n\'utilisons jamais votre contenu** pour la formation ou l\'accès à des tiers. Le contrôle avancé des **Privacy Zone** est disponible sur le forfait **Business**.'
  },
  {
    q: 'Puis-je essayer InterMind avant d\'acheter un forfait ?',
    a: 'Absolument. Le forfait *Free Basic* vous donne un accès complet aux fonctionnalités de base avec **25 réunions gratuites** — y compris l\'**interprétation simultanée** et la **recherche de réunions**. Pas de carte de crédit requise. Possibilité de mise à niveau à tout moment.'
  },
  {
    q: 'Que faire si j\'ai besoin d\'aide ou de support ?',
    a: 'Le support est disponible via notre **centre d\'aide**, par **email** et par **chat en direct**. Les utilisateurs *Business* bénéficient d\'un **support prioritaire** avec un contact dédié.'
  },
  {
    q: 'Comment gérer mon abonnement (mise à niveau, rétrogradation ou annulation) ?',
    a: 'Vous pouvez modifier votre forfait à tout moment via vos **paramètres de compte**. Les changements prennent effet **immédiatement**. Pour les annulations, les *forfaits mensuels* sont annulés à la fin du cycle de facturation. Les *forfaits annuels* peuvent être annulés avec un **remboursement au prorata**.'
  },
  {
    q: 'Quelles langues InterMind prend-il en charge pour l\'interprétation ?',
    a: 'Nous prenons en charge **plus de 100 langues** avec interprétation en temps réel. La liste ne cesse de s\'allonger — consultez notre site web pour les mises à jour.'
  },
  {
    q: 'Puis-je utiliser InterMind pour des webinaires ou de grands événements ?',
    a: 'Oui. Les forfaits *Pro* et *Business* sont idéaux pour les **grandes réunions et webinaires** — avec prise en charge jusqu\'à **500 participants** sur le forfait *Business*.'
  }
]
"/>