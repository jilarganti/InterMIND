<template>
  <span id="HowItWorks"></span>

  <FeatureCards
    :features="[
      {
        title: 'Зарегистрируйтесь бесплатно',
        details: 'Выберите ваш язык и [создайте аккаунт](#Pricing).',
        icon: {
          light: '/signUp.png',
          dark: '/signUp.png',
        },
      },
      {
        title: 'Начните встречу',
        details: 'Создайте мгновенно или запланируйте заранее.',
        icon: {
          light: '/start.png',
          dark: '/start.png',
        },
      },
      {
        title: 'Присоединитесь к встрече',
        details: 'Нажмите ссылку, введите имя, присоединяйтесь мгновенно.',
        icon: {
          light: '/join.png',
          dark: '/join.png',
        },
      },
      {
        title: 'Говорите на своем языке',
        details: 'Каждый говорит и слышит на своем родном языке.',
        icon: {
          light: '/meeting.png',
          dark: '/meeting.png',
        },
      },
    ]"
  />
</template>