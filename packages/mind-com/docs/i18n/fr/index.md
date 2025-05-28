---
layout: home
title: "Appels vidéo alimentés par l'interprétation simultanée"

isHome: true
---

<!-- text="Appels vidéo alimentés par la traduction vocale simultanée." -->
<!-- text="Les salles de classe prennent des années ; InterMind offre une compréhension en temps réel aujourd'hui, dans toutes les langues." -->
<!-- text="Réunions vidéo **multilingues** avec interprétation **vocale**" -->
<!-- title="Réunions vidéo avec **interprétation** en direct" -->

<HeroSection
title="Communiquez dans **Toutes** les Langues"
text="Parlez votre langue maternelle. Écoutez les autres — comme s'ils la parlaient aussi.">

<AuthButton text="Découvrez la différence" buttonClass="brand"/>
<!-- <ContactFormModalNav buttonText="Demander une démo"/>
<NavButton to="#pricing" buttonClass="alt" buttonLabel="Tarifs" /> -->
</HeroSection>

> **Pour qui est-ce ?**  
> Conçu pour les **équipes internationales** où les barrières linguistiques causent des retards, des opportunités manquées ou des malentendus coûteux. En savoir plus dans notre section [Markets](./product/overview/markets).

<span id="1"></span>
<FeatureBlock :card="{
  title: 'Traduction ≠ Compréhension. Voici la suite.',
  details: 'Quelle que soit la langue, **votre voix est entendue — et comprise** — comme si vous parliez la même langue.',
    items: [
      '⚡︎ Naturellement, en [temps réel](./product/overview/how-it-works), sans sous-titres ni décalage.',
      '✧ L\'interprétation alimentée par l\'IA capture le ton, l\'intention et la terminologie spécifique à l\'industrie.',
    ],
  link: './product/overview/what-is-intermind',
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
    details: 'InterMind est une **plateforme de réunion vidéo professionnelle**, pas un simple module complémentaire ou plugin.',
    items: [
      '✧ Résolution 1080p, suppression intelligente du bruit, planification, modération, partage d\'écran, enregistrement, sous-titrage, chat entre participants et intégration du calendrier — tout est intégré, prêt à l\'emploi.',
    ],
    link: './product/overview/how-it-works',
    src: {
      light: '/3.png',
      dark: '/3.png',
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
      '⚡︎ [Routage de confidentialité par région](./product/overview/privacy-architecture) — UE, États-Unis, Asie du Sud-Est',
      '✧ **Zéro entraînement de données**. Aucun accès tiers.'
    ],
    link: './product/overview/privacy-architecture',
    src: {
      light: '/4.png',
      dark: '/4.png',
    },
    inversion: true
  }"
/>

<span id="Pricing"></span>

## Prix Clairs et Simples

Du premier appel aux conversations fluides — à toute échelle.

<PricingPlans :plans="[
  {
    title: '**Basic** 1 utilisateur',
    price: '**Gratuit**',
    details: '25 réunions gratuites',
    items: [
      'Réunions vidéo pour **100** participants [💬](#3)',
      '**30** Go de stockage mutualisé par utilisateur',
      'Recherche dans toutes vos réunions [💬](#2)',
      'Interprétation simultanée [💬](#1)',
    ],
  },
  {
    title: '**Pro** 1-99 utilisateurs',
    price: '**20€** /mois/utilisateur, facturation annuelle',
    details: 'ou 25€ par mois',
    items: [
      'Réunions vidéo pour **150** participants [💬](#3)',
      '**2** To de stockage mutualisé par utilisateur',
      'Recherche dans toutes vos réunions [💬](#2)',
      'Interprétation simultanée [💬](#1)',
    ],
  },
  {
    title: '**Business** 1-250 utilisateurs',
    price: '**Prix personnalisé**',
    details: 'Conçu pour la confidentialité',
    items: [
      'Réunions vidéo pour **500** participants [💬](#3)',
      '**5** To de stockage mutualisé par utilisateur',
      'Recherche dans toutes vos réunions [💬](#2)',
      'Interprétation simultanée [💬](#1)',
      '**Routage privé par région** [💬](#4)',
      '**Collègue IA**. Apparence humaine. Voix naturelle. (version-⍺)',
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
    a: 'InterMind est **privé par conception**. Toutes les données sont traitées et stockées dans votre région sélectionnée — *UE, États-Unis ou Asie*. Nous respectons le **RGPD, le CCPA et l\'UAE PDPL**, et **n\'utilisons jamais votre contenu** pour la formation ou l\'accès par des tiers. Le **routage privé par région** est disponible sur le forfait *Business*.'
  },
  {
    q: 'Puis-je essayer InterMind avant d\'acheter un forfait ?',
    a: 'Absolument. Le forfait *Free Basic* vous donne un accès complet aux fonctionnalités de base avec **25 réunions gratuites** — y compris **l\'interprétation simultanée** et la **recherche de réunions**. Pas de carte de crédit requise. Possibilité de mise à niveau à tout moment.'
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