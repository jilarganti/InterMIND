import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/fa"

export const fa = defineConfig({
  description: "خدمات حرفه‌ای تأسیس شرکت و پشتیبانی در امارات. راه‌اندازی شرکت، راهکارهای بانکی، مالیاتی، حقوقی و ویزا. تحقق رویاهای تجاری شما!",
  head: [
    ["meta", { property: "og:title", content: "خدمات حرفه‌ای تأسیس شرکت و پشتیبانی در امارات. راه‌اندازی شرکت، راهکارهای بانکی، مالیاتی، حقوقی و ویزا." }],
  ],

  themeConfig: {
    nav: [
      {
        text: "خدمات",
        activeMatch: `${BASE_PATH}/company-registration/`,
        items: [
          { text: "ثبت شرکت", link: `${BASE_PATH}/uae-business/company-registration/overview` },
          { text: "راهکارهای بانکی", link: `${BASE_PATH}/uae-business/company-registration/banking` },
          { text: "مهاجرت", link: `${BASE_PATH}/uae-business/company-registration/employment-visas` },
        ],
      },
      {
        text: "منابع",
        items: [{ text: "درباره ما", link: `${BASE_PATH}/resources/about` }],
      },
      { text: "تماس‌ها", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
      // [`${BASE_PATH}/contact-us/`]: { base: `${BASE_PATH}/contact-us/`, items: sidebarContactUs() },
    },

    footer: {
      message: `©Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">تنظیمات حریم خصوصی</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">سیاست حفظ حریم خصوصی</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">مقررات حقوقی برای خدمات هوش مصنوعی</a>`,
    },

    localization: {
      placeholder4SearchInput: "جستجوی سریع...",
    },
    contact_form: {
      name: "نام *",
      namePlaceholder: "نام شما",
      email: "ایمیل *",
      emailPlaceholder: "آدرس ایمیل شما",
      phone: "تلفن *",
      phonePlaceholder: "مثلاً، +1 1234567890 یا (1) 123 456-7890",
      phoneError: "لطفاً شماره تلفن را وارد کنید",
      category: "چگونه می‌توانیم به شما کمک کنیم؟ *",
      categoryPlaceholder: "نوع خدمت را انتخاب کنید",
      message: "اهداف خود را بحث کنیم (اختیاری)",
      messagePlaceholder: "لطفاً جزئیات استعلام خود را برای آماده‌سازی بهترین راهکار برای نیازهایتان به اشتراک بگذارید",
      submit: "ارسال درخواست",
      sending: "در حال ارسال...",
      successTitle: "متشکریم!",
      successMessage: "از علاقه شما بسیار سپاسگزاریم! تیم ما به زودی با شما تماس خواهد گرفت تا در مورد نیازهایتان بحث کند.",
      defaultCategories: [
        "تأسیس شرکت جدید",
        "طرح گسترش (مثلاً شعبه یا فرنچایز جدید)",
        "انتقال شرکت",
        "ویزای طلایی",
        "فقط برای اهداف ویزا",
        "افتتاح حساب‌های بانکی",
        "سایر خدمات",
      ],
      defaultButtonText: "پیامی برای ما ارسال کنید",
      // defaultButtonText: "مشاوره رایگان دریافت کنید",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "خلاصه تجارت در امارات",
      // collapsed: false,
      items: [
        { text: "ثبت شرکت", link: "company-registration/overview" },
        { text: "مزایا و معایب", link: "company-registration/benefits-problems" },
        { text: "راهکارهای بانکی شرکتی", link: "company-registration/banking" },
        { text: "ویزای طلایی", link: "company-registration//golden-visa" },
        { text: "ویزاها و EID", link: "company-registration/employment-visas" },
        { text: "هزینه‌ها و زمان‌بندی‌ها", link: "company-registration/fees-timelines" },
        { text: "پرداخت فقط پس از موفقیت", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "ساختارهای شرکتی در امارات",
      collapsed: false,
      items: [
        { text: "مراحل ثبت شرکت", link: "company-registration/insights/incorporation-steps" },
        { text: "مناطق آزاد امارات", link: "company-registration/free-zones" },
        { text: "سرزمین اصلی امارات", link: "company-registration/mainland" },
      ],
    },
    {
      text: "تضمین انطباق تجارت در امارات",
      collapsed: false,
      items: [
        { text: "تضمین تأیید حساب‌های بانکی شرکتی", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "حساب‌های بانکی برای کسب‌وکارهای پرخطر", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "حفظ انطباق و حمایت از کسب‌وکار شما", link: "company-registration/Protect-Your-Business" },
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
        { text: "مقایسه سرزمین اصلی با مناطق آزاد", link: "comparison/mainland-vs-free-zones" },
        { text: "مقایسه نهادهای امارات", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "درباره ما", link: "about" },
    { text: "تماس‌ها", link: "contacts" },
    { text: "سیاست حفظ حریم خصوصی", link: "Privacy-Policy" },
    { text: "مقررات حقوقی برای خدمات هوش مصنوعی", link: "Legal-Regulations-for-AI-Services" },
  ]
}

// function sidebarContactUs(): DefaultTheme.SidebarItem[] {
//   return [{ text: "تماس‌ها", link: `contacts` }]
// }