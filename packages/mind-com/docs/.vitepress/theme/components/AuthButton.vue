<script setup lang="ts">
/**
 * AuthButton Component
 *
 * OAuth authentication button that handles user login/signup flow.
 * Creates CRM leads in Pipedrive and tracks user events in Google Tag Manager
 * DataLayer for analytics, conversion tracking, and marketing attribution.
 *
 * Features:
 * - OAuth flow with state parameter
 * - CRM lead creation in Pipedrive
 * - GTM DataLayer event tracking
 * - Analytics and conversion tracking
 * - Marketing attribution support
 * - Locale-aware redirects
 * - Checkout mode support
 * - Return URL preservation
 */

/// <reference types="../types/global.d.ts" />

import { nanoid } from "nanoid"
import VPButton from "vitepress/dist/client/theme-default/components/VPButton.vue"
import { SignUpLead } from "../../../../api/types/pipedriveFields.js"
import { getUtmForApi } from "../../../../../../shared/utils/utm.js"

const REDIRECT_AFTER_AUTH_URI_KEY = "redirect_after_auth"

const props = withDefaults(
  defineProps<{
    text: string
    buttonClass?: "brand" | "alt" | "sponsor"
    buttonStyle?: string
    mode?: "auth" | "checkout"
    eventName: "sign_up" | "sign_in_attempt" | "try_it_attempt" | "get_started_attempt"
  }>(),
  {
    buttonClass: "brand",
    buttonStyle: "display: flex; justify-content: center; padding: 15px;", // добавлены отступы
    mode: "auth",
    eventName: "sign_up",
  },
)

const login = async (event: Event): Promise<void> => {
  event.preventDefault()

  const pathSegments = location.pathname.split("/").filter(Boolean)
  const currentLocale = pathSegments[0] && pathSegments[0] !== "en" ? pathSegments[0] : "en"

  // Сохраняем текущий путь для возврата после авторизации
  localStorage.setItem(REDIRECT_AFTER_AUTH_URI_KEY, location.pathname + location.search)

  const authParams = new URLSearchParams({
    client_id: import.meta.env.VITE_OAUTH_CLIENT_ID,
    scope: "openid",
    response_type: "code",
    state: nanoid(),
    redirect_uri: import.meta.env.VITE_APP_BASE_URL + "/auth",
  })

  if (props.mode === "checkout") {
    location.href = `${import.meta.env.VITE_CHECKOUT_URL}?locale=${currentLocale}&planCode=pro&billingCycle=MONTHLY&${authParams.toString()}`
  } else {
    location.href = `${import.meta.env.VITE_OAUTH_PROVIDER_URL}?locale=${currentLocale}&${authParams.toString()}`
  }

  /**
   * Создаем лид для CRM и событие для аналитики
   * TODO: удалить после внедрения и тестирования в продукте
   */
  const utmParams = getUtmForApi()

  const leadData: SignUpLead = {
    email: `[${props.text}]`,
    name: props.eventName,
    utm: utmParams,
    params: {
      method: undefined,
      plan: "Basic",
    },
  }

  // Send lead data and handle GTM tracking
  try {
    const response = await fetch("/api/signUp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(leadData),
    })

    const data = await response.json()

    // Send GTM data to DataLayer for analytics tracking
    if (data.success) {
      window.dataLayer?.push(data.gtmData)
    }
  } catch (error) {
    console.error("Failed to create lead:", error)
  }
}
</script>

<template>
  <div :style="props.buttonStyle">
    <VPButton :text="text" :theme="props.buttonClass" href="#" @click="login" />
  </div>
</template>
