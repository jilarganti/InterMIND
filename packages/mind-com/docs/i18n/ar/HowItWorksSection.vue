<template>
  <span id="HowItWorks"></span>

  <FeatureCards
    :features="[
      {
        title: 'سجل مجاناً',
        details: 'اختر لغتك و[أنشئ حساب](#Pricing).',
        icon: {
          light: '/signUp.png',
          dark: '/signUp.png',
        },
      },
      {
        title: 'ابدأ اجتماعاً',
        details: 'أنشئ فوراً أو جدول مسبقاً.',
        icon: {
          light: '/start.png',
          dark: '/start.png',
        },
      },
      {
        title: 'انضم للاجتماع',
        details: 'اضغط الرابط، أدخل الاسم، انضم فوراً.',
        icon: {
          light: '/join.png',
          dark: '/join.png',
        },
      },
      {
        title: 'تحدث بلغتك',
        details: 'الجميع يتحدث ويسمع بلغته الخاصة.',
        icon: {
          light: '/meeting.png',
          dark: '/meeting.png',
        },
      },
    ]"
  />
</template>