<template>
  <span id="HowItWorks"></span>

  <FeatureCards
    :features="[
      {
        title: 'Inscrivez-vous gratuitement',
        details: 'Choisissez votre langue et [créez un compte](#Pricing).',
        icon: {
          light: '/signUp.png',
          dark: '/signUp.png',
        },
      },
      {
        title: 'Démarrez une réunion',
        details: 'Créez instantanément ou planifiez à l\'avance.',
        icon: {
          light: '/start.png',
          dark: '/start.png',
        },
      },
      {
        title: 'Rejoignez la réunion',
        details: 'Cliquez sur le lien, saisissez votre nom, rejoignez instantanément.',
        icon: {
          light: '/join.png',
          dark: '/join.png',
        },
      },
      {
        title: 'Parlez votre langue',
        details: 'Chacun parle et entend dans sa propre langue.',
        icon: {
          light: '/meeting.png',
          dark: '/meeting.png',
        },
      },
    ]"
  />
</template>