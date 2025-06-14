import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ar"

export const ar = defineConfig({
  description: "يضيف InterMIND ترجمة الكلام الفورية إلى كل مكالمة فيديو، حتى لا تفقد الفرق الدولية أبداً الصفقات أو الوقت أو الوضوح بسبب حواجز اللغة.",
  head: [["meta", { property: "og:title", content: "مكالمات الفيديو مدعومة بالترجمة الفورية | InterMIND" }]],

  themeConfig: {
    nav: [
      {
        text: "المنتج",
        activeMatch: `${BASE_PATH}/product/`,
        link: `${BASE_PATH}/product/overview/what-is-intermind`,
      },
      // {
      //   text: "الشركة",
      //   activeMatch: `${BASE_PATH}/company/`,
      //   link: `${BASE_PATH}/company/about`,
      // },
      {
        text: "الأسعار",
        // activeMatch: `${BASE_PATH}/company/`,
        link: `${BASE_PATH}/#Pricing`,
      },
      {
        text: "الموارد",
        activeMatch: `${BASE_PATH}/product/`,
        // items: [
        //   {
        //     text: "استكشف",
        items: [
          // { text: "الأسعار", link: `${BASE_PATH}/#Pricing` },
          { text: "الأسئلة الشائعة", link: `${BASE_PATH}/#FAQ` },
          { text: "شهادات العملاء", link: `${BASE_PATH}/#Testimonials` },
          // { text: "الفريق", link: `${BASE_PATH}/resources/team` },
          // { text: "حقيبة الإعلام", link: `${BASE_PATH}/resources/media-kit` },
        ],
        //   },
        // ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/product/`]: { base: `${BASE_PATH}/product/`, items: sidebarProduct() },
      // [`${BASE_PATH}/company/`]: { base: `${BASE_PATH}/company/`, items: sidebarCompany() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarResources() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">إعدادات الخصوصية</a> | <a href="${BASE_PATH}/resources/company/Privacy-Policy">سياسة الخصوصية</a> | <a href="${BASE_PATH}/resources/company/Legal-Regulations-for-AI-Services">اللوائح القانونية لخدمات الذكاء الاصطناعي</a> | <a href="https://status.mind.com/">حالة الخدمة</a>`,
    },

    localization: {
      placeholder4SearchInput: "اسأل عن أي شيء...",
      placeholder4ChatFooter: "اسأل عن أي شيء...",
      placeholder4ChatList: "أدخل موضوع المحادثة...",
      buttonLabel4NavButton: "محادثة خبير فورية",
      buttonLabel4AuthButton: "تسجيل الدخول",
    },
    contact_form: {
      name: "الاسم *",
      namePlaceholder: "اسمك",
      email: "البريد الإلكتروني *",
      emailPlaceholder: "عنوان بريدك الإلكتروني",
      webSite: "موقع الشركة الإلكتروني *",
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
      defaultCategories: [
        "إزالة حواجز اللغة في الاجتماعات",
        "جعل الاجتماعات قابلة للبحث والتنفيذ",
        "ضمان الامتثال وإقامة البيانات (أوروبا / أمريكا / آسيا)",
        "مجرد استكشاف / أخرى",
      ],

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
        // { text: "كيف يعمل", link: "overview/how-it-works" },
      ],
    },
    {
      text: "الموارد",
      collapsed: false,
      items: [
        { text: "أصول العلامة التجارية", link: "/media-kit" },
        // { text: "إدارة الحساب", link: "guide/account-management" },
      ],
    },
    {
      text: "الشركة",
      collapsed: false,
      items: [
        { text: "حول", link: "/company/about" },
        // { text: "الفريق", link: "/team" },
        { text: "جهات الاتصال", link: "/company/contacts" },
      ],
    },
  ]
}

// function sidebarResources(): DefaultTheme.SidebarItem[] {
//   return [
//     { text: "حول", link: "/about" },
//     { text: "جهات الاتصال", link: "/contacts" },
//     { text: "الحصول على الدعم", link: "/help" },
//     { text: "أصول العلامة التجارية", link: "/media-kit" },
//   ]
// }
