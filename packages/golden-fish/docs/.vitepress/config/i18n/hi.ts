import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/hi"

export const hi = defineConfig({
  description: "यूएई में विशेषज्ञ कंपनी स्थापना और सहायता सेवाएं। कंपनी सेटअप, बैंकिंग, कर, कानूनी और वीजा समाधान। आपके व्यवसायिक सपनों को साकार करना!",
  head: [
    ["meta", { property: "og:title", content: "यूएई में विशेषज्ञ कंपनी स्थापना और सहायता सेवाएं। कंपनी सेटअप, बैंकिंग, कर, कानूनी और वीजा समाधान।" }],
  ],

  themeConfig: {
    nav: [
      {
        text: "सेवाएं",
        activeMatch: `${BASE_PATH}/company-registration/`,
        items: [
          { text: "कंपनी पंजीकरण", link: `${BASE_PATH}/uae-business/company-registration/overview` },
          { text: "बैंकिंग समाधान", link: `${BASE_PATH}/uae-business/company-registration/banking` },
          { text: "प्रवास", link: `${BASE_PATH}/uae-business/company-registration/employment-visas` },
        ],
      },
      {
        text: "संसाधन",
        items: [{ text: "हमारे बारे में", link: `${BASE_PATH}/resources/about` }],
      },
      { text: "संपर्क", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
    },

    footer: {
      message: `©Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">गोपनीयता सेटिंग्स</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">गोपनीयता नीति</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">एआई सेवाओं के लिए कानूनी नियम</a>`,
    },

    localization: {
      placeholder4SearchInput: "त्वरित खोज...",
    },
    contact_form: {
      name: "नाम *",
      namePlaceholder: "आपका नाम",
      email: "ईमेल *",
      emailPlaceholder: "आपका ईमेल पता",
      phone: "फोन *",
      phonePlaceholder: "उदाहरण, +1 1234567890 या (1) 123 456-7890",
      phoneError: "कृपया फोन नंबर दर्ज करें",
      category: "हम आपकी कैसे मदद कर सकते हैं? *",
      categoryPlaceholder: "सेवा प्रकार चुनें",
      message: "आइए आपके लक्ष्यों पर चर्चा करें (वैकल्पिक)",
      messagePlaceholder: "कृपया अपनी पूछताछ का विवरण साझा करें ताकि हम आपकी जरूरतों के लिए सर्वोत्तम समाधान तैयार कर सकें",
      submit: "अनुरोध भेजें",
      sending: "भेज रहे हैं...",
      successTitle: "धन्यवाद!",
      successMessage: "आपकी रुचि के लिए हम बहुत आभारी हैं! हमारी टीम आपकी जरूरतों पर चर्चा करने के लिए जल्द ही आपसे संपर्क करेगी।",
      defaultCategories: [
        "नई कंपनी स्थापना",
        "विस्तार योजना (जैसे नई शाखा या फ्रेंचाइजी)",
        "कंपनी स्थानांतरण",
        "Golden Visa",
        "केवल वीजा उद्देश्य",
        "बैंक खाते खोलना",
        "अन्य सेवाएं",
      ],
      defaultButtonText: "हमें संदेश भेजें",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "यूएई व्यवसाय सारांश",
      items: [
        { text: "कंपनी पंजीकरण", link: "company-registration/overview" },
        { text: "फायदे और नुकसान", link: "company-registration/benefits-problems" },
        { text: "कॉर्पोरेट बैंकिंग समाधान", link: "company-registration/banking" },
        { text: "Golden Visa", link: "company-registration//golden-visa" },
        { text: "वीजा और EID", link: "company-registration/employment-visas" },
        { text: "शुल्क और समय सीमा", link: "company-registration/fees-timelines" },
        { text: "सफलता के बाद ही भुगतान", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "यूएई कॉर्पोरेट संरचनाएं",
      collapsed: false,
      items: [
        { text: "कंपनी पंजीकरण के चरण", link: "company-registration/insights/incorporation-steps" },
        { text: "UAE free zones", link: "company-registration/free-zones" },
        { text: "UAE mainland", link: "company-registration/mainland" },
      ],
    },
    {
      text: "यूएई व्यवसाय अनुपालन गारंटीकृत",
      collapsed: false,
      items: [
        { text: "गारंटीकृत कॉर्पोरेट बैंक खाता स्वीकृतियां", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "उच्च जोखिम वाले व्यवसाय के लिए बैंक खाते", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "अपने व्यवसाय को अनुपालन और सुरक्षित रखें", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "कानूनी, लेखा और कर",
      collapsed: false,
      items: [
        { text: "लेखा और कर विचार", link: "company-registration/accounting-legal" },
        { text: "UBO रजिस्टर", link: "company-registration/ubo" },
      ],
    },
    {
      text: "तुलनाएं",
      collapsed: false,
      items: [
        { text: "Mainland बनाम free zones", link: "comparison/mainland-vs-free-zones" },
        { text: "यूएई संस्थाओं की तुलना", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "हमारे बारे में", link: "about" },
    { text: "संपर्क", link: "contacts" },
    { text: "गोपनीयता नीति", link: "Privacy-Policy" },
    { text: "एआई सेवाओं के लिए कानूनी नियम", link: "Legal-Regulations-for-AI-Services" },
  ]
}