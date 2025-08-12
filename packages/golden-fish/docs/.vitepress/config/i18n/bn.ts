import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/bn"

export const bn = defineConfig({
  description: "বিশেষজ্ঞ UAE কোম্পানি গঠন এবং সহায়তা সেবা। কোম্পানি স্থাপনা, ব্যাংকিং, কর, আইনি এবং ভিসা সমাধান। আপনার ব্যবসায়িক স্বপ্নকে বাস্তব করে তুলুন!",
  head: [["meta", { property: "og:title", content: "বিশেষজ্ঞ UAE কোম্পানি গঠন এবং সহায়তা সেবা। কোম্পানি স্থাপনা, ব্যাংকিং, কর, আইনি এবং ভিসা সমাধান।" }]],

  themeConfig: {
    nav: [
      {
        text: "সেবাসমূহ",
        activeMatch: `${BASE_PATH}/company-registration/`,
        items: [
          { text: "কোম্পানি নিবন্ধন", link: `${BASE_PATH}/uae-business/company-registration/overview` },
          { text: "ব্যাংকিং সমাধান", link: `${BASE_PATH}/uae-business/company-registration/banking` },
          { text: "অভিবাসন", link: `${BASE_PATH}/uae-business/company-registration/employment-visas` },
        ],
      },
      {
        text: "রিসোর্স",
        items: [{ text: "আমাদের সম্পর্কে", link: `${BASE_PATH}/resources/about` }],
      },
      { text: "যোগাযোগ", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
      // [`${BASE_PATH}/contact-us/`]: { base: `${BASE_PATH}/contact-us/`, items: sidebarContactUs() },
    },

    footer: {
      message: `© Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">গোপনীয়তা সেটিংস</a> | <a href="${BASE_PATH}/resources/TERMS-CONDITIONS">শর্তাবলী</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">গোপনীয়তা নীতি</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">AI সেবার জন্য আইনি নিয়মাবলী</a>`,
    },

    localization: {
      placeholder4SearchInput: "যেকোনো কিছু জিজ্ঞাসা করুন...",
      placeholder4ChatFooter: "যেকোনো কিছু জিজ্ঞাসা করুন...",
      placeholder4ChatList: "চ্যাট বিষয় লিখুন...",
      buttonLabel4NavButton: "তাৎক্ষণিক বিশেষজ্ঞ চ্যাট",
    },
    contact_form: {
      name: "নাম *",
      namePlaceholder: "আপনার নাম",
      email: "ইমেইল *",
      emailPlaceholder: "আপনার ইমেইল ঠিকানা",
      phone: "ফোন *",
      phonePlaceholder: "যেমন, +১ ১২৩৪৫৬৭৮৯০ বা (১) ১২৩ ৪৫৬-৭৮৯০",
      phoneError: "অনুগ্রহ করে ফোন নম্বর লিখুন",
      category: "আমরা আপনাকে কীভাবে সাহায্য করতে পারি? *",
      categoryPlaceholder: "সেবার ধরন নির্বাচন করুন",
      message: "আসুন আপনার লক্ষ্য নিয়ে আলোচনা করি (ঐচ্ছিক)",
      messagePlaceholder: "আপনার প্রয়োজনের জন্য সর্বোত্তম সমাধান প্রস্তুত করতে সাহায্য করার জন্য অনুগ্রহ করে আপনার অনুসন্ধানের বিস্তারিত শেয়ার করুন",
      submit: "অনুরোধ জমা দিন",
      sending: "পাঠানো হচ্ছে...",
      successTitle: "ধন্যবাদ!",
      successMessage: "আমরা আপনার আগ্রহের জন্য অত্যন্ত কৃতজ্ঞ! আমাদের দল শীঘ্রই আপনার প্রয়োজন নিয়ে আলোচনা করতে আপনার সাথে যোগাযোগ করবে।",
      defaultCategories: [
        "নতুন কোম্পানি গঠন",
        "সম্প্রসারণ পরিকল্পনা (যেমন নতুন শাখা বা ফ্র্যাঞ্চাইজি)",
        "কোম্পানি স্থানান্তর",
        "Golden Visa",
        "শুধুমাত্র ভিসার উদ্দেশ্যে",
        "ব্যাংক অ্যাকাউন্ট খোলা",
        "অন্যান্য সেবা",
      ],
      defaultButtonText: "আমাদের একটি বার্তা পাঠান",
      // defaultButtonText: "একটি বিনামূল্যে পরামর্শ নিন",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "UAE ব্যবসার সারসংক্ষেপ",
      // collapsed: false,
      items: [
        { text: "কোম্পানি নিবন্ধন", link: "company-registration/overview" },
        { text: "সুবিধা ও অসুবিধা", link: "company-registration/benefits-problems" },
        { text: "কর্পোরেট ব্যাংকিং সমাধান", link: "company-registration/banking" },
        { text: "Golden Visa", link: "company-registration//golden-visa" },
        { text: "ভিসা ও EID", link: "company-registration/employment-visas" },
        { text: "ফি এবং সময়সীমা", link: "company-registration/fees-timelines" },
        { text: "শুধুমাত্র সফলতার পর পেমেন্ট", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "UAE কর্পোরেট কাঠামো",
      collapsed: false,
      items: [
        { text: "কোম্পানি নিবন্ধনের ধাপসমূহ", link: "company-registration/insights/incorporation-steps" },
        { text: "UAE Free Zone", link: "company-registration/free-zones" },
        { text: "UAE Mainland", link: "company-registration/mainland" },
      ],
    },
    {
      text: "UAE ব্যবসায়িক সম্মতি নিশ্চিত",
      collapsed: false,
      items: [
        { text: "নিশ্চিত কর্পোরেট ব্যাংক অ্যাকাউন্ট অনুমোদন", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "উচ্চ ঝুঁকিপূর্ণ ব্যবসার জন্য ব্যাংক অ্যাকাউন্ট", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "আপনার ব্যবসাকে সম্মতিপূর্ণ এবং সুরক্ষিত রাখুন", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "আইনি, হিসাবরক্ষণ এবং কর",
      collapsed: false,
      items: [
        { text: "হিসাবরক্ষণ এবং কর বিবেচনা", link: "company-registration/accounting-legal" },
        { text: "UBO নিবন্ধন", link: "company-registration/ubo" },
      ],
    },
    {
      text: "তুলনা",
      collapsed: false,
      items: [
        { text: "Mainland বনাম Free Zone", link: "comparison/mainland-vs-free-zones" },
        { text: "UAE সত্তার তুলনা", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "আমাদের সম্পর্কে", link: "about" },
    { text: "যোগাযোগ", link: "contacts" },
    { text: "শর্তাবলী", link: "TERMS-CONDITIONS" },
    { text: "গোপনীয়তা নীতি", link: "Privacy-Policy" },
    { text: "AI সেবার জন্য আইনি নিয়মাবলী", link: "Legal-Regulations-for-AI-Services" },
  ]
}

// function sidebarContactUs(): DefaultTheme.SidebarItem[] {
//   return [{ text: "যোগাযোগ", link: `contacts` }]
// }
