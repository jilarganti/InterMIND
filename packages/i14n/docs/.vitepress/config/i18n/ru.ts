import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ru"

export const ru = defineConfig({
  description: "Профессиональные услуги по регистрации и сопровождению компаний в ОАЭ. Создание компаний, банковское обслуживание, налоговые, юридические и визовые решения. Воплощаем ваши бизнес-мечты в реальность!",
  head: [
    ["meta", { property: "og:title", content: "Профессиональные услуги по регистрации и сопровождению компаний в ОАЭ. Создание компаний, банковское обслуживание, налоговые, юридические и визовые решения." }],
  ],

  themeConfig: {
    nav: [
      {
        text: "Руководство",
        activeMatch: `${BASE_PATH}/guide/`,
        items: [{ text: "Введение", link: `${BASE_PATH}/guide/what-is-intermind` }],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/guide/`]: { base: `${BASE_PATH}/guide/`, items: sidebarServices() },
    },

    footer: {
      message: `© MindMeeting OÜ, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Настройки конфиденциальности</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">Политика конфиденциальности</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">Правовые нормы для AI-сервисов</a>`,
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
      phone: "Телефон *",
      phonePlaceholder: "например, +1 1234567890 или (1) 123 456-7890",
      phoneError: "Пожалуйста, введите номер телефона",
      category: "Как мы можем помочь? *",
      categoryPlaceholder: "выберите тип услуги",
      message: "Обсудим ваши цели (необязательно)",
      messagePlaceholder: "Пожалуйста, поделитесь деталями вашего запроса, чтобы мы могли подготовить лучшее решение для ваших потребностей",
      submit: "Отправить запрос",
      sending: "Отправка...",
      successTitle: "Спасибо!",
      successMessage: "Мы очень ценим ваш интерес! Наша команда свяжется с вами в ближайшее время для обсуждения ваших потребностей.",
      defaultCategories: [
        "Регистрация новой компании",
        "План расширения (например, новый филиал или франшиза)",
        "Релокация компании",
        "Golden Visa",
        "Только визовые цели",
        "Открытие банковских счетов",
        "Другие услуги",
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
        { text: "Что такое InterMind?", link: "what-is-intermind" },
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