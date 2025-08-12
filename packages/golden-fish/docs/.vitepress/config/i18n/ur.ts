import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ur"

export const ur = defineConfig({
  description: "ماہر UAE کمپنی کی تشکیل اور سپورٹ سروسز۔ کمپنی سیٹ اپ، بینکنگ، ٹیکس، قانونی اور ویزا حل۔ آپ کے کاروباری خوابوں کو حقیقت بنانا!",
  head: [["meta", { property: "og:title", content: "ماہر UAE کمپنی کی تشکیل اور سپورٹ سروسز۔ کمپنی سیٹ اپ، بینکنگ، ٹیکس، قانونی اور ویزا حل۔" }]],

  themeConfig: {
    nav: [
      {
        text: "خدمات",
        activeMatch: `${BASE_PATH}/company-registration/`,
        items: [
          { text: "کمپنی رجسٹریشن", link: `${BASE_PATH}/uae-business/company-registration/overview` },
          { text: "بینکنگ حل", link: `${BASE_PATH}/uae-business/company-registration/banking` },
          { text: "ہجرت", link: `${BASE_PATH}/uae-business/company-registration/employment-visas` },
        ],
      },
      {
        text: "وسائل",
        items: [{ text: "ہمارے بارے میں", link: `${BASE_PATH}/resources/about` }],
      },
      { text: "رابطے", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
      // [`${BASE_PATH}/contact-us/`]: { base: `${BASE_PATH}/contact-us/`, items: sidebarContactUs() },
    },

    footer: {
      message: `© Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">پرائیویسی سیٹنگز</a> | <a href="${BASE_PATH}/resources/TERMS-CONDITIONS">شرائط و ضوابط</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">پرائیویسی پالیسی</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">AI خدمات کے لیے قانونی ضوابط</a>`,
    },

    localization: {
      placeholder4SearchInput: "کچھ بھی پوچھیں...",
      placeholder4ChatFooter: "کچھ بھی پوچھیں...",
      placeholder4ChatList: "چیٹ کا موضوع داخل کریں...",
      buttonLabel4NavButton: "فوری ماہر چیٹ",
    },
    contact_form: {
      name: "نام *",
      namePlaceholder: "آپ کا نام",
      email: "ای میل *",
      emailPlaceholder: "آپ کا ای میل پتہ",
      phone: "فون *",
      phonePlaceholder: "مثال، +1 1234567890 یا (1) 123 456-7890",
      phoneError: "براہ کرم فون نمبر داخل کریں",
      category: "ہم آپ کی کیسے مدد کر سکتے ہیں؟ *",
      categoryPlaceholder: "سروس کی قسم منتخب کریں",
      message: "آئیے آپ کے اہداف پر بات کرتے ہیں (اختیاری)",
      messagePlaceholder: "براہ کرم اپنی انکوائری کی تفصیلات شیئر کریں تاکہ ہم آپ کی ضروریات کے لیے بہترین حل تیار کر سکیں",
      submit: "درخواست جمع کریں",
      sending: "بھیجا جا رہا ہے...",
      successTitle: "شکریہ!",
      successMessage: "ہم آپ کی دلچسپی کی بہت تعریف کرتے ہیں! ہماری ٹیم آپ کی ضروریات پر بات کرنے کے لیے جلد ہی آپ سے رابطہ کرے گی۔",
      defaultCategories: [
        "نئی کمپنی کی تشکیل",
        "توسیعی منصوبہ (یعنی نئی برانچ یا فرنچائز)",
        "کمپنی کی منتقلی",
        "Golden Visa",
        "صرف ویزا کے مقاصد",
        "بینک اکاؤنٹس کھولنا",
        "دیگر خدمات",
      ],
      defaultButtonText: "ہمیں پیغام بھیجیں",
      // defaultButtonText: "مفت مشاورہ حاصل کریں",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "UAE کاروبار کا خلاصہ",
      // collapsed: false,
      items: [
        { text: "کمپنی رجسٹریشن", link: "company-registration/overview" },
        { text: "فوائد اور نقصانات", link: "company-registration/benefits-problems" },
        { text: "کارپوریٹ بینکنگ حل", link: "company-registration/banking" },
        { text: "Golden Visa", link: "company-registration//golden-visa" },
        { text: "ویزا اور EID", link: "company-registration/employment-visas" },
        { text: "فیسیں اور وقت کی حد", link: "company-registration/fees-timelines" },
        { text: "صرف کامیابی کے بعد ادائیگی", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "UAE کارپوریٹ ڈھانچے",
      collapsed: false,
      items: [
        { text: "کمپنی رجسٹریشن کے مراحل", link: "company-registration/insights/incorporation-steps" },
        { text: "UAE Free Zone", link: "company-registration/free-zones" },
        { text: "UAE Mainland", link: "company-registration/mainland" },
      ],
    },
    {
      text: "UAE کاروباری تعمیل کی ضمانت",
      collapsed: false,
      items: [
        { text: "کارپوریٹ بینک اکاؤنٹ کی منظوری کی ضمانت", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "زیادہ خطرے والے کاروبار کے لیے بینک اکاؤنٹس", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "اپنے کاروبار کو مطابقت پذیر اور محفوظ رکھیں", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "قانونی، اکاؤنٹنگ اور ٹیکس",
      collapsed: false,
      items: [
        { text: "اکاؤنٹنگ اور ٹیکس کے اعتبارات", link: "company-registration/accounting-legal" },
        { text: "UBO رجسٹر", link: "company-registration/ubo" },
      ],
    },
    {
      text: "موازنے",
      collapsed: false,
      items: [
        { text: "Mainland بمقابلہ Free Zone", link: "comparison/mainland-vs-free-zones" },
        { text: "UAE اداروں کا موازنہ", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "ہمارے بارے میں", link: "about" },
    { text: "رابطے", link: "contacts" },
    { text: "شرائط و ضوابط", link: "TERMS-CONDITIONS" },
    { text: "پرائیویسی پالیسی", link: "Privacy-Policy" },
    { text: "AI خدمات کے لیے قانونی ضوابط", link: "Legal-Regulations-for-AI-Services" },
  ]
}

// function sidebarContactUs(): DefaultTheme.SidebarItem[] {
//   return [{ text: "رابطے", link: `contacts` }]
// }
