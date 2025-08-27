import { en } from "./en"
import { ar } from "./i18n/ar"
import { hi } from "./i18n/hi"
import { zh } from "./i18n/zh"
import { fr } from "./i18n/fr"
import { ru } from "./i18n/ru"
import { tr } from "./i18n/tr"
import { ko } from "./i18n/ko"
import { ja } from "./i18n/ja"
import { pt } from "./i18n/pt"
import { es } from "./i18n/es"
import { de } from "./i18n/de"

interface LocaleSpecificConfig {
  name: string
  label: string
  lang: string
}

export const locales: Record<string, LocaleSpecificConfig> = {
  root: { name: "English", label: "English", lang: "en-US", ...en },
  es: { name: "Spanish (Mexico)", label: "Español (México)", lang: "es-MX", ...es },
  zh: { name: "Chinese (Simplified)", label: "中文", lang: "zh-CN", ...zh },
  de: { name: "German", label: "Deutsch", lang: "de-DE", ...de },
  fr: { name: "French", label: "Français", lang: "fr-FR", ...fr },
  pt: { name: "Portuguese (Brazil)", label: "Português (Brasil)", lang: "pt-BR", ...pt },
  ja: { name: "Japanese", label: "日本語", lang: "ja-JP", ...ja },
  ar: { name: "Arabic (Gulf)", label: "اَلْعَرَبِيَّةُ", lang: "ar-AE", ...ar },
  hi: { name: "Hindi", label: "हिन्दी", lang: "hi-IN", ...hi },
  tr: { name: "Turkish", label: "Türkçe", lang: "tr-TR", ...tr },
  ko: { name: "Korean", label: "한국어", lang: "ko-KR", ...ko },
  ru: { name: "Russian", label: "Русский", lang: "ru-RU", ...ru },
  // ur: { name: "Urdu", label: "اُردُو", lang: "ur-PK", ...ur },
  // bn: { name: "Bengali", label: "বাংলা", lang: "bn-BD", ...bn },
  // ml: { name: "Malayalam", label: "മലയാളം", lang: "ml-IN", ...ml },
  // ta: { name: "Tamil", label: "தமிழ்", lang: "ta-IN", ...ta },
  // te: { name: "Telugu", label: "తెలుగు", lang: "te-IN", ...te },
  // fa: { name: "Persian/Farsi", label: "فارسی", lang: "fa-IR", ...fa },
  // uk: { name: "Ukrainian", label: "Українська", lang: "uk-UA", ...uk },
  // id: { name: "Indonesian", label: "Bahasa Indonesia", lang: "id-ID", ...id },
  // vi: { name: "Vietnamese", label: "Tiếng Việt", lang: "vi-VN", ...vi },
} as const
