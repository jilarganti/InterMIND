import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ar"

export const ar = defineConfig({
  description:
    "إنترمايند هي منصة ترجمة فورية للاجتماعات متعددة اللغات عبر الفيديو. يتحدث كل مشارك بلغته الأم - ويسمع الآخرين كما لو كانوا يتحدثون بها أيضاً. بدون إضافات. بدون تحميلات. مجرد محادثات سلسة وطبيعية عبر أكثر من 100 لغة.",
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
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/product/`]: { base: `${BASE_PATH}/product/`, items: sidebarServices() },
      [`${BASE_PATH}/company/`]: { base: `${BASE_PATH}/company/`, items: sidebarInsights() },
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
      category: "يرجى إخبارنا كيف يمكننا المساعدة *",
      categoryPlaceholder: "اختر نوع الخدمة",
      message: "دعنا نناقش أهدافك (اختياري)",
      messagePlaceholder: "يرجى تقديم أي تفاصيل إضافية (اختياري)",
      submit: "إرسال الطلب",
      sending: "جارٍ الإرسال...",
      successTitle: "شكراً لك!",
      successMessage: "نقدر اهتمامك كثيراً! سيتواصل فريقنا معك قريباً لمناقشة احتياجاتك.",
      defaultCategories: [
        "مهتم بالترجمة الصوتية الفورية",
        "مهتم بمساعد الاجتماعات بالذكاء الاصطناعي",
        "مهتم بالخصوصية والتحكم في البيانات حسب المنطقة",
        "أخرى / غير مدرجة",
      ],

      defaultButtonText: "أرسل لنا رسالة",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
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

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "عن الشركة", link: "/about" },
    { text: "اتصل بنا", link: "/contacts" },
  ]
}