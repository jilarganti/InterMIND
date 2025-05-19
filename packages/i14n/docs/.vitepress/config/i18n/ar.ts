import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ar"

export const ar = defineConfig({
  description: "خدمات تأسيس الشركات المتخصصة في الإمارات وخدمات الدعم. حلول إنشاء الشركات والخدمات المصرفية والضرائب والقانون والتأشيرات. نحول أحلام أعمالك إلى حقيقة!",
  head: [
    ["meta", { property: "og:title", content: "خدمات تأسيس الشركات المتخصصة في الإمارات وخدمات الدعم. حلول إنشاء الشركات والخدمات المصرفية والضرائب والقانون والتأشيرات." }],
  ],

  themeConfig: {
    nav: [
      {
        text: "الدليل",
        activeMatch: `${BASE_PATH}/guide/`,
        items: [{ text: "مقدمة", link: `${BASE_PATH}/guide/what-is-imind` }],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/guide/`]: { base: `${BASE_PATH}/guide/`, items: sidebarServices() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">إعدادات الخصوصية</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">سياسة الخصوصية</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">اللوائح القانونية لخدمات الذكاء الاصطناعي</a>`,
    },

    localization: {
      placeholder4SearchInput: "اسأل أي شيء...",
      placeholder4ChatFooter: "اسأل أي شيء...",
      placeholder4ChatList: "أدخل موضوع المحادثة...",
      buttonLabel4NavButton: "محادثة فورية مع خبير",
    },
    contact_form: {
      name: "الاسم *",
      namePlaceholder: "اسمك",
      email: "البريد الإلكتروني *",
      emailPlaceholder: "عنوان بريدك الإلكتروني",
      phone: "موقع الشركة *",
      phonePlaceholder: "مثال: https://imind.com",
      phoneError: "يرجى إدخال رقم الهاتف",
      category: "يرجى إخبارنا كيف يمكننا المساعدة *",
      categoryPlaceholder: "اختر نوع الخدمة",
      message: "دعنا نناقش أهدافك (اختياري)",
      messagePlaceholder: "يرجى تقديم أي تفاصيل إضافية (اختياري)",
      submit: "إرسال الطلب",
      sending: "جاري الإرسال...",
      successTitle: "شكراً لك!",
      successMessage: "نقدر اهتمامك كثيراً! سيتواصل فريقنا معك قريباً لمناقشة احتياجاتك.",
      defaultCategories: [
        "مهتم بالترجمة الفورية للصوت",
        "مهتم بمساعد الاجتماعات الذكي",
        "مهتم بخصوصية البيانات والتحكم حسب المنطقة",
        "أخرى / غير مدرجة",
      ],

      defaultButtonText: "أرسل لنا رسالة",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "مقدمة",
      collapsed: false,
      items: [
        { text: "ما هو iMind؟", link: "what-is-imind" },
        { text: "كيف يعمل", link: "how-it-works" },
        { text: "هندسة الخصوصية الإقليمية من InterMind", link: "privacy-architecture" },
        { text: "حالات الاستخدام", link: "use-cases" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "حول", link: "/about" },
    { text: "اتصل بنا", link: "/contacts" },
  ]
}