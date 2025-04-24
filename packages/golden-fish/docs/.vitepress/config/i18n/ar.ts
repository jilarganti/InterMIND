import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ar"

export const ar = defineConfig({
  description: "خدمات تأسيس الشركات والدعم في الإمارات العربية المتحدة من قبل خبراء. إعداد الشركة، الحلول المصرفية، الضرائب، الخدمات القانونية والتأشيرات. نحقق أحلامك التجارية إلى واقع!",
  head: [
    ["meta", { property: "og:title", content: "خدمات تأسيس الشركات والدعم في الإمارات العربية المتحدة من قبل خبراء. إعداد الشركة، الحلول المصرفية، الضرائب، الخدمات القانونية والتأشيرات." }],
  ],

  themeConfig: {
    nav: [
      {
        text: "الخدمات",
        activeMatch: `${BASE_PATH}/company-registration/`,
        items: [
          { text: "تسجيل الشركة", link: `${BASE_PATH}/uae-business/company-registration/overview` },
          { text: "الحلول المصرفية", link: `${BASE_PATH}/uae-business/company-registration/banking` },
          { text: "الهجرة", link: `${BASE_PATH}/uae-business/company-registration/employment-visas` },
        ],
      },
      {
        text: "الموارد",
        items: [{ text: "من نحن", link: `${BASE_PATH}/resources/about` }],
      },
      { text: "الاتصال", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
      // [`${BASE_PATH}/contact-us/`]: { base: `${BASE_PATH}/contact-us/`, items: sidebarContactUs() },
    },

    footer: {
      message: `©Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">إعدادات الخصوصية</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">سياسة الخصوصية</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">اللوائح القانونية لخدمات الذكاء الاصطناعي</a>`,
    },

    localization: {
      placeholder4SearchInput: "بحث سريع...",
    },
    contact_form: {
      name: "الاسم *",
      namePlaceholder: "اسمك",
      email: "البريد الإلكتروني *",
      emailPlaceholder: "عنوان بريدك الإلكتروني",
      phone: "الهاتف *",
      phonePlaceholder: "مثال، +1 1234567890 أو (1) 123 456-7890",
      phoneError: "يرجى إدخال رقم الهاتف",
      category: "كيف يمكننا مساعدتك؟ *",
      categoryPlaceholder: "اختر نوع الخدمة",
      message: "لنناقش أهدافك (اختياري)",
      messagePlaceholder: "يرجى مشاركة تفاصيل استفسارك لمساعدتنا في إعداد أفضل حل لاحتياجاتك",
      submit: "إرسال الطلب",
      sending: "جاري الإرسال...",
      successTitle: "شكرًا لك!",
      successMessage: "نقدر اهتمامك بشكل كبير! سيتواصل فريقنا معك قريبًا لمناقشة احتياجاتك.",
      defaultCategories: [
        "تأسيس شركة جديدة",
        "خطة التوسع (مثل فرع جديد أو امتياز)",
        "نقل الشركة",
        "التأشيرة الذهبية",
        "التأشيرات لأغراض الزيارة فقط",
        "فتح حسابات مصرفية",
        "خدمات أخرى",
      ],
      defaultButtonText: "أرسل لنا رسالة",
      // defaultButtonText: "احصل على استشارة مجانية",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "ملخص الأعمال في الإمارات",
      // collapsed: false,
      items: [
        { text: "تسجيل الشركة", link: "company-registration/overview" },
        { text: "الإيجابيات والسلبيات", link: "company-registration/benefits-problems" },
        { text: "حلول الخدمات المصرفية للشركات", link: "company-registration/banking" },
        { text: "التأشيرة الذهبية", link: "company-registration//golden-visa" },
        { text: "التأشيرات والهوية الإماراتية", link: "company-registration/employment-visas" },
        { text: "الرسوم والجداول الزمنية", link: "company-registration/fees-timelines" },
        { text: "الدفع بعد النجاح فقط", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "هياكل الشركات في الإمارات",
      collapsed: false,
      items: [
        { text: "خطوات تسجيل الشركة", link: "company-registration/insights/incorporation-steps" },
        { text: "المناطق الحرة في الإمارات", link: "company-registration/free-zones" },
        { text: "البر الرئيسي في الإمارات", link: "company-registration/mainland" },
      ],
    },
    {
      text: "ضمان الامتثال التجاري في الإمارات",
      collapsed: false,
      items: [
        { text: "ضمان الموافقة على الحسابات المصرفية للشركات", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "حسابات مصرفية للأعمال عالية المخاطر", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "حافظ على امتثال وحماية عملك التجاري", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "القانونية والمحاسبة والضرائب",
      collapsed: false,
      items: [
        { text: "الاعتبارات المحاسبية والضريبية", link: "company-registration/accounting-legal" },
        { text: "سجل المالك النافع", link: "company-registration/ubo" },
      ],
    },
    {
      text: "المقارنات",
      collapsed: false,
      items: [
        { text: "البر الرئيسي مقابل المناطق الحرة", link: "comparison/mainland-vs-free-zones" },
        { text: "مقارنة كيانات الإمارات", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "من نحن", link: "about" },
    { text: "الاتصال", link: "contacts" },
    { text: "سياسة الخصوصية", link: "Privacy-Policy" },
    { text: "اللوائح القانونية لخدمات الذكاء الاصطناعي", link: "Legal-Regulations-for-AI-Services" },
  ]
}

// function sidebarContactUs(): DefaultTheme.SidebarItem[] {
//   return [{ text: "الاتصال", link: `contacts` }]
// }