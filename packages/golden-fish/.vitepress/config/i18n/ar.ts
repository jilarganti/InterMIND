import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ar"

export const ar = defineConfig({
  description: "خدمات تأسيس الشركات والدعم المتخصصة في الإمارات. حلول تأسيس الشركات والخدمات المصرفية والضرائب والقانونية والتأشيرات. نحول أحلام أعمالك إلى حقيقة!",
  head: [
    ["meta", { property: "og:title", content: "خدمات تأسيس الشركات والدعم المتخصصة في الإمارات. حلول تأسيس الشركات والخدمات المصرفية والضرائب والقانونية والتأشيرات." }],
  ],

  themeConfig: {
    nav: [
      {
        text: "الخدمات",
        activeMatch: `${BASE_PATH}/company-registration/`,
        items: [
          { text: "تسجيل الشركات", link: `${BASE_PATH}/uae-business/company-registration/overview` },
          { text: "الحلول المصرفية", link: `${BASE_PATH}/uae-business/company-registration/banking` },
          { text: "الهجرة", link: `${BASE_PATH}/uae-business/company-registration/employment-visas` },
        ],
      },
      {
        text: "الموارد",
        items: [{ text: "عن الشركة", link: `${BASE_PATH}/resources/about` }],
      },
      { text: "اتصل بنا", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
    },

    footer: {
      message: `©Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">إعدادات الخصوصية</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">سياسة الخصوصية</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">اللوائح القانونية لخدمات الذكاء الاصطناعي</a>`,
    },

    contact_form: {
      name: "الاسم *",
      namePlaceholder: "اسمك",
      email: "البريد الإلكتروني *",
      emailPlaceholder: "عنوان بريدك الإلكتروني",
      phone: "الهاتف *",
      phonePlaceholder: "مثال: +1 1234567890 أو (1) 123 456-7890",
      phoneError: "يرجى إدخال رقم الهاتف",
      category: "كيف يمكننا مساعدتك؟ *",
      categoryPlaceholder: "اختر نوع الخدمة",
      message: "دعنا نناقش أهدافك (اختياري)",
      messagePlaceholder: "صف مشروعك أو متطلباتك",
      submit: "إرسال الطلب",
      sending: "جاري الإرسال...",
      successTitle: "شكراً لك!",
      successMessage: "نقدر اهتمامك كثيراً! سيتواصل فريقنا معك قريباً لمناقشة احتياجاتك.",
      defaultCategories: ["تسجيل الشركات", "فتح الحسابات المصرفية", "EID والتأشيرة الذهبية", "خدمات أخرى"],
      defaultButtonText: "احصل على استشارة مجانية",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "ملخص الأعمال في الإمارات",
      collapsed: false,
      items: [
        { text: "تسجيل الشركات", link: "company-registration/overview" },
        { text: "المزايا والعيوب", link: "company-registration/benefits-problems" },
        { text: "الحلول المصرفية للشركات", link: "offer/banking/" },
        { text: "التأشيرة الذهبية", link: "offer/golden-visa/" },
        { text: "التأشيرات وEID", link: "company-registration/employment-visas" },
        { text: "الرسوم والجداول الزمنية", link: "company-registration/fees-timelines" },
        { text: "الدفع بعد النجاح فقط", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "الهياكل المؤسسية في الإمارات",
      collapsed: true,
      items: [
        { text: "خطوات تسجيل الشركة", link: "company-registration/insights/incorporation-steps" },
        { text: "المناطق الحرة في الإمارات", link: "company-registration/free-zones" },
        { text: "البر الرئيسي في الإمارات", link: "company-registration/mainland" },
      ],
    },
    {
      text: "الامتثال المضمون للأعمال في الإمارات",
      collapsed: true,
      items: [
        { text: "موافقات مضمونة للحسابات المصرفية للشركات", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "حسابات مصرفية للأعمال عالية المخاطر", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "حافظ على امتثال وحماية عملك", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "القانونية والمحاسبة والضرائب",
      collapsed: true,
      items: [
        { text: "اعتبارات المحاسبة والضرائب", link: "company-registration/accounting-legal" },
        { text: "سجل UBO", link: "company-registration/ubo" },
      ],
    },
    {
      text: "المقارنات",
      collapsed: true,
      items: [
        { text: "البر الرئيسي مقابل المناطق الحرة", link: "comparison/mainland-vs-free-zones" },
        { text: "مقارنة الكيانات في الإمارات", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "عن الشركة", link: "about" },
    { text: "جهات الاتصال", link: "contacts" },
    { text: "سياسة الخصوصية", link: "Privacy-Policy" },
    { text: "اللوائح القانونية لخدمات الذكاء الاصطناعي", link: "Legal-Regulations-for-AI-Services" },
  ]
}