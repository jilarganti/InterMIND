import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/bn"

export const bn = defineConfig({
  description: "দক্ষ ইউএই কোম্পানি গঠন এবং সমর্থন সেবা। কোম্পানি সেটআপ, ব্যাংকিং, ট্যাক্স, আইনি এবং ভিসা সমাধান। আপনার ব্যবসায়িক স্বপ্নকে বাস্তবে রূপ দিচ্ছি!",
  head: [
    ["meta", { property: "og:title", content: "দক্ষ ইউএই কোম্পানি গঠন এবং সমর্থন সেবা। কোম্পানি সেটআপ, ব্যাংকিং, ট্যাক্স, আইনি এবং ভিসা সমাধান।" }],
  ],

  themeConfig: {
    nav: [
      {
        text: "সেবাসমূহ",
        activeMatch: `${BASE_PATH}/company-registration/`,
        items: [
          { text: "কোম্পানি নিবন্ধন", link: `${BASE_PATH}/uae-business/company-registration/overview` },
          { text: "ব্যাংকিং সমাধান", link: `${BASE_PATH}/uae-business/company-registration/banking` },
          { text: "মাইগ্রেশন", link: `${BASE_PATH}/uae-business/company-registration/employment-visas` },
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
      message: `©Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">গোপনীয়তা সেটিংস</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">গোপনীয়তা নীতি</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">এআই সেবার জন্য আইনি নিয়মাবলী</a>`,
    },

    localization: {
      placeholder4SearchInput: "দ্রুত অনুসন্ধান...",
    },
    contact_form: {
      name: "নাম *",
      namePlaceholder: "আপনার নাম",
      email: "ইমেইল *",
      emailPlaceholder: "আপনার ইমেইল ঠিকানা",
      phone: "ফোন *",
      phonePlaceholder: "উদাহরণস্বরূপ, +1 1234567890 অথবা (1) 123 456-7890",
      phoneError: "অনুগ্রহ করে ফোন নম্বর লিখুন",
      category: "আমরা কিভাবে আপনাকে সাহায্য করতে পারি? *",
      categoryPlaceholder: "সেবা ধরন নির্বাচন করুন",
      message: "আপনার লক্ষ্য নিয়ে আলোচনা করা যাক (ঐচ্ছিক)",
      messagePlaceholder: "আমাদের জন্য সেরা সমাধান প্রস্তুত করতে আপনার অনুসন্ধানের বিবরণ ভাগ করুন",
      submit: "অনুরোধ জমা দিন",
      sending: "পাঠানো হচ্ছে...",
      successTitle: "ধন্যবাদ!",
      successMessage: "আপনার আগ্রহের জন্য আমরা অত্যন্ত কৃতজ্ঞ! আমাদের দল শীঘ্রই আপনার সাথে যোগাযোগ করবে এবং আপনার প্রয়োজনীয়তা নিয়ে আলোচনা করবে।",
      defaultCategories: [
        "নতুন কোম্পানি গঠন",
        "বিস্তার পরিকল্পনা (যেমন নতুন শাখা বা ফ্র্যাঞ্চাইজি)",
        "কোম্পানি স্থানান্তর",
        "গোল্ডেন ভিসা",
        "শুধুমাত্র ভিসা উদ্দেশ্যে",
        "ব্যাংক অ্যাকাউন্ট খোলা",
        "অন্যান্য সেবা",
      ],
      defaultButtonText: "আমাদের বার্তা পাঠান",
      // defaultButtonText: "একটি বিনামূল্যে পরামর্শ পান",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "ইউএই ব্যবসার সারাংশ",
      // collapsed: false,
      items: [
        { text: "কোম্পানি নিবন্ধন", link: "company-registration/overview" },
        { text: "সুবিধা ও অসুবিধা", link: "company-registration/benefits-problems" },
        { text: "কর্পোরেট ব্যাংকিং সমাধান", link: "company-registration/banking" },
        { text: "গোল্ডেন ভিসা", link: "company-registration//golden-visa" },
        { text: "ভিসা ও ইআইডি", link: "company-registration/employment-visas" },
        { text: "ফি এবং সময়সীমা", link: "company-registration/fees-timelines" },
        { text: "সাফল্যের পর শুধুমাত্র পেমেন্ট", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "ইউএই কর্পোরেট কাঠামো",
      collapsed: false,
      items: [
        { text: "কোম্পানি নিবন্ধনের ধাপসমূহ", link: "company-registration/insights/incorporation-steps" },
        { text: "ইউএই ফ্রি জোন", link: "company-registration/free-zones" },
        { text: "ইউএই মেইনল্যান্ড", link: "company-registration/mainland" },
      ],
    },
    {
      text: "ইউএই ব্যবসা অনুযায়ী নিশ্চিত কমপ্লায়েন্স",
      collapsed: false,
      items: [
        { text: "গ্যারান্টিড কর্পোরেট ব্যাংক অ্যাকাউন্ট অনুমোদন", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "উচ্চ-ঝুঁকি ব্যবসার জন্য ব্যাংক অ্যাকাউন্ট", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "আপনার ব্যবসাকে অনুযায়ী এবং সুরক্ষিত রাখুন", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "আইনি, হিসাবরক্ষণ এবং ট্যাক্স",
      collapsed: false,
      items: [
        { text: "হিসাবরক্ষণ এবং ট্যাক্স বিবেচনা", link: "company-registration/accounting-legal" },
        { text: "ইউবিও রেজিস্টার", link: "company-registration/ubo" },
      ],
    },
    {
      text: "তুলনা",
      collapsed: false,
      items: [
        { text: "মেইনল্যান্ড বনাম ফ্রি জোন", link: "comparison/mainland-vs-free-zones" },
        { text: "ইউএই এন্টিটি তুলনা", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "আমাদের সম্পর্কে", link: "about" },
    { text: "যোগাযোগ", link: "contacts" },
    { text: "গোপনীয়তা নীতি", link: "Privacy-Policy" },
    { text: "এআই সেবার জন্য আইনি নিয়মাবলী", link: "Legal-Regulations-for-AI-Services" },
  ]
}

// function sidebarContactUs(): DefaultTheme.SidebarItem[] {
//   return [{ text: "Contacts", link: `contacts` }]
// }