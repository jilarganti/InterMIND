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
        text: "Цены",
        link: `${BASE_PATH}/#Pricing`,
      },
      {
        text: "Ресурсы",
        activeMatch: `${BASE_PATH}/product/`,
        items: [
          { text: "FAQ", link: `${BASE_PATH}/#FAQ` },
          { text: "Отзывы", link: `${BASE_PATH}/#Testimonials` },
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
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Настройки конфиденциальности</a> | <a href="${BASE_PATH}/company/Privacy-Policy">Политика конфиденциальности</a> | <a href="${BASE_PATH}/company/Legal-Regulations-for-AI-Services">Правовые нормы для AI-сервисов</a> | <a href="https://status.mind.com/">Статус сервиса</a>`,
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
      webSite: "Сайт компании *",
      webSitePlaceholder: "например, https://companyname.com",
      webSiteError: "Пожалуйста, введите адрес сайта",
      category: "Какова ваша основная цель? *",
      categoryPlaceholder: "Выберите, что важнее всего",
      message: "Обсудим ваши цели (необязательно)",
      messagePlaceholder: "Укажите дополнительные детали (необязательно)",
      submit: "Отправить запрос",
      sending: "Отправка...",
      successTitle: "Спасибо!",
      successMessage: "Мы получили ваше сообщение — наша команда скоро свяжется с вами.",
      defaultCategories: [
        "Устранить языковые барьеры на встречах",
        "Сделать встречи доступными для поиска и действий",
        "Обеспечить соответствие требованиям и локализацию данных (ЕС / США / Азия)",
        "Просто изучаю / Другое",
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
        { text: "Региональная конфиденциальность данных", link: "overview/privacy-architecture" },
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
        { text: "Функции AI", link: "guide/ai-features" },
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
  return [{ text: "Медиа-кит", link: "/media-kit" }]
}