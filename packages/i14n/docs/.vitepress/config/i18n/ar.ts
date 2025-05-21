import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ar"

export const ar = defineConfig({
  description: "خدمات تأسيس الشركات المتخصصة في الإمارات وخدمات الدعم. حلول إنشاء الشركات والخدمات المصرفية والضرائب والقانونية والتأشيرات. نحول أحلام أعمالك إلى حقيقة!",
  head: [
    ["meta", { property: "og:title", content: "خدمات تأسيس الشركات المتخصصة في الإمارات وخدمات الدعم. حلول إنشاء الشركات والخدمات المصرفية والضرائب والقانونية والتأشيرات." }],
  ],

  themeConfig: {
    nav: [
      {
        text: "إنترمايند",
        activeMatch: `${BASE_PATH}/guide/`,
        items: [
          {
            text: "المنتج",
            items: [
              { text: "ابدأ مع إنترمايند", link: `${BASE_PATH}/guide/what-is-intermind` },
              { text: "كيف يعمل", link: `${BASE_PATH}/guide/how-it-works` },
              { text: "الأسئلة الشائعة", link: `${BASE_PATH}/#frequently-asked-questions` },
            ],
          },
          {
            text: "رؤى",
            items: [
              { text: "آراء العملاء", link: `${BASE_PATH}/#what-customers-are-saying` },
              { text: "الأسعار", link: `${BASE_PATH}/#clear-and-simple-pricing` },
            ],
          },
        ],
      },
      {
        text: "مايند",
        activeMatch: `${BASE_PATH}/resources/`,
        items: [
          {
            text: "الشركة",
            items: [
              { text: "عن مايند.كوم", link: `${BASE_PATH}/resources/about` },
              { text: "اتصل بنا", link: `${BASE_PATH}/resources/contacts` },
            ],
          },
          {
            text: "رؤى",
            items: [{ text: "آي مايند.كوم", link: "https://imind.com" }],
          },
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/guide/`]: { base: `${BASE_PATH}/guide/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
    },

    footer: {
      message: `© مايند، ٢٠٢٥. | <a href="#" onClick="UC_UI.showSecondLayer();">إعدادات الخصوصية</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">سياسة الخصوصية</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">اللوائح القانونية لخدمات الذكاء الاصطناعي</a>`,
    },

    localization: {
      placeholder4SearchInput: "اسأل أي شيء...",
      placeholder4ChatFooter: "اسأل أي شيء...",
      placeholder4ChatList: "أدخل موضوع المحادثة...",
      buttonLabel4NavButton: "محادثة خبير فورية",
    },
    contact_form: {
      name: "الاسم *",
      namePlaceholder: "اسمك",
      email: "البريد الإلكتروني *",
      emailPlaceholder: "عنوان بريدك الإلكتروني",
      phone: "موقع الشركة *",
      phonePlaceholder: "مثال: https://mind.com",
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
        { text: "ما هو إنترمايند؟", link: "what-is-intermind" },
        { text: "كيف يعمل", link: "how-it-works" },
        { text: "هندسة الخصوصية المقسمة حسب المناطق من إنترمايند", link: "privacy-architecture" },
        { text: "حالات الاستخدام", link: "use-cases" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "عن الشركة", link: "/about" },
    { text: "اتصل بنا", link: "/contacts" },
  ]
}