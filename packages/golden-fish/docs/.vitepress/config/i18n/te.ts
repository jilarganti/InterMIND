import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/te"

export const te = defineConfig({
  description: "నిపుణ UAE కంపెనీ ఏర్పాటు మరియు మద్దతు సేవలు. కంపెనీ సెటప్, బ్యాంకింగ్, పన్ను, చట్టపరమైన మరియు వీసా పరిష్కారాలు. మీ వ్యాపార కలలను వాస్తవంగా మార్చడం!",
  head: [
    ["meta", { property: "og:title", content: "నిపుణ UAE కంపెనీ ఏర్పాటు మరియు మద్దతు సేవలు. కంపెనీ సెటప్, బ్యాంకింగ్, పన్ను, చట్టపరమైన మరియు వీసా పరిష్కారాలు." }],
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
      { text: "సంప్రదింపులు", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
    },

    footer: {
      message: `© Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">గోప్యతా సెట్టింగ్‌లు</a> | <a href="${BASE_PATH}/resources/TERMS-CONDITIONS">నిబంధనలు & షరతులు</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">గోప్యతా విధానం</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">AI సేవల కోసం చట్టపరమైన నిబంధనలు</a>`,
    },

    localization: {
      placeholder4SearchInput: "ఏదైనా అడగండి...",
      placeholder4ChatFooter: "ఏదైనా అడగండి...",
      placeholder4ChatList: "చాట్ అంశాన్ని నమోదు చేయండి...",
      buttonLabel4NavButton: "తక్షణ నిపుణ చాట్",
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
      messagePlaceholder: "మీ అవసరాలకు ఉత్తమమైన పరిష్కారాన్ని సిద్ధం చేయడానికి దయచేసి మీ విచారణ వివరాలను పంచుకోండి",
      submit: "అభ్యర్థనను సమర్పించండి",
      sending: "పంపుతోంది...",
      successTitle: "ధన్యవాదాలు!",
      successMessage: "మీ ఆసక్తిని మేము ఎంతగానో అభినందిస్తున్నాము! మా బృందం త్వరలో మీ అవసరాలను చర్చించడానికి మిమ్మల్ని సంప్రదిస్తుంది.",
      defaultCategories: [
        "కొత్త కంపెనీ ఏర్పాటు",
        "విస్తరణ ప్రణాళిక (అంటే కొత్త శాఖ లేదా ఫ్రాంచైజీ)",
        "కంపెనీ స్థలాంతరం",
        "Golden Visa",
        "వీసా ప్రయోజనాల కోసం మాత్రమే",
        "బ్యాంక్ ఖాతాలు తెరవడం",
        "ఇతర సేవలు",
      ],
      defaultButtonText: "మాకు సందేశం పంపండి",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "UAE వ్యాపార సారాంశం",
      items: [
        { text: "కంపెనీ రిజిస్ట్రేషన్", link: "company-registration/overview" },
        { text: "ప్రయోజనాలు & నష్టాలు", link: "company-registration/benefits-problems" },
        { text: "కార్పొరేట్ బ్యాంకింగ్ పరిష్కారాలు", link: "company-registration/banking" },
        { text: "Golden Visa", link: "company-registration//golden-visa" },
        { text: "వీసాలు & EID", link: "company-registration/employment-visas" },
        { text: "ఫీజులు మరియు కాలవ్యవధులు", link: "company-registration/fees-timelines" },
        { text: "విజయం తర్వాత మాత్రమే చెల్లించండి", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "UAE కార్పొరేట్ నిర్మాణాలు",
      collapsed: false,
      items: [
        { text: "కంపెనీ రిజిస్ట్రేషన్ దశలు", link: "company-registration/insights/incorporation-steps" },
        { text: "UAE free zones", link: "company-registration/free-zones" },
        { text: "UAE mainland", link: "company-registration/mainland" },
      ],
    },
    {
      text: "UAE వ్యాపార అనుసరణ హామీ ఇవ్వబడింది",
      collapsed: false,
      items: [
        { text: "హామీ ఇవ్వబడిన కార్పొరేట్ బ్యాంక్ ఖాతా ఆమోదాలు", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "అధిక-రిస్క్ వ్యాపారానికి బ్యాంక్ ఖాతాలు", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "మీ వ్యాపారాన్ని అనుసరణలో ఉంచండి మరియు రక్షించండి", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "చట్టపరమైన, అకౌంటింగ్ మరియు పన్ను",
      collapsed: false,
      items: [
        { text: "అకౌంటింగ్ మరియు పన్ను పరిగణనలు", link: "company-registration/accounting-legal" },
        { text: "UBO రిజిస్టర్", link: "company-registration/ubo" },
      ],
    },
    {
      text: "పోలికలు",
      collapsed: false,
      items: [
        { text: "Mainland vs free zones", link: "comparison/mainland-vs-free-zones" },
        { text: "UAE సంస్థల పోలిక", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "మా గురించి", link: "about" },
    { text: "సంప్రదింపులు", link: "contacts" },
    { text: "నిబంధనలు & షరతులు", link: "TERMS-CONDITIONS" },
    { text: "గోప్యతా విధానం", link: "Privacy-Policy" },
    { text: "AI సేవల కోసం చట్టపరమైన నిబంధనలు", link: "Legal-Regulations-for-AI-Services" },
  ]
}