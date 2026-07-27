<script setup lang="ts">
interface TurnstileApi {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string
  remove: (id: string) => void
}

declare global {
  interface Window {
    turnstile?: TurnstileApi
  }
}

const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"

const token = defineModel<string>({ default: "" })

const config = useRuntimeConfig()
const siteKey = config.public.turnstileSiteKey as string

const container = ref<HTMLElement | null>(null)
let widgetId: string | null = null

/** Single in-flight loader shared by every widget instance on the page. */
let scriptPromise: Promise<void> | null = null
function loadScript(): Promise<void> {
  if (window.turnstile) return Promise.resolve()
  if (scriptPromise) return scriptPromise
  scriptPromise = new Promise<void>((resolve, reject) => {
    const script = document.createElement("script")
    script.src = SCRIPT_SRC
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => {
      scriptPromise = null
      reject(new Error("Turnstile script failed to load"))
    }
    document.head.appendChild(script)
  })
  return scriptPromise
}

onMounted(async () => {
  // No site key configured — the server-side guard fails open to match, so the
  // form stays usable rather than blocking every visitor on a missing env var.
  if (!siteKey) return
  try {
    await loadScript()
  } catch (error) {
    console.error("[turnstile]", (error as Error).message)
    return
  }
  if (!container.value || !window.turnstile) return
  widgetId = window.turnstile.render(container.value, {
    sitekey: siteKey,
    callback: (t: string) => {
      token.value = t
    },
    "expired-callback": () => {
      token.value = ""
    },
    "error-callback": () => {
      token.value = ""
    },
  })
})

onBeforeUnmount(() => {
  if (widgetId && window.turnstile) window.turnstile.remove(widgetId)
})
</script>

<template>
  <div ref="container" />
</template>
