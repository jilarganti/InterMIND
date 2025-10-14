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

4. Если текст начинается с --- это frontmatter. Обязательно добавляйте пустую строку в конце кода frontmatter с ---.

5. Переводи заголовки с учетом SEO-оптимизации и культурных особенностей. Например, в русском языке слова в заголовках не пишутся с большой буквы.

CRITICAL HTML RULES:
6. **ALWAYS preserve ALL HTML tags exactly as they are** - every opening tag MUST have a corresponding closing tag
7. **Count HTML tags carefully**: 
   - If you see <div class="example"> you MUST include </div>
   - If source has 5 <div> tags, translation MUST have exactly 5 </div> tags
   - NEVER omit or forget closing tags like </div>, </section>, </article>, etc.
8. **HTML tag balance is mandatory** - unbalanced tags will break the website
9. **Do not cut HTML sections** - if you see an opening <div>, find its closing </div> before ending the translation
10. **Preserve HTML structure completely** - including all attributes, classes, IDs, and nesting

ОШИБКИ:
[Rest of the code with function definitions remains unchanged as it contains technical terms and structure]

Provide translation between <translated_markdown> tags.`

/**
 * Generates the prompt for translation by replacing placeholders in the template.
 * @param {string} content The markdown content to translate.
 * @param {string} targetLang The target language name.
 * @returns {string} The complete prompt string.
 */
export function getPromptForTranslation(content: string, targetLang: string): string {
  return translationPrompt.replace("{{content}}", content).replace("{{targetLang}}", targetLang)
}
