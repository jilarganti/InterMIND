import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ml"

export const ml = defineConfig({
  description: "വിദഗ്ധ യു.എ.ഇ കമ്പനി രൂപീകരണവും പിന്തുണ സേവനങ്ങളും. കമ്പനി സ്ഥാപനം, ബാങ്കിംഗ്, നികുതി, നിയമവും വിസാ പരിഹാരങ്ങളും. നിങ്ങളുടെ ബിസിനസ് സ്വപ്നങ്ങൾ യാഥാർത്ഥ്യമാക്കുന്നു!",
  head: [
    ["meta", { property: "og:title", content: "വിദഗ്ധ യു.എ.ഇ കമ്പനി രൂപീകരണവും പിന്തുണ സേവനങ്ങളും. കമ്പനി സ്ഥാപനം, ബാങ്കിംഗ്, നികുതി, നിയമവും വിസാ പരിഹാരങ്ങളും." }],
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
        items: [{ text: "ഞങ്ങളെ കുറിച്ച്", link: `${BASE_PATH}/resources/about` }],
      },
      { text: "ബന്ധപ്പെടുക", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
      // [`${BASE_PATH}/contact-us/`]: { base: `${BASE_PATH}/contact-us/`, items: sidebarContactUs() },
    },

    footer: {
      message: `©Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">സ്വകാര്യതാ ക്രമീകരണങ്ങൾ</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">സ്വകാര്യതാ നയം</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">എ.ഐ സേവനങ്ങൾക്കുള്ള നിയമ നിയമങ്ങൾ</a>`,
    },

    localization: {
      placeholder4SearchInput: "എന്തും ചോദിക്കൂ...",
      placeholder4ChatFooter: "എന്തും ചോദിക്കൂ...",
      placeholder4ChatList: "ചാറ്റ് വിഷയം നൽകൂ...",
      buttonLabel4NavButton: "തത്ക്ഷണ വിദഗ്ധ ചാറ്റ്",
    },
    contact_form: {
      name: "പേര് *",
      namePlaceholder: "താങ്കളുടെ പേര്",
      email: "ഇമെയിൽ *",
      emailPlaceholder: "താങ്കളുടെ ഇമെയിൽ വിലാസം",
      phone: "ഫോൺ *",
      phonePlaceholder: "ഉദാഹരണത്തിന്, +1 1234567890 അല്ലെങ്കിൽ (1) 123 456-7890",
      phoneError: "ദയവായി ഫോൺ നമ്പർ നൽകുക",
      category: "ഞങ്ങൾ എങ്ങനെ സഹായിക്കാം? *",
      categoryPlaceholder: "സേവന തരം തിരഞ്ഞെടുക്കുക",
      message: "നിങ്ങളുടെ ലക്ഷ്യങ്ങൾ ചർച്ച ചെയ്യാം (ഓപ്ഷണൽ)",
      messagePlaceholder: "ഞങ്ങൾക്ക് താങ്കളുടെ ആവശ്യങ്ങൾക്ക് മികച്ച പരിഹാരം ഒരുക്കാൻ അന്വേഷണ വിവരങ്ങൾ പങ്കുവെക്കുക",
      submit: "അഭ്യർത്ഥന സമർപ്പിക്കുക",
      sending: "അയക്കുന്നു...",
      successTitle: "നന്ദി!",
      successMessage: "താങ്കളുടെ താൽപ്പര്യത്തിന് ഞങ്ങൾ വളരെ നന്ദി പറയുന്നു! താങ്കളുടെ ആവശ്യങ്ങൾ ചർച്ച ചെയ്യാൻ ഞങ്ങളുടെ ടീം ഉടൻ തന്നെ ബന്ധപ്പെടും.",
      defaultCategories: [
        "പുതിയ കമ്പനി രൂപീകരണം",
        "വിപുലീകരണ പദ്ധതി (ഉദാ. പുതിയ ശാഖ അല്ലെങ്കിൽ ഫ്രാഞ്ചൈസി)",
        "കമ്പനി സ്ഥലം മാറ്റം",
        "ഗോൾഡൻ വിസ",
        "വിസാ ഉദ്ദേശ്യങ്ങൾ മാത്രം",
        "ബാങ്ക് അക്കൗണ്ടുകൾ തുറക്കൽ",
        "മറ്റ് സേവനങ്ങൾ",
      ],
      defaultButtonText: "ഞങ്ങളോട് ഒരു സന്ദേശം അയക്കൂ",
      // defaultButtonText: "ഒരു സൗജന്യ കൺസൾട്ടേഷൻ നേടുക",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "യു.എ.ഇ ബിസിനസ് സംഗ്രഹം",
      // collapsed: false,
      items: [
        { text: "കമ്പനി രജിസ്ട്രേഷൻ", link: "company-registration/overview" },
        { text: "പ്രോസ് & കോൺസ്", link: "company-registration/benefits-problems" },
        { text: "കോർപ്പറേറ്റ് ബാങ്കിംഗ് പരിഹാരങ്ങൾ", link: "company-registration/banking" },
        { text: "ഗോൾഡൻ വിസ", link: "company-registration//golden-visa" },
        { text: "വിസകൾ & ഇ.ഐ.ഡി", link: "company-registration/employment-visas" },
        { text: "ഫീസുകളും സമയക്രമവും", link: "company-registration/fees-timelines" },
        { text: "വിജയം നേടിയ ശേഷം മാത്രം പണം നൽകുക", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "യു.എ.ഇ കോർപ്പറേറ്റ് ഘടനകൾ",
      collapsed: false,
      items: [
        { text: "കമ്പനി രജിസ്ട്രേഷൻ ഘട്ടങ്ങൾ", link: "company-registration/insights/incorporation-steps" },
        { text: "യു.എ.ഇ ഫ്രീ സോണുകൾ", link: "company-registration/free-zones" },
        { text: "യു.എ.ഇ മെയിൻലാൻഡ്", link: "company-registration/mainland" },
      ],
    },
    {
      text: "യു.എ.ഇ ബിസിനസ് കംപ്ലയൻസ് ഗ്യാരണ്ടീഡ്",
      collapsed: false,
      items: [
        { text: "ഗ്യാരണ്ടീഡ് കോർപ്പറേറ്റ് ബാങ്ക് അക്കൗണ്ട് അനുമതികൾ", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "ഹൈ-റിസ്ക് ബിസിനസിനുള്ള ബാങ്ക് അക്കൗണ്ടുകൾ", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "നിങ്ങളുടെ ബിസിനസ് കംപ്ലയന്റും സംരക്ഷിതവും ആക്കുക", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "നിയമം, അക്കൗണ്ടിംഗ് ആൻഡ് ടാക്സ്",
      collapsed: false,
      items: [
        { text: "അക്കൗണ്ടിംഗ് ആൻഡ് ടാക്സ് പരിഗണനകൾ", link: "company-registration/accounting-legal" },
        { text: "യു.ബി.ഒ രജിസ്റ്റർ", link: "company-registration/ubo" },
      ],
    },
    {
      text: "താരതമ്യങ്ങൾ",
      collapsed: false,
      items: [
        { text: "മെയിൻലാൻഡ് വേഴ്സസ് ഫ്രീ സോണുകൾ", link: "comparison/mainland-vs-free-zones" },
        { text: "യു.എ.ഇ എന്റിറ്റികൾ താരതമ്യം", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "ഞങ്ങളെ കുറിച്ച്", link: "about" },
    { text: "ബന്ധപ്പെടുക", link: "contacts" },
    { text: "സ്വകാര്യതാ നയം", link: "Privacy-Policy" },
    { text: "എ.ഐ സേവനങ്ങൾക്കുള്ള നിയമ നിയമങ്ങൾ", link: "Legal-Regulations-for-AI-Services" },
  ]
}

// function sidebarContactUs(): DefaultTheme.SidebarItem[] {
//   return [{ text: "ബന്ധപ്പെടുക", link: `contacts` }]
// }