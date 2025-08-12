import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/uk"

export const uk = defineConfig({
  description:
    "Експертні послуги з реєстрації та підтримки компаній в ОАЕ. Створення компаній, банківські послуги, податкові, юридичні рішення та візова підтримка. Втілюємо ваші бізнес-мрії в реальність!",
  head: [
    [
      "meta",
      {
        property: "og:title",
        content:
          "Експертні послуги з реєстрації та підтримки компаній в ОАЕ. Створення компаній, банківські послуги, податкові, юридичні рішення та візова підтримка.",
      },
    ],
  ],

  themeConfig: {
    nav: [
      {
        text: "Послуги",
        activeMatch: `${BASE_PATH}/company-registration/`,
        items: [
          { text: "Реєстрація компанії", link: `${BASE_PATH}/uae-business/company-registration/overview` },
          { text: "Банківські рішення", link: `${BASE_PATH}/uae-business/company-registration/banking` },
          { text: "Міграція", link: `${BASE_PATH}/uae-business/company-registration/employment-visas` },
        ],
      },
      {
        text: "Ресурси",
        items: [{ text: "Про нас", link: `${BASE_PATH}/resources/about` }],
      },
      { text: "Контакти", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
    },

    footer: {
      message: `© Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Налаштування конфіденційності</a> | <a href="${BASE_PATH}/resources/TERMS-CONDITIONS">Умови використання</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">Політика конфіденційності</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">Правові норми для AI-послуг</a>`,
    },

    localization: {
      placeholder4SearchInput: "Запитайте що завгодно...",
      placeholder4ChatFooter: "Запитайте що завгодно...",
      placeholder4ChatList: "Введіть тему чату...",
      buttonLabel4NavButton: "Миттєвий чат з експертом",
    },
    contact_form: {
      name: "Ім'я *",
      namePlaceholder: "ваше ім'я",
      email: "Email *",
      emailPlaceholder: "ваша email адреса",
      phone: "Телефон *",
      phonePlaceholder: "напр., +1 1234567890 або (1) 123 456-7890",
      phoneError: "Будь ласка, введіть номер телефону",
      category: "Як ми можемо допомогти? *",
      categoryPlaceholder: "оберіть тип послуги",
      message: "Обговорімо ваші цілі (необов'язково)",
      messagePlaceholder: "Будь ласка, поділіться деталями вашого запиту, щоб ми могли підготувати найкраще рішення для ваших потреб",
      submit: "Надіслати запит",
      sending: "Надсилання...",
      successTitle: "Дякуємо!",
      successMessage: "Ми дуже цінуємо ваш інтерес! Наша команда зв'яжеться з вами найближчим часом для обговорення ваших потреб.",
      defaultCategories: [
        "Створення нової компанії",
        "План розширення (новий філіал або франшиза)",
        "Релокація компанії",
        "Golden Visa",
        "Тільки візові питання",
        "Відкриття банківських рахунків",
        "Інші послуги",
      ],
      defaultButtonText: "Надіслати повідомлення",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Огляд бізнесу в ОАЕ",
      items: [
        { text: "Реєстрація компанії", link: "company-registration/overview" },
        { text: "Переваги та недоліки", link: "company-registration/benefits-problems" },
        { text: "Корпоративні банківські рішення", link: "company-registration/banking" },
        { text: "Golden Visa", link: "company-registration//golden-visa" },
        { text: "Візи та EID", link: "company-registration/employment-visas" },
        { text: "Вартість та терміни", link: "company-registration/fees-timelines" },
        { text: "Оплата тільки після успіху", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "Корпоративні структури ОАЕ",
      collapsed: false,
      items: [
        { text: "Етапи реєстрації компанії", link: "company-registration/insights/incorporation-steps" },
        { text: "Free zones ОАЕ", link: "company-registration/free-zones" },
        { text: "Mainland ОАЕ", link: "company-registration/mainland" },
      ],
    },
    {
      text: "Гарантована відповідність бізнесу в ОАЕ",
      collapsed: false,
      items: [
        { text: "Гарантоване відкриття корпоративних банківських рахунків", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "Банківські рахунки для високоризикового бізнесу", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "Підтримка відповідності та захист вашого бізнесу", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "Юридичні, бухгалтерські та податкові послуги",
      collapsed: false,
      items: [
        { text: "Бухгалтерські та податкові аспекти", link: "company-registration/accounting-legal" },
        { text: "Реєстр UBO", link: "company-registration/ubo" },
      ],
    },
    {
      text: "Порівняння",
      collapsed: false,
      items: [
        { text: "Mainland проти free zones", link: "comparison/mainland-vs-free-zones" },
        { text: "Порівняння юридичних осіб ОАЕ", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "Про нас", link: "about" },
    { text: "Контакти", link: "contacts" },
    { text: "Умови використання", link: "TERMS-CONDITIONS" },
    { text: "Політика конфіденційності", link: "Privacy-Policy" },
    { text: "Правові норми для AI-послуг", link: "Legal-Regulations-for-AI-Services" },
  ]
}
