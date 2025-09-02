/// <reference types="../theme/types/themeConfig" />

import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ta"

export const ta = defineConfig({
  description:
    "19+ மொழிகளில் ஒரே நேரத்தில் மொழிபெயர்ப்புடன் தொழில்முறை வீடியோ கான்ஃபரன்சிங். உலகளாவிய குழுக்களுக்கு தொனி, நோக்கம் மற்றும் சூழலைப் பிடிக்கும் AI-இயங்கும் மொழிபெயர்ப்பு.",
  head: [
    ["meta", { property: "og:title", content: "InterMIND | உலகளாவிய குழுக்களுக்கான நிகழ்நேர பேச்சு மொழிபெயர்ப்பு" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "19+ மொழிகளில் ஒரே நேரத்தில் குரல் மொழிபெயர்ப்புடன் தொழில்முறை வீடியோ கான்ஃபரன்சிங். உலகளவில் சந்திக்கவும், AI-இயங்கும் மொழிபெயர்ப்புடன் இயல்பாக தொடர்பு கொள்ளவும்.",
      },
    ],
    ["meta", { property: "og:url", content: `https://mind.com${BASE_PATH}` }],
  ],
  themeConfig: {
    nav: [
      {
        text: "தயாரிப்பு",
        activeMatch: `${BASE_PATH}/product/`,
        link: `${BASE_PATH}/product/overview/what-is-intermind`,
      },
      {
        text: "விலை நிர்ணயம்",
        link: `${BASE_PATH}/#Pricing`,
      },
      {
        text: "வளங்கள்",
        activeMatch: `${BASE_PATH}/product/`,
        items: [
          { text: "அடிக்கடி கேட்கப்படும் கேள்விகள்", link: `${BASE_PATH}/#FAQ` },
          { text: "சான்றுகள்", link: `${BASE_PATH}/#Testimonials` },
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/product/`]: { base: `${BASE_PATH}/product/`, items: sidebarProduct() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarResources() },
      [`${BASE_PATH}/exp/`]: { base: `${BASE_PATH}/exp/`, items: sidebarExp() },
      [`${BASE_PATH}/account/`]: { base: `${BASE_PATH}/account/`, items: sidebarAccount() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">தனியுரிமை அமைப்புகள்</a> | <a href="${BASE_PATH}/resources/company/Privacy-Policy">தனியுரிமை கொள்கை</a> | <a href="${BASE_PATH}/resources/company/legal-regulations-for-ai-services">AI சேவைகளுக்கான சட்ட விதிமுறைகள்</a> | <a href="https://status.mind.com/">சேவை நிலை</a>`,
    },

    localization: {
      placeholder4SearchInput: "எதையும் கேளுங்கள்...",
      placeholder4ChatFooter: "எதையும் கேளுங்கள்...",
      placeholder4ChatList: "அரட்டை தலைப்பை உள்ளிடவும்...",
      buttonLabel4NavButton: "உதவியாளர்",
      buttonLabel4SignInButton: "உள்நுழைக",
      buttonLabel4GetStartedButton: "தொடங்குங்கள்",
      buttonLabel4TryItButton: "இலவசமாக முயற்சிக்கவும்",
      buttonLabel4BackToBlog: "← வலைப்பதிவுக்கு திரும்பு",
    },
    contact_form: {
      name: "பெயர் *",
      namePlaceholder: "உங்கள் பெயர்",
      email: "மின்னஞ்சல் *",
      emailPlaceholder: "உங்கள் மின்னஞ்சல் முகவரி",
      webSite: "நிறுவன வலைத்தளம்",
      webSitePlaceholder: "எ.கா. https://companyname.com",
      webSiteError: "தயவுசெய்து வலைத்தளத்தை உள்ளிடவும்",
      category: "உங்கள் முதன்மை இலக்கு என்ன? *",
      categoryPlaceholder: "மிக முக்கியமானதைத் தேர்ந்தெடுக்கவும்",
      message: "உங்கள் இலக்குகளைப் பற்றி விவாதிக்கலாம் (விருப்பமானது)",
      messagePlaceholder: "தயவுசெய்து கூடுதல் விவரங்களை வழங்கவும் (விருப்பமானது)",
      submit: "கோரிக்கையை சமர்ப்பிக்கவும்",
      sending: "அனுப்புகிறது...",
      successTitle: "நன்றி!",
      successMessage: "உங்கள் செய்தியை நாங்கள் பெற்றுள்ளோம் — எங்கள் குழு விரைவில் தொடர்பு கொள்ளும்.",
      defaultCategories: [],

      defaultButtonText: "எங்களுக்கு ஒரு செய்தி அனுப்பவும்",
      // defaultButtonText: "இலவச ஆலோசனை பெறுங்கள்",
    },
  },
})

function sidebarProduct(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "கண்ணோட்டம்",
      collapsed: false,
      items: [
        { text: "InterMIND என்றால் என்ன?", link: "overview/what-is-intermind" },
        { text: "இது எவ்வாறு செயல்படுகிறது", link: "overview/how-it-works" },
        { text: "வீடியோ சந்திப்பு தளம்", link: "overview/video-meeting-platform" },
        { text: "மொழிபெயர்ப்பு vs விளக்கம்: வேறுபாடு என்ன?", link: "overview/translation-vs-interpretation-whats-the-difference" },
        { text: "பிராந்திய தரவு தனியுரிமை", link: "overview/privacy-architecture" },
        { text: "முன்னுரிமை சந்தைகள்", link: "overview/markets" },
      ],
    },
    {
      text: "வழிகாட்டி",
      collapsed: false,
      items: [
        { text: "தொடங்குதல்", link: "guide/getting-started" },
        { text: "கணக்கு மேலாண்மை", link: "guide/account-management" },
        { text: "சந்திப்புகளை உருவாக்குதல்", link: "guide/creating-meetings" },
        { text: "சந்திப்பு இடைமுகம்", link: "guide/meeting-interface" },
        { text: "பயனர் பாத்திரங்கள்", link: "guide/user-roles" },
        { text: "AI அம்சங்கள்", link: "guide/ai-features" },
        { text: "சந்திப்பு வரலாறு", link: "guide/meeting-history" },
        { text: "அடிக்கடி கேட்கப்படும் கேள்விகள்", link: "guide/faq" },
        { text: "சிக்கல் தீர்த்தல்", link: "guide/troubleshooting" },
        { text: "விலை நிர்ணயம்", link: "guide/pricing" },
        { text: "உதவி & ஆதரவு", link: "guide/help-support" },
      ],
    },
  ]
}

function sidebarResources(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "ஆதரவு",
      collapsed: false,
      items: [
        { text: "ஆதரவு பெறுங்கள்", link: "/help" },
        { text: "தனியுரிமை கொள்கை", link: "/company/Privacy-Policy" },
        { text: "AI சட்ட வழிகாட்டி", link: "/company/legal-regulations-for-ai-services" },
      ],
    },
    // {
    //   text: "வளங்கள்",
    //   collapsed: false,
    //   items: [
    //     { text: "பிராண்ட் சொத்துக்கள்", link: "/media-kit" },
    //     // { text: "கணக்கு மேலாண்மை", link: "guide/account-management" },
    //   ],
    // },
    {
      text: "நிறுவனம்",
      collapsed: false,
      items: [
        { text: "பற்றி", link: "/company/about" },
        { text: "குழு", link: "/company/team" },
        { text: "வேலைவாய்ப்புகள்", link: "/company/careers" },
        { text: "தொடர்புகள்", link: "/company/contacts" },
      ],
    },
  ]
}

function sidebarExp(): DefaultTheme.SidebarItem[] {
  return [
    { text: "நிர்வாக சுருக்கம்", link: "/InterMind-Executive-Summary" },
    { text: "சந்தைக்கு செல்லும் உத்தி", link: "/go-to-market-strategy" },
    { text: "முதலீட்டாளர் விளக்கக்காட்சி", link: "/InterMind-Investor-Pitch" },
    { text: "நிதி கணிப்புகள் நியாயப்படுத்தல் (ஆண்டு 1–3)", link: "/Financial-Projections-Justification" },
  ]
}

function sidebarAccount(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "முகப்பு",
      link: "/",
    },
    {
      text: "சந்திப்புகள்",
      collapsed: false,
      items: [
        { text: "சந்திப்புகள்", link: "/meetings" },
        { text: "வரலாறு", link: "/history" },
        { text: "மேம்படுத்து", link: "/upgrade" },
      ],
    },

    {
      text: "அமைப்புகள்",
      collapsed: true,
      items: [
        { text: "சுயவிவரம்", link: "/settings/profile" },
        { text: "அமைப்புகள்", link: "/settings/settings" },
        { text: "அமைப்புகள்", link: "/settings/upgrade" },
      ],
    },
  ]
}