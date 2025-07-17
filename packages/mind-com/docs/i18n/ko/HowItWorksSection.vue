<template>
  <span id="HowItWorks"></span>

  <FeatureCards
    :features="[
      {
        title: '무료 가입',
        details: '언어를 선택하고 [계정을 생성](#Pricing)하세요.',
        icon: {
          light: '/signUp.png',
          dark: '/signUp.png',
        },
      },
      {
        title: '회의 시작',
        details: '즉시 생성하거나 미리 예약하세요.',
        icon: {
          light: '/start.png',
          dark: '/start.png',
        },
      },
      {
        title: '회의 참여',
        details: '링크를 클릭하고, 이름을 입력한 후 즉시 참여하세요.',
        icon: {
          light: '/join.png',
          dark: '/join.png',
        },
      },
      {
        title: '모국어로 대화',
        details: '모든 참가자가 각자의 언어로 말하고 들을 수 있습니다.',
        icon: {
          light: '/meeting.png',
          dark: '/meeting.png',
        },
      },
    ]"
  />
</template>