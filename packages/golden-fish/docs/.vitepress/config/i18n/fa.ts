import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/fa"

export const fa = defineConfig({
  description: "خدمات تخصصی تأسیس و پشتیبانی شرکت در امارات. راه‌حل‌های ثبت شرکت، بانکداری، مالیات، حقوقی و ویزا. تحقق رویاهای تجاری شما!",
  head: [
    ["meta", { property: "og:title", content: "خدمات تخصصی تأسیس و پشتیبانی شرکت در امارات. راه‌حل‌های ثبت شرکت، بانکداری، مالیات، حقوقی و ویزا." }],
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
      { text: "تماس با ما", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
    },

    footer: {
      message: `© Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">تنظیمات حریم خصوصی</a> | <a href="${BASE_PATH}/resources/TERMS-CONDITIONS">شرایط و ضوابط</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">سیاست حریم خصوصی</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">مقررات قانونی خدمات هوش مصنوعی</a>`,
    },

    localization: {
      placeholder4SearchInput: "هر سوالی دارید بپرسید...",
      placeholder4ChatFooter: "هر سوالی دارید بپرسید...",
      placeholder4ChatList: "موضوع گفتگو را وارد کنید...",
      buttonLabel4NavButton: "گفتگوی فوری با کارشناس",
    },
    contact_form: {
      name: "نام *",
      namePlaceholder: "نام شما",
      email: "ایمیل *",
      emailPlaceholder: "آدرس ایمیل شما",
      phone: "تلفن *",
      phonePlaceholder: "مثال: ۹۸۹۱۲۳۴۵۶۷۸۹+",
      phoneError: "لطفاً شماره تلفن را وارد کنید",
      category: "چگونه می‌توانیم کمک کنیم؟ *",
      categoryPlaceholder: "نوع خدمات را انتخاب کنید",
      message: "اهداف خود را با ما در میان بگذارید (اختیاری)",
      messagePlaceholder: "لطفاً جزئیات درخواست خود را به اشتراک بگذارید تا بتوانیم بهترین راه‌حل را برای نیازهای شما آماده کنیم",
      submit: "ارسال درخواست",
      sending: "در حال ارسال...",
      successTitle: "متشکریم!",
      successMessage: "از علاقه شما بسیار سپاسگزاریم! تیم ما به زودی برای بررسی نیازهای شما تماس خواهد گرفت.",
      defaultCategories: [
        "تأسیس شرکت جدید",
        "برنامه توسعه (شعبه یا فرانچایز جدید)",
        "انتقال شرکت",
        "Golden Visa",
        "فقط برای اهداف ویزا",
        "افتتاح حساب بانکی",
        "سایر خدمات",
      ],
      defaultButtonText: "برای ما پیام بفرستید",
    },
  },
})

[Rest of the code with function definitions remains unchanged as it contains technical terms and structure]