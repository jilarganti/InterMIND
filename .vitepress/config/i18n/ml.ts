import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ml"

export const ml = defineConfig({
  description: "യുഎഇയിലെ വിദഗ്ധ കമ്പനി രൂപീകരണവും പിന്തുണാ സേവനങ്ങളും. കമ്പനി സ്ഥാപനം, ബാങ്കിംഗ്, നികുതി, നിയമ, വിസ പരിഹാരങ്ങൾ. നിങ്ങളുടെ ബിസിനസ് സ്വപ്നങ്ങൾ യാഥാർത്ഥ്യമാക്കുന്നു!",
  head: [
    ["meta", { property: "og:title", content: "യുഎഇയിലെ വിദഗ്ധ കമ്പനി രൂപീകരണവും പിന്തുണാ സേവനങ്ങളും. കമ്പനി സ്ഥാപനം, ബാങ്കിംഗ്, നികുതി, നിയമ, വിസ പരിഹാരങ്ങൾ." }],
  ],

  themeConfig: {
    nav: [
      {
        text: "സേവനങ്ങൾ",
        activeMatch: `${BASE_PATH}/company-registration/`,
        items: [
          { text: "കമ്പനി രജിസ്ട്രേഷൻ", link: `${BASE_PATH}/uae-business/company-registration/overview` },
          { text: "ബാങ്കിംഗ് പരിഹാരങ്ങൾ", link: `${BASE_PATH}/uae-business/company-registration/banking` },
          { text: "കുടിയേറ്റം", link: `${BASE_PATH}/uae-business/company-registration/employment-visas` },
        ],
      },
      {
        text: "വിഭവങ്ങൾ",
        items: [{ text: "കുറിച്ച്", link: `${BASE_PATH}/resources/about` }],
      },
      { text: "ബന്ധപ്പെടുക", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
      [`${BASE_PATH}/contact-us/`]: { base: `${BASE_PATH}/contact-us/`, items: sidebarContactUs() },
    },

    footer: {
      message: '©Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">സ്വകാര്യതാ ക്രമീകരണങ്ങൾ</a>',
    },

    contact_form: {
      name: "പേര് *",
      namePlaceholder: "നിങ്ങളുടെ പേര്",
      email: "ഇമെയിൽ *",
      emailPlaceholder: "നിങ്ങളുടെ ഇമെയിൽ വിലാസം",
      phone: "ഫോൺ *",
      phonePlaceholder: "ഉദാ., +1 1234567890 അല്ലെങ്കിൽ (1) 123 456-7890",
      phoneError: "ദയവായി ഫോൺ നമ്പർ നൽകുക",
      category: "ഞങ്ങൾക്ക് എങ്ങനെ സഹായിക്കാൻ കഴിയും? *",
      categoryPlaceholder: "സേവന തരം തിരഞ്ഞെടുക്കുക",
      message: "നിങ്ങളുടെ ലക്ഷ്യങ്ങൾ ചർച്ച ചെയ്യാം (ഓപ്ഷണൽ)",
      messagePlaceholder: "നിങ്ങളുടെ പ്രോജക്റ്റ് അല്ലെങ്കിൽ ആവശ്യകതകൾ വിവരിക്കുക",
      submit: "അഭ്യർത്ഥന സമർപ്പിക്കുക",
      sending: "അയയ്ക്കുന്നു...",
      successTitle: "നന്ദി!",
      successMessage: "നിങ്ങളുടെ താൽപ്പര്യത്തിന് ഞങ്ങൾ വളരെ നന്ദിയുണ്ട്! ഞങ്ങളുടെ ടീം നിങ്ങളുടെ ആവശ്യങ്ങൾ ചർച്ച ചെയ്യാൻ ഉടൻ ബന്ധപ്പെടും.",
      defaultCategories: ["കമ്പനി രജിസ്ട്രേഷൻ", "ബാങ്ക് അക്കൗണ്ടുകൾ തുറക്കൽ", "EID & Golden Visa", "മറ്റ് സേവനങ്ങൾ"],
      defaultButtonText: "സൗജന്യ കൺസൾട്ടേഷൻ നേടുക",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "യുഎഇ ബിസിനസ് സംഗ്രഹം",
      collapsed: false,
      items: [
        { text: "കമ്പനി രജിസ്ട്രേഷൻ", link: "company-registration/overview" },
        { text: "ഗുണങ്ങളും പ്രശ്നങ്ങളും", link: "company-registration/benefits-problems" },
        { text: "കോർപ്പറേറ്റ് ബാങ്കിംഗ് പരിഹാരങ്ങൾ", link: "offer/banking/" },
        { text: "Golden Visa", link: "offer/golden-visa/" },
        { text: "വിസകളും EID-യും", link: "company-registration/employment-visas" },
        { text: "ഫീസും സമയക്രമങ്ങളും", link: "company-registration/fees-timelines" },
        { text: "വിജയത്തിന് ശേഷം മാത്രം പണം നൽകുക", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "യുഎഇ കോർപ്പറേറ്റ് ഘടനകൾ",
      collapsed: true,
      items: [
        { text: "കമ്പനി രജിസ്ട്രേഷൻ ഘട്ടങ്ങൾ", link: "company-registration/insights/incorporation-steps" },
        { text: "UAE free zones", link: "company-registration/free-zones" },
        { text: "UAE mainland", link: "company-registration/mainland" },
      ],
    },
    {
      text: "യുഎഇ ബിസിനസ് അനുസരണം ഗ്യാരണ്ടി",
      collapsed: true,
      items: [
        { text: "ഗ്യാരണ്ടി ചെയ്ത കോർപ്പറേറ്റ് ബാങ്ക് അക്കൗണ്ട് അംഗീകാരങ്ങൾ", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "ഉയർന്ന റിസ്ക് ബിസിനസിനുള്ള ബാങ്ക് അക്കൗണ്ടുകൾ", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "നിങ്ങളുടെ ബിസിനസ് അനുസരണവും സംരക്ഷണവും നിലനിർത്തുക", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "നിയമം, അക്കൗണ്ടിംഗ്, നികുതി",
      collapsed: true,
      items: [
        { text: "അക്കൗണ്ടിംഗും നികുതി പരിഗണനകളും", link: "company-registration/accounting-legal" },
        { text: "UBO രജിസ്റ്റർ", link: "company-registration/ubo" },
      ],
    },
    {
      text: "താരതമ്യങ്ങൾ",
      collapsed: true,
      items: [
        { text: "Mainland vs free zones", link: "comparison/mainland-vs-free-zones" },
        { text: "യുഎഇ സ്ഥാപനങ്ങളുടെ താരതമ്യം", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [{ text: "കുറിച്ച്", link: `about` }]
}

function sidebarContactUs(): DefaultTheme.SidebarItem[] {
  return [{ text: "ബന്ധപ്പെടാൻ", link: `contacts` }]
}