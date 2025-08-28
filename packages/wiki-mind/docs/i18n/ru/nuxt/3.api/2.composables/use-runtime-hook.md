---
title: "useRuntimeHook"
description: "Регистрирует runtime хук в Nuxt приложении и обеспечивает его правильную очистку при уничтожении области видимости."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/runtime-hook.ts
    size: xs
---

::important
Этот композабл доступен в Nuxt v3.14+.
::

```ts [signature]
function useRuntimeHook<THookName extends keyof RuntimeNuxtHooks>(
  name: THookName,
  fn: RuntimeNuxtHooks[THookName] extends HookCallback ? RuntimeNuxtHooks[THookName] : never
): void
```

## Использование

### Параметры

- `name`: Имя runtime хука для регистрации. Вы можете посмотреть полный список [runtime Nuxt хуков здесь](/docs/api/advanced/hooks#app-hooks-runtime).
- `fn`: Функция обратного вызова, которая выполняется при срабатывании хука. Сигнатура функции зависит от имени хука.

### Возвращаемое значение

Композабл не возвращает значение, но автоматически отменяет регистрацию хука при уничтожении области видимости компонента.

## Пример

```vue twoslash [pages/index.vue]
<script setup lang="ts">
// Регистрируем хук, который выполняется каждый раз при предзагрузке ссылки, но который будет
// автоматически очищен (и не будет вызван снова) при размонтировании компонента
useRuntimeHook('link:prefetch', (link) => {
  console.log('Предзагрузка', link)
})
</script>
```