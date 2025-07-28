# Translation Script

Automated script for translating project documentation and files into multiple languages using AI models.

## Features

- 🌍 **Multi-language translation** - Support for translation into multiple languages
- 🤖 **AI models** - Uses OpenAI GPT-4 and Anthropic Claude for high-quality translations
- 🔄 **Automatic fallback** - Switches between models on errors
- 📁 **Structure synchronization** - Automatic file structure synchronization
- ⚡ **Incremental translation** - Translates only modified files
- 🛠️ **Compilation check** - Optional validation of translated files for compilation errors
- 🔁 **Auto-fix** - Automatic retranslation of files with errors using alternative models

## Installation

1. Install dependencies:

```bash
pnpm install
```

2. Configure environment variables:

```bash
# .env.local or .vercel/.env.development.local
OPENAI_API_KEY=your_openai_api_key
ANTHROPIC_API_KEY=your_anthropic_api_key
```

## Usage

```bash
tsx translate.ts <config-path>
```

### Example

```bash
# From package directory
cd packages/mind-com
pnpm translate

# Or directly
tsx ../../scripts/translate.ts ./scripts/translateConfig.ts
```

## Configuration

Create a configuration file (e.g., `translateConfig.ts`):

```typescript
export const config = {
  // Source directory with English files
  rootDir: "../docs/en",

  // Directory for translations
  rootTranslateDir: "../docs/i18n",

  // VitePress config directory
  configDir: "../docs/.vitepress/config",
  configTranslateDir: "../docs/.vitepress/config/i18n",

  // Translation prompt module
  promptModule: "translatePrompt.ts",

  // Check compilation errors after translation
  checkBuildErrors: true,
  buildCommand: "pnpm build",

  // Languages for translation
  languages: {
    ar: { code: "ar", name: "Gulf Arab & MSA" },
    zh: { code: "zh", name: "Mandarin" },
    es: { code: "es", name: "Spanish" },
    ru: { code: "ru", name: "Russian" },
    // ... other languages
  },

  // AI models for translation
  models: {
    claude: { name: "claude-4-sonnet-20250514" },
    gpt4: { name: "gpt-4.1-mini" },
  },

  // Excluded directories
  exclude: ["test", "node_modules"],

  // File extensions to translate
  allowedExtensions: [".md", ".vue", ".ts", ".js"],
}
```

## Prompt Module

Create a `translatePrompt.ts` file with the prompt generation function:

```typescript
export function getPromptForTranslation(content: string, targetLang: string, langCode: string): string {
  return `Translate the following content to ${targetLang}.
Language code: ${langCode}

Important rules:
- Preserve all markdown formatting
- Keep code blocks unchanged
- Maintain all links and references
- Translate only natural language text

Content:
${content}

Return the translation wrapped in <translated_markdown> tags.`
}
```

## How it Works

1. **Structure synchronization** - Removes outdated files and directories
2. **Change detection** - Compares file modification timestamps
3. **File translation** - Sequential translation with section splitting
4. **Compilation check** (optional) - Runs build and searches for errors
5. **Error fixing** - Retranslates problematic files

## Error Handling

- On translation error, automatically switches to the next model
- Partially translated files are saved with `.log` extension
- Files with compilation errors are retranslated using all available models
- Final report lists files that couldn't be fixed

## Tips

- Use `checkBuildErrors: true` for critical files
- Configure model order in config by priority
- For large projects, run translation in batches
- Regularly review translation quality

## License

Apache-2.0
