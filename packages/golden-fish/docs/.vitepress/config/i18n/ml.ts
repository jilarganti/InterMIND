import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ml"

export const ml = defineConfig({
  description: "വിദഗ്ധ UAE കമ്പനി രൂപീകരണവും പിന്തുണാ സേവനങ്ങളും. കമ്പനി സ്ഥാപനം, ബാങ്കിംഗ്, നികുതി, നിയമപരവും വിസ പരിഹാരങ്ങളും. നിങ്ങളുടെ ബിസിനസ് സ്വപ്നങ്ങൾ യാഥാർത്ഥ്യമാക്കുന്നു!",
  head: [
    ["meta", { property: "og:title", content: "വിദഗ്ധ UAE കമ്പനി രൂപീകരണവും പിന്തുണാ സേവനങ്ങളും. കമ്പനി സ്ഥാപനം, ബാങ്കിംഗ്, നികുതി, നിയമപരവും വിസ പരിഹാരങ്ങളും." }],
  ],

  themeConfig: {
    nav: [
      {
        text: "സേവനങ്ങൾ",
        activeMatch: `${BASE_PATH}/company-registration/`,
        items: [
          { text: "കമ്പനി രജിസ്ട്രേഷൻ", link: `${BASE_PATH}/uae-business/company-registration/overview` },
          { text: "ബാങ്കിംഗ് പരിഹാരങ്ങൾ", link: `${BASE_PATH}/uae-business/company-registration/banking` },
          { text: "മൈഗ്രേഷൻ", link: `${BASE_PATH}/uae-business/company-registration/employment-visas` },
        ],
      },
      {
        text: "വിഭവങ്ങൾ",
        items: [{ text: "ഞങ്ങളെക്കുറിച്ച്", link: `${BASE_PATH}/resources/about` }],
      },
      { text: "ബന്ധപ്പെടുക", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
      // [`${BASE_PATH}/contact-us/`]: { base: `${BASE_PATH}/contact-us/`, items: sidebarContactUs() },
    },

    footer: {
      message: `© Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">സ്വകാര്യതാ ക്രമീകരണങ്ങൾ</a> | <a href="${BASE_PATH}/resources/TERMS-CONDITIONS">നിബന്ധനകളും വ്യവസ്ഥകളും</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">സ്വകാര്യതാ നയം</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">AI സേവനങ്ങൾക്കുള്ള നിയമപരമായ നിയന്ത്രണങ്ങൾ</a>`,
    },

    localization: {
      placeholder4SearchInput: "എന്തും ചോദിക്കുക...",
      placeholder4ChatFooter: "എന്തും ചോദിക്കുക...",
      placeholder4ChatList: "ചാറ്റ് വിഷയം നൽകുക...",
      buttonLabel4NavButton: "തൽക്ഷണ വിദഗ്ധ ചാറ്റ്",
    },
    contact_form: {
      name: "പേര് *",
      namePlaceholder: "നിങ്ങളുടെ പേര്",
      email: "ഇമെയിൽ *",
      emailPlaceholder: "നിങ്ങളുടെ ഇമെയിൽ വിലാസം",
      phone: "ഫോൺ *",
      phonePlaceholder: "ഉദാ., +1 1234567890 അല്ലെങ്കിൽ (1) 123 456-7890",
      phoneError: "ദയവായി ഫോൺ നമ്പർ നൽകുക",
      category: "ഞങ്ങൾക്ക് നിങ്ങളെ എങ്ങനെ സഹായിക്കാം? *",
      categoryPlaceholder: "സേവന തരം തിരഞ്ഞെടുക്കുക",
      message: "നിങ്ങളുടെ ലക്ഷ്യങ്ങൾ ചർച്ച ചെയ്യാം (ഓപ്ഷണൽ)",
      messagePlaceholder: "നിങ്ങളുടെ ആവശ്യങ്ങൾക്കുള്ള മികച്ച പരിഹാരം തയ്യാറാക്കാൻ ഞങ്ങളെ സഹായിക്കുന്നതിന് നിങ്ങളുടെ അന്വേഷണ വിശദാംശങ്ങൾ പങ്കിടുക",
      submit: "അഭ്യർത്ഥന സമർപ്പിക്കുക",
      sending: "അയയ്ക്കുന്നു...",
      successTitle: "നന്ദി!",
      successMessage: "നിങ്ങളുടെ താൽപ്പര്യത്തെ ഞങ്ങൾ വളരെയധികം അഭിനന്ദിക്കുന്നു! നിങ്ങളുടെ ആവശ്യങ്ങൾ ചർച്ച ചെയ്യാൻ ഞങ്ങളുടെ ടീം ഉടൻ നിങ്ങളെ ബന്ധപ്പെടും.",
      defaultCategories: [
        "പുതിയ കമ്പനി രൂപീകരണം",
        "വിപുലീകരണ പദ്ധതി (അതായത് പുതിയ ശാഖ അല്ലെങ്കിൽ ഫ്രാഞ്ചൈസി)",
        "കമ്പനി സ്ഥലംമാറ്റം",
        "Golden Visa",
        "വിസ ആവശ്യങ്ങൾ മാത്രം",
        "ബാങ്ക് അക്കൗണ്ടുകൾ തുറക്കൽ",
        "മറ്റ് സേവനങ്ങൾ",
      ],
      defaultButtonText: "ഞങ്ങൾക്ക് ഒരു സന്ദേശം അയയ്ക്കുക",
      // defaultButtonText: "സൗജന്യ കൺസൾട്ടേഷൻ നേടുക",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "UAE ബിസിനസ് സംഗ്രഹം",
      // collapsed: false,
      items: [
        { text: "കമ്പനി രജിസ്ട്രേഷൻ", link: "company-registration/overview" },
        { text: "ഗുണങ്ങളും ദോഷങ്ങളും", link: "company-registration/benefits-problems" },
        { text: "കോർപ്പറേറ്റ് ബാങ്കിംഗ് പരിഹാരങ്ങൾ", link: "company-registration/banking" },
        { text: "Golden Visa", link: "company-registration//golden-visa" },
        { text: "വിസകളും EID", link: "company-registration/employment-visas" },
        { text: "ഫീസും സമയപരിധിയും", link: "company-registration/fees-timelines" },
        { text: "വിജയത്തിന് ശേഷം മാത്രം പണമടയ്ക്കുക", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "UAE കോർപ്പറേറ്റ് ഘടനകൾ",
      collapsed: false,
      items: [
        { text: "കമ്പനി രജിസ്ട്രേഷൻ ഘട്ടങ്ങൾ", link: "company-registration/insights/incorporation-steps" },
        { text: "UAE Free Zone", link: "company-registration/free-zones" },
        { text: "UAE Mainland", link: "company-registration/mainland" },
      ],
    },
    {
      text: "UAE ബിസിനസ് കംപ്ലയൻസ് ഉറപ്പ്",
      collapsed: false,
      items: [
        { text: "ഉറപ്പുള്ള കോർപ്പറേറ്റ് ബാങ്ക് അക്കൗണ്ട് അനുമതികൾ", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "ഉയർന്ന അപകടസാധ്യതയുള്ള ബിസിനസിനുള്ള ബാങ്ക് അക്കൗണ്ടുകൾ", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "നിങ്ങളുടെ ബിസിനസ് കംപ്ലയന്റും സുരക്ഷിതവുമായി നിലനിർത്തുക", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "നിയമപരം, അക്കൗണ്ടിംഗ്, നികുതി",
      collapsed: false,
      items: [
        { text: "അക്കൗണ്ടിംഗും നികുതി പരിഗണനകളും", link: "company-registration/accounting-legal" },
        { text: "UBO രജിസ്റ്റർ", link: "company-registration/ubo" },
      ],
    },
    {
      text: "താരതമ്യങ്ങൾ",
      collapsed: false,
      items: [
        { text: "Mainland vs Free Zone", link: "comparison/mainland-vs-free-zones" },
        { text: "UAE സ്ഥാപനങ്ങൾ താരതമ്യം", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "ഞങ്ങളെക്കുറിച്ച്", link: "about" },
    { text: "ബന്ധപ്പെടുക", link: "contacts" },
    { text: "നിബന്ധനകളും വ്യവസ്ഥകളും", link: "TERMS-CONDITIONS" },
    { text: "സ്വകാര്യതാ നയം", link: "Privacy-Policy" },
    { text: "AI സേവനങ്ങൾക്കുള്ള നിയമപരമായ നിയന്ത്രണങ്ങൾ", link: "Legal-Regulations-for-AI-Services" },
  ]
}

// function sidebarContactUs(): DefaultTheme.SidebarItem[] {
//   return [{ text: "ബന്ധപ്പെടുക", link: `contacts` }]
// }