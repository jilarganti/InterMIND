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
    // ----------------------
    // bn: { code: "bn", name: "Bengali" },
    // hi: { code: "hi", name: "Hindi" },
    // pt: { code: "pt", name: "Brazilian Portuguese" },
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

  models: {
    claude: { name: "claude-3-5-sonnet-20241022" },
    gpt4: { name: "gpt-4-1106-preview" },
    // claude: { name: "claude-3-5-haiku-20241022" },
    grok: { name: "grok-2-latest" },
  },
  exclude: ["test"],
}
