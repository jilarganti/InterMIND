<template>
  <span id="HowItWorks"></span>

  <FeatureCards
    :features="[
      {
        title: 'Cadastre-se gratuitamente',
        details: 'Escolha seu idioma e [crie uma conta](#Pricing).',
        icon: {
          light: '/signUp.png',
          dark: '/signUp.png',
        },
      },
      {
        title: 'Inicie uma reunião',
        details: 'Crie instantaneamente ou agende com antecedência.',
        icon: {
          light: '/start.png',
          dark: '/start.png',
        },
      },
      {
        title: 'Participe da reunião',
        details: 'Clique no link, digite seu nome, participe instantaneamente.',
        icon: {
          light: '/join.png',
          dark: '/join.png',
        },
      },
      {
        title: 'Fale seu idioma',
        details: 'Todos falam e ouvem em seu próprio idioma.',
        icon: {
          light: '/meeting.png',
          dark: '/meeting.png',
        },
      },
    ]"
  />
</template>