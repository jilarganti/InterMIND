import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/te"

export const te = defineConfig({
  description: "నిపుణులైన యుఏఈ కంపెనీ ఏర్పాటు మరియు మద్దతు సేవలు. కంపెనీ సెటప్, బ్యాంకింగ్, పన్ను, చట్టం మరియు వీసా పరిష్కారాలు. మీ వ్యాపార కలలను నిజం చేస్తున్నాము!",
  head: [
    ["meta", { property: "og:title", content: "నిపుణులైన యుఏఈ కంపెనీ ఏర్పాటు మరియు మద్దతు సేవలు. కంపెనీ సెటప్, బ్యాంకింగ్, పన్ను, చట్టం మరియు వీసా పరిష్కారాలు." }],
  ],

  themeConfig: {
    nav: [
      {
        text: "సేవలు",
        activeMatch: `${BASE_PATH}/company-registration/`,
        items: [
          { text: "కంపెనీ నమోదు", link: `${BASE_PATH}/uae-business/company-registration/overview` },
          { text: "బ్యాంకింగ్ పరిష్కారాలు", link: `${BASE_PATH}/uae-business/company-registration/banking` },
          { text: "వలసలు", link: `${BASE_PATH}/uae-business/company-registration/employment-visas` },
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
      // [`${BASE_PATH}/contact-us/`]: { base: `${BASE_PATH}/contact-us/`, items: sidebarContactUs() },
    },

    footer: {
      message: `©Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">గోప్యతా సెట్టింగ్స్</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">గోప్యతా విధానం</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">AI సేవల కోసం చట్టబద్ధ నియమాలు</a>`,
    },

    localization: {
      placeholder4SearchInput: "త్వరిత అన్వేషణ...",
    },
    contact_form: {
      name: "పేరు *",
      namePlaceholder: "మీ పేరు",
      email: "ఇమెయిల్ *",
      emailPlaceholder: "మీ ఇమెయిల్ చిరునామా",
      phone: "ఫోన్ *",
      phonePlaceholder: "ఉదా., +1 1234567890 లేదా (1) 123 456-7890",
      phoneError: "దయచేసి ఫోన్ నంబర్ ని ఎంటర్ చేయండి",
      category: "మేము మీకు ఎలా సహాయపడగలము? *",
      categoryPlaceholder: "సేవా రకం ఎంచుకోండి",
      message: "మీ లక్ష్యాలను చర్చిద్దాం (ఐచ్ఛికం)",
      messagePlaceholder: "మీ అవసరాల వివరాలను పంచుకోండి, మీ అవసరాలకు ఉత్తమ పరిష్కారం సిద్ధం చేయడానికి మాకు సహాయపడుతుంది",
      submit: "అభ్యర్థన పంపండి",
      sending: "పంపిస్తున్నారు...",
      successTitle: "ధన్యవాదాలు!",
      successMessage: "మీ ఆసక్తికి మేము చాలా కృతజ్ఞతలు తెలుపుతున్నాము! మా బృందం త్వరలో మీతో సంప్రదించి మీ అవసరాలను చర్చిస్తుంది.",
      defaultCategories: [
        "కొత్త కంపెనీ ఏర్పాటు",
        "విస్తరణ ప్రణాళిక (ఉదా. కొత్త శాఖ లేదా ఫ్రాంచైజీ)",
        "కంపెనీ స్థానాంతరణ",
        "గోల్డెన్ వీసా",
        "కేవలం వీసా ఉద్దేశ్యాల కోసం",
        "బ్యాంక్ ఖాతాల తెరవడం",
        "ఇతర సేవలు",
      ],
      defaultButtonText: "మాకు సందేశం పంపండి",
      // defaultButtonText: "ఉచిత సలహా పొందండి",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "యుఏఈ వ్యాపార సారాంశం",
      // collapsed: false,
      items: [
        { text: "కంపెనీ నమోదు", link: "company-registration/overview" },
        { text: "ప్రయోజనాలు & లోపాలు", link: "company-registration/benefits-problems" },
        { text: "కార్పొరేట్ బ్యాంకింగ్ పరిష్కారాలు", link: "company-registration/banking" },
        { text: "గోల్డెన్ వీసా", link: "company-registration//golden-visa" },
        { text: "వీసాలు & EID", link: "company-registration/employment-visas" },
        { text: "ఫీజులు మరియు సమయాలు", link: "company-registration/fees-timelines" },
        { text: "విజయం తర్వాత మాత్రమే చెల్లించండి", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "యుఏఈ కార్పొరేట్ నిర్మాణాలు",
      collapsed: false,
      items: [
        { text: "కంపెనీ నమోదు దశలు", link: "company-registration/insights/incorporation-steps" },
        { text: "యుఏఈ ఫ్రీ జోన్స్", link: "company-registration/free-zones" },
        { text: "యుఏఈ మెయిన్ల్యాండ్", link: "company-registration/mainland" },
      ],
    },
    {
      text: "యుఏఈ వ్యాపార అనుసరణ హామీ",
      collapsed: false,
      items: [
        { text: "హామీ ఇచ్చిన కార్పొరేట్ బ్యాంక్ ఖాతా ఆమోదాలు", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "అధిక రిస్క్ వ్యాపారాల కోసం బ్యాంక్ ఖాతాలు", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "మీ వ్యాపారాన్ని అనుసరణలో మరియు రక్షించబడినట్లు ఉంచండి", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "చట్టం, లెక్కింపు మరియు పన్ను",
      collapsed: false,
      items: [
        { text: "లెక్కింపు మరియు పన్ను పరిగణనలు", link: "company-registration/accounting-legal" },
        { text: "UBO రిజిస్టర్", link: "company-registration/ubo" },
      ],
    },
    {
      text: "పోలికలు",
      collapsed: false,
      items: [
        { text: "మెయిన్ల్యాండ్ vs ఫ్రీ జోన్స్", link: "comparison/mainland-vs-free-zones" },
        { text: "యుఏఈ సంస్థల పోలిక", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "మా గురించి", link: "about" },
    { text: "సంప్రదింపులు", link: "contacts" },
    { text: "గోప్యతా విధానం", link: "Privacy-Policy" },
    { text: "AI సేవల కోసం చట్టబద్ధ నియమాలు", link: "Legal-Regulations-for-AI-Services" },
  ]
}

// function sidebarContactUs(): DefaultTheme.SidebarItem[] {
//   return [{ text: "సంప్రదింపులు", link: `contacts` }]
// }