import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/uk"

export const uk = defineConfig({
  description: "Експертні послуги з реєстрації та підтримки компаній в ОАЕ. Створення компаній, банківські послуги, податкові, юридичні рішення та візова підтримка. Втілюємо ваші бізнес-мрії в реальність!",
  head: [
    ["meta", { property: "og:title", content: "Експертні послуги з реєстрації та підтримки компаній в ОАЕ. Створення компаній, банківські послуги, податкові, юридичні рішення та візова підтримка." }],
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
      message: `©Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Налаштування конфіденційності</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">Політика конфіденційності</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">Правові норми щодо послуг ШІ</a>`,
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
      messagePlaceholder: "опишіть ваш проект або вимоги",
      submit: "Надіслати запит",
      sending: "Надсилання...",
      successTitle: "Дякуємо!",
      successMessage: "Ми дуже цінуємо ваш інтерес! Наша команда незабаром зв'яжеться з вами для обговорення ваших потреб.",
      defaultCategories: ["Реєстрація компанії", "Відкриття банківських рахунків", "EID і Golden Visa", "Інші послуги"],
      defaultButtonText: "Отримати безкоштовну консультацію",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Огляд бізнесу в ОАЕ",
      collapsed: false,
      items: [
        { text: "Реєстрація компанії", link: "company-registration/overview" },
        { text: "Переваги та недоліки", link: "company-registration/benefits-problems" },
        { text: "Корпоративні банківські рішення", link: "offer/banking/" },
        { text: "Golden Visa", link: "offer/golden-visa/" },
        { text: "Візи та EID", link: "company-registration/employment-visas" },
        { text: "Вартість та терміни", link: "company-registration/fees-timelines" },
        { text: "Оплата тільки після успіху", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "Корпоративні структури ОАЕ",
      collapsed: true,
      items: [
        { text: "Етапи реєстрації компанії", link: "company-registration/insights/incorporation-steps" },
        { text: "Free zones ОАЕ", link: "company-registration/free-zones" },
        { text: "Mainland ОАЕ", link: "company-registration/mainland" },
      ],
    },
    {
      text: "Гарантована відповідність бізнесу в ОАЕ",
      collapsed: true,
      items: [
        { text: "Гарантоване схвалення корпоративних банківських рахунків", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "Банківські рахунки для високоризикового бізнесу", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "Підтримка відповідності та захист вашого бізнесу", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "Юридичні, бухгалтерські та податкові послуги",
      collapsed: true,
      items: [
        { text: "Бухгалтерські та податкові аспекти", link: "company-registration/accounting-legal" },
        { text: "Реєстр UBO", link: "company-registration/ubo" },
      ],
    },
    {
      text: "Порівняння",
      collapsed: true,
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
    { text: "Політика конфіденційності", link: "Privacy-Policy" },
    { text: "Правові норми щодо послуг ШІ", link: "Legal-Regulations-for-AI-Services" },
  ]
}