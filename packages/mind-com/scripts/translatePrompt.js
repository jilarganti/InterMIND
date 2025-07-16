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
  - technical terms, abbreviations: Logo, InterMIND
  - link anchor text

3. Translate:
  - frontmatter (title, description) with SEO focus
  - alt text for images
  - table contents
  - diagram text elements

4.  Заключай Title, Description frontmatter в двойные кавычки. Например, title: "Регистрация компании в Дубае".

5. Экранируй апострофы в строках. Не экранируй апострофы в маркдаун и фронтматтер.

6. Если текст начинается с --- это frontmatter. Обязательно добавляйте пустую строку в конце кода frontmatter с ---.

7. Переводи заголовки с учетом SEO-оптимизации и культурных особенностей. Например, в русском языке слова в заголовках не пишутся с большой буквы.

8. Ты должен переводить текст и код полностью! 

ОШИБКИ:
[Rest of the code with function definitions remains unchanged as it contains technical terms and structure]

Provide translation between <translated_markdown> tags.`

/**
 * Generates the prompt for translation by replacing placeholders in the template.
 * @param {string} content The markdown content to translate.
 * @param {string} targetLang The target language name.
 * @param {string} langCode The target language code (unused in the current implementation but kept for potential future use).
 * @returns {string} The complete prompt string.
 */
export function getPromptForTranslation(content, targetLang, langCode) {
  // console.log("Target language:", targetLang, "Language code:", langCode) // Отладка
  // Note: The langCode parameter is currently not used in the replacement logic.
  // The template uses {{targetLang}}, not {{langCode}}.
  // If {{langCode}} needs to be used, update the translationPrompt template accordingly.
  return translationPrompt.replace("{{content}}", content).replace("{{targetLang}}", targetLang) // Removed .replace("{{langCode}}", langCode) as it's not in the template
}
