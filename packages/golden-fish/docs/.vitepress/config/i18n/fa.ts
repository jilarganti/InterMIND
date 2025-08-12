import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/fa"

export const fa = defineConfig({
  description:
    "خدمات تخصصی تشکیل شرکت در امارات متحده عربی و پشتیبانی. راه‌اندازی شرکت، بانکداری، مالیات، حقوقی و راه‌حل‌های ویزا. رویاهای تجاری شما را به واقعیت تبدیل می‌کنیم!",
  head: [
    [
      "meta",
      { property: "og:title", content: "خدمات تخصصی تشکیل شرکت در امارات متحده عربی و پشتیبانی. راه‌اندازی شرکت، بانکداری، مالیات، حقوقی و راه‌حل‌های ویزا." },
    ],
  ],

  themeConfig: {
    nav: [
      {
        text: "خدمات",
        activeMatch: `${BASE_PATH}/company-registration/`,
        items: [
          { text: "ثبت شرکت", link: `${BASE_PATH}/uae-business/company-registration/overview` },
          { text: "راه‌حل‌های بانکی", link: `${BASE_PATH}/uae-business/company-registration/banking` },
          { text: "مهاجرت", link: `${BASE_PATH}/uae-business/company-registration/employment-visas` },
        ],
      },
      {
        text: "منابع",
        items: [{ text: "درباره ما", link: `${BASE_PATH}/resources/about` }],
      },
      { text: "تماس", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
      // [`${BASE_PATH}/contact-us/`]: { base: `${BASE_PATH}/contact-us/`, items: sidebarContactUs() },
    },

    footer: {
      message: `© Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">تنظیمات حریم خصوصی</a> | <a href="${BASE_PATH}/resources/TERMS-CONDITIONS">شرایط و ضوابط</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">سیاست حریم خصوصی</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">مقررات حقوقی برای خدمات هوش مصنوعی</a>`,
    },

    localization: {
      placeholder4SearchInput: "هر چیزی بپرسید...",
      placeholder4ChatFooter: "هر چیزی بپرسید...",
      placeholder4ChatList: "موضوع گفتگو را وارد کنید...",
      buttonLabel4NavButton: "گفتگوی فوری با متخصص",
    },
    contact_form: {
      name: "نام *",
      namePlaceholder: "نام شما",
      email: "ایمیل *",
      emailPlaceholder: "آدرس ایمیل شما",
      phone: "تلفن *",
      phonePlaceholder: "مثال: +1 1234567890 یا (1) 123 456-7890",
      phoneError: "لطفاً شماره تلفن را وارد کنید",
      category: "چگونه می‌توانیم به شما کمک کنیم؟ *",
      categoryPlaceholder: "نوع خدمات را انتخاب کنید",
      message: "بیایید در مورد اهداف شما صحبت کنیم (اختیاری)",
      messagePlaceholder: "لطفاً جزئیات درخواست خود را به اشتراک بگذارید تا بتوانیم بهترین راه‌حل را برای نیازهای شما آماده کنیم",
      submit: "ارسال درخواست",
      sending: "در حال ارسال...",
      successTitle: "متشکریم!",
      successMessage: "ما از علاقه شما بسیار قدردانی می‌کنیم! تیم ما به زودی با شما تماس خواهد گرفت تا در مورد نیازهای شما صحبت کند.",
      defaultCategories: [
        "تشکیل شرکت جدید",
        "طرح توسعه (مثل شعبه جدید یا فرانچایز)",
        "جابجایی شرکت",
        "Golden Visa",
        "فقط برای اهداف ویزا",
        "افتتاح حساب بانکی",
        "سایر خدمات",
      ],
      defaultButtonText: "پیام برای ما ارسال کنید",
      // defaultButtonText: "مشاوره رایگان دریافت کنید",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "خلاصه کسب و کار امارات",
      // collapsed: false,
      items: [
        { text: "ثبت شرکت", link: "company-registration/overview" },
        { text: "مزایا و معایب", link: "company-registration/benefits-problems" },
        { text: "راه‌حل‌های بانکداری شرکتی", link: "company-registration/banking" },
        { text: "Golden Visa", link: "company-registration//golden-visa" },
        { text: "ویزا و EID", link: "company-registration/employment-visas" },
        { text: "هزینه‌ها و زمان‌بندی", link: "company-registration/fees-timelines" },
        { text: "فقط پس از موفقیت پرداخت کنید", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "ساختارهای شرکتی امارات",
      collapsed: false,
      items: [
        { text: "مراحل ثبت شرکت", link: "company-registration/insights/incorporation-steps" },
        { text: "مناطق آزاد امارات", link: "company-registration/free-zones" },
        { text: "Mainland امارات", link: "company-registration/mainland" },
      ],
    },
    {
      text: "انطباق کسب و کار امارات تضمین شده",
      collapsed: false,
      items: [
        { text: "تأیید تضمینی حساب بانکی شرکتی", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "حساب بانکی برای کسب و کار پرخطر", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "کسب و کار خود را منطبق و محافظت شده نگه دارید", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "حقوقی، حسابداری و مالیات",
      collapsed: false,
      items: [
        { text: "ملاحظات حسابداری و مالیاتی", link: "company-registration/accounting-legal" },
        { text: "ثبت UBO", link: "company-registration/ubo" },
      ],
    },
    {
      text: "مقایسه‌ها",
      collapsed: false,
      items: [
        { text: "Mainland در مقابل مناطق آزاد", link: "comparison/mainland-vs-free-zones" },
        { text: "مقایسه نهادهای امارات", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "درباره ما", link: "about" },
    { text: "تماس", link: "contacts" },
    { text: "شرایط و ضوابط", link: "TERMS-CONDITIONS" },
    { text: "سیاست حریم خصوصی", link: "Privacy-Policy" },
    { text: "مقررات حقوقی برای خدمات هوش مصنوعی", link: "Legal-Regulations-for-AI-Services" },
  ]
}

// function sidebarContactUs(): DefaultTheme.SidebarItem[] {
//   return [{ text: "تماس", link: `contacts` }]
// }
