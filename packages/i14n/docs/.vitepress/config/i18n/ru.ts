import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ru"

export const ru = defineConfig({
  description: "Экспертные услуги по созданию и поддержке компаний в ОАЭ. Регистрация компаний, банковские услуги, налоговые, юридические решения и визовая поддержка. Воплощаем ваши бизнес-мечты в реальность!",
  head: [
    ["meta", { property: "og:title", content: "Экспертные услуги по созданию и поддержке компаний в ОАЭ. Регистрация компаний, банковские услуги, налоговые, юридические решения и визовая поддержка." }],
  ],

  themeConfig: {
    nav: [
      {
        text: "InterMind",
        activeMatch: `${BASE_PATH}/guide/`,
        items: [{ text: "Введение", link: `${BASE_PATH}/guide/what-is-intermind` }],
      },
      {
        text: "Mind",
        items: [
          { text: "О нас", link: `${BASE_PATH}/resources/about` },
          { text: "Контакты", link: `${BASE_PATH}/resources/contacts` },
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/guide/`]: { base: `${BASE_PATH}/guide/`, items: sidebarServices() },
      // [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Настройки конфиденциальности</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">Политика конфиденциальности</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">Правовые нормы для AI-сервисов</a>`,
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
      phonePlaceholder: "например, https://imind.com",
      phoneError: "Пожалуйста, введите номер телефона",
      category: "Пожалуйста, расскажите, чем мы можем помочь *",
      categoryPlaceholder: "выберите тип услуги",
      message: "Обсудим ваши цели (необязательно)",
      messagePlaceholder: "Пожалуйста, укажите дополнительные детали (необязательно)",
      submit: "Отправить запрос",
      sending: "Отправка...",
      successTitle: "Спасибо!",
      successMessage: "Мы очень ценим ваш интерес! Наша команда свяжется с вами в ближайшее время для обсуждения ваших потребностей.",
      defaultCategories: [
        "Меня интересует синхронный голосовой перевод",
        "Меня интересует AI-ассистент для встреч",
        "Меня интересует региональный контроль конфиденциальности и данных",
        "Другое / Не указано",
      ],

      defaultButtonText: "Отправить нам сообщение",
      // defaultButtonText: "Получить бесплатную консультацию",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Введение",
      collapsed: false,
      items: [
        { text: "Что такое iMind?", link: "what-is-imind" },
        { text: "Как это работает", link: "how-it-works" },
        { text: "Регионально-сегментированная архитектура конфиденциальности InterMind", link: "privacy-architecture" },
        { text: "Примеры использования", link: "use-cases" },
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