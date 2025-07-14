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
      { text: "رابطے", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
    },

    footer: {
      message: `© Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">رازداری کی ترتیبات</a> | <a href="${BASE_PATH}/resources/TERMS-CONDITIONS">شرائط و ضوابط</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">رازداری کی پالیسی</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">مصنوعی ذہانت کی خدمات کے لیے قانونی ضوابط</a>`,
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
      email: "ای میل *",
      emailPlaceholder: "آپ کا ای میل ایڈریس",
      phone: "فون *",
      phonePlaceholder: "مثال، +1 1234567890 یا (1) 123 456-7890",
      phoneError: "براہ کرم فون نمبر درج کریں",
      category: "ہم آپ کی کیسے مدد کر سکتے ہیں؟ *",
      categoryPlaceholder: "سروس کی قسم منتخب کریں",
      message: "آئیے آپ کے مقاصد پر بات کریں (اختیاری)",
      messagePlaceholder: "براہ کرم اپنی استفسار کی تفصیلات شیئر کریں تاکہ ہم آپ کی ضروریات کے لیے بہترین حل تیار کر سکیں",
      submit: "درخواست جمع کریں",
      sending: "بھیج رہا ہے...",
      successTitle: "شکریہ!",
      successMessage: "آپ کی دلچسپی کے لیے بہت شکریہ! ہماری ٹیم جلد ہی آپ کی ضروریات پر بات کرنے کے لیے آپ سے رابطہ کرے گی۔",
      defaultCategories: [
        "نئی کمپنی کی تشکیل",
        "توسیعی منصوبہ (جیسے نئی برانچ یا فرنچائز)",
        "کمپنی کی منتقلی",
        "Golden Visa",
        "صرف ویزا کے مقاصد",
        "بینک اکاؤنٹس کھولنا",
        "دیگر خدمات",
      ],
      defaultButtonText: "ہمیں پیغام بھیجیں",
    },
  },
})

[Rest of the code with function definitions remains unchanged as it contains technical terms and structure]