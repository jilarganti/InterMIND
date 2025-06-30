import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ru"

export const ru = defineConfig({
  description: "InterMIND обеспечивает перевод речи в реальном времени для видеозвонков — мгновенно устраняя языковые барьеры. Разработано командой mind.com.",
  head: [
    [
      "meta",
      {
        name: "description",
        content: "InterMIND обеспечивает перевод речи в реальном времени для видеозвонков — мгновенно устраняя языковые барьеры. Разработано командой mind.com.",
      },
    ],
    ["meta", { property: "og:title", content: "InterMIND | Перевод речи в реальном времени для глобальных команд" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "InterMIND предлагает мгновенный перевод речи в видеозвонках — четкое многоязычное общение без барьеров. Разработано командой mind.com.",
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
      // {
      //   text: "Компания",
      //   activeMatch: `${BASE_PATH}/company/`,
      //   link: `${BASE_PATH}/company/about`,
      // },
      {
        text: "Цены",
        // activeMatch: `${BASE_PATH}/company/`,
        link: `${BASE_PATH}/#Pricing`,
      },
      {
        text: "Ресурсы",
        activeMatch: `${BASE_PATH}/product/`,
        // items: [
        //   {
        //     text: "ИЗУЧИТЬ",
        items: [
          // { text: "Цены", link: `${BASE_PATH}/#Pricing` },
          { text: "FAQ", link: `${BASE_PATH}/#FAQ` },
          { text: "Отзывы", link: `${BASE_PATH}/#Testimonials` },
          // { text: "Команда", link: `${BASE_PATH}/resources/team` },
          // { text: "Медиа-кит", link: `${BASE_PATH}/resources/media-kit` },
        ],
        //   },
        // ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/product/`]: { base: `${BASE_PATH}/product/`, items: sidebarProduct() },
      // [`${BASE_PATH}/company/`]: { base: `${BASE_PATH}/company/`, items: sidebarCompany() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarResources() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Настройки конфиденциальности</a> | <a href="${BASE_PATH}/resources/company/Privacy-Policy">Политика конфиденциальности</a> | <a href="${BASE_PATH}/resources/company/Legal-Regulations-for-AI-Services">Правовые нормы для ИИ-сервисов</a> | <a href="https://status.mind.com/">Статус сервиса</a>`,
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
      categoryPlaceholder: "Выберите наиболее важное",
      message: "Давайте обсудим ваши цели (необязательно)",
      messagePlaceholder: "Пожалуйста, предоставьте любые дополнительные детали (необязательно)",
      submit: "Отправить запрос",
      sending: "Отправка...",
      successTitle: "Спасибо!",
      successMessage: "Мы получили ваше сообщение — наша команда свяжется с вами в ближайшее время.",
      defaultCategories: [
        "Устранить языковые барьеры на встречах",
        "Сделать встречи доступными для поиска и действий",
        "Обеспечить соответствие требованиям и резидентность данных (ЕС / США / Азия)",
        "Просто изучаю / Другое",
      ],

      defaultButtonText: "Отправьте нам сообщение",
      // defaultButtonText: "Получить бесплатную консультацию",
    },
  } as DefaultTheme.Config,
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
        { text: "ИИ-функции", link: "guide/ai-features" },
        { text: "История встреч", link: "guide/meeting-history" },
        { text: "FAQ", link: "guide/faq" },
        { text: "Устранение неполадок", link: "guide/troubleshooting" },
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
        // { text: "Как это работает", link: "overview/how-it-works" },
      ],
    },
    {
      text: "РЕСУРСЫ",
      collapsed: false,
      items: [
        { text: "Брендовые материалы", link: "/media-kit" },
        // { text: "Управление аккаунтом", link: "guide/account-management" },
      ],
    },
    {
      text: "КОМПАНИЯ",
      collapsed: false,
      items: [
        { text: "О нас", link: "/company/about" },
        { text: "Команда", link: "/company/team" },
        { text: "Контакты", link: "/company/contacts" },
      ],
    },
  ]
}

// function sidebarResources(): DefaultTheme.SidebarItem[] {
//   return [
//     { text: "О нас", link: "/about" },
//     { text: "Контакты", link: "/contacts" },
//     { text: "Получить поддержку", link: "/help" },
//     { text: "Брендовые материалы", link: "/media-kit" },
//   ]
// }