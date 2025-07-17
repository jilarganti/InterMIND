<template>
  <span id="HowItWorks"></span>

  <FeatureCards
    :features="[
      {
        title: 'Kostenlos registrieren',
        details: 'Wählen Sie Ihre Sprache und [erstellen Sie ein Konto](#Pricing).',
        icon: {
          light: '/signUp.png',
          dark: '/signUp.png',
        },
      },
      {
        title: 'Meeting starten',
        details: 'Sofort erstellen oder im Voraus planen.',
        icon: {
          light: '/start.png',
          dark: '/start.png',
        },
      },
      {
        title: 'Am Meeting teilnehmen',
        details: 'Link klicken, Namen eingeben, sofort beitreten.',
        icon: {
          light: '/join.png',
          dark: '/join.png',
        },
      },
      {
        title: 'In Ihrer Sprache sprechen',
        details: 'Jeder spricht und hört in seiner eigenen Sprache.',
        icon: {
          light: '/meeting.png',
          dark: '/meeting.png',
        },
      },
    ]"
  />
</template>