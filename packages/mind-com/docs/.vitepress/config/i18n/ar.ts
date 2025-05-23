import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ar"

export const ar = defineConfig({
  description:
    "لا تحتاج الاجتماعات متعددة اللغات إلى Zoom أو إضافات أو مترجمين. InterMind هو مترجم صوتي ذكي للمكالمات المرئية المباشرة - تحدث وترجم فوراً.",
  head: [
    ["meta", { property: "og:title", content: "مترجم صوتي ذكي للمكالمات المرئية المباشرة | InterMIND" }],
    [
      "meta",
      {
        name: "keywords",
        content: "مترجم صوتي ذكي، ترجمة فورية، ترجمة مكالمات الفيديو، اجتماعات متعددة اللغات، بديل مترجم Zoom، أداة الترجمة",
      },
    ],
  ],

  themeConfig: {
    nav: [
      {
        text: "المنتج",
        activeMatch: `${BASE_PATH}/product/`,
        link: `${BASE_PATH}/product/what-is-intermind`,
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
          { text: "الأسعار", link: `${BASE_PATH}/#clear-and-simple-pricing` },
          { text: "الأسئلة الشائعة", link: `${BASE_PATH}/#frequently-asked-questions` },
          { text: "آراء العملاء", link: `${BASE_PATH}/#what-customers-are-saying` },
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
        { text: "ما هو InterMIND؟", link: "what-is-intermind" },
        { text: "كيف يعمل", link: "how-it-works" },
        { text: "خصوصية البيانات الإقليمية", link: "privacy-architecture" },
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