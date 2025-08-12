import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ar"

export const ar = defineConfig({
  description:
    "خدمات خبيرة لتأسيس الشركات والدعم في دولة الإمارات العربية المتحدة. تأسيس الشركات، الخدمات المصرفية، الضرائب، الحلول القانونية وحلول التأشيرات. نحول أحلامك التجارية إلى حقيقة!",
  head: [
    [
      "meta",
      {
        property: "og:title",
        content:
          "خدمات خبيرة لتأسيس الشركات والدعم في دولة الإمارات العربية المتحدة. تأسيس الشركات، الخدمات المصرفية، الضرائب، الحلول القانونية وحلول التأشيرات.",
      },
    ],
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
        items: [{ text: "من نحن", link: `${BASE_PATH}/resources/about` }],
      },
      { text: "اتصل بنا", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
      // [`${BASE_PATH}/contact-us/`]: { base: `${BASE_PATH}/contact-us/`, items: sidebarContactUs() },
    },

    footer: {
      message: `© Golden Fish، 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">إعدادات الخصوصية</a> | <a href="${BASE_PATH}/resources/TERMS-CONDITIONS">الشروط والأحكام</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">سياسة الخصوصية</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">اللوائح القانونية لخدمات الذكاء الاصطناعي</a>`,
    },

    localization: {
      placeholder4SearchInput: "اسأل عن أي شيء...",
      placeholder4ChatFooter: "اسأل عن أي شيء...",
      placeholder4ChatList: "أدخل موضوع المحادثة...",
      buttonLabel4NavButton: "محادثة خبير فورية",
    },
    contact_form: {
      name: "الاسم *",
      namePlaceholder: "اسمك",
      email: "البريد الإلكتروني *",
      emailPlaceholder: "عنوان بريدك الإلكتروني",
      phone: "الهاتف *",
      phonePlaceholder: "مثال: +971 501234567 أو (971) 50 123-4567",
      phoneError: "يرجى إدخال رقم الهاتف",
      category: "كيف يمكننا مساعدتك؟ *",
      categoryPlaceholder: "اختر نوع الخدمة",
      message: "دعنا نناقش أهدافك (اختياري)",
      messagePlaceholder: "يرجى مشاركة تفاصيل استفسارك لمساعدتنا في إعداد أفضل حل لاحتياجاتك",
      submit: "إرسال الطلب",
      sending: "جاري الإرسال...",
      successTitle: "شكراً لك!",
      successMessage: "نقدر اهتمامك بشدة! سيتواصل معك فريقنا قريباً لمناقشة احتياجاتك.",
      defaultCategories: [
        "تأسيس شركة جديدة",
        "خطة التوسع (مثل فرع جديد أو امتياز)",
        "نقل الشركة",
        "Golden Visa",
        "لأغراض التأشيرة فقط",
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
      text: "ملخص الأعمال في دولة الإمارات",
      // collapsed: false,
      items: [
        { text: "تسجيل الشركات", link: "company-registration/overview" },
        { text: "المزايا والعيوب", link: "company-registration/benefits-problems" },
        { text: "حلول الخدمات المصرفية للشركات", link: "company-registration/banking" },
        { text: "Golden Visa", link: "company-registration//golden-visa" },
        { text: "التأشيرات و EID", link: "company-registration/employment-visas" },
        { text: "الرسوم والجداول الزمنية", link: "company-registration/fees-timelines" },
        { text: "ادفع فقط بعد النجاح", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "الهياكل المؤسسية في دولة الإمارات",
      collapsed: false,
      items: [
        { text: "خطوات تسجيل الشركة", link: "company-registration/insights/incorporation-steps" },
        { text: "المناطق الحرة في دولة الإمارات", link: "company-registration/free-zones" },
        { text: "Mainland الإمارات", link: "company-registration/mainland" },
      ],
    },
    {
      text: "امتثال الأعمال في دولة الإمارات مضمون",
      collapsed: false,
      items: [
        { text: "موافقات مضمونة لحسابات البنوك المؤسسية", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "حسابات مصرفية للأعمال عالية المخاطر", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "حافظ على امتثال وحماية أعمالك", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "القانونية والمحاسبة والضرائب",
      collapsed: false,
      items: [
        { text: "اعتبارات المحاسبة والضرائب", link: "company-registration/accounting-legal" },
        { text: "سجل UBO", link: "company-registration/ubo" },
      ],
    },
    {
      text: "المقارنات",
      collapsed: false,
      items: [
        { text: "Mainland مقابل المناطق الحرة", link: "comparison/mainland-vs-free-zones" },
        { text: "مقارنة كيانات دولة الإمارات", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "من نحن", link: "about" },
    { text: "اتصل بنا", link: "contacts" },
    { text: "الشروط والأحكام", link: "TERMS-CONDITIONS" },
    { text: "سياسة الخصوصية", link: "Privacy-Policy" },
    { text: "اللوائح القانونية لخدمات الذكاء الاصطناعي", link: "Legal-Regulations-for-AI-Services" },
  ]
}

// function sidebarContactUs(): DefaultTheme.SidebarItem[] {
//   return [{ text: "اتصل بنا", link: `contacts` }]
// }
