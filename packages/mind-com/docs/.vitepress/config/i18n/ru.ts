/// <reference types="../theme/types/themeConfig" />

import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ru"

export const ru = defineConfig({
  description:
    "Профессиональные видеоконференции с синхронным переводом на 19+ языков. ИИ-перевод, который передает тон, намерения и контекст для глобальных команд.",
  head: [
    ["meta", { property: "og:title", content: "InterMIND | Перевод речи в реальном времени для глобальных команд" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "Профессиональные видеоконференции с синхронным голосовым переводом на 19+ языков. Встречайтесь глобально, общайтесь естественно с ИИ-переводом.",
      },
    ],
    ["meta", { property: "og:url", content: `https://mind.com${BASE_PATH}` }],
  ],
  themeConfig: {
    nav: [
      {
        text: "Продукт",
        activeMatch: `${BASE_PATH}/product/`,
        link: `${BASE_PATH}/product/overview/what-is-intermind`,
      },
      {
        text: "Цены",
        link: `${BASE_PATH}/#Pricing`,
      },
      {
        text: "Ресурсы",
        activeMatch: `${BASE_PATH}/product/`,
        items: [
          { text: "FAQ", link: `${BASE_PATH}/#FAQ` },
          { text: "Отзывы", link: `${BASE_PATH}/#Testimonials` },
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/product/`]: { base: `${BASE_PATH}/product/`, items: sidebarProduct() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarResources() },
      [`${BASE_PATH}/exp/`]: { base: `${BASE_PATH}/exp/`, items: sidebarExp() },
      [`${BASE_PATH}/account/`]: { base: `${BASE_PATH}/account/`, items: sidebarAccount() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Настройки конфиденциальности</a> | <a href="${BASE_PATH}/resources/company/privacy-policy">Политика конфиденциальности</a> | <a href="${BASE_PATH}/resources/company/legal-regulations-for-ai-services">Правовые нормы для ИИ-сервисов</a> | <a href="https://status.mind.com/">Статус сервиса</a>`,
    },

    localization: {
      placeholder4SearchInput: "Спросите что угодно...",
      placeholder4ChatFooter: "Спросите что угодно...",
      placeholder4ChatList: "Введите тему чата...",
      buttonLabel4NavButton: "Ассистент",
      buttonLabel4SignInButton: "Войти",
      buttonLabel4GetStartedButton: "Начать",
      buttonLabel4TryItButton: "Попробовать бесплатно",
      buttonLabel4BackToBlog: "← Вернуться к блогу",
    },
    contact_form: {
      name: "Имя *",
      namePlaceholder: "ваше имя",
      email: "Email *",
      emailPlaceholder: "ваш email адрес",
      webSite: "Сайт компании",
      webSitePlaceholder: "например, https://companyname.com",
      webSiteError: "Пожалуйста, введите сайт",
      category: "Какова ваша основная цель? *",
      categoryPlaceholder: "Выберите, что важнее всего",
      message: "Давайте обсудим ваши цели (необязательно)",
      messagePlaceholder: "Пожалуйста, предоставьте любые дополнительные детали (необязательно)",
      submit: "Отправить запрос",
      sending: "Отправка...",
      successTitle: "Спасибо!",
      successMessage: "Мы получили ваше сообщение — наша команда свяжется с вами в ближайшее время.",
      defaultCategories: [],

      defaultButtonText: "Отправьте нам сообщение",
      // defaultButtonText: "Получить бесплатную консультацию",
    },
  },
})

function sidebarProduct(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "ОБЗОР",
      collapsed: false,
      items: [
        { text: "Что такое InterMIND?", link: "overview/what-is-intermind" },
        { text: "Как это работает", link: "overview/how-it-works" },
        { text: "Платформа видеовстреч", link: "overview/video-meeting-platform" },
        { text: "Перевод против интерпретации: в чем разница?", link: "overview/translation-vs-interpretation-whats-the-difference" },
        { text: "Региональная конфиденциальность данных", link: "overview/privacy-architecture" },
        { text: "Приоритетные рынки", link: "overview/markets" },
      ],
    },
    {
      text: "РУКОВОДСТВО",
      collapsed: false,
      items: [
        { text: "Начало работы", link: "guide/getting-started" },
        { text: "Управление аккаунтом", link: "guide/account-management" },
        { text: "Создание встреч", link: "guide/creating-meetings" },
        { text: "Интерфейс встречи", link: "guide/meeting-interface" },
        { text: "Роли пользователей", link: "guide/user-roles" },
        { text: "ИИ функции", link: "guide/ai-features" },
        { text: "История встреч", link: "guide/meeting-history" },
        { text: "FAQ", link: "guide/faq" },
        { text: "Устранение неполадок", link: "guide/troubleshooting" },
        { text: "Цены", link: "guide/pricing" },
        { text: "Помощь и поддержка", link: "guide/help-support" },
      ],
    },
  ]
}

function sidebarResources(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "ПОДДЕРЖКА",
      collapsed: false,
      items: [
        { text: "Получить поддержку", link: "/help" },
        { text: "Политика конфиденциальности", link: "/company/privacy-policy" },
        { text: "Правовое руководство по ИИ", link: "/company/legal-regulations-for-ai-services" },
      ],
    },
    // {
    //   text: "РЕСУРСЫ",
    //   collapsed: false,
    //   items: [
    //     { text: "Брендовые материалы", link: "/media-kit" },
    //     // { text: "Управление аккаунтом", link: "guide/account-management" },
    //   ],
    // },
    {
      text: "КОМПАНИЯ",
      collapsed: false,
      items: [
        { text: "О нас", link: "/company/about" },
        { text: "Команда", link: "/company/team" },
        { text: "Карьера", link: "/company/careers" },
        { text: "Контакты", link: "/company/contacts" },
      ],
    },
  ]
}

function sidebarExp(): DefaultTheme.SidebarItem[] {
  return [
    { text: "Краткое изложение для руководства", link: "/InterMind-Executive-Summary" },
    { text: "Стратегия выхода на рынок", link: "/go-to-market-strategy" },
    { text: "Презентация для инвесторов", link: "/InterMind-Investor-Pitch" },
    { text: "Обоснование финансовых прогнозов (1-3 год)", link: "/Financial-Projections-Justification" },
  ]
}

function sidebarAccount(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "ГЛАВНАЯ",
      link: "/",
    },
    {
      text: "ВСТРЕЧИ",
      collapsed: false,
      items: [
        { text: "Встречи", link: "/meetings" },
        { text: "История", link: "/history" },
        { text: "Обновить", link: "/upgrade" },
      ],
    },

    {
      text: "НАСТРОЙКИ",
      collapsed: true,
      items: [
        { text: "Профиль", link: "/settings/profile" },
        { text: "Настройки", link: "/settings/settings" },
        { text: "Настройки", link: "/settings/upgrade" },
      ],
    },
  ]
}
