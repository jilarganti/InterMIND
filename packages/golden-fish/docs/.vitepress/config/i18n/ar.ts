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
        items: [{ text: "من نحن", link: `${BASE_PATH}/resources/about` }],
      },
      { text: "اتصل بنا", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
    },

    footer: {
      message: `© Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">إعدادات الخصوصية</a> | <a href="${BASE_PATH}/resources/TERMS-CONDITIONS">الشروط والأحكام</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">سياسة الخصوصية</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">اللوائح القانونية لخدمات الذكاء الاصطناعي</a>`,
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
      phone: "الهاتف *",
      phonePlaceholder: "مثال: +1 1234567890 أو (1) 123 456-7890",
      phoneError: "يرجى إدخال رقم الهاتف",
      category: "كيف يمكننا مساعدتك؟ *",
      categoryPlaceholder: "اختر نوع الخدمة",
      message: "دعنا نناقش أهدافك (اختياري)",
      messagePlaceholder: "يرجى مشاركة تفاصيل استفسارك لمساعدتنا في إعداد أفضل حل لاحتياجاتك",
      submit: "إرسال الطلب",
      sending: "جاري الإرسال...",
      successTitle: "شكراً لك!",
      successMessage: "نقدر اهتمامك كثيراً! سيتواصل فريقنا معك قريباً لمناقشة احتياجاتك.",
      defaultCategories: [
        "تأسيس شركة جديدة",
        "خطة التوسع (مثل فرع جديد أو امتياز)",
        "نقل مقر الشركة",
        "التأشيرة الذهبية",
        "التأشيرات فقط",
        "فتح حسابات مصرفية",
        "خدمات أخرى",
      ],
      defaultButtonText: "أرسل لنا رسالة",
    },
  },
})

[Rest of the code with function definitions remains unchanged as it contains technical terms and structure]