<template>
  <span id="HowItWorks"></span>

  <FeatureCards
    :features="[
      {
        title: '無料でサインアップ',
        details: '言語を選択して[アカウントを作成](#Pricing)してください。',
        icon: {
          light: '/signUp.png',
          dark: '/signUp.png',
        },
      },
      {
        title: 'ミーティングを開始',
        details: 'すぐに作成するか、事前にスケジュールを設定できます。',
        icon: {
          light: '/start.png',
          dark: '/start.png',
        },
      },
      {
        title: 'ミーティングに参加',
        details: 'リンクをクリックし、名前を入力して、すぐに参加できます。',
        icon: {
          light: '/join.png',
          dark: '/join.png',
        },
      },
      {
        title: '母国語で話す',
        details: '全員が自分の言語で話し、聞くことができます。',
        icon: {
          light: '/meeting.png',
          dark: '/meeting.png',
        },
      },
    ]"
  />
</template>