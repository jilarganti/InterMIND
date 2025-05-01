import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ur"

export const ur = defineConfig({
  description: "ماہر اماراتی کمپنی کی تشکیل اور معاونت کی خدمات۔ کمپنی کی ترتیب، بینکاری، ٹیکس، قانونی اور ویزا حل۔ آپ کے کاروباری خوابوں کو حقیقت بنانا!",
  head: [
    ["meta", { property: "og:title", content: "ماہر اماراتی کمپنی کی تشکیل اور معاونت کی خدمات۔ کمپنی کی ترتیب، بینکاری، ٹیکس، قانونی اور ویزا حل۔" }],
  ],

  themeConfig: {
    nav: [
      {
        text: "خدمات",
        activeMatch: `${BASE_PATH}/company-registration/`,
        items: [
          { text: "کمپنی رجسٹریشن", link: `${BASE_PATH}/uae-business/company-registration/overview` },
          { text: "بینکاری حل", link: `${BASE_PATH}/uae-business/company-registration/banking` },
          { text: "ہجرت", link: `${BASE_PATH}/uae-business/company-registration/employment-visas` },
        ],
      },
      {
        text: "وسائل",
        items: [{ text: "ہمارے بارے میں", link: `${BASE_PATH}/resources/about` }],
      },
      { text: "رابطہ", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
      // [`${BASE_PATH}/contact-us/`]: { base: `${BASE_PATH}/contact-us/`, items: sidebarContactUs() },
    },

    footer: {
      message: `©Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">رازداری کی ترتیبات</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">رازداری کی پالیسی</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">مصنوعی ذہانت کی خدمات کے قانونی ضوابط</a>`,
    },

    localization: {
      placeholder4SearchInput: "کچھ بھی پوچھیں...",
      placeholder4ChatFooter: "کچھ بھی پوچھیں...",
      placeholder4ChatList: "چیٹ کا موضوع درج کریں...",
      buttonLabel4NavButton: "فوری ماہر چیٹ",
    },
    contact_form: {
      name: "نام *",
      namePlaceholder: "آپ کا نام",
      email: "ایمیل *",
      emailPlaceholder: "آپ کا ایمیل ایڈریس",
      phone: "فون *",
      phonePlaceholder: "مثال کے طور پر، +1 1234567890 یا (1) 123 456-7890",
      phoneError: "براہ کرم فون نمبر درج کریں",
      category: "ہم آپ کی کس طرح مدد کر سکتے ہیں؟ *",
      categoryPlaceholder: "خدمت کی قسم منتخب کریں",
      message: "آپ کے مقاصد پر بات کریں (اختیاری)",
      messagePlaceholder: "براہ کرم اپنی درخواست کی تفصیلات شیئر کریں تاکہ ہم آپ کی ضروریات کے لئے بہترین حل تیار کر سکیں",
      submit: "درخواست جمع کروائیں",
      sending: "بھیج رہے ہیں...",
      successTitle: "شکریہ!",
      successMessage: "ہم آپ کی دلچسپی کی بہت قدر کرتے ہیں! ہماری ٹیم جلد ہی آپ سے رابطہ کرے گی تاکہ آپ کی ضروریات پر بات چیت کر سکے۔",
      defaultCategories: [
        "نئی کمپنی کی تشکیل",
        "توسیع کا منصوبہ (مثلاً نیا شاخ یا فرنچائز)",
        "کمپنی کی منتقلی",
        "گولڈن ویزا",
        "صرف ویزا کے مقاصد",
        "بینک اکاؤنٹس کھولنا",
        "دیگر خدمات",
      ],
      defaultButtonText: "ہمیں پیغام بھیجیں",
      // defaultButtonText: "مفت مشاورت حاصل کریں",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "امارات کاروبار کا خلاصہ",
      // collapsed: false,
      items: [
        { text: "کمپنی رجسٹریشن", link: "company-registration/overview" },
        { text: "فوائد و نقصانات", link: "company-registration/benefits-problems" },
        { text: "کارپوریٹ بینکاری حل", link: "company-registration/banking" },
        { text: "گولڈن ویزا", link: "company-registration//golden-visa" },
        { text: "ویزا اور EID", link: "company-registration/employment-visas" },
        { text: "فیس اور ٹائم لائنز", link: "company-registration/fees-timelines" },
        { text: "کامیابی کے بعد ہی ادائیگی", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "امارات کارپوریٹ ڈھانچے",
      collapsed: false,
      items: [
        { text: "کمپنی رجسٹریشن کے مراحل", link: "company-registration/insights/incorporation-steps" },
        { text: "امارات فری زونز", link: "company-registration/free-zones" },
        { text: "امارات مین لینڈ", link: "company-registration/mainland" },
      ],
    },
    {
      text: "امارات کاروبار کی تعمیل کی ضمانت",
      collapsed: false,
      items: [
        { text: "کارپوریٹ بینک اکاؤنٹ منظوریوں کی ضمانت", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "ہائی رسک کاروبار کے لئے بینک اکاؤنٹس", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "اپنے کاروبار کو مطابقت پذیر اور محفوظ رکھیں", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "قانونی، اکاؤنٹنگ اور ٹیکس",
      collapsed: false,
      items: [
        { text: "اکاؤنٹنگ اور ٹیکس کے غور و فکر", link: "company-registration/accounting-legal" },
        { text: "UBO رجسٹر", link: "company-registration/ubo" },
      ],
    },
    {
      text: "موازنے",
      collapsed: false,
      items: [
        { text: "مین لینڈ بمقابلہ فری زونز", link: "comparison/mainland-vs-free-zones" },
        { text: "امارات کی ادارہ جات کا موازنہ", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "ہمارے بارے میں", link: "about" },
    { text: "رابطہ", link: "contacts" },
    { text: "رازداری کی پالیسی", link: "Privacy-Policy" },
    { text: "مصنوعی ذہانت کی خدمات کے قانونی ضوابط", link: "Legal-Regulations-for-AI-Services" },
  ]
}

// function sidebarContactUs(): DefaultTheme.SidebarItem[] {
//   return [{ text: "Contacts", link: `contacts` }]
// }