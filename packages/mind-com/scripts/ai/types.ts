// scripts/ai/types.ts
export interface TranslationTask {
  id: string
  sourceFile: string
  targetFile: string
  language: LanguageConfig
  content: string
  priority: number
}

export interface TranslationResult {
  taskId: string
  success: boolean
  translatedContent?: string
  error?: TranslationError
  model?: string
  duration: number
  tokensUsed?: number
}

export interface TranslationError {
  type: "token_limit" | "rate_limit" | "invalid_response" | "network" | "unknown"
  message: string
  model: string
  retryable: boolean
}

export interface FileAssessment {
  sourceFile: string
  targetFiles: TargetFileInfo[]
  needsTranslation: boolean
  reason?: string
}

export interface TargetFileInfo {
  path: string
  language: LanguageConfig
  exists: boolean
  needsUpdate: boolean
  reason?: string
}

export interface CleanupResult {
  removedFiles: number
  removedDirs: number
  removedLogs: number
  details: string[]
}

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
