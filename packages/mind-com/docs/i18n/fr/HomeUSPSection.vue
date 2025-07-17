<template>
  <span id="1"></span>
  <FeatureBlock
    :card="{
      title: 'Traduction ≠ Compréhension. Voici la suite.',
      details: 'Peu importe la langue, votre voix est entendue — et comprise — comme si vous partagiez la même langue.',
      items: [
        '✧ Naturellement, en [temps réel](./product/overview/how-it-works), et sans sous-titres ni latence.',
        '✧ L\'interprétation alimentée par l\'IA capture le ton, l\'intention et la terminologie spécifique au secteur.',
      ],
      link: './product/overview/what-is-intermind',
      src: {
        light: '/media-kit/animals-cartoon-3-2.png',
        dark: '/1d.png',
      },
      inversion: false,
    }"
  />

  <span id="2"></span>
  <FeatureBlock
    :card="{
      title: 'L\'esprit au cœur de vos réunions',
      details: 'InterMind transforme chaque appel multilingue en connaissances claires et consultables.',
      items: [
        '✧ **Posez n\'importe quelle question** — l\'IA trouve des réponses **dans toutes vos réunions**.',
        '✧ Extrait automatiquement les tâches, les responsables et les échéances.',
        '✧ Résume les points clés dans n\'importe quelle langue — instantanément.',
      ],
      link: './product/overview/how-it-works#🧩-deep-memory-deep-understanding',
      src: {
        light: '/2l.png',
        dark: '/2d.png',
      },
      inversion: true,
    }"
  />

  <span id="3"></span>
  <FeatureBlock
    :card="{
      title: 'Conçu pour les réunions sérieuses — pas seulement pour parler',
      details: 'InterMind est une [plateforme de visioconférence de niveau professionnel](./product/overview/video-meeting-platform), pas un simple module complémentaire ou plugin léger.',
      items: [
        '✧ Résolution 1080p, suppression intelligente du bruit, planification, modération, partage d\'écran, enregistrement, sous-titrage, chat des participants et intégration calendrier — tout intégré, **prêt à l\'emploi**.',
      ],
      link: './product/overview/video-meeting-platform',
      src: {
        light: '/3l.mp4',
        dark: '/3d.mp4',
      },
      inversion: false,
    }"
  />

  <span id="4"></span>
  <FeatureBlock
    :card="{
      title: 'Confidentialité là où ça compte',
      details: 'InterMind est conçu pour les conversations critiques en matière de confiance — où la confidentialité et le contrôle sont primordiaux.',
      items: ['✧ [Zones de confidentialité](./product/overview/privacy-architecture) — UE, États-Unis, Asie du Sud-Est', '✧ **Aucune formation de données**. Aucun accès tiers.'],
      link: './product/overview/privacy-architecture',
      src: {
        light: '/4l.png',
        dark: '/4d.png',
      },
      inversion: true,
    }"
  />
</template>