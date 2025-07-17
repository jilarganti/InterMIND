<template>
  <HomeFooter
    :columns="[
      {
        title: 'ПРОДУКТ',
        links: [
          { text: 'Обзор', link: './product/overview/what-is-intermind' },
          { text: 'Начало работы', link: './product/guide/getting-started' },
          { text: 'Отзывы', link: '#testimonials' },
          { text: 'Цены', link: '#Pricing' },
        ],
      },
      {
        title: 'ПОДДЕРЖКА',
        links: [
          { text: 'Получить поддержку', link: './resources/help' },
          { text: 'FAQ', link: '#FAQ' },
          { text: 'Статус сервиса', link: 'https://status.mind.com/' },
          { text: 'Политика конфиденциальности', link: './resources/company/Privacy-Policy' },
          { text: 'Правовое руководство по ИИ', link: './resources/company/Legal-Regulations-for-AI-Services' },
          // { text: 'Privacy Settings', link: '#' },
        ],
      },
      {
        title: 'РЕСУРСЫ',
        links: [
          // { text: 'Blog', link: './blog' },
          { text: 'Брендовые материалы', link: './resources/media-kit' },
          { text: 'AI API / LLM документация', link: 'https://mind.com/llms-full.txt' },
        ],
      },
      {
        title: 'КОМПАНИЯ',
        links: [
          { text: 'О нас', link: './resources/company/about' },
          { text: 'Команда', link: './resources/company/team' },
          // { text: 'Careers', link: './resources/company/careers' },
          { text: 'Контакты', link: './resources/company/contacts' },
        ],
      },
    ]"
  />
</template>