<template>
  <span id="1"></span>
  <FeatureBlock
    :card="{
      title: 'Übersetzung ≠ Verstehen. Das kommt als nächstes.',
      details: 'Unabhängig von der Sprache wird Ihre Stimme gehört — und verstanden — als würden Sie dieselbe Sprache sprechen.',
      items: [
        '✧ Natürlich, in [Echtzeit](./product/overview/how-it-works), und ohne Untertitel oder Verzögerung.',
        '✧ KI-gestützte Interpretation erfasst Tonfall, Absicht und branchenspezifische Terminologie.',
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
      title: 'Der Verstand in Ihren Meetings',
      details: 'InterMind verwandelt jeden mehrsprachigen Anruf in klares, durchsuchbares Wissen.',
      items: [
        '✧ **Fragen Sie alles** — KI findet Antworten **in all Ihren Meetings**.',
        '✧ Extrahiert automatisch Aufgaben, Verantwortliche und Fristen.',
        '✧ Fasst wichtige Punkte in jeder Sprache zusammen — sofort.',
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
      title: 'Entwickelt für ernsthafte Meetings — nicht nur zum Reden',
      details: 'InterMind ist eine [professionelle Videokonferenz-Plattform](./product/overview/video-meeting-platform), kein leichtgewichtiges Add-on oder Plugin.',
      items: [
        '✧ 1080p-Auflösung, intelligente Geräuschunterdrückung, Terminplanung, Moderation, Bildschirmfreigabe, Aufzeichnung, Untertitelung, Teilnehmer-Chat und Kalenderintegration — alles integriert, **sofort einsatzbereit**.',
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
      title: 'Datenschutz wo es darauf ankommt',
      details: 'InterMind ist für vertrauenskritische Gespräche entwickelt — wo Datenschutz und Kontrolle am wichtigsten sind.',
      items: ['✧ [Datenschutzzonen](./product/overview/privacy-architecture) — EU, USA, Südostasien', '✧ **Keine Datennutzung für Training**. Kein Zugriff durch Dritte.'],
      link: './product/overview/privacy-architecture',
      src: {
        light: '/4l.png',
        dark: '/4d.png',
      },
      inversion: true,
    }"
  />
</template>