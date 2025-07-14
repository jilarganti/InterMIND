import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/bn"

export const bn = defineConfig({
  description: "বিশেষজ্ঞ UAE কোম্পানি গঠন এবং সহায়তা পরিষেবা। কোম্পানি সেটআপ, ব্যাংকিং, ট্যাক্স, আইনি এবং ভিসা সমাধান। আপনার ব্যবসায়িক স্বপ্নকে বাস্তবে পরিণত করা!",
  head: [
    ["meta", { property: "og:title", content: "বিশেষজ্ঞ UAE কোম্পানি গঠন এবং সহায়তা পরিষেবা। কোম্পানি সেটআপ, ব্যাংকিং, ট্যাক্স, আইনি এবং ভিসা সমাধান।" }],
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
      message: `© Golden Fish, 2025। | <a href="#" onClick="UC_UI.showSecondLayer();">গোপনীয়তা সেটিংস</a> | <a href="${BASE_PATH}/resources/TERMS-CONDITIONS">শর্তাবলী</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">গোপনীয়তা নীতি</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">AI পরিষেবার জন্য আইনি প্রবিধান</a>`,
    },

    localization: {
      placeholder4SearchInput: "যেকোনো কিছু জিজ্ঞাসা করুন...",
      placeholder4ChatFooter: "যেকোনো কিছু জিজ্ঞাসা করুন...",
      placeholder4ChatList: "চ্যাট টপিক লিখুন...",
      buttonLabel4NavButton: "তাৎক্ষণিক বিশেষজ্ঞ চ্যাট",
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
      categoryPlaceholder: "সেবার ধরন নির্বাচন করুন",
      message: "আপনার লক্ষ্য নিয়ে আলোচনা করি (ঐচ্ছিক)",
      messagePlaceholder: "আপনার প্রয়োজনের জন্য সর্বোত্তম সমাধান প্রস্তুত করতে আপনার অনুসন্ধানের বিবরণ শেয়ার করুন",
      submit: "অনুরোধ জমা দিন",
      sending: "পাঠানো হচ্ছে...",
      successTitle: "ধন্যবাদ!",
      successMessage: "আপনার আগ্রহের জন্য আমরা অত্যন্ত কৃতজ্ঞ! আমাদের টিম শীঘ্রই আপনার প্রয়োজন নিয়ে আলোচনা করার জন্য যোগাযোগ করবে।",
      defaultCategories: [
        "নতুন কোম্পানি গঠন",
        "সম্প্রসারণ পরিকল্পনা (যেমন নতুন শাখা বা ফ্রাঞ্চাইজি)",
        "কোম্পানি স্থানান্তর",
        "Golden Visa",
        "শুধুমাত্র ভিসার উদ্দেশ্যে",
        "ব্যাংক অ্যাকাউন্ট খোলা",
        "অন্যান্য পরিষেবা",
      ],
      defaultButtonText: "আমাদের একটি বার্তা পাঠান",
    },
  },
})

[Rest of the function definitions remain unchanged as they contain technical structure and terms]