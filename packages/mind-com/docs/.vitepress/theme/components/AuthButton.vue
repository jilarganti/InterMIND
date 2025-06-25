<script setup lang="ts">
/// <reference types="../types/global.d.ts" />

import { nanoid } from "nanoid"
import { useData } from "vitepress"
import VPButton from "vitepress/dist/client/theme-default/components/VPButton.vue"
import { usePipedriveCRM } from "../composables/usePipedriveCRM"
import { determineTrafficSource } from "../../../../../../shared/utils/utm"
import { generateOriginId } from "../../../../../../shared/utils/path"

const REDIRECT_AFTER_AUTH_URI_KEY = "redirect_after_auth"
const isRealLead = import.meta.env.VITE_IS_PROD

interface Props {
  text: string
  buttonClass?: "brand" | "alt" | "sponsor"
  mode?: "auth" | "checkout" // новый проп
}

const props = withDefaults(defineProps<Props>(), {
  buttonClass: "brand",
  mode: "auth",
})

const { page } = useData()
const { submitToCRM } = usePipedriveCRM()

const login = (event: Event): void => {
  event.preventDefault()

  /**
   * TODO: Перенести или продублировать в продукте
   */
  // Создаем анонимный лид в CRM параллельно с редиректом
  const leadData = {
    name: "[Auth attempt]",
    leadSource: determineTrafficSource(),
    channel: "Web visitors",
    channelId: props.text,
    originId: generateOriginId(page.value.relativePath),
    category: "",
    // email: "",
    // webSite: "",
    // message: "",
    // countryCode: "",
    // countryName: "",
  }

  // Запускаем создание лида без ожидания результата
  submitToCRM(leadData).catch((error) => {
    console.error("Failed to create lead:", error)
  })

  // GTM tracking
  window.dataLayer?.push({
    // event: "app_event_sign_up",
    event: "site_event_auth_attempt",
    // gclid: sessionStorage.getItem("gclid"),
    form_type: leadData.channel,
    form_service: leadData.channelId,
    form_URL: page.value.relativePath,
    form_category: leadData.category,
    is_real_lead: !!isRealLead,
    lead_source: leadData.leadSource,
  })

  // Определяем текущую локаль из URL браузера
  const pathSegments = location.pathname.split("/").filter(Boolean)
  const currentLocale = pathSegments[0] && pathSegments[0] !== "en" ? pathSegments[0] : "en"

  // Сохраняем текущий путь для возврата после авторизации
  localStorage.setItem(REDIRECT_AFTER_AUTH_URI_KEY, location.pathname + location.search)

  // Формируем базовые параметры для авторизации
  const authParams = new URLSearchParams({
    client_id: import.meta.env.VITE_OAUTH_CLIENT_ID,
    scope: "openid",
    response_type: "code",
    state: nanoid(),
    redirect_uri: import.meta.env.VITE_APP_BASE_URL + "/auth",
  })

  if (props.mode === "checkout") {
    // Для checkout режима используем CHECKOUT_URL
    location.href = `${import.meta.env.VITE_CHECKOUT_URL}?locale=${currentLocale}&planCode=pro&billingCycle=MONTHLY&${authParams.toString()}`
  } else {
    // Для auth режима используем OAUTH_PROVIDER_URL
    location.href = `${import.meta.env.VITE_OAUTH_PROVIDER_URL}?locale=${currentLocale}&${authParams.toString()}`
  }
}
</script>

<template>
  <VPButton :text="text" :theme="props.buttonClass" href="#" @click="login" />
</template>

<style scoped>
/* Нет необходимости в собственных стилях, так как VPButton предоставляет все необходимые стили */
</style>
<style scoped>
/* Нет необходимости в собственных стилях, так как VPButton предоставляет все необходимые стили */
</style>
