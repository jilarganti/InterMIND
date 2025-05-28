import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ru"

export const ru = defineConfig({
  description:
    "InterMind - это платформа синхронного перевода для многоязычных видеовстреч. Каждый участник говорит на своем родном языке и слышит других так, как если бы они тоже говорили на нем. Без плагинов. Без загрузок. Просто естественное общение на более чем 100 языках.",
  head: [["meta", { property: "og:title", content: "Видеозвонки с синхронным переводом | InterMIND" }]],

  themeConfig: {
    nav: [
      {
        text: "Продукт",
        activeMatch: `${BASE_PATH}/product/`,
        link: `${BASE_PATH}/product/overview/what-is-intermind`,
      },
      {
        text: "Компания",
        activeMatch: `${BASE_PATH}/company/`,
        link: `${BASE_PATH}/company/about`,
      },
      {
        text: "Ресурсы",
        activeMatch: `${BASE_PATH}/product/`,
        items: [
          { text: "Цены", link: `${BASE_PATH}/#Pricing` },
          { text: "Частые вопросы", link: `${BASE_PATH}/#FAQ` },
          { text: "Отзывы", link: `${BASE_PATH}/#Testimonials` },
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/product/`]: { base: `${BASE_PATH}/product/`, items: sidebarServices() },
      [`${BASE_PATH}/company/`]: { base: `${BASE_PATH}/company/`, items: sidebarInsights() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Настройки конфиденциальности</a> | <a href="${BASE_PATH}/company/Privacy-Policy">Политика конфиденциальности</a> | <a href="${BASE_PATH}/company/Legal-Regulations-for-AI-Services">Правовые нормы для AI-сервисов</a>`,
    },

    localization: {
      placeholder4SearchInput: "Задайте любой вопрос...",
      placeholder4ChatFooter: "Задайте любой вопрос...",
      placeholder4ChatList: "Введите тему чата...",
      buttonLabel4NavButton: "Мгновенный чат с экспертом",
      buttonLabel4AuthButton: "Войти",
    },
    contact_form: {
      name: "Имя *",
      namePlaceholder: "ваше имя",
      email: "Email *",
      emailPlaceholder: "ваш email адрес",
      phone: "Корпоративный сайт *",
      phonePlaceholder: "например, https://mind.com",
      phoneError: "Пожалуйста, введите номер телефона",
      category: "Расскажите, чем мы можем помочь *",
      categoryPlaceholder: "выберите тип услуги",
      message: "Обсудим ваши цели (необязательно)",
      messagePlaceholder: "Укажите дополнительные детали (необязательно)",
      submit: "Отправить запрос",
      sending: "Отправка...",
      successTitle: "Спасибо!",
      successMessage: "Мы очень ценим ваш интерес! Наша команда свяжется с вами в ближайшее время для обсуждения ваших потребностей.",
      defaultCategories: [
        "Меня интересует синхронный голосовой перевод",
        "Меня интересует AI-ассистент для встреч",
        "Меня интересует региональная конфиденциальность и контроль данных",
        "Другое / Не указано",
      ],

      defaultButtonText: "Отправить сообщение",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Обзор",
      collapsed: false,
      items: [
        { text: "Что такое InterMIND?", link: "overview/what-is-intermind" },
        { text: "Как это работает", link: "overview/how-it-works" },
        { text: "Региональная защита данных", link: "overview/privacy-architecture" },
        { text: "Приоритетные рынки", link: "overview/markets" },
      ],
    },
    {
      text: "Руководство",
      collapsed: false,
      items: [{ text: "Начало работы", link: "guide/getting-started" }],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "О нас", link: "/about" },
    { text: "Контакты", link: "/contacts" },
  ]
}