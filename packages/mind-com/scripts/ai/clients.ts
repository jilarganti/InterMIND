// scripts/ai/clients.ts
import Anthropic from "@anthropic-ai/sdk"
import OpenAI from "openai"
import * as dotenv from "dotenv"
import type { ModelConfig, TranslationError } from "./types.js"

dotenv.config()

export class AIClients {
  private anthropic?: Anthropic
  private openai?: OpenAI
  private xai?: OpenAI

  constructor() {
    this.initializeClients()
  }

  private initializeClients(): void {
    if (process.env.ANTHROPIC_API_KEY) {
      this.anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
    }

    if (process.env.OPENAI_API_KEY) {
      this.openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
    }

    if (process.env.XAI_API_KEY) {
      this.xai = new OpenAI({
        apiKey: process.env.XAI_API_KEY,
        baseURL: "https://api.x.ai/v1",
      })
    }
  }

  async translateWithModel(modelConfig: ModelConfig, prompt: string): Promise<{ content: string; tokensUsed?: number }> {
    switch (modelConfig.provider) {
      case "anthropic":
        return await this.translateWithClaude(modelConfig, prompt)
      case "openai":
        return await this.translateWithOpenAI(modelConfig, prompt)
      case "xai":
        return await this.translateWithGrok(modelConfig, prompt)
      default:
        throw this.createError("unknown", `Неизвестный провайдер: ${modelConfig.provider}`, modelConfig.name)
    }
  }

  private async translateWithClaude(modelConfig: ModelConfig, prompt: string): Promise<{ content: string; tokensUsed?: number }> {
    if (!this.anthropic) {
      throw this.createError("network", "Anthropic API ключ не настроен", modelConfig.name)
    }

    try {
      const message = await this.anthropic.messages.create({
        model: modelConfig.name,
        max_tokens: modelConfig.maxTokens,
        temperature: modelConfig.temperature,
        messages: [{ role: "user", content: prompt }],
      })

      // Правильная обработка контента Anthropic
      const textBlock = message.content.find((block) => block.type === "text")
      const content = textBlock && "text" in textBlock ? textBlock.text : ""

      const tokensUsed = message.usage?.input_tokens ? message.usage.input_tokens + (message.usage.output_tokens || 0) : undefined

      return { content, tokensUsed }
    } catch (error: any) {
      throw this.parseAnthropicError(error, modelConfig.name)
    }
  }

  private async translateWithOpenAI(modelConfig: ModelConfig, prompt: string): Promise<{ content: string; tokensUsed?: number }> {
    if (!this.openai) {
      throw this.createError("network", "OpenAI API ключ не настроен", modelConfig.name)
    }

    try {
      const completion = await this.openai.chat.completions.create({
        model: modelConfig.name,
        temperature: modelConfig.temperature,
        max_tokens: modelConfig.maxTokens,
        messages: [{ role: "user", content: prompt }],
      })

      const content = completion.choices[0]?.message?.content || ""
      const tokensUsed = completion.usage?.total_tokens

      return { content, tokensUsed }
    } catch (error: any) {
      throw this.parseOpenAIError(error, modelConfig.name)
    }
  }

  private async translateWithGrok(modelConfig: ModelConfig, prompt: string): Promise<{ content: string; tokensUsed?: number }> {
    if (!this.xai) {
      throw this.createError("network", "XAI API ключ не настроен", modelConfig.name)
    }

    try {
      const completion = await this.xai.chat.completions.create({
        model: modelConfig.name,
        temperature: modelConfig.temperature,
        max_tokens: modelConfig.maxTokens,
        messages: [{ role: "user", content: prompt }],
      })

      const content = completion.choices[0]?.message?.content || ""
      const tokensUsed = completion.usage?.total_tokens

      return { content, tokensUsed }
    } catch (error: any) {
      throw this.parseOpenAIError(error, modelConfig.name)
    }
  }

  private parseAnthropicError(error: any, modelName: string): TranslationError {
    if (error.status === 429) {
      return this.createError("rate_limit", "Превышен лимит запросов", modelName, true)
    }

    if (error.message?.includes("maximum context length") || error.message?.includes("too many tokens")) {
      return this.createError("token_limit", "Превышен лимит токенов", modelName, false)
    }

    const message = error.message || error.toString() || "Неизвестная ошибка Anthropic"
    return this.createError("network", message, modelName, true)
  }

  private parseOpenAIError(error: any, modelName: string): TranslationError {
    if (error.status === 429) {
      return this.createError("rate_limit", "Превышен лимит запросов", modelName, true)
    }

    if (error.message?.includes("maximum context length") || error.message?.includes("token limit")) {
      return this.createError("token_limit", "Превышен лимит токенов", modelName, false)
    }

    const message = error.message || error.toString() || "Неизвестная ошибка OpenAI"
    return this.createError("network", message, modelName, true)
  }

  private createError(type: TranslationError["type"], message: string, model: string, retryable: boolean = false): TranslationError {
    return { type, message, model, retryable }
  }

  getAvailableProviders(): string[] {
    const providers: string[] = []
    if (this.anthropic) providers.push("anthropic")
    if (this.openai) providers.push("openai")
    if (this.xai) providers.push("xai")
    return providers
  }
}
