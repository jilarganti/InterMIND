<script setup lang="ts">
/// <reference types="../types/global.d.ts" />

import { nanoid } from "nanoid"
import { useData } from "vitepress"
import VPButton from "vitepress/dist/client/theme-default/components/VPButton.vue"
import { usePipedriveCRM } from "../composables/usePipedriveCRM"
import { determineTrafficSource } from "../../../../../../shared/utils/utm"
import { LeadSignUpProps } from "../../../../api/types/signUp.js"
import { LeadData } from "../../../../api/types/pipedriveFields.js"

const REDIRECT_AFTER_AUTH_URI_KEY = "redirect_after_auth"
const inProduction = import.meta.env.VITE_IS_PROD

interface Props {
  text: string
  buttonClass?: "brand" | "alt" | "sponsor"
  mode?: "auth" | "checkout"
  eventName: string
}

const props = withDefaults(defineProps<Props>(), {
  buttonClass: "brand",
  mode: "auth",
})

const { page } = useData()
const { submitToCRM } = usePipedriveCRM("/api/signUp")

const login = (event: Event): void => {
  event.preventDefault()

  const pathSegments = location.pathname.split("/").filter(Boolean)
  const currentLocale = pathSegments[0] && pathSegments[0] !== "en" ? pathSegments[0] : "en"

  const leadData: LeadSignUpProps = {
    email: "email@example.com", // анонимный лид без email
    name: props.eventName,
    // url: location.href,
    // utm: { source: inProduction ? determineTrafficSource() : "[test]" },
    params: {
      method: "Google",
      plan: "basic",
    },
  }

  // Запускаем создание лида
  submitToCRM(leadData).catch((error) => {
    console.error("Failed to create lead:", error)
  })

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
}
</script>

<template>
  <VPButton :text="text" :theme="props.buttonClass" href="#" @click="login" />
</template>
