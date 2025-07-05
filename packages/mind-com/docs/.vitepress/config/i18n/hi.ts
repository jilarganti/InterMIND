import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/hi"

export const hi = defineConfig({
  description: "InterMIND वीडियो कॉल के लिए रियल-टाइम स्पीच ट्रांसलेशन प्रदान करता है — भाषा की बाधाओं को तुरंत समाप्त करता है। mind.com टीम द्वारा संचालित।",
  head: [
    [
      "meta",
      {
        name: "description",
        content: "InterMIND वीडियो कॉल के लिए रियल-टाइम स्पीच ट्रांसलेशन प्रदान करता है — भाषा की बाधाओं को तुरंत समाप्त करता है। mind.com टीम द्वारा संचालित।",
      },
    ],
    ["meta", { property: "og:title", content: "InterMIND | ग्लोबल टीमों के लिए रियल-टाइम स्पीच ट्रांसलेशन" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "InterMIND वीडियो कॉल में तत्काल स्पीच ट्रांसलेशन प्रदान करता है — बिना बाधाओं के स्पष्ट, बहुभाषी संचार। mind.com टीम द्वारा संचालित।",
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
      // {
      //   text: "कंपनी",
      //   activeMatch: `${BASE_PATH}/company/`,
      //   link: `${BASE_PATH}/company/about`,
      // },
      {
        text: "मूल्य निर्धारण",
        // activeMatch: `${BASE_PATH}/company/`,
        link: `${BASE_PATH}/#Pricing`,
      },
      {
        text: "संसाधन",
        activeMatch: `${BASE_PATH}/product/`,
        // items: [
        //   {
        //     text: "एक्सप्लोर",
        items: [
          // { text: "मूल्य निर्धारण", link: `${BASE_PATH}/#Pricing` },
          { text: "FAQ", link: `${BASE_PATH}/#FAQ` },
          { text: "प्रशंसापत्र", link: `${BASE_PATH}/#Testimonials` },
          // { text: "टीम", link: `${BASE_PATH}/resources/team` },
          // { text: "मीडिया किट", link: `${BASE_PATH}/resources/media-kit` },
        ],
        //   },
        // ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/product/`]: { base: `${BASE_PATH}/product/`, items: sidebarProduct() },
      // [`${BASE_PATH}/company/`]: { base: `${BASE_PATH}/company/`, items: sidebarCompany() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarResources() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">गोपनीयता सेटिंग्स</a> | <a href="${BASE_PATH}/resources/company/Privacy-Policy">गोपनीयता नीति</a> | <a href="${BASE_PATH}/resources/company/Legal-Regulations-for-AI-Services">AI सेवाओं के लिए कानूनी नियम</a> | <a href="https://status.mind.com/">सेवा स्थिति</a>`,
    },

    localization: {
      placeholder4SearchInput: "कुछ भी पूछें...",
      placeholder4ChatFooter: "कुछ भी पूछें...",
      placeholder4ChatList: "चैट विषय दर्ज करें...",
      buttonLabel4NavButton: "तत्काल विशेषज्ञ चैट",
      buttonLabel4AuthButton: "साइन इन करें",
    },
    contact_form: {
      name: "नाम *",
      namePlaceholder: "आपका नाम",
      email: "ईमेल *",
      emailPlaceholder: "आपका ईमेल पता",
      webSite: "कंपनी वेबसाइट *",
      webSitePlaceholder: "जैसे https://companyname.com",
      webSiteError: "कृपया वेबसाइट दर्ज करें",
      category: "आपका मुख्य लक्ष्य क्या है? *",
      categoryPlaceholder: "चुनें कि आपके लिए सबसे महत्वपूर्ण क्या है",
      message: "आइए आपके लक्ष्यों पर चर्चा करें (वैकल्पिक)",
      messagePlaceholder: "कृपया कोई अतिरिक्त विवरण प्रदान करें (वैकल्पिक)",
      submit: "अनुरोध भेजें",
      sending: "भेजा जा रहा है...",
      successTitle: "धन्यवाद!",
      successMessage: "हमें आपका संदेश मिल गया है — हमारी टीम जल्द ही संपर्क करेगी।",
      defaultCategories: [
        "मीटिंग में भाषा की बाधाओं को समाप्त करें",
        "मीटिंग को खोजने योग्य और कार्यान्वित करने योग्य बनाएं",
        "अनुपालन और डेटा निवास सुनिश्चित करें (EU / US / Asia)",
        "केवल एक्सप्लोर कर रहे हैं / अन्य",
      ],

      defaultButtonText: "हमें संदेश भेजें",
      // defaultButtonText: "निःशुल्क परामर्श प्राप्त करें",
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
        { text: "प्राथमिकता बाजार", link: "overview/markets" },
      ],
    },
    {
      text: "गाइड",
      collapsed: false,
      items: [
        { text: "शुरुआत करना", link: "guide/getting-started" },
        { text: "खाता प्रबंधन", link: "guide/account-management" },
        { text: "मीटिंग बनाना", link: "guide/creating-meetings" },
        { text: "मीटिंग इंटरफेस", link: "guide/meeting-interface" },
        { text: "उपयोगकर्ता भूमिकाएं", link: "guide/user-roles" },
        { text: "AI सुविधाएं", link: "guide/ai-features" },
        { text: "मीटिंग इतिहास", link: "guide/meeting-history" },
        { text: "FAQ", link: "guide/faq" },
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
        { text: "समर्थन प्राप्त करें", link: "/help" },
        // { text: "यह कैसे काम करता है", link: "overview/how-it-works" },
      ],
    },
    {
      text: "संसाधन",
      collapsed: false,
      items: [
        { text: "ब्रांड एसेट्स", link: "/media-kit" },
        // { text: "खाता प्रबंधन", link: "guide/account-management" },
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

// function sidebarResources(): DefaultTheme.SidebarItem[] {
//   return [
//     { text: "हमारे बारे में", link: "/about" },
//     { text: "संपर्क", link: "/contacts" },
//     { text: "समर्थन प्राप्त करें", link: "/help" },
//     { text: "ब्रांड एसेट्स", link: "/media-kit" },
//   ]
// }