import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/bn"

export const bn = defineConfig({
  description: "ইউএই কোম্পানি গঠন এবং সহায়তা পরিষেবায় বিশেষজ্ঞ। কোম্পানি সেটআপ, ব্যাংকিং, ট্যাক্স, আইনি এবং ভিসা সমাধান। আপনার ব্যবসায়িক স্বপ্নকে বাস্তবে পরিণত করি!",
  head: [
    ["meta", { property: "og:title", content: "ইউএই কোম্পানি গঠন এবং সহায়তা পরিষেবায় বিশেষজ্ঞ। কোম্পানি সেটআপ, ব্যাংকিং, ট্যাক্স, আইনি এবং ভিসা সমাধান।" }],
  ],

  themeConfig: {
    nav: [
      {
        text: "পরিষেবাসমূহ",
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
    },

    footer: {
      message: `©Golden Fish, 2025। | <a href="#" onClick="UC_UI.showSecondLayer();">গোপনীয়তা সেটিংস</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">গোপনীয়তা নীতি</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">এআই পরিষেবার জন্য আইনি প্রবিধান</a>`,
    },

    contact_form: {
      name: "নাম *",
      namePlaceholder: "আপনার নাম",
      email: "ইমেইল *",
      emailPlaceholder: "আপনার ইমেইল ঠিকানা",
      phone: "ফোন *",
      phonePlaceholder: "যেমন, +1 1234567890 বা (1) 123 456-7890",
      phoneError: "অনুগ্রহ করে ফোন নম্বর দিন",
      category: "আমরা কিভাবে সাহায্য করতে পারি? *",
      categoryPlaceholder: "পরিষেবার ধরন নির্বাচন করুন",
      message: "আপনার লক্ষ্য নিয়ে আলোচনা করি (ঐচ্ছিক)",
      messagePlaceholder: "আপনার প্রকল্প বা প্রয়োজনীয়তা বর্ণনা করুন",
      submit: "অনুরোধ জমা দিন",
      sending: "পাঠানো হচ্ছে...",
      successTitle: "ধন্যবাদ!",
      successMessage: "আপনার আগ্রহের জন্য আমরা অত্যন্ত কৃতজ্ঞ! আমাদের টিম শীঘ্রই আপনার প্রয়োজনীয়তা নিয়ে আলোচনা করার জন্য যোগাযোগ করবে।",
      defaultCategories: ["কোম্পানি নিবন্ধন", "ব্যাংক অ্যাকাউন্ট খোলা", "EID এবং Golden Visa", "অন্যান্য পরিষেবা"],
      defaultButtonText: "বিনামূল্যে পরামর্শ নিন",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "ইউএই ব্যবসার সারসংক্ষেপ",
      collapsed: false,
      items: [
        { text: "কোম্পানি নিবন্ধন", link: "company-registration/overview" },
        { text: "সুবিধা ও অসুবিধা", link: "company-registration/benefits-problems" },
        { text: "কর্পোরেট ব্যাংকিং সমাধান", link: "offer/banking/" },
        { text: "Golden Visa", link: "offer/golden-visa/" },
        { text: "ভিসা ও EID", link: "company-registration/employment-visas" },
        { text: "ফি এবং সময়সীমা", link: "company-registration/fees-timelines" },
        { text: "সফলতার পরেই শুধু পেমেন্ট", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "ইউএই কর্পোরেট কাঠামো",
      collapsed: true,
      items: [
        { text: "কোম্পানি নিবন্ধনের ধাপসমূহ", link: "company-registration/insights/incorporation-steps" },
        { text: "UAE free zones", link: "company-registration/free-zones" },
        { text: "UAE mainland", link: "company-registration/mainland" },
      ],
    },
    {
      text: "ইউএই ব্যবসায়িক অনুবর্তিতা নিশ্চিত",
      collapsed: true,
      items: [
        { text: "নিশ্চিত কর্পোরেট ব্যাংক অ্যাকাউন্ট অনুমোদন", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "উচ্চ-ঝুঁকিপূর্ণ ব্যবসার জন্য ব্যাংক অ্যাকাউন্ট", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "আপনার ব্যবসা অনুবর্তী এবং সুরক্ষিত রাখুন", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "আইনি, হিসাবরক্ষণ এবং কর",
      collapsed: true,
      items: [
        { text: "হিসাবরক্ষণ এবং কর বিবেচনা", link: "company-registration/accounting-legal" },
        { text: "UBO রেজিস্টার", link: "company-registration/ubo" },
      ],
    },
    {
      text: "তুলনামূলক বিশ্লেষণ",
      collapsed: true,
      items: [
        { text: "Mainland বনাম free zones", link: "comparison/mainland-vs-free-zones" },
        { text: "ইউএই সত্তার তুলনা", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "আমাদের সম্পর্কে", link: "about" },
    { text: "যোগাযোগ", link: "contacts" },
    { text: "গোপনীয়তা নীতি", link: "Privacy-Policy" },
    { text: "এআই পরিষেবার জন্য আইনি প্রবিধান", link: "Legal-Regulations-for-AI-Services" },
  ]
}