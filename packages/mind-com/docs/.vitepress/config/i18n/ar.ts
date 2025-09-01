/// <reference types="../theme/types/themeConfig" />

import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ar"

export const ar = defineConfig({
  description: "مؤتمرات فيديو احترافية مع ترجمة فورية بأكثر من 19 لغة. ترجمة مدعومة بالذكاء الاصطناعي تلتقط النبرة والقصد والسياق للفرق العالمية.",
  head: [
    ["meta", { property: "og:title", content: "InterMIND | ترجمة الكلام الفورية للفرق العالمية" }],
    [
      "meta",
      {
        property: "og:description",
        content: "مؤتمرات فيديو احترافية مع ترجمة صوتية فورية بأكثر من 19 لغة. اجتمع عالمياً، تواصل بطبيعية مع الترجمة المدعومة بالذكاء الاصطناعي.",
      },
    ],
    ["meta", { property: "og:url", content: `https://mind.com${BASE_PATH}` }],
  ],
  themeConfig: {
    nav: [
      {
        text: "المنتج",
        activeMatch: `${BASE_PATH}/product/`,
        link: `${BASE_PATH}/product/overview/what-is-intermind`,
      },
      {
        text: "الأسعار",
        link: `${BASE_PATH}/#Pricing`,
      },
      {
        text: "الموارد",
        activeMatch: `${BASE_PATH}/product/`,
        items: [
          { text: "الأسئلة الشائعة", link: `${BASE_PATH}/#FAQ` },
          { text: "الشهادات", link: `${BASE_PATH}/#Testimonials` },
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/product/`]: { base: `${BASE_PATH}/product/`, items: sidebarProduct() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarResources() },
      [`${BASE_PATH}/exp/`]: { base: `${BASE_PATH}/exp/`, items: sidebarExp() },
      [`${BASE_PATH}/account/`]: { base: `${BASE_PATH}/account/`, items: sidebarAccount() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">إعدادات الخصوصية</a> | <a href="${BASE_PATH}/resources/company/Privacy-Policy">سياسة الخصوصية</a> | <a href="${BASE_PATH}/resources/company/legal-regulations-for-ai-services">اللوائح القانونية لخدمات الذكاء الاصطناعي</a> | <a href="https://status.mind.com/">حالة الخدمة</a>`,
    },

    localization: {
      placeholder4SearchInput: "اسأل عن أي شيء...",
      placeholder4ChatFooter: "اسأل عن أي شيء...",
      placeholder4ChatList: "أدخل موضوع المحادثة...",
      buttonLabel4NavButton: "المساعد",
      buttonLabel4SignInButton: "تسجيل الدخول",
      buttonLabel4GetStartedButton: "ابدأ الآن",
      buttonLabel4TryItButton: "جرب مجاناً",
      buttonLabel4BackToBlog: "← العودة إلى المدونة",
    },
    contact_form: {
      name: "الاسم *",
      namePlaceholder: "اسمك",
      email: "البريد الإلكتروني *",
      emailPlaceholder: "عنوان بريدك الإلكتروني",
      webSite: "موقع الشركة",
      webSitePlaceholder: "مثال: https://companyname.com",
      webSiteError: "يرجى إدخال الموقع الإلكتروني",
      category: "ما هو هدفك الأساسي؟ *",
      categoryPlaceholder: "اختر ما يهمك أكثر",
      message: "دعنا نناقش أهدافك (اختياري)",
      messagePlaceholder: "يرجى تقديم أي تفاصيل إضافية (اختياري)",
      submit: "إرسال الطلب",
      sending: "جاري الإرسال...",
      successTitle: "شكراً لك!",
      successMessage: "لقد تلقينا رسالتك — سيتواصل معك فريقنا قريباً.",
      defaultCategories: [],

      defaultButtonText: "أرسل لنا رسالة",
      // defaultButtonText: "احصل على استشارة مجانية",
    },
  },
})

function sidebarProduct(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "نظرة عامة",
      collapsed: false,
      items: [
        { text: "ما هو InterMIND؟", link: "overview/what-is-intermind" },
        { text: "كيف يعمل", link: "overview/how-it-works" },
        { text: "منصة اجتماعات الفيديو", link: "overview/video-meeting-platform" },
        { text: "الترجمة مقابل التفسير: ما الفرق؟", link: "overview/translation-vs-interpretation-whats-the-difference" },
        { text: "خصوصية البيانات الإقليمية", link: "overview/privacy-architecture" },
        { text: "الأسواق ذات الأولوية", link: "overview/markets" },
      ],
    },
    {
      text: "الدليل",
      collapsed: false,
      items: [
        { text: "البدء", link: "guide/getting-started" },
        { text: "إدارة الحساب", link: "guide/account-management" },
        { text: "إنشاء الاجتماعات", link: "guide/creating-meetings" },
        { text: "واجهة الاجتماع", link: "guide/meeting-interface" },
        { text: "أدوار المستخدمين", link: "guide/user-roles" },
        { text: "ميزات الذكاء الاصطناعي", link: "guide/ai-features" },
        { text: "تاريخ الاجتماعات", link: "guide/meeting-history" },
        { text: "الأسئلة الشائعة", link: "guide/faq" },
        { text: "استكشاف الأخطاء وإصلاحها", link: "guide/troubleshooting" },
        { text: "الأسعار", link: "guide/pricing" },
        { text: "المساعدة والدعم", link: "guide/help-support" },
      ],
    },
  ]
}

function sidebarResources(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "الدعم",
      collapsed: false,
      items: [
        { text: "الحصول على الدعم", link: "/help" },
        { text: "سياسة الخصوصية", link: "/company/Privacy-Policy" },
        { text: "دليل القوانين للذكاء الاصطناعي", link: "/company/legal-regulations-for-ai-services" },
      ],
    },
    // {
    //   text: "الموارد",
    //   collapsed: false,
    //   items: [
    //     { text: "أصول العلامة التجارية", link: "/media-kit" },
    //     // { text: "إدارة الحساب", link: "guide/account-management" },
    //   ],
    // },
    {
      text: "الشركة",
      collapsed: false,
      items: [
        { text: "حول", link: "/company/about" },
        { text: "الفريق", link: "/company/team" },
        { text: "الوظائف", link: "/company/careers" },
        { text: "جهات الاتصال", link: "/company/contacts" },
      ],
    },
  ]
}

function sidebarExp(): DefaultTheme.SidebarItem[] {
  return [
    { text: "الملخص التنفيذي", link: "/InterMind-Executive-Summary" },
    { text: "استراتيجية دخول السوق", link: "/go-to-market-strategy" },
    { text: "عرض المستثمرين", link: "/InterMind-Investor-Pitch" },
    { text: "مبررات التوقعات المالية (السنة 1-3)", link: "/Financial-Projections-Justification" },
  ]
}

function sidebarAccount(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "الرئيسية",
      link: "/",
    },
    {
      text: "الاجتماعات",
      collapsed: false,
      items: [
        { text: "الاجتماعات", link: "/meetings" },
        { text: "التاريخ", link: "/history" },
        { text: "الترقية", link: "/upgrade" },
      ],
    },

    {
      text: "الإعدادات",
      collapsed: true,
      items: [
        { text: "الملف الشخصي", link: "/settings/profile" },
        { text: "الإعدادات", link: "/settings/settings" },
        { text: "الإعدادات", link: "/settings/upgrade" },
      ],
    },
  ]
}
