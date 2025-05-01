<script setup lang="ts">
import { nanoid } from "nanoid"
import { computed } from "vue"

const REDIRECT_AFTER_AUTH_URI_KEY = "redirect_after_auth"

interface Props {
  /**
   * Текст кнопки
   */
  text?: string

  /**
   * Класс для кнопки
   */
  buttonClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  text: "Войти",
  buttonClass: "",
})

// Вычисляемый класс, комбинирующий базовый класс и переданный извне
const computedClass = computed(() => {
  const baseClass = "auth-button"
  return props.buttonClass ? `${baseClass} ${props.buttonClass}` : baseClass
})

/**
 * Выполняет перенаправление для авторизации через OAuth
 */
const login = (): void => {
  // Сохраняем текущий путь для возврата после авторизации
  localStorage.setItem(REDIRECT_AFTER_AUTH_URI_KEY, location.pathname + location.search)

  // Формируем URL для авторизации
  const authUrl =
    // `${import.meta.env.VITE_OAUTH_PROVIDER_URL}` +
    `${import.meta.env.VITE_OAUTH_PROXY_PATH}` +
    "/protocol/openid-connect/auth" +
    `?client_id=${import.meta.env.VITE_OAUTH_CLIENT_ID}` +
    "&scope=openid" +
    "&response_type=code" +
    `&state=${nanoid()}` +
    `&redirect_uri=${encodeURIComponent(import.meta.env.VITE_APP_BASE_URL + "/auth")}`

  // Перенаправляем пользователя на URL авторизации
  location.href = authUrl
}
</script>

<template>
  <button :class="computedClass" @click="login">
    {{ text }}
  </button>
</template>

<style scoped>
.auth-button {
  display: inline-block;
  border: 1px solid transparent;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition:
    color 0.25s,
    border-color 0.25s,
    background-color 0.25s;
  border-radius: 20px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;
  cursor: pointer;
}

/* Кнопки со стилями VitePress */
.brand {
  border-color: var(--vp-button-brand-border);
  color: var(--vp-button-brand-text);
  background-color: var(--vp-button-brand-bg);
}

.brand:hover {
  border-color: var(--vp-button-brand-hover-border);
  color: var(--vp-button-brand-hover-text);
  background-color: var(--vp-button-brand-hover-bg);
}

/* Кнопка альтернативного стиля */
.alt {
  border-color: var(--vp-button-alt-border);
  color: var(--vp-button-alt-text);
  background-color: var(--vp-button-alt-bg);
}

.alt:hover {
  border-color: var(--vp-button-alt-hover-border);
  color: var(--vp-button-alt-hover-text);
  background-color: var(--vp-button-alt-hover-bg);
}
</style>
