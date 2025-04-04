import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ur"

export const ur = defineConfig({
  description: "متحدہ عرب امارات میں کمپنی کی تشکیل اور معاونتی خدمات میں ماہر۔ کمپنی سیٹ اپ، بینکنگ، ٹیکس، قانونی اور ویزا حل۔ آپ کے کاروباری خوابوں کو حقیقت بنانا!",
  head: [
    ["meta", { property: "og:title", content: "متحدہ عرب امارات میں کمپنی کی تشکیل اور معاونتی خدمات میں ماہر۔ کمپنی سیٹ اپ، بینکنگ، ٹیکس، قانونی اور ویزا حل۔" }],
  ],

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
      { text: "رابطہ", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
    },

    footer: {
      message: `©Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">رازداری کی ترتیبات</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">رازداری پالیسی</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">مصنوعی ذہانت کی خدمات کے لیے قانونی ضوابط</a>`,
    },

    contact_form: {
      name: "نام *",
      namePlaceholder: "آپ کا نام",
      email: "ای میل *",
      emailPlaceholder: "آپ کا ای میل ایڈریس",
      phone: "فون *",
      phonePlaceholder: "مثال، +1 1234567890 یا (1) 123 456-7890",
      phoneError: "براہ کرم فون نمبر درج کریں",
      category: "ہم آپ کی کیسے مدد کر سکتے ہیں؟ *",
      categoryPlaceholder: "سروس کی قسم منتخب کریں",
      message: "آئیے آپ کے مقاصد پر بات کریں (اختیاری)",
      messagePlaceholder: "اپنے پروجیکٹ یا ضروریات کی تفصیل بیان کریں",
      submit: "درخواست جمع کریں",
      sending: "بھیج رہا ہے...",
      successTitle: "شکریہ!",
      successMessage: "آپ کی دلچسپی کے لیے بہت شکریہ! ہماری ٹیم جلد ہی آپ کی ضروریات پر بات کرنے کے لیے آپ سے رابطہ کرے گی۔",
      defaultCategories: ["کمپنی رجسٹریشن", "بینک اکاؤنٹس کھولنا", "EID اور Golden Visa", "دیگر خدمات"],
      defaultButtonText: "مفت مشاورت حاصل کریں",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "متحدہ عرب امارات کاروباری خلاصہ",
      collapsed: false,
      items: [
        { text: "کمپنی رجسٹریشن", link: "company-registration/overview" },
        { text: "فوائد اور مسائل", link: "company-registration/benefits-problems" },
        { text: "کارپوریٹ بینکنگ حل", link: "offer/banking/" },
        { text: "Golden Visa", link: "offer/golden-visa/" },
        { text: "ویزا اور EID", link: "company-registration/employment-visas" },
        { text: "فیس اور ٹائم لائنز", link: "company-registration/fees-timelines" },
        { text: "کامیابی کے بعد ہی ادائیگی", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "متحدہ عرب امارات کارپوریٹ ڈھانچے",
      collapsed: true,
      items: [
        { text: "کمپنی رجسٹریشن کے مراحل", link: "company-registration/insights/incorporation-steps" },
        { text: "UAE free zones", link: "company-registration/free-zones" },
        { text: "UAE mainland", link: "company-registration/mainland" },
      ],
    },
    {
      text: "متحدہ عرب امارات کاروباری تعمیل کی ضمانت",
      collapsed: true,
      items: [
        { text: "کارپوریٹ بینک اکاؤنٹ کی منظوری کی ضمانت", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "ہائی رسک کاروبار کے لیے بینک اکاؤنٹس", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "اپنے کاروبار کو قانونی اور محفوظ رکھیں", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "قانونی، اکاؤنٹنگ اور ٹیکس",
      collapsed: true,
      items: [
        { text: "اکاؤنٹنگ اور ٹیکس کے تحفظات", link: "company-registration/accounting-legal" },
        { text: "UBO رجسٹر", link: "company-registration/ubo" },
      ],
    },
    {
      text: "موازنے",
      collapsed: true,
      items: [
        { text: "Mainland بمقابلہ free zones", link: "comparison/mainland-vs-free-zones" },
        { text: "UAE ادارے کا موازنہ", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "ہمارے بارے میں", link: "about" },
    { text: "رابطے", link: "contacts" },
    { text: "رازداری پالیسی", link: "Privacy-Policy" },
    { text: "مصنوعی ذہانت کی خدمات کے لیے قانونی ضوابط", link: "Legal-Regulations-for-AI-Services" },
  ]
}