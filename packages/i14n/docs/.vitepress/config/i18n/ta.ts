import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ta"

export const ta = defineConfig({
  description: "தொழில் கனவுகளை நனவாக்கும் உத்தியோகபூர்வ யுஏஇ நிறுவன அமைப்பு மற்றும் ஆதரவு சேவைகள். நிறுவன அமைப்பு, வங்கி, வரி, சட்டம் மற்றும் விசா தீர்வுகள்.",
  head: [
    ["meta", { property: "og:title", content: "தொழில் கனவுகளை நனவாக்கும் உத்தியோகபூர்வ யுஏஇ நிறுவன அமைப்பு மற்றும் ஆதரவு சேவைகள். நிறுவன அமைப்பு, வங்கி, வரி, சட்டம் மற்றும் விசா தீர்வுகள்." }],
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
        items: [{ text: "எங்களை பற்றி", link: `${BASE_PATH}/resources/about` }],
      },
      { text: "தொடர்புகள்", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
      // [`${BASE_PATH}/contact-us/`]: { base: `${BASE_PATH}/contact-us/`, items: sidebarContactUs() },
    },

    footer: {
      message: `©Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">தனியுரிமை அமைப்புகள்</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">தனியுரிமை கொள்கை</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">செயற்கை நுண்ணறிவு சேவைகளுக்கான சட்ட விதிமுறைகள்</a>`,
    },

    localization: {
      placeholder4SearchInput: "எதையும் கேளுங்கள்...",
      placeholder4ChatFooter: "எதையும் கேளுங்கள்...",
      placeholder4ChatList: "உரையாடல் தலைப்பை உள்ளிடுங்கள்...",
      buttonLabel4NavButton: "உடனடி நிபுணர் உரையாடல்",
    },
    contact_form: {
      name: "பெயர் *",
      namePlaceholder: "உங்கள் பெயர்",
      email: "மின்னஞ்சல் *",
      emailPlaceholder: "உங்கள் மின்னஞ்சல் முகவரி",
      phone: "தொலைபேசி *",
      phonePlaceholder: "உதாரணமாக, +1 1234567890 அல்லது (1) 123 456-7890",
      phoneError: "தொலைபேசி எண்ணை உள்ளிடுங்கள்",
      category: "உங்களுக்கு எவ்வாறு உதவலாம்? *",
      categoryPlaceholder: "சேவை வகையை தெரிவு செய்க",
      message: "உங்கள் இலக்குகளை பேசுவோம் (விருப்பத்தேர்வு)",
      messagePlaceholder: "உங்கள் விசாரணை விவரங்களை பகிர்ந்து உங்கள் தேவைகளுக்கு சிறந்த தீர்வை தயாரிக்க எங்களுக்கு உதவுங்கள்",
      submit: "கோரிக்கையை சமர்ப்பிக்கவும்",
      sending: "அனுப்புகிறது...",
      successTitle: "நன்றி!",
      successMessage: "உங்கள் ஆர்வத்தை நாங்கள் மிகவும் மதிக்கிறோம்! உங்கள் தேவைகளை பேச எங்கள் குழு விரைவில் உங்களுக்கு தொடர்பு கொள்ளும்.",
      defaultCategories: [
        "புதிய நிறுவன அமைப்பு",
        "விரிவாக்க திட்டம் (உதாரணமாக. புதிய கிளை அல்லது பிரான்சைஸ்)",
        "நிறுவன மாற்றம்",
        "கோல்டன் விசா",
        "விசா நோக்கங்களுக்கு மட்டும்",
        "வங்கி கணக்குகளை திறப்பது",
        "பிற சேவைகள்",
      ],
      defaultButtonText: "எங்களுக்கு ஒரு செய்தி அனுப்புங்கள்",
      // defaultButtonText: "இலவச ஆலோசனை பெறுங்கள்",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "யுஏஇ வணிக சுருக்கம்",
      // collapsed: false,
      items: [
        { text: "நிறுவன பதிவு", link: "company-registration/overview" },
        { text: "நன்மைகள் & குறைகள்", link: "company-registration/benefits-problems" },
        { text: "கார்ப்பரேட் வங்கி தீர்வுகள்", link: "company-registration/banking" },
        { text: "கோல்டன் விசா", link: "company-registration//golden-visa" },
        { text: "விசாக்கள் & இஇடி", link: "company-registration/employment-visas" },
        { text: "கட்டணங்கள் மற்றும் காலக்கெடுகள்", link: "company-registration/fees-timelines" },
        { text: "வெற்றிக்கு பின் மட்டுமே செலுத்துக", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "யுஏஇ கார்ப்பரேட் அமைப்புகள்",
      collapsed: false,
      items: [
        { text: "நிறுவன பதிவு படிகள்", link: "company-registration/insights/incorporation-steps" },
        { text: "யுஏஇ ஃப்ரீ ஜோன்கள்", link: "company-registration/free-zones" },
        { text: "யுஏஇ மெயின்லேண்ட்", link: "company-registration/mainland" },
      ],
    },
    {
      text: "யுஏஇ வணிக செவ்வை உறுதி",
      collapsed: false,
      items: [
        { text: "உறுதியான கார்ப்பரேட் வங்கி கணக்கு அனுமதிகள்", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "உயர் அபாய வணிகத்திற்கான வங்கி கணக்குகள்", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "உங்கள் வணிகத்தை செவ்வையாகவும் பாதுகாப்பாகவும் வைத்திருங்கள்", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "சட்டம், கணக்கியல் மற்றும் வரி",
      collapsed: false,
      items: [
        { text: "கணக்கியல் மற்றும் வரி கருத்துக்கள்", link: "company-registration/accounting-legal" },
        { text: "யுபிஓ பதிவு", link: "company-registration/ubo" },
      ],
    },
    {
      text: "ஒப்பீடுகள்",
      collapsed: false,
      items: [
        { text: "மெயின்லேண்ட் vs ஃப்ரீ ஜோன்கள்", link: "comparison/mainland-vs-free-zones" },
        { text: "யுஏஇ நிறுவனங்கள் ஒப்பிடுதல்", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "எங்களை பற்றி", link: "about" },
    { text: "தொடர்புகள்", link: "contacts" },
    { text: "தனியுரிமை கொள்கை", link: "Privacy-Policy" },
    { text: "செயற்கை நுண்ணறிவு சேவைகளுக்கான சட்ட விதிமுறைகள்", link: "Legal-Regulations-for-AI-Services" },
  ]
}

// function sidebarContactUs(): DefaultTheme.SidebarItem[] {
//   return [{ text: "தொடர்புகள்", link: `contacts` }]
// }