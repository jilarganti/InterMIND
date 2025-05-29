export const config = {
  rootDir: "docs/en",
  rootTranslateDir: "docs/i18n",
  configDir: "docs/.vitepress/config",
  configTranslateDir: "docs/.vitepress/config/i18n",

  languages: {
    ar: { code: "ar", name: "Gulf Arab & MSA" },
    // bn: { code: "bn", name: "Bengali" },
    zh: { code: "zh", name: "Mandarin" },
    es: { code: "es", name: "Spanish" },
    // hi: { code: "hi", name: "Hindi" },
    ja: { code: "ja", name: "Japanese" },
    // pt: { code: "pt", name: "Brazilian Portuguese" },
    ru: { code: "ru", name: "Russian" },
    de: { code: "de", name: "German" }, // добавлен немецкий язык
    // uk: { code: "uk", name: "Ukrainian" },
    // ur: { code: "ur", name: "Urdu" },
    // ml: { code: "ml", name: "Malayalam" },
    // ta: { code: "ta", name: "Tamil" },
    // fa: { code: "fa", name: "Persian" },
    fr: { code: "fr", name: "French" },
    // tr: { code: "tr", name: "Turkish" },
    // ko: { code: "ko", name: "Korean" },
    // id: { code: "id", name: "Indonesian" },
    // vi: { code: "vi", name: "Vietnamese" },
    // te: { code: "te", name: "Telugu" },
  },

  models: ["claude-3-5-sonnet-20241022", "gpt-4-1106-preview"],
  exclude: ["test"],
}
