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
    },

    footer: {
      message: `©Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">സ്വകാര്യതാ ക്രമീകരണങ്ങൾ</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">സ്വകാര്യതാ നയം</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">AI സേവനങ്ങൾക്കുള്ള നിയമ നിയന്ത്രണങ്ങൾ</a>`,
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
      messagePlaceholder: "നിങ്ങളുടെ പ്രോജക്റ്റ് അല്ലെങ്കിൽ ആവശ്യങ്ങൾ വിവരിക്കുക",
      submit: "അഭ്യർത്ഥന സമർപ്പിക്കുക",
      sending: "അയയ്ക്കുന്നു...",
      successTitle: "നന്ദി!",
      successMessage: "നിങ്ങളുടെ താൽപ്പര്യത്തിന് ഞങ്ങൾ വളരെ നന്ദിയുണ്ട്! നിങ്ങളുടെ ആവശ്യങ്ങൾ ചർച്ച ചെയ്യാൻ ഞങ്ങളുടെ ടീം ഉടൻ നിങ്ങളെ ബന്ധപ്പെടും.",
      defaultCategories: ["കമ്പനി രജിസ്ട്രേഷൻ", "ബാങ്ക് അക്കൗണ്ടുകൾ തുറക്കൽ", "EID & Golden Visa", "മറ്റ് സേവനങ്ങൾ"],
      defaultButtonText: "സൗജന്യ കൺസൾട്ടേഷൻ നേടുക",
    },
  },
})

[Rest of the code with function definitions remains unchanged as it contains technical terms and structure]