<script setup lang="ts">
import { nanoid } from "nanoid"
import VPButton from "vitepress/dist/client/theme-default/components/VPButton.vue"

const REDIRECT_AFTER_AUTH_URI_KEY = "redirect_after_auth"

interface Props {
  /**
   * Текст кнопки
   */
  text: string

  /**
   * Класс для кнопки
   */
  buttonClass?: "brand" | "alt" | "sponsor"
}

const props = withDefaults(defineProps<Props>(), {
  buttonClass: "brand",
})

/**
 * Выполняет перенаправление для авторизации через OAuth
 */
const login = (event: Event): void => {
  event.preventDefault()

  /**
   * TODO: Перенести в приложение после отладки
   */
  window.dataLayer?.push({
    event: "app_event_sign_up",
  })

  // Сохраняем текущий путь для возврата после авторизации
  localStorage.setItem(REDIRECT_AFTER_AUTH_URI_KEY, location.pathname + location.search)

  // Формируем URL для авторизации
  const authUrl =
    `${import.meta.env.VITE_OAUTH_PROVIDER_URL}` +
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
  <VPButton :text="text" :theme="props.buttonClass" href="#" @click="login" />
</template>

<style scoped>
/* Нет необходимости в собственных стилях, так как VPButton предоставляет все необходимые стили */
</style>
