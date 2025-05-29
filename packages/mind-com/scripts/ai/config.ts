// scripts/ai/config.ts
export interface LanguageConfig {
  code: string
  name: string
  enabled: boolean
}

export interface ModelConfig {
  name: string
  provider: "anthropic" | "openai" | "xai"
  maxTokens: number
  temperature: number
  priority: number
}

export interface TranslationConfig {
  paths: {
    rootDir: string
    rootTranslateDir: string
    configDir: string
    configTranslateDir: string
  }
  languages: Record<string, LanguageConfig>
  models: Record<string, ModelConfig>
  exclude: string[]
  processing: {
    maxConcurrency: number
    retryAttempts: number
    delayBetweenRetries: number
  }
}

export const config: TranslationConfig = {
  paths: {
    rootDir: "docs/en",
    rootTranslateDir: "docs/i18n",
    configDir: "docs/.vitepress/config",
    configTranslateDir: "docs/.vitepress/config/i18n",
  },

  languages: {
    ar: { code: "ar", name: "Gulf Arab & MSA", enabled: true },
    zh: { code: "zh", name: "Mandarin", enabled: true },
    es: { code: "es", name: "Spanish", enabled: true },
    ja: { code: "ja", name: "Japanese", enabled: true },
    ru: { code: "ru", name: "Russian", enabled: true },
    de: { code: "de", name: "German", enabled: true },
    fr: { code: "fr", name: "French", enabled: true },
  },

  models: {
    claude: {
      name: "claude-3-5-sonnet-20241022",
      provider: "anthropic",
      maxTokens: 8192,
      temperature: 0,
      priority: 1,
    },
    gpt4: {
      name: "gpt-4-1106-preview",
      provider: "openai",
      maxTokens: 4096,
      temperature: 0,
      priority: 2,
    },
    grok: {
      name: "grok-2-latest",
      provider: "xai",
      maxTokens: 4096,
      temperature: 0,
      priority: 3,
    },
  },

  exclude: ["test", "__tests__", "node_modules"],

  processing: {
    maxConcurrency: 3,
    retryAttempts: 2,
    delayBetweenRetries: 1000,
  },
}
