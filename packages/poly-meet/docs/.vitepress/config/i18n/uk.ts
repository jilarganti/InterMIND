import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/uk"

export const uk = defineConfig({
  description: "Експертні послуги з організації компаній в ОАЕ та підтримки. Реєстрація компанії, банківські рішення, податки, юридичні послуги та візова підтримка. Реалізуємо ваші бізнес-мрії!",
  head: [
    ["meta", { property: "og:title", content: "Експертні послуги з організації компаній в ОАЕ та підтримки. Реєстрація компанії, банківські рішення, податки, юридичні послуги та візова підтримка." }],
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
      // [`${BASE_PATH}/contact-us/`]: { base: `${BASE_PATH}/contact-us/`, items: sidebarContactUs() },
    },

    footer: {
      message: `©Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Налаштування конфіденційності</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">Політика конфіденційності</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">Юридичні регуляції для AI послуг</a>`,
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
      email: "Електронна пошта *",
      emailPlaceholder: "ваша електронна адреса",
      phone: "Телефон *",
      phonePlaceholder: "наприклад, +1 1234567890 або (1) 123 456-7890",
      phoneError: "Будь ласка, введіть номер телефону",
      category: "Як ми можемо вам допомогти? *",
      categoryPlaceholder: "виберіть тип послуги",
      message: "Обговоримо ваші цілі (необов'язково)",
      messagePlaceholder: "Будь ласка, поділіться деталями вашого запиту, щоб ми могли підготувати найкраще рішення для ваших потреб",
      submit: "Надіслати запит",
      sending: "Відправлення...",
      successTitle: "Дякуємо!",
      successMessage: "Ми високо цінуємо ваш інтерес! Наша команда зв'яжеться з вами найближчим часом, щоб обговорити ваші потреби.",
      defaultCategories: [
        "Створення нової компанії",
        "План розширення (наприклад, новий філіал або франшиза)",
        "Перенесення компанії",
        "Golden Visa",
        "Віза тільки для візових цілей",
        "Відкриття банківських рахунків",
        "Інші послуги",
      ],
      defaultButtonText: "Напишіть нам",
      // defaultButtonText: "Отримайте безкоштовну консультацію",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Огляд бізнесу в ОАЕ",
      // collapsed: false,
      items: [
        { text: "Реєстрація компанії", link: "company-registration/overview" },
        { text: "Переваги та недоліки", link: "company-registration/benefits-problems" },
        { text: "Корпоративні банківські рішення", link: "company-registration/banking" },
        { text: "Golden Visa", link: "company-registration//golden-visa" },
        { text: "Візи та EID", link: "company-registration/employment-visas" },
        { text: "Вартість та терміни", link: "company-registration/fees-timelines" },
        { text: "Платіть тільки після успіху", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "Корпоративні структури ОАЕ",
      collapsed: false,
      items: [
        { text: "Етапи реєстрації компанії", link: "company-registration/insights/incorporation-steps" },
        { text: "Free Zone ОАЕ", link: "company-registration/free-zones" },
        { text: "Mainland ОАЕ", link: "company-registration/mainland" },
      ],
    },
    {
      text: "Гарантоване дотримання бізнесу в ОАЕ",
      collapsed: false,
      items: [
        { text: "Гарантоване схвалення корпоративних банківських рахунків", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "Банківські рахунки для бізнесу з високим ризиком", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "Забезпечте відповідність та захист вашого бізнесу", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "Юридичні, бухгалтерські та податкові питання",
      collapsed: false,
      items: [
        { text: "Бухгалтерський облік та податкові розгляди", link: "company-registration/accounting-legal" },
        { text: "Реєстр UBO", link: "company-registration/ubo" },
      ],
    },
    {
      text: "Порівняння",
      collapsed: false,
      items: [
        { text: "Mainland проти Free Zone", link: "comparison/mainland-vs-free-zones" },
        { text: "Порівняння юридичних осіб ОАЕ", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "Про нас", link: "about" },
    { text: "Контакти", link: "contacts" },
    { text: "Політика конфіденційності", link: "Privacy-Policy" },
    { text: "Юридичні регуляції для AI послуг", link: "Legal-Regulations-for-AI-Services" },
  ]
}

// function sidebarContactUs(): DefaultTheme.SidebarItem[] {
//   return [{ text: "Контакти", link: `contacts` }]
// }