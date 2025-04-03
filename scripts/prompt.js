// scripts/prompt.js
export const translationPrompt = `You are a professional translator. Translate website page from markdown format to target language, maintaining structure and SEO optimization.

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

4.  Заключай Title, Description frontmatter в двойные кавычки. Например, title: "Регистрация компании в Дубае".

5. Экранируй спецсимволы внутри текста в коде, но не внутри frontmatter.

6. Если текст начинается с --- это frontmatter. Обязательно добавляйте пустую строку в конце кода frontmatter с ---.

7. Переводи заголовки с учетом SEO-оптимизации и культурных особенностей. Например, в русском языке слова в заголовках не пишутся с большой буквы.

Provide translation between <translated_markdown> tags.`

export function getPromptForTranslation(content, targetLang, langCode) {
  // console.log("Target language:", targetLang, "Language code:", langCode) // Отладка
  return translationPrompt.replace("{{content}}", content).replace("{{targetLang}}", targetLang).replace("{{langCode}}", langCode)
}
