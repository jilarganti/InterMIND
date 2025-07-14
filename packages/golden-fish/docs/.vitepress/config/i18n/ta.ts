import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ta"

export const ta = defineConfig({
  description: "நிபுணர் UAE நிறுவன உருவாக்கம் மற்றும் ஆதரவு சேவைகள். நிறுவன அமைப்பு, வங்கி, வரி, சட்ட மற்றும் விசா தீர்வுகள். உங்கள் வணிக கனவுகளை நிஜமாக்குதல்!",
  head: [
    ["meta", { property: "og:title", content: "நிபுணர் UAE நிறுவன உருவாக்கம் மற்றும் ஆதரவு சேவைகள். நிறுவன அமைப்பு, வங்கி, வரி, சட்ட மற்றும் விசா தீர்வுகள்." }],
  ],

  themeConfig: {
    nav: [
      {
        text: "சேவைகள்",
        activeMatch: `${BASE_PATH}/company-registration/`,
        items: [
          { text: "நிறுவன பதிவு", link: `${BASE_PATH}/uae-business/company-registration/overview` },
          { text: "வங்கி தீர்வுகள்", link: `${BASE_PATH}/uae-business/company-registration/banking` },
          { text: "குடியேற்றம்", link: `${BASE_PATH}/uae-business/company-registration/employment-visas` },
        ],
      },
      {
        text: "வளங்கள்",
        items: [{ text: "எங்களைப் பற்றி", link: `${BASE_PATH}/resources/about` }],
      },
      { text: "தொடர்புகள்", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
      // [`${BASE_PATH}/contact-us/`]: { base: `${BASE_PATH}/contact-us/`, items: sidebarContactUs() },
    },

    footer: {
      message: `© Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">தனியுரிமை அமைப்புகள்</a> | <a href="${BASE_PATH}/resources/TERMS-CONDITIONS">விதிமுறைகள் & நிபந்தனைகள்</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">தனியுரிமை கொள்கை</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">AI சேவைகளுக்கான சட்ட விதிமுறைகள்</a>`,
    },

    localization: {
      placeholder4SearchInput: "எதையும் கேளுங்கள்...",
      placeholder4ChatFooter: "எதையும் கேளுங்கள்...",
      placeholder4ChatList: "அரட்டை தலைப்பை உள்ளிடவும்...",
      buttonLabel4NavButton: "உடனடி நிபுணர் அரட்டை",
    },
    contact_form: {
      name: "பெயர் *",
      namePlaceholder: "உங்கள் பெயர்",
      email: "மின்னஞ்சல் *",
      emailPlaceholder: "உங்கள் மின்னஞ்சல் முகவரி",
      phone: "தொலைபேசி *",
      phonePlaceholder: "எ.கா., +1 1234567890 அல்லது (1) 123 456-7890",
      phoneError: "தயவுசெய்து தொலைபேசி எண்ணை உள்ளிடவும்",
      category: "நாங்கள் உங்களுக்கு எவ்வாறு உதவ முடியும்? *",
      categoryPlaceholder: "சேவை வகையைத் தேர்ந்தெடுக்கவும்",
      message: "உங்கள் இலக்குகளைப் பற்றி விவாதிக்கலாம் (விருப்பமானது)",
      messagePlaceholder: "உங்கள் தேவைகளுக்கு சிறந்த தீர்வைத் தயாரிக்க எங்களுக்கு உதவ உங்கள் விசாரணை விவரங்களைப் பகிரவும்",
      submit: "கோரிக்கையை சமர்ப்பிக்கவும்",
      sending: "அனுப்புகிறது...",
      successTitle: "நன்றி!",
      successMessage: "உங்கள் ஆர்வத்தை நாங்கள் மிகவும் பாராட்டுகிறோம்! உங்கள் தேவைகளைப் பற்றி விவாதிக்க எங்கள் குழு விரைவில் உங்களைத் தொடர்பு கொள்ளும்.",
      defaultCategories: [
        "புதிய நிறுவன உருவாக்கம்",
        "விரிவாக்க திட்டம் (அதாவது புதிய கிளை அல்லது உரிமம்)",
        "நிறுவன இடமாற்றம்",
        "Golden Visa",
        "விசா நோக்கங்களுக்கு மட்டும்",
        "வங்கி கணக்குகளைத் திறத்தல்",
        "பிற சேவைகள்",
      ],
      defaultButtonText: "எங்களுக்கு ஒரு செய்தி அனுப்பவும்",
      // defaultButtonText: "இலவச ஆலோசனையைப் பெறுங்கள்",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "UAE வணிக சுருக்கம்",
      // collapsed: false,
      items: [
        { text: "நிறுவன பதிவு", link: "company-registration/overview" },
        { text: "நன்மைகள் & தீமைகள்", link: "company-registration/benefits-problems" },
        { text: "கார்ப்பரேட் வங்கி தீர்வுகள்", link: "company-registration/banking" },
        { text: "Golden Visa", link: "company-registration//golden-visa" },
        { text: "விசாக்கள் & EID", link: "company-registration/employment-visas" },
        { text: "கட்டணங்கள் மற்றும் காலக்கெடுகள்", link: "company-registration/fees-timelines" },
        { text: "வெற்றிக்குப் பிறகு மட்டும் பணம் செலுத்துங்கள்", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "UAE கார்ப்பரேட் கட்டமைப்புகள்",
      collapsed: false,
      items: [
        { text: "நிறுவன பதிவு படிகள்", link: "company-registration/insights/incorporation-steps" },
        { text: "UAE Free Zone", link: "company-registration/free-zones" },
        { text: "UAE Mainland", link: "company-registration/mainland" },
      ],
    },
    {
      text: "UAE வணிக இணக்கம் உத்தரவாதம்",
      collapsed: false,
      items: [
        { text: "உத்தரவாதமளிக்கப்பட்ட கார்ப்பரேட் வங்கி கணக்கு ஒப்புதல்கள்", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "அதிக ஆபத்துள்ள வணிகத்திற்கான வங்கி கணக்குகள்", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "உங்கள் வணிகத்தை இணக்கமாகவும் பாதுகாப்பாகவும் வைத்திருங்கள்", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "சட்ட, கணக்கியல் மற்றும் வரி",
      collapsed: false,
      items: [
        { text: "கணக்கியல் மற்றும் வரி பரிசீலனைகள்", link: "company-registration/accounting-legal" },
        { text: "UBO பதிவு", link: "company-registration/ubo" },
      ],
    },
    {
      text: "ஒப்பீடுகள்",
      collapsed: false,
      items: [
        { text: "Mainland vs Free Zone", link: "comparison/mainland-vs-free-zones" },
        { text: "UAE நிறுவனங்கள் ஒப்பிடப்பட்டன", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "எங்களைப் பற்றி", link: "about" },
    { text: "தொடர்புகள்", link: "contacts" },
    { text: "விதிமுறைகள் & நிபந்தனைகள்", link: "TERMS-CONDITIONS" },
    { text: "தனியுரிமை கொள்கை", link: "Privacy-Policy" },
    { text: "AI சேவைகளுக்கான சட்ட விதிமுறைகள்", link: "Legal-Regulations-for-AI-Services" },
  ]
}

// function sidebarContactUs(): DefaultTheme.SidebarItem[] {
//   return [{ text: "தொடர்புகள்", link: `contacts` }]
// }