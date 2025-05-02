import { en } from "./en"
import { ar } from "./i18n/ar"
// import { hi } from "./i18n/hi"
// import { ur } from "./i18n/ur"
// import { bn } from "./i18n/bn"
// import { ml } from "./i18n/ml"
// import { ta } from "./i18n/ta"
// import { te } from "./i18n/te"
// import { fa } from "./i18n/fa"
// import { zh } from "./i18n/zh"
// import { fr } from "./i18n/fr"
import { ru } from "./i18n/ru"
// import { uk } from "./i18n/uk"
// import { tr } from "./i18n/tr"
// import { ko } from "./i18n/ko"
// import { ja } from "./i18n/ja"
// import { id } from "./i18n/id"
// import { vi } from "./i18n/vi"
// import { pt } from "./i18n/pt"
// import { es } from "./i18n/es"

interface LocaleSpecificConfig {
  name: string
  label: string
  lang: string
}

export const locales: Record<string, LocaleSpecificConfig> = {
  root: { name: "English", label: "English", lang: "en-US", ...en },
  ar: { name: "Arabic (Gulf)", label: "اَلْعَرَبِيَّةُ", lang: "ar-AE", ...ar },
  // hi: { name: "Hindi", label: "हिन्दी", lang: "hi-IN", ...hi },
  // ur: { name: "Urdu", label: "اُردُو", lang: "ur-PK", ...ur },
  // bn: { name: "Bengali", label: "বাংলা", lang: "bn-BD", ...bn },
  // ml: { name: "Malayalam", label: "മലയാളം", lang: "ml-IN", ...ml },
  // ta: { name: "Tamil", label: "தமிழ்", lang: "ta-IN", ...ta },
  // te: { name: "Telugu", label: "తెలుగు", lang: "te-IN", ...te },
  // fa: { name: "Persian/Farsi", label: "فارسی", lang: "fa-IR", ...fa },
  // zh: { name: "Chinese (Simplified)", label: "中文", lang: "zh-CN", ...zh },
  // fr: { name: "French", label: "Français", lang: "fr-FR", ...fr },
  ru: { name: "Russian", label: "Русский", lang: "ru-RU", ...ru },
  // uk: { name: "Ukrainian", label: "Українська", lang: "uk-UA", ...uk },
  // tr: { name: "Turkish", label: "Türkçe", lang: "tr-TR", ...tr },
  // ko: { name: "Korean", label: "한국어", lang: "ko-KR", ...ko },
  // ja: { name: "Japanese", label: "日本語", lang: "ja-JP", ...ja },
  // id: { name: "Indonesian", label: "Bahasa Indonesia", lang: "id-ID", ...id },
  // vi: { name: "Vietnamese", label: "Tiếng Việt", lang: "vi-VN", ...vi },
  // pt: { name: "Portuguese (Brazil)", label: "Português", lang: "pt-BR", ...pt },
  // es: { name: "Spanish", label: "Español", lang: "es-ES", ...es },
} as const
