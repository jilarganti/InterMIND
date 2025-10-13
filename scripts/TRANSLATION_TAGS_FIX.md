# Исправление проблемы с тегами `<translated_markdown>`

## Проблема

Переводчик `scripts/translate.ts` иногда оставлял в переведенных файлах теги `<translated_markdown>` и `</translated_markdown>`, что делало файлы непригодными для сборки.

## Причина

AI-модели (OpenAI GPT-4 и Anthropic Claude) получали инструкцию возвращать перевод между тегами `<translated_markdown>`, но логика извлечения контента из этих тегов была недостаточно надежной:

1. Использовался только один regex для извлечения контента
2. Если AI возвращал теги в неправильном формате, они оставались в тексте
3. Не было резервной очистки на разных уровнях обработки

## Решение

### 1. Улучшенная функция очистки тегов

Добавлена функция `removeTranslationTags()` с двухуровневой очисткой:

```typescript
function removeTranslationTags(content: string): string {
  // Извлечение контента из тегов через regex
  const match = content.match(/<translated_markdown>([\s\S]*)<\/translated_markdown>/)
  if (match) {
    return match[1].trim()
  }
  
  // Резервная очистка: удаление отдельных тегов
  let cleaned = content
    .replace(/<translated_markdown>/gi, "")
    .replace(/<\/translated_markdown>/gi, "")
  
  return cleaned.trim()
}
```

### 2. Множественная очистка на разных уровнях

Теперь очистка происходит на трех уровнях:

1. **В функциях перевода** (`translateWithOpenAI`, `translateWithClaude`)
2. **В функции-обертке** (`translateWithModel`)
3. **В основной функции перевода** (`translateMarkdown`)

Это гарантирует, что теги будут удалены, даже если одна из проверок не сработает.

### 3. Скрипт для очистки существующих файлов

Создан утилитарный скрипт `scripts/clean-translation-tags.ts` для автоматической очистки всех уже переведенных файлов:

```bash
npx tsx scripts/clean-translation-tags.ts
```

## Результаты

- ✅ Исправлен скрипт перевода с тройной защитой от утечки тегов
- ✅ Очищено 32 файла с остаточными тегами
- ✅ Все переведенные файлы теперь пригодны для сборки

## Использование

### Обычный перевод
```bash
cd packages/mind-com
pnpm translate
```

### Перевод на конкретный язык
```bash
cd packages/mind-com
pnpm translate --locale ru
```

### Полный перевод всех файлов
```bash
cd packages/mind-com
pnpm translate --all
```

### Очистка тегов в существующих файлах
```bash
npx tsx scripts/clean-translation-tags.ts
```

## Профилактика

Для предотвращения подобных проблем в будущем:

1. Скрипт теперь имеет множественные уровни проверки
2. Каждая функция обработки применяет очистку тегов
3. Утилитарный скрипт можно запускать периодически для проверки

## Технические детали

**Измененные файлы:**
- `scripts/translate.ts` - добавлена функция `removeTranslationTags()` и улучшена обработка
- `scripts/clean-translation-tags.ts` - новый утилитарный скрипт

**Затронутые пакеты:**
- `mind-com` - 11 файлов очищено
- `golden-fish` - 21 файл очищено
