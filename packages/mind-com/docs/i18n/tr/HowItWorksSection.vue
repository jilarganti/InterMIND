<template>
  <span id="HowItWorks"></span>

  <FeatureCards
    :features="[
      {
        title: 'Ücretsiz kaydolun',
        details: 'Dilinizi seçin ve [hesap oluşturun](#Pricing).',
        icon: {
          light: '/signUp.png',
          dark: '/signUp.png',
        },
      },
      {
        title: 'Toplantı başlatın',
        details: 'Anında oluşturun veya önceden planlayın.',
        icon: {
          light: '/start.png',
          dark: '/start.png',
        },
      },
      {
        title: 'Toplantıya katılın',
        details: 'Bağlantıya tıklayın, adınızı girin, anında katılın.',
        icon: {
          light: '/join.png',
          dark: '/join.png',
        },
      },
      {
        title: 'Kendi dilinizde konuşun',
        details: 'Herkes kendi dilinde konuşur ve duyar.',
        icon: {
          light: '/meeting.png',
          dark: '/meeting.png',
        },
      },
    ]"
  />
</template>