import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/te"

export const te = defineConfig({
  description: "నిపుణుల UAE కంపెనీ ఏర్పాటు మరియు మద్దతు సేవలు. కంపెనీ సెటప్, బ్యాంకింగ్, పన్ను, చట్టపరమైన మరియు వీసా పరిష్కారాలు. మీ వ్యాపార కలలను వాస్తవంగా మారుస్తున్నాము!",
  head: [
    ["meta", { property: "og:title", content: "నిపుణుల UAE కంపెనీ ఏర్పాటు మరియు మద్దతు సేవలు. కంపెనీ సెటప్, బ్యాంకింగ్, పన్ను, చట్టపరమైన మరియు వీసా పరిష్కారాలు." }],
  ],

  themeConfig: {
    nav: [
      {
        text: "సేవలు",
        activeMatch: `${BASE_PATH}/company-registration/`,
        items: [
          { text: "కంపెనీ రిజిస్ట్రేషన్", link: `${BASE_PATH}/uae-business/company-registration/overview` },
          { text: "బ్యాంకింగ్ పరిష్కారాలు", link: `${BASE_PATH}/uae-business/company-registration/banking` },
          { text: "వలస", link: `${BASE_PATH}/uae-business/company-registration/employment-visas` },
        ],
      },
      {
        text: "వనరులు",
        items: [{ text: "మా గురించి", link: `${BASE_PATH}/resources/about` }],
      },
      { text: "సంప్రదించండి", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
      [`${BASE_PATH}/contact-us/`]: { base: `${BASE_PATH}/contact-us/`, items: sidebarContactUs() },
    },

    footer: {
      message: '©Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">గోప్యతా సెట్టింగ్‌లు</a>',
    },

    contact_form: {
      name: "పేరు *",
      namePlaceholder: "మీ పేరు",
      email: "ఇమెయిల్ *",
      emailPlaceholder: "మీ ఇమెయిల్ చిరునామా",
      phone: "ఫోన్ *",
      phonePlaceholder: "ఉదా., +1 1234567890 లేదా (1) 123 456-7890",
      phoneError: "దయచేసి ఫోన్ నంబర్‌ను నమోదు చేయండి",
      category: "మేము మీకు ఎలా సహాయపడగలం? *",
      categoryPlaceholder: "సేవా రకాన్ని ఎంచుకోండి",
      message: "మీ లక్ష్యాల గురించి చర్చించుకుందాం (ఐచ్ఛికం)",
      messagePlaceholder: "మీ ప్రాజెక్ట్ లేదా అవసరాలను వివరించండి",
      submit: "అభ్యర్థనను సమర్పించండి",
      sending: "పంపుతోంది...",
      successTitle: "ధన్యవాదాలు!",
      successMessage: "మీ ఆసక్తికి చాలా కృతజ్ఞతలు! మా బృందం త్వరలో మీ అవసరాలను చర్చించడానికి మిమ్మల్ని సంప్రదిస్తుంది.",
      defaultCategories: ["కంపెనీ రిజిస్ట్రేషన్", "బ్యాంక్ ఖాతాలు తెరవడం", "EID & Golden Visa", "ఇతర సేవలు"],
      defaultButtonText: "ఉచిత సలహా పొందండి",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "UAE వ్యాపార సారాంశం",
      collapsed: false,
      items: [
        { text: "కంపెనీ రిజిస్ట్రేషన్", link: "company-registration/overview" },
        { text: "ప్రయోజనాలు & నష్టాలు", link: "company-registration/benefits-problems" },
        { text: "కార్పొరేట్ బ్యాంకింగ్ పరిష్కారాలు", link: "offer/banking/" },
        { text: "Golden Visa", link: "offer/golden-visa/" },
        { text: "వీసాలు & EID", link: "company-registration/employment-visas" },
        { text: "ఫీజులు మరియు కాలవ్యవధులు", link: "company-registration/fees-timelines" },
        { text: "విజయం తర్వాత మాత్రమే చెల్లించండి", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "UAE కార్పొరేట్ నిర్మాణాలు",
      collapsed: true,
      items: [
        { text: "కంపెనీ రిజిస్ట్రేషన్ దశలు", link: "company-registration/insights/incorporation-steps" },
        { text: "UAE free zones", link: "company-registration/free-zones" },
        { text: "UAE mainland", link: "company-registration/mainland" },
      ],
    },
    {
      text: "UAE వ్యాపార అనుసరణ హామీ ఇవ్వబడింది",
      collapsed: true,
      items: [
        { text: "హామీ ఇచ్చిన కార్పొరేట్ బ్యాంక్ ఖాతా ఆమోదాలు", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "అధిక-రిస్క్ వ్యాపారానికి బ్యాంక్ ఖాతాలు", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "మీ వ్యాపారాన్ని అనుసరణలో ఉంచండి మరియు రక్షించండి", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "చట్టపరమైన, అకౌంటింగ్ మరియు పన్ను",
      collapsed: true,
      items: [
        { text: "అకౌంటింగ్ మరియు పన్ను పరిగణనలు", link: "company-registration/accounting-legal" },
        { text: "UBO రిజిస్టర్", link: "company-registration/ubo" },
      ],
    },
    {
      text: "పోలికలు",
      collapsed: true,
      items: [
        { text: "Mainland vs free zones", link: "comparison/mainland-vs-free-zones" },
        { text: "UAE సంస్థల పోలిక", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [{ text: "మా గురించి", link: `about` }]
}

function sidebarContactUs(): DefaultTheme.SidebarItem[] {
  return [{ text: "సంప్రదింపులు", link: `contacts` }]
}