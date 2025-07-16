<template>
  <span id="HowItWorks"></span>

  <FeatureCards
    :features="[
      {
        title: 'Regístrate gratis',
        details: 'Elige tu idioma y [crea una cuenta](#Pricing).',
        icon: {
          light: '/signUp.png',
          dark: '/signUp.png',
        },
      },
      {
        title: 'Inicia una reunión',
        details: 'Crea instantáneamente o programa con anticipación.',
        icon: {
          light: '/start.png',
          dark: '/start.png',
        },
      },
      {
        title: 'Únete a la reunión',
        details: 'Haz clic en el enlace, ingresa tu nombre, únete al instante.',
        icon: {
          light: '/join.png',
          dark: '/join.png',
        },
      },
      {
        title: 'Habla tu idioma',
        details: 'Todos hablan y escuchan en su propio idioma.',
        icon: {
          light: '/meeting.png',
          dark: '/meeting.png',
        },
      },
    ]"
  />
</template>