# API Security Configuration

## Domain Access Control

Все API endpoints защищены проверкой доменов для предотвращения несанкционированного доступа.

### Разрешенные домены

Список разрешенных доменов находится в файле `config/pipedriveConfig.ts`:

```typescript
export const ALLOWED_DOMAINS = [
  "localhost",
  "127.0.0.1",
  "mind-com.vercel.app",
  "draftium.vercel.app",
  "golden-fish.vercel.app",
  "intermind.com",
  "www.intermind.com",
]
```

### Как это работает

1. **Проверка origin/referer**: Функция `isAllowedDomain()` проверяет заголовки `origin` и `referer` входящих запросов
2. **Автоматическая защита**: Все API endpoints автоматически проверяют домен перед обработкой запроса
3. **Fallback логика**: Если `origin` недоступен, проверяется `referer`
4. **Локальная разработка**: `localhost` и `127.0.0.1` разрешены для локальной разработки

### Защищенные endpoints

- `POST /api/signUp` - Регистрация пользователей
- `POST /api/submitForm` - Отправка форм
- `GET /api/demo/get` - Демо endpoint
- `POST /api/demo/handler` - Демо handler

### Ошибка доступа

При попытке доступа с неразрешенного домена возвращается:

```json
{
  "success": false,
  "message": "Access denied: Domain not allowed"
}
```

Статус код: `403 Forbidden`

### Добавление новых доменов

Чтобы добавить новый разрешенный домен:

1. Откройте `config/pipedriveConfig.ts`
2. Добавьте домен в массив `ALLOWED_DOMAINS`
3. Сохраните файл

**Важно**: Указывайте только hostname без протокола (например, `example.com`, а не `https://example.com`)

### Особенности

- **Прямые запросы**: Если нет `origin` и `referer` заголовков, запрос разрешается (для случаев серверных запросов)
- **Логирование**: Невалидные URL в заголовках логируются как предупреждения
- **Регистронезависимость**: Проверка доменов учитывает регистр
