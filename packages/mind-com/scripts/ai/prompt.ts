// scripts/ai/prompt.ts
export class PromptManager {
  private static readonly MAIN_PROMPT = `You are a professional translator. Translate website page from markdown format to target language, maintaining structure and SEO optimization.

<source_markdown>
{{content}}
</source_markdown>

Target language:
<target_language>
{{targetLang}}
</target_language>

Key rules:
1. Сохраните всю разметку и форматирование markdown, frontmatter, script, css, html, vue. Не изменяйте порядок элементов, ссылки, якоря. Похожие блоки должны быть переведены полностью.

2. DO NOT translate:
  - technical terms, abbreviations: Golden Fish, Free Zone, Mainland, EID, GCC, LLC, FZ, RAK, IFZA, DED, ESR, CRS, FATCA, AML, KYC, PEP, CDD, EDD, UBO, FZE, FZC, FZCO, FZ-LLC, FZ-Branch, FZ-Subsidiary, FZ-Holding, FZ-Company, We speak your tongue
  - link anchor text

3. Translate:
  - frontmatter (title, description) with SEO focus
  - alt text for images
  - table contents
  - diagram text elements

4. Заключай Title, Description frontmatter в двойные кавычки. Например, title: "Регистрация компании в Дубае".

5. Экранируй апострофы в строках. Не экранируй апострофы в маркдаун и фронтматтер.

6. Если текст начинается с --- это frontmatter. Обязательно добавляйте пустую строку в конце кода frontmatter с ---.

7. Переводи заголовки с учетом SEO-оптимизации и культурных особенностей. Например, в русском языке слова в заголовках не пишутся с большой буквы.

8. Ты должен переводить текст и код полностью!

Provide translation between <translated_markdown> tags.`

  private static readonly RETRY_PROMPT = `You are a professional translator. The previous translation attempt failed. Please provide a complete and accurate translation.

<source_markdown>
{{content}}
</source_markdown>

Target language:
<target_language>
{{targetLang}}
</target_language>

IMPORTANT:
- Translate ALL content completely
- Maintain exact markdown structure
- Preserve all frontmatter, code blocks, and formatting
- DO NOT provide partial translations
- DO NOT use placeholders like [...] or [missing text]

Provide complete translation between <translated_markdown> tags.`

  static getMainPrompt(content: string, targetLang: string): string {
    return this.MAIN_PROMPT.replace("{{content}}", content).replace("{{targetLang}}", targetLang)
  }

  static getRetryPrompt(content: string, targetLang: string): string {
    return this.RETRY_PROMPT.replace("{{content}}", content).replace("{{targetLang}}", targetLang)
  }

  static extractTranslation(response: string): string | null {
    const match = response.match(/<translated_markdown>([\s\S]*?)<\/translated_markdown>/)
    return match ? match[1].trim() : null
  }

  static isIncompleteTranslation(content: string): boolean {
    // Проверяем на паттерны неполного перевода
    return /\[[^\[\]]+(\.\.\.|[?])\]/.test(content) || content.includes("[missing]") || content.includes("[incomplete]") || content.includes("[...]")
  }

  static applyContentReplacements(content: string, langCode: string): string {
    return content.replace(/export const en =/, `export const ${langCode} =`).replace(/BASE_PATH = ""/, `BASE_PATH = "/${langCode}"`)
  }
}
