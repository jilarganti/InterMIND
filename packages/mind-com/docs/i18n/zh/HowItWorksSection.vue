<template>
  <span id="HowItWorks"></span>

  <FeatureCards
    :features="[
      {
        title: '免费注册',
        details: '选择您的语言并[创建账户](#Pricing)。',
        icon: {
          light: '/signUp.png',
          dark: '/signUp.png',
        },
      },
      {
        title: '开始会议',
        details: '立即创建或提前安排。',
        icon: {
          light: '/start.png',
          dark: '/start.png',
        },
      },
      {
        title: '加入会议',
        details: '点击链接，输入姓名，立即加入。',
        icon: {
          light: '/join.png',
          dark: '/join.png',
        },
      },
      {
        title: '使用您的语言',
        details: '每个人都可以用自己的语言说话和听取。',
        icon: {
          light: '/meeting.png',
          dark: '/meeting.png',
        },
      },
    ]"
  />
</template>