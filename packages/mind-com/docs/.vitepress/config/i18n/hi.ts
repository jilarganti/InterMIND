import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/hi"

export const hi = defineConfig({
  description: "InterMIND वीडियो कॉल के लिए रीयल-टाइम स्पीच ट्रांसलेशन प्रदान करता है — तुरंत भाषा बाधाओं को दूर करता है। mind.com टीम द्वारा संचालित।",
  head: [
    [
      "meta",
      {
        name: "description",
        content: "InterMIND वीडियो कॉल के लिए रीयल-टाइम स्पीच ट्रांसलेशन प्रदान करता है — तुरंत भाषा बाधाओं को दूर करता है। mind.com टीम द्वारा संचालित।",
      },
    ],
    ["meta", { property: "og:title", content: "InterMIND | वैश्विक टीमों के लिए रीयल-टाइम स्पीच ट्रांसलेशन" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "InterMIND वीडियो कॉल में तत्काल भाषण अनुवाद प्रदान करता है — बिना बाधाओं के स्पष्ट, बहुभाषी संचार। mind.com टीम द्वारा संचालित।",
      },
    ],
    ["meta", { property: "og:url", content: `https://mind.com${BASE_PATH}` }],
  ],
  themeConfig: {
    nav: [
      {
        text: "उत्पाद",
        activeMatch: `${BASE_PATH}/product/`,
        link: `${BASE_PATH}/product/overview/what-is-intermind`,
      },
      {
        text: "मूल्य निर्धारण",
        link: `${BASE_PATH}/#Pricing`,
      },
      {
        text: "संसाधन",
        activeMatch: `${BASE_PATH}/product/`,
        items: [
          { text: "सामान्य प्रश्न", link: `${BASE_PATH}/#FAQ` },
          { text: "प्रशंसापत्र", link: `${BASE_PATH}/#Testimonials` },
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/product/`]: { base: `${BASE_PATH}/product/`, items: sidebarProduct() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarResources() },
      [`${BASE_PATH}/exp/`]: { base: `${BASE_PATH}/exp/`, items: sidebarExp() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">गोपनीयता सेटिंग्स</a> | <a href="${BASE_PATH}/resources/company/Privacy-Policy">गोपनीयता नीति</a> | <a href="${BASE_PATH}/resources/company/Legal-Regulations-for-AI-Services">एआई सेवाओं के लिए कानूनी नियम</a> | <a href="https://status.mind.com/">सेवा स्थिति</a>`,
    },

    localization: {
      placeholder4SearchInput: "कुछ भी पूछें...",
      placeholder4ChatFooter: "कुछ भी पूछें...",
      placeholder4ChatList: "चैट विषय दर्ज करें...",
      buttonLabel4NavButton: "सहायक",
      buttonLabel4SignInButton: "साइन इन करें",
      buttonLabel4GetStartedButton: "शुरू करें",
    },
    contact_form: {
      name: "नाम *",
      namePlaceholder: "आपका नाम",
      email: "ईमेल *",
      emailPlaceholder: "आपका ईमेल पता",
      webSite: "कंपनी वेबसाइट *",
      webSitePlaceholder: "जैसे https://companyname.com",
      webSiteError: "कृपया वेबसाइट नंबर दर्ज करें",
      category: "आपका प्राथमिक लक्ष्य क्या है? *",
      categoryPlaceholder: "सबसे महत्वपूर्ण चुनें",
      message: "आइए आपके लक्ष्यों पर चर्चा करें (वैकल्पिक)",
      messagePlaceholder: "कृपया कोई अतिरिक्त विवरण प्रदान करें (वैकल्पिक)",
      submit: "अनुरोध भेजें",
      sending: "भेज रहा है...",
      successTitle: "धन्यवाद!",
      successMessage: "हमें आपका संदेश प्राप्त हो गया है — हमारी टीम जल्द ही संपर्क करेगी।",
      defaultCategories: [
        "मीटिंग में भाषा बाधाओं को दूर करें",
        "मीटिंग को खोजने योग्य और कार्रवाई योग्य बनाएं",
        "अनुपालन और डेटा निवास सुनिश्चित करें (EU / US / Asia)",
        "केवल खोज रहे हैं / अन्य",
      ],

      defaultButtonText: "हमें संदेश भेजें",
    },
  } as DefaultTheme.Config,
})

function sidebarProduct(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "अवलोकन",
      collapsed: false,
      items: [
        { text: "InterMIND क्या है?", link: "overview/what-is-intermind" },
        { text: "यह कैसे काम करता है", link: "overview/how-it-works" },
        { text: "वीडियो मीटिंग प्लेटफॉर्म", link: "overview/video-meeting-platform" },
        { text: "क्षेत्रीय डेटा गोपनीयता", link: "overview/privacy-architecture" },
        { text: "प्राथमिक बाजार", link: "overview/markets" },
      ],
    },
    {
      text: "मार्गदर्शिका",
      collapsed: false,
      items: [
        { text: "शुरुआत करना", link: "guide/getting-started" },
        { text: "खाता प्रबंधन", link: "guide/account-management" },
        { text: "मीटिंग बनाना", link: "guide/creating-meetings" },
        { text: "मीटिंग इंटरफेस", link: "guide/meeting-interface" },
        { text: "उपयोगकर्ता भूमिकाएं", link: "guide/user-roles" },
        { text: "एआई सुविधाएं", link: "guide/ai-features" },
        { text: "मीटिंग इतिहास", link: "guide/meeting-history" },
        { text: "सामान्य प्रश्न", link: "guide/faq" },
        { text: "समस्या निवारण", link: "guide/troubleshooting" },
        { text: "मूल्य निर्धारण", link: "guide/pricing" },
        { text: "सहायता और समर्थन", link: "guide/help-support" },
      ],
    },
  ]
}

function sidebarResources(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "समर्थन",
      collapsed: false,
      items: [
        { text: "सहायता प्राप्त करें", link: "/help" },
      ],
    },
    {
      text: "संसाधन",
      collapsed: false,
      items: [
        { text: "ब्रांड एसेट्स", link: "/media-kit" },
      ],
    },
    {
      text: "कंपनी",
      collapsed: false,
      items: [
        { text: "हमारे बारे में", link: "/company/about" },
        { text: "टीम", link: "/company/team" },
        { text: "संपर्क", link: "/company/contacts" },
      ],
    },
  ]
}

function sidebarExp(): DefaultTheme.SidebarItem[] {
  return [
    { text: "कार्यकारी सारांश", link: "/InterMind-Executive-Summary" },
    { text: "बाजार रणनीति", link: "/go-to-market-strategy" },
    { text: "निवेशक पिच", link: "/InterMind-Investor-Pitch" },
    { text: "वित्तीय अनुमान औचित्य (वर्ष 1-3)", link: "/Financial-Projections-Justification" },
  ]
}