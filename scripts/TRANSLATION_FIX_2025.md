# Исправление проблемы с незакрытыми HTML тегами в переводах

**Дата:** 14 октября 2025  
**Проблема:** При автоматическом переводе markdown файлов AI модели иногда теряли закрывающие HTML теги (`</div>`), что приводило к ошибкам сборки проекта.

## 🐛 Обнаруженная проблема

При переводе длинных markdown файлов с HTML разметкой (особенно с вложенными `<div>` тегами) происходило следующее:

1. Файл разбивался на части по заголовкам H2 (`## `)
2. При разбиении HTML-секции могли оказаться разделенными
3. AI модель переводила каждую часть отдельно
4. Закрывающие теги `</div>` терялись или не добавлялись
5. Сборка проекта падала с ошибкой: `Element is missing end tag`

### Примеры проблемных файлов

- ✅ Исправлено 12 файлов: `vi`, `ta`, `tr`, `ar`, `de`, `es`, `fr`, `hi`, `id`, `ja`, `ko`, `pt`
- ❌ Баланс тегов: 49 открывающих `<div>`, 48 закрывающих `</div>` (не хватало 1 тег)

## 🔧 Внедренные исправления

### 1. Функция проверки баланса HTML тегов

**Файл:** `scripts/translate.ts`

Добавлена функция `checkHtmlTagBalance()`:

- Парсит все HTML теги в контенте
- Отслеживает открывающие и закрывающие теги
- Игнорирует самозакрывающиеся теги (`<img />`, `<br />` и т.д.)
- Возвращает информацию о балансе и незакрытых тегах

```typescript
function checkHtmlTagBalance(content: string): {
  balanced: boolean
  unclosedTags: string[]
  openCount: number
  closeCount: number
}
```

### 2. Улучшенное разбиение контента

**Файл:** `scripts/translate.ts`

Переписана функция `splitByH2()`:

- ✅ Проверяет баланс HTML тегов в каждой части
- ✅ Автоматически объединяет части, если теги не сбалансированы
- ✅ Продолжает объединение, пока не найдет закрывающие теги
- ✅ Выводит предупреждения о несбалансированных частях

```typescript
// До: простое разбиение без проверок
function splitByH2(content: string) {
  const parts = content.split("\n## ")
  return parts.map((part, i) => (i === 0 ? part.trim() : "## " + part.trim())).filter(Boolean)
}

// После: разбиение с балансировкой HTML
function splitByH2(content: string) {
  // ... проверка баланса
  // ... объединение частей при необходимости
  // ... валидация результата
}
```

### 3. Валидация перед сохранением

**Файл:** `scripts/translate.ts`

Улучшена функция `translateFile()`:

- ✅ Сравнивает баланс тегов оригинала и перевода
- ✅ Выводит предупреждения о несбалансированных тегах
- ✅ Сохраняет детальный лог валидации (`.validation.log`)
- ✅ Показывает количество открытых/закрытых тегов

```typescript
// Validation before saving
const originalBalance = checkHtmlTagBalance(content)
const translatedBalance = checkHtmlTagBalance(translatedContent)

if (!translatedBalance.balanced) {
  console.warn(`⚠️  Unbalanced HTML tags detected!`)
  // Save detailed validation log
  fs.writeFileSync(logPath, logContent)
}
```

### 4. Улучшенные инструкции для AI

**Файл:** `packages/mind-com/scripts/translatePrompt.ts`

Добавлены критически важные правила для AI моделей:

```
CRITICAL HTML RULES:
6. **ALWAYS preserve ALL HTML tags exactly as they are**
7. **Count HTML tags carefully**:
   - If you see <div class="example"> you MUST include </div>
   - If source has 5 <div> tags, translation MUST have exactly 5 </div> tags
8. **HTML tag balance is mandatory** - unbalanced tags will break the website
9. **Do not cut HTML sections** - find closing </div> before ending translation
10. **Preserve HTML structure completely**
```

## 📊 Результаты

### До исправления

- ❌ 12 файлов с незакрытыми тегами
- ❌ Сборка падала с ошибкой
- ❌ Нужно было вручную искать и исправлять теги

### После исправления

- ✅ Автоматическая проверка баланса тегов
- ✅ Умное объединение частей при разбиении
- ✅ Предупреждения и логи для ручной проверки
- ✅ Сборка проходит успешно
- ✅ AI получает четкие инструкции

## 🚀 Использование

### Запуск перевода с новой логикой

```bash
# Обычный перевод (только измененные файлы)
cd packages/mind-com
pnpm translate

# Перевод всех файлов (игнорирует временные метки)
pnpm translate --all

# Перевод для конкретного языка
pnpm translate --locale ru
```

### Проверка логов валидации

При обнаружении несбалансированных тегов создаются файлы `.validation.log`:

```bash
# Найти все логи валидации
find docs/i18n -name "*.validation.log"

# Посмотреть содержимое лога
cat docs/i18n/vi/blog/posts/example.validation.log
```

### Быстрая проверка баланса тегов

```bash
# Проверить баланс во всех переведенных файлах
for lang in ar de es fr hi id ja ko pt vi ta tr; do
  file="docs/i18n/$lang/blog/posts/global-language-access-compliance.md"
  if [ -f "$file" ]; then
    open=$(grep -c "<div" "$file")
    close=$(grep -c "</div>" "$file")
    if [ $open -eq $close ]; then
      echo "$lang: ✅ OK ($open divs)"
    else
      echo "$lang: ❌ PROBLEM ($open open, $close close)"
    fi
  fi
done
```

## 📝 Примеры логов

### Предупреждение о несбалансированных частях

```
⚠️  Part 3 has 1 unclosed tags: div
   DIV tags: 5 open, 4 close
✅ Combined 2 parts to balance HTML tags
```

### Предупреждение при сохранении

```
⚠️  blog/posts/example.md → Russian: Unbalanced HTML tags detected!
   Original: 49 open, 49 close
   Translated: 50 open, 49 close
   Unclosed tags: div
   Validation log saved: example.validation.log
```

## 🔍 Технические детали

### Алгоритм балансировки

1. Разбить контент по заголовкам H2
2. Для каждой части:
   - Проверить баланс HTML тегов
   - Если несбалансирована:
     - Объединить со следующей частью
     - Повторить проверку
     - Продолжать до балансировки
3. Вернуть массив сбалансированных частей

### Обнаружение тегов

Regex паттерн для поиска HTML тегов:

```typescript
const tagPattern = /<(\/)?([\w-]+)(?:\s[^>]*)?(\/)?\s*>/g
```

Захватывает:

- Закрывающий слеш `/` (группа 1)
- Имя тега (группа 2)
- Самозакрывающий слеш `/` (группа 3)

### Самозакрывающиеся теги

Игнорируются при подсчете баланса:

- `img`, `br`, `hr`, `input`, `meta`, `link`
- Теги с завершающим `/>`

## ⚠️ Известные ограничения

1. **Вложенные разнотипные теги**: Если между `<div>` и `</div>` есть `<section>`, алгоритм может не всегда правильно определить порядок закрытия
2. **Очень длинные секции**: Объединение может создать очень большие части, которые могут привести к таймаутам API
3. **Комментарии HTML**: Комментарии `<!-- -->` не учитываются при балансировке

## 🎯 Будущие улучшения

1. ✨ Добавить автоматическое исправление незакрытых тегов
2. ✨ Интеграция с AST парсером для более точной проверки
3. ✨ Кэширование валидных переводов для ускорения
4. ✨ Метрики качества перевода (сохранение структуры)
5. ✨ Автоматическое разбиение по семантическим блокам вместо H2

## 📚 Связанные файлы

- `scripts/translate.ts` - Основной скрипт перевода
- `packages/mind-com/scripts/translatePrompt.ts` - Промпты для AI
- `scripts/clean-translation-tags.ts` - Очистка тегов (если нужна)
- `.github/copilot-instructions.md` - Инструкции для разработки

## ✅ Чеклист для новых переводов

- [ ] Запустить перевод: `pnpm translate`
- [ ] Проверить логи на предупреждения
- [ ] Просмотреть `.validation.log` файлы (если есть)
- [ ] Запустить сборку: `pnpm build`
- [ ] Проверить баланс тегов скриптом
- [ ] Удалить логи после проверки: `find . -name "*.validation.log" -delete`

---

**Автор исправления:** AI Copilot  
**Дата создания документа:** 14 октября 2025  
**Версия:** 1.0
