import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/fa"

export const fa = defineConfig({
  description: "خدمات تخصصی تشکیل و پشتیبانی شرکت در امارات. راه‌حل‌های ثبت شرکت، بانکداری، مالیات، حقوقی و ویزا. تحقق رویاهای تجاری شما!",
  head: [["meta", { property: "og:title", content: "خدمات تخصصی تشکیل و پشتیبانی شرکت در امارات. راه‌حل‌های ثبت شرکت، بانکداری، مالیات، حقوقی و ویزا." }]],

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
      [`${BASE_PATH}/contact-us/`]: { base: `${BASE_PATH}/contact-us/`, items: sidebarContactUs() },
    },

    footer: {
      message: '©Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">تنظیمات حریم خصوصی</a>',
    },

    contact_form: {
      name: "نام *",
      namePlaceholder: "نام شما",
      email: "ایمیل *",
      emailPlaceholder: "آدرس ایمیل شما",
      phone: "تلفن *",
      phonePlaceholder: "مثال: +1 1234567890 یا (1) 123 456-7890",
      phoneError: "لطفاً شماره تلفن را وارد کنید",
      category: "چگونه می‌توانیم کمک کنیم؟ *",
      categoryPlaceholder: "نوع خدمات را انتخاب کنید",
      message: "اهداف خود را با ما در میان بگذارید (اختیاری)",
      messagePlaceholder: "پروژه یا نیازمندی‌های خود را توضیح دهید",
      submit: "ارسال درخواست",
      sending: "در حال ارسال...",
      successTitle: "متشکریم!",
      successMessage: "از علاقه شما بسیار سپاسگزاریم! تیم ما به زودی برای بررسی نیازهای شما تماس خواهد گرفت.",
      defaultCategories: ["ثبت شرکت", "افتتاح حساب بانکی", "EID و Golden Visa", "سایر خدمات"],
      defaultButtonText: "دریافت مشاوره رایگان",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "خلاصه کسب و کار امارات",
      collapsed: false,
      items: [
        { text: "ثبت شرکت", link: "company-registration/overview" },
        { text: "مزایا و معایب", link: "company-registration/benefits-problems" },
        { text: "راه‌حل‌های بانکداری شرکتی", link: "offer/banking/" },
        { text: "Golden Visa", link: "offer/golden-visa/" },
        { text: "ویزا و EID", link: "company-registration/employment-visas" },
        { text: "هزینه‌ها و زمان‌بندی", link: "company-registration/fees-timelines" },
      ],
    },
    {
      text: "ساختارهای شرکتی امارات",
      collapsed: true,
      items: [
        { text: "مراحل ثبت شرکت", link: "company-registration/insights/incorporation-steps" },
        { text: "مناطق آزاد امارات", link: "company-registration/free-zones" },
        { text: "سرزمین اصلی امارات", link: "company-registration/mainland" },
      ],
    },
    {
      text: "تضمین انطباق کسب و کار در امارات",
      collapsed: true,
      items: [
        { text: "تضمین تأیید حساب بانکی شرکتی", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "حساب‌های بانکی برای کسب و کارهای پرریسک", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "حفظ انطباق و محافظت از کسب و کار شما", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "حقوقی، حسابداری و مالیات",
      collapsed: true,
      items: [
        { text: "ملاحظات حسابداری و مالیاتی", link: "company-registration/accounting-legal" },
        { text: "ثبت UBO", link: "company-registration/ubo" },
      ],
    },
    {
      text: "مقایسه‌ها",
      collapsed: true,
      items: [
        { text: "مقایسه Mainland و Free Zone", link: "comparison/mainland-vs-free-zones" },
        { text: "مقایسه انواع شرکت‌ها در امارات", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [{ text: "درباره ما", link: `about` }]
}

function sidebarContactUs(): DefaultTheme.SidebarItem[] {
  return [{ text: "تماس با ما", link: `contacts` }]
}
