import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ru"

export const ru = defineConfig({
  description:
    "Для многоязычных встреч не нужны Zoom, плагины или переводчики. InterMind — это ИИ-переводчик голоса для видеозвонков в реальном времени — говорите и переводите мгновенно.",
  head: [
    ["meta", { property: "og:title", content: "ИИ-переводчик голоса для видеозвонков | InterMIND" }],
    [
      "meta",
      {
        name: "keywords",
        content: "ИИ-переводчик голоса, перевод в реальном времени, перевод видеозвонков, многоязычные встречи, альтернатива переводчику Zoom, инструмент переводчика",
      },
    ],
  ],

  themeConfig: {
    nav: [
      {
        text: "Продукт",
        activeMatch: `${BASE_PATH}/guide/`,
        link: `${BASE_PATH}/guide/what-is-intermind`,
      },
      {
        text: "Компания",
        activeMatch: `${BASE_PATH}/resources/`,
        link: `${BASE_PATH}/resources/about`,
      },
      {
        text: "Ресурсы",
        activeMatch: `${BASE_PATH}/guide/`,
        items: [
          { text: "Цены", link: `${BASE_PATH}/#clear-and-simple-pricing` },
          { text: "FAQ", link: `${BASE_PATH}/#frequently-asked-questions` },
          { text: "Отзывы", link: `${BASE_PATH}/#what-customers-are-saying` },
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/guide/`]: { base: `${BASE_PATH}/guide/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Настройки конфиденциальности</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">Политика конфиденциальности</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">Правовые нормы для ИИ-сервисов</a>`,
    },

    localization: {
      placeholder4SearchInput: "Спросите что угодно...",
      placeholder4ChatFooter: "Спросите что угодно...",
      placeholder4ChatList: "Введите тему чата...",
      buttonLabel4NavButton: "Мгновенный чат с экспертом",
    },
    contact_form: {
      name: "Имя *",
      namePlaceholder: "ваше имя",
      email: "Email *",
      emailPlaceholder: "ваш email адрес",
      phone: "Корпоративный сайт *",
      phonePlaceholder: "например, https://mind.com",
      phoneError: "Пожалуйста, введите номер телефона",
      category: "Пожалуйста, расскажите, чем мы можем помочь *",
      categoryPlaceholder: "выберите тип услуги",
      message: "Обсудим ваши цели (необязательно)",
      messagePlaceholder: "Пожалуйста, предоставьте дополнительные детали (необязательно)",
      submit: "Отправить запрос",
      sending: "Отправка...",
      successTitle: "Спасибо!",
      successMessage: "Мы очень ценим ваш интерес! Наша команда свяжется с вами в ближайшее время для обсуждения ваших потребностей.",
      defaultCategories: [
        "Меня интересует синхронный голосовой перевод",
        "Меня интересует ИИ-ассистент для встреч",
        "Меня интересует региональная конфиденциальность и контроль данных",
        "Другое / Не указано",
      ],

      defaultButtonText: "Отправить нам сообщение",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Введение",
      collapsed: false,
      items: [
        { text: "Что такое InterMIND?", link: "what-is-intermind" },
        { text: "Как это работает", link: "how-it-works" },
        { text: "Региональная защита данных", link: "privacy-architecture" },
        { text: "Варианты использования", link: "use-cases" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "О нас", link: "/about" },
    { text: "Контакты", link: "/contacts" },
  ]
}