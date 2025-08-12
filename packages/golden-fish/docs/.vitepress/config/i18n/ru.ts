import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ru"

export const ru = defineConfig({
  description:
    "Экспертные услуги по созданию и поддержке компаний в ОАЭ. Регистрация компаний, банковские услуги, налоговые, юридические решения и визовая поддержка. Воплощаем ваши бизнес-мечты в реальность!",
  head: [
    [
      "meta",
      {
        property: "og:title",
        content:
          "Экспертные услуги по созданию и поддержке компаний в ОАЭ. Регистрация компаний, банковские услуги, налоговые, юридические решения и визовая поддержка.",
      },
    ],
  ],

  themeConfig: {
    nav: [
      {
        text: "Услуги",
        activeMatch: `${BASE_PATH}/company-registration/`,
        items: [
          { text: "Регистрация компании", link: `${BASE_PATH}/uae-business/company-registration/overview` },
          { text: "Банковские решения", link: `${BASE_PATH}/uae-business/company-registration/banking` },
          { text: "Миграция", link: `${BASE_PATH}/uae-business/company-registration/employment-visas` },
        ],
      },
      {
        text: "Ресурсы",
        items: [{ text: "О нас", link: `${BASE_PATH}/resources/about` }],
      },
      { text: "Контакты", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
    },

    footer: {
      message: `© Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Настройки конфиденциальности</a> | <a href="${BASE_PATH}/resources/TERMS-CONDITIONS">Условия использования</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">Политика конфиденциальности</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">Правовые нормы для AI-сервисов</a>`,
    },

    localization: {
      placeholder4SearchInput: "Задайте любой вопрос...",
      placeholder4ChatFooter: "Задайте любой вопрос...",
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
      messagePlaceholder: "Пожалуйста, поделитесь деталями вашего запроса, чтобы мы могли подготовить наилучшее решение для ваших потребностей",
      submit: "Отправить запрос",
      sending: "Отправка...",
      successTitle: "Спасибо!",
      successMessage: "Мы очень ценим ваш интерес! Наша команда свяжется с вами в ближайшее время для обсуждения ваших потребностей.",
      defaultCategories: [
        "Создание новой компании",
        "План расширения (новый филиал или франшиза)",
        "Релокация компании",
        "Golden Visa",
        "Только визовые цели",
        "Открытие банковских счетов",
        "Другие услуги",
      ],
      defaultButtonText: "Отправить сообщение",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Обзор бизнеса в ОАЭ",
      items: [
        { text: "Регистрация компании", link: "company-registration/overview" },
        { text: "Плюсы и минусы", link: "company-registration/benefits-problems" },
        { text: "Корпоративные банковские решения", link: "company-registration/banking" },
        { text: "Golden Visa", link: "company-registration//golden-visa" },
        { text: "Визы и EID", link: "company-registration/employment-visas" },
        { text: "Стоимость и сроки", link: "company-registration/fees-timelines" },
        { text: "Оплата только после успеха", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "Корпоративные структуры в ОАЭ",
      collapsed: false,
      items: [
        { text: "Этапы регистрации компании", link: "company-registration/insights/incorporation-steps" },
        { text: "Свободные зоны ОАЭ", link: "company-registration/free-zones" },
        { text: "Материковая часть ОАЭ", link: "company-registration/mainland" },
      ],
    },
    {
      text: "Гарантированное соответствие бизнеса в ОАЭ",
      collapsed: false,
      items: [
        { text: "Гарантированное открытие корпоративных банковских счетов", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "Банковские счета для высокорискового бизнеса", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "Поддержание соответствия и защита вашего бизнеса", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "Юридические, бухгалтерские и налоговые услуги",
      collapsed: false,
      items: [
        { text: "Бухгалтерские и налоговые аспекты", link: "company-registration/accounting-legal" },
        { text: "Реестр UBO", link: "company-registration/ubo" },
      ],
    },
    {
      text: "Сравнения",
      collapsed: false,
      items: [
        { text: "Mainland против free zones", link: "comparison/mainland-vs-free-zones" },
        { text: "Сравнение юридических лиц ОАЭ", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "О нас", link: "about" },
    { text: "Контакты", link: "contacts" },
    { text: "Условия использования", link: "TERMS-CONDITIONS" },
    { text: "Политика конфиденциальности", link: "Privacy-Policy" },
    { text: "Правовые нормы для AI-сервисов", link: "Legal-Regulations-for-AI-Services" },
  ]
}
