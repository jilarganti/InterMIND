<template>
  <span id="HowItWorks"></span>

  <FeatureCards
    :features="[
      {
        title: 'मुफ्त में साइन अप करें',
        details: 'अपनी भाषा चुनें और [खाता बनाएं](#Pricing)।',
        icon: {
          light: '/signUp.png',
          dark: '/signUp.png',
        },
      },
      {
        title: 'मीटिंग शुरू करें',
        details: 'तुरंत बनाएं या पहले से शेड्यूल करें।',
        icon: {
          light: '/start.png',
          dark: '/start.png',
        },
      },
      {
        title: 'मीटिंग में शामिल हों',
        details: 'लिंक पर क्लिक करें, नाम दर्ज करें, तुरंत शामिल हों।',
        icon: {
          light: '/join.png',
          dark: '/join.png',
        },
      },
      {
        title: 'अपनी भाषा में बोलें',
        details: 'हर कोई अपनी भाषा में बोलता और सुनता है।',
        icon: {
          light: '/meeting.png',
          dark: '/meeting.png',
        },
      },
    ]"
  />
</template>