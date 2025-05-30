export const config = {
  rootDir: "docs/en",
  rootTranslateDir: "docs/i18n",
  configDir: "docs/.vitepress/config",
  configTranslateDir: "docs/.vitepress/config/i18n",

  languages: {
    ru: { code: "ru", name: "Russian" },
    ar: { code: "ar", name: "Gulf Arab & MSA" },
    zh: { code: "zh", name: "Mandarin" },
    es: { code: "es", name: "Spanish" },
    ja: { code: "ja", name: "Japanese" },
    de: { code: "de", name: "German" },
    fr: { code: "fr", name: "French" },
    // -------- Uncomment to add more languages --------

    // pt: { code: "pt", name: "Brazilian Portuguese" },
    // hi: { code: "hi", name: "Hindi" },
    // bn: { code: "bn", name: "Bengali" },
    // uk: { code: "uk", name: "Ukrainian" },
    // ur: { code: "ur", name: "Urdu" },
    // ml: { code: "ml", name: "Malayalam" },
    // ta: { code: "ta", name: "Tamil" },
    // fa: { code: "fa", name: "Persian" },
    // tr: { code: "tr", name: "Turkish" },
    // ko: { code: "ko", name: "Korean" },
    // id: { code: "id", name: "Indonesian" },
    // vi: { code: "vi", name: "Vietnamese" },
    // te: { code: "te", name: "Telugu" },
  },

  models: ["claude-3-5-sonnet-20241022", "gpt-4-1106-preview"],
  exclude: ["test"],
}
