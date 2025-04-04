import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ta"

export const ta = defineConfig({
  description: "ஐக்கிய அரபு எமிரேட்ஸில் நிபுணத்துவ நிறுவன அமைப்பு மற்றும் ஆதரவு சேவைகள். நிறுவன அமைப்பு, வங்கி, வரி, சட்ட மற்றும் விசா தீர்வுகள். உங்கள் வணிக கனவுகளை நனவாக்குகிறோம்!",
  head: [
    ["meta", { property: "og:title", content: "ஐக்கிய அரபு எமிரேட்ஸில் நிபுணத்துவ நிறுவன அமைப்பு மற்றும் ஆதரவு சேவைகள். நிறுவன அமைப்பு, வங்கி, வரி, சட்ட மற்றும் விசா தீர்வுகள்." }],
  ],

  themeConfig: {
    nav: [
      {
        text: "சேவைகள்",
        activeMatch: `${BASE_PATH}/company-registration/`,
        items: [
          { text: "நிறுவன பதிவு", link: `${BASE_PATH}/uae-business/company-registration/overview` },
          { text: "வங்கி தீர்வுகள்", link: `${BASE_PATH}/uae-business/company-registration/banking` },
          { text: "குடிபெயர்வு", link: `${BASE_PATH}/uae-business/company-registration/employment-visas` },
        ],
      },
      {
        text: "வளங்கள்",
        items: [{ text: "எங்களைப் பற்றி", link: `${BASE_PATH}/resources/about` }],
      },
      { text: "தொடர்பு", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
    },

    footer: {
      message: `©Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">தனியுரிமை அமைப்புகள்</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">தனியுரிமைக் கொள்கை</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">AI சேவைகளுக்கான சட்ட விதிமுறைகள்</a>`,
    },

    contact_form: {
      name: "பெயர் *",
      namePlaceholder: "உங்கள் பெயர்",
      email: "மின்னஞ்சல் *",
      emailPlaceholder: "உங்கள் மின்னஞ்சல் முகவரி",
      phone: "தொலைபேசி *",
      phonePlaceholder: "எ.கா., +1 1234567890 அல்லது (1) 123 456-7890",
      phoneError: "தொலைபேசி எண்ணை உள்ளிடவும்",
      category: "நாங்கள் எவ்வாறு உதவ முடியும்? *",
      categoryPlaceholder: "சேவை வகையைத் தேர்ந்தெடுக்கவும்",
      message: "உங்கள் இலக்குகளை விவாதிக்கலாம் (விருப்பத்தேர்வு)",
      messagePlaceholder: "உங்கள் திட்டம் அல்லது தேவைகளை விவரிக்கவும்",
      submit: "கோரிக்கையை சமர்ப்பிக்கவும்",
      sending: "அனுப்புகிறது...",
      successTitle: "நன்றி!",
      successMessage: "உங்கள் ஆர்வத்திற்கு மிக்க நன்றி! எங்கள் குழு உங்கள் தேவைகளை விவாதிக்க விரைவில் தொடர்பு கொள்ளும்.",
      defaultCategories: ["நிறுவன பதிவு", "வங்கி கணக்குகளைத் திறத்தல்", "EID & Golden Visa", "பிற சேவைகள்"],
      defaultButtonText: "இலவச ஆலோசனையைப் பெறுங்கள்",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "UAE வணிக சுருக்கம்",
      collapsed: false,
      items: [
        { text: "நிறுவன பதிவு", link: "company-registration/overview" },
        { text: "நன்மைகள் & தீமைகள்", link: "company-registration/benefits-problems" },
        { text: "கார்ப்பரேட் வங்கி தீர்வுகள்", link: "offer/banking/" },
        { text: "Golden Visa", link: "offer/golden-visa/" },
        { text: "விசாக்கள் & EID", link: "company-registration/employment-visas" },
        { text: "கட்டணங்கள் மற்றும் காலவரிசைகள்", link: "company-registration/fees-timelines" },
        { text: "வெற்றிக்குப் பிறகு மட்டுமே பணம் செலுத்துங்கள்", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "UAE கார்ப்பரேட் கட்டமைப்புகள்",
      collapsed: true,
      items: [
        { text: "நிறுவன பதிவு படிகள்", link: "company-registration/insights/incorporation-steps" },
        { text: "UAE free zones", link: "company-registration/free-zones" },
        { text: "UAE mainland", link: "company-registration/mainland" },
      ],
    },
    {
      text: "UAE வணிக இணக்கம் உத்தரவாதம்",
      collapsed: true,
      items: [
        { text: "உத்தரவாதமளிக்கப்பட்ட கார்ப்பரேட் வங்கி கணக்கு ஒப்புதல்கள்", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "அதிக ஆபத்து வணிகத்திற்கான வங்கி கணக்குகள்", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "உங்கள் வணிகத்தை இணக்கமாகவும் பாதுகாப்பாகவும் வைத்திருங்கள்", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "சட்ட, கணக்கியல் மற்றும் வரி",
      collapsed: true,
      items: [
        { text: "கணக்கியல் மற்றும் வரி கருத்துகள்", link: "company-registration/accounting-legal" },
        { text: "UBO பதிவு", link: "company-registration/ubo" },
      ],
    },
    {
      text: "ஒப்பீடுகள்",
      collapsed: true,
      items: [
        { text: "Mainland vs free zones", link: "comparison/mainland-vs-free-zones" },
        { text: "UAE நிறுவனங்கள் ஒப்பிடப்பட்டன", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "எங்களைப் பற்றி", link: "about" },
    { text: "தொடர்புகள்", link: "contacts" },
    { text: "தனியுரிமைக் கொள்கை", link: "Privacy-Policy" },
    { text: "AI சேவைகளுக்கான சட்ட விதிமுறைகள்", link: "Legal-Regulations-for-AI-Services" },
  ]
}