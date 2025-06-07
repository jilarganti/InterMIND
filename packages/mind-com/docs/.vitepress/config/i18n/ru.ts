import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ru"

export const ru = defineConfig({
  description:
    "InterMIND добавляет синхронный перевод речи в каждый видеозвонок, чтобы международные команды никогда не теряли сделки, время или ясность из-за языковых барьеров.",
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
          { text: "FAQ", link: `${BASE_PATH}/#FAQ` },
          { text: "Отзывы", link: `${BASE_PATH}/#Testimonials` },
          { text: "Команда", link: `${BASE_PATH}/resources/team` },
          { text: "Медиа-кит", link: `${BASE_PATH}/resources/media-kit` },
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/product/`]: { base: `${BASE_PATH}/product/`, items: sidebarProduct() },
      [`${BASE_PATH}/company/`]: { base: `${BASE_PATH}/company/`, items: sidebarCompany() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarResources() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Настройки конфиденциальности</a> | <a href="${BASE_PATH}/company/Privacy-Policy">Политика конфиденциальности</a> | <a href="${BASE_PATH}/company/Legal-Regulations-for-AI-Services">Правовые нормы для AI-сервисов</a>`,
    },

    localization: {
      placeholder4SearchInput: "Спросите что угодно...",
      placeholder4ChatFooter: "Спросите что угодно...",
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
      category: "Пожалуйста, расскажите, чем мы можем помочь *",
      categoryPlaceholder: "выберите тип услуги",
      message: "Давайте обсудим ваши цели (необязательно)",
      messagePlaceholder: "Пожалуйста, предоставьте дополнительные детали (необязательно)",
      submit: "Отправить запрос",
      sending: "Отправка...",
      successTitle: "Спасибо!",
      successMessage: "Мы очень ценим ваш интерес! Наша команда свяжется с вами в ближайшее время для обсуждения ваших потребностей.",
      defaultCategories: [
        "Меня интересует синхронный перевод речи",
        "Меня интересует AI-ассистент для встреч",
        "Меня интересует региональный контроль конфиденциальности и данных",
        "Другое / Не указано",
      ],

      defaultButtonText: "Отправить сообщение",
    },
  },
})

function sidebarProduct(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Обзор",
      collapsed: false,
      items: [
        { text: "Что такое InterMIND?", link: "overview/what-is-intermind" },
        { text: "Как это работает", link: "overview/how-it-works" },
        { text: "Платформа видеовстреч", link: "overview/video-meeting-platform" },
        { text: "Региональная защита данных", link: "overview/privacy-architecture" },
        { text: "Приоритетные рынки", link: "overview/markets" },
      ],
    },
    {
      text: "Руководство",
      collapsed: false,
      items: [
        { text: "Начало работы", link: "guide/getting-started" },
        { text: "Управление аккаунтом", link: "guide/account-management" },
        { text: "Создание встреч", link: "guide/creating-meetings" },
        { text: "Интерфейс встречи", link: "guide/meeting-interface" },
        { text: "Роли пользователей", link: "guide/user-roles" },
        { text: "AI-функции", link: "guide/ai-features" },
        { text: "История встреч", link: "guide/meeting-history" },
        { text: "FAQ", link: "guide/faq" },
        { text: "Устранение неполадок", link: "guide/troubleshooting" },
      ],
    },
  ]
}

function sidebarCompany(): DefaultTheme.SidebarItem[] {
  return [
    { text: "О нас", link: "/about" },
    { text: "Контакты", link: "/contacts" },
  ]
}

function sidebarResources(): DefaultTheme.SidebarItem[] {
  return [
    { text: "Команда", link: "/team" },
    { text: "Медиа-кит", link: "/media-kit" },
  ]
}