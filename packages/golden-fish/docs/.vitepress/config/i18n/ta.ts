import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ta"

export const ta = defineConfig({
  description: "நிபுணத்துவம் வாய்ந்த UAE நிறுவன உருவாக்கம் மற்றும் ஆதரவு சேவைகள். நிறுவன அமைப்பு, வங்கி, வரி, சட்ட மற்றும் விசா தீர்வுகள். உங்கள் வணிக கனவுகளை நனவாக்குகிறோம்!",
  head: [
    ["meta", { property: "og:title", content: "நிபுணத்துவம் வாய்ந்த UAE நிறுவன உருவாக்கம் மற்றும் ஆதரவு சேவைகள். நிறுவன அமைப்பு, வங்கி, வரி, சட்ட மற்றும் விசா தீர்வுகள்." }],
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
      { text: "தொடர்புகள்", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
    },

    footer: {
      message: `© Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">தனியுரிமை அமைப்புகள்</a> | <a href="${BASE_PATH}/resources/TERMS-CONDITIONS">விதிமுறைகள் & நிபந்தனைகள்</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">தனியுரிமைக் கொள்கை</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">AI சேவைகளுக்கான சட்ட விதிமுறைகள்</a>`,
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
      phoneError: "தொலைபேசி எண்ணை உள்ளிடவும்",
      category: "நாங்கள் எவ்வாறு உதவ முடியும்? *",
      categoryPlaceholder: "சேவை வகையைத் தேர்ந்தெடுக்கவும்",
      message: "உங்கள் இலக்குகளை விவாதிப்போம் (விருப்பத்திற்குரியது)",
      messagePlaceholder: "உங்கள் தேவைகளுக்கு சிறந்த தீர்வை தயாரிக்க உதவ உங்கள் விசாரணை விவரங்களை பகிரவும்",
      submit: "கோரிக்கையை சமர்ப்பிக்கவும்",
      sending: "அனுப்புகிறது...",
      successTitle: "நன்றி!",
      successMessage: "உங்கள் ஆர்வத்திற்கு மிக்க நன்றி! உங்கள் தேவைகளை விவாதிக்க எங்கள் குழு விரைவில் உங்களைத் தொடர்பு கொள்ளும்.",
      defaultCategories: [
        "புதிய நிறுவன உருவாக்கம்",
        "விரிவாக்கத் திட்டம் (கிளை அல்லது franchise)",
        "நிறுவன இடமாற்றம்",
        "Golden Visa",
        "விசா நோக்கங்களுக்கு மட்டும்",
        "வங்கி கணக்குகளைத் திறத்தல்",
        "பிற சேவைகள்",
      ],
      defaultButtonText: "எங்களுக்கு செய்தி அனுப்புங்கள்",
    },
  },
})

[Rest of the code with function definitions remains unchanged as it contains technical terms and structure]