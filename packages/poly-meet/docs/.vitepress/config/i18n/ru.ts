import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ru"

export const ru = defineConfig({
  description: "Экспертные услуги по регистрации компаний в ОАЭ и поддержке. Организация компании, банковские услуги, налоги, юридические вопросы и решения по визам. Воплощаем ваши бизнес-мечты в реальность!",
  head: [
    ["meta", { property: "og:title", content: "Экспертные услуги по регистрации компаний в ОАЭ и поддержке. Организация компании, банковские услуги, налоги, юридические вопросы и решения по визам." }],
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
      // [`${BASE_PATH}/contact-us/`]: { base: `${BASE_PATH}/contact-us/`, items: sidebarContactUs() },
    },

    footer: {
      message: `©Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Настройки конфиденциальности</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">Политика конфиденциальности</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">Юридические регулирования для AI-сервисов</a>`,
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
      category: "Как мы можем вам помочь? *",
      categoryPlaceholder: "выберите тип услуги",
      message: "Давайте обсудим ваши цели (необязательно)",
      messagePlaceholder: "Пожалуйста, поделитесь деталями вашего запроса, чтобы мы могли подготовить наилучшее решение для ваших нужд",
      submit: "Отправить запрос",
      sending: "Отправка...",
      successTitle: "Спасибо!",
      successMessage: "Мы высоко ценим ваш интерес! Наша команда свяжется с вами в ближайшее время, чтобы обсудить ваши потребности.",
      defaultCategories: [
        "Регистрация новой компании",
        "План расширения (например, новое отделение или франшиза)",
        "Перемещение компании",
        "Golden Visa",
        "Виза только для целей визы",
        "Открытие банковских счетов",
        "Другие услуги",
      ],
      defaultButtonText: "Отправьте нам сообщение",
      // defaultButtonText: "Получите бесплатную консультацию",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Обзор бизнеса в ОАЭ",
      // collapsed: false,
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
      text: "Корпоративные структуры ОАЭ",
      collapsed: false,
      items: [
        { text: "Этапы регистрации компании", link: "company-registration/insights/incorporation-steps" },
        { text: "Свободные экономические зоны ОАЭ", link: "company-registration/free-zones" },
        { text: "Основная территория ОАЭ", link: "company-registration/mainland" },
      ],
    },
    {
      text: "Гарантированное соответствие бизнеса требованиям ОАЭ",
      collapsed: false,
      items: [
        { text: "Гарантированное одобрение корпоративных банковских счетов", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "Банковские счета для бизнеса с высокими рисками", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "Поддержание соответствия бизнеса требованиям и его защита", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "Юридические, бухгалтерские и налоговые вопросы",
      collapsed: false,
      items: [
        { text: "Учет и налоговые вопросы", link: "company-registration/accounting-legal" },
        { text: "Реестр UBO", link: "company-registration/ubo" },
      ],
    },
    {
      text: "Сравнения",
      collapsed: false,
      items: [
        { text: "Основная территория против свободных зон", link: "comparison/mainland-vs-free-zones" },
        { text: "Сравнение юридических лиц ОАЭ", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "О нас", link: "about" },
    { text: "Контакты", link: "contacts" },
    { text: "Политика конфиденциальности", link: "Privacy-Policy" },
    { text: "Юридические регулирования для AI-сервисов", link: "Legal-Regulations-for-AI-Services" },
  ]
}

// function sidebarContactUs(): DefaultTheme.SidebarItem[] {
//   return [{ text: "Контакты", link: `contacts` }]
// }