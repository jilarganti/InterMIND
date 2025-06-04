import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ar"

export const ar = defineConfig({
  description: "ترجمة فورية للصوت في مكالمات الفيديو. تحدث بلغتك وافهم الجميع — فورياً وبشكل طبيعي، بدون ترجمات نصية أو تأخير.",
  head: [["meta", { property: "og:title", content: "مكالمات فيديو مدعومة بالترجمة الفورية | InterMIND" }]],

  themeConfig: {
    nav: [
      {
        text: "المنتج",
        activeMatch: `${BASE_PATH}/product/`,
        link: `${BASE_PATH}/product/overview/what-is-intermind`,
      },
      {
        text: "الشركة",
        activeMatch: `${BASE_PATH}/company/`,
        link: `${BASE_PATH}/company/about`,
      },
      {
        text: "الموارد",
        activeMatch: `${BASE_PATH}/product/`,
        items: [
          { text: "الأسعار", link: `${BASE_PATH}/#Pricing` },
          { text: "الأسئلة الشائعة", link: `${BASE_PATH}/#FAQ` },
          { text: "آراء العملاء", link: `${BASE_PATH}/#Testimonials` },
          { text: "المجموعة الإعلامية", link: `${BASE_PATH}/resources/media-kit` },
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/product/`]: { base: `${BASE_PATH}/product/`, items: sidebarProduct() },
      [`${BASE_PATH}/company/`]: { base: `${BASE_PATH}/company/`, items: sidebarCompany() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarResources() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">إعدادات الخصوصية</a> | <a href="${BASE_PATH}/company/Privacy-Policy">سياسة الخصوصية</a> | <a href="${BASE_PATH}/company/Legal-Regulations-for-AI-Services">اللوائح القانونية لخدمات الذكاء الاصطناعي</a>`,
    },

    localization: {
      placeholder4SearchInput: "اسأل أي شيء...",
      placeholder4ChatFooter: "اسأل أي شيء...",
      placeholder4ChatList: "أدخل موضوع المحادثة...",
      buttonLabel4NavButton: "محادثة خبير فورية",
      buttonLabel4AuthButton: "تسجيل الدخول",
    },
    contact_form: {
      name: "الاسم *",
      namePlaceholder: "اسمك",
      email: "البريد الإلكتروني *",
      emailPlaceholder: "عنوان بريدك الإلكتروني",
      phone: "موقع الشركة *",
      phonePlaceholder: "مثال: https://mind.com",
      phoneError: "يرجى إدخال رقم الهاتف",
      category: "أخبرنا كيف يمكننا المساعدة *",
      categoryPlaceholder: "اختر نوع الخدمة",
      message: "دعنا نناقش أهدافك (اختياري)",
      messagePlaceholder: "يرجى تقديم أي تفاصيل إضافية (اختياري)",
      submit: "إرسال الطلب",
      sending: "جارٍ الإرسال...",
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

function sidebarProduct(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "نظرة عامة",
      collapsed: false,
      items: [
        { text: "ما هو InterMIND؟", link: "overview/what-is-intermind" },
        { text: "كيف يعمل", link: "overview/how-it-works" },
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
        { text: "سجل الاجتماعات", link: "guide/meeting-history" },
        { text: "الأسئلة الشائعة", link: "guide/faq" },
        { text: "استكشاف الأخطاء وإصلاحها", link: "guide/troubleshooting" },
      ],
    },
  ]
}

function sidebarCompany(): DefaultTheme.SidebarItem[] {
  return [
    { text: "عن الشركة", link: "/about" },
    { text: "اتصل بنا", link: "/contacts" },
  ]
}

function sidebarResources(): DefaultTheme.SidebarItem[] {
  return [
    { text: "المجموعة الإعلامية", link: "/media-kit" },
  ]
}