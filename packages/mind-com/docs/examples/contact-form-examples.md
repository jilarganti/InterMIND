# ContactForm Component Examples

Демонстрация различных способов использования компонента ContactForm.

## Modal Form (По умолчанию)

```vue
<ContactForm buttonText="Связаться с нами" :services="['Консультация', 'Демо', 'Техподдержка']" />
```

<ContactForm 
  buttonText="Связаться с нами"
  :services="['Консультация', 'Демо', 'Техподдержка']"
/>

## Inline Form

```vue
<ContactForm :inline="true" :services="['Консультация', 'Демо', 'Техподдержка']" />
```

<ContactForm 
  :inline="true"
  :services="['Консультация', 'Демо', 'Техподдержка']"
/>

## Styled Inline Form

```vue
<ContactForm
  :inline="true"
  formStyle="max-width: 400px; margin: 2rem auto; padding: 2rem; background: #f8f9fa; border-radius: 12px;"
  categoryLabel="Выберите услугу"
  messageLabel="Ваше сообщение"
  :services="['Консультация', 'Демо', 'Техподдержка']"
/>
```

<ContactForm 
  :inline="true"
  formStyle="max-width: 400px; margin: 2rem auto; padding: 2rem; background: #f8f9fa; border-radius: 12px;"
  categoryLabel="Выберите услугу"
  messageLabel="Ваше сообщение"
  :services="['Консультация', 'Демо', 'Техподдержка']"
/>

## Available Props

| Prop                      | Type                            | Default   | Description                                               |
| ------------------------- | ------------------------------- | --------- | --------------------------------------------------------- |
| `inline`                  | `boolean`                       | `false`   | Отображать форму прямо на странице вместо модального окна |
| `formName`                | `string`                        | -         | Идентификатор формы для аналитики                         |
| `services`                | `string[]`                      | -         | Список опций для выпадающего списка категорий             |
| `buttonText`              | `string`                        | -         | Текст кнопки (для модального режима)                      |
| `formStyle`               | `string`                        | -         | CSS стили для контейнера формы                            |
| `buttonClass`             | `"brand" \| "alt" \| "sponsor"` | `"brand"` | Тема кнопки                                               |
| `categoryLabel`           | `string`                        | -         | Заголовок поля категорий                                  |
| `categoryPlaceholderText` | `string`                        | -         | Плейсхолдер для поля категорий                            |
| `messageLabel`            | `string`                        | -         | Заголовок поля сообщения                                  |
| `messagePlaceholderText`  | `string`                        | -         | Плейсхолдер для поля сообщения                            |
| `webSiteLabel`            | `string`                        | -         | Заголовок поля сайта                                      |
| `webSitePlaceholderText`  | `string`                        | -         | Плейсхолдер для поля сайта                                |
