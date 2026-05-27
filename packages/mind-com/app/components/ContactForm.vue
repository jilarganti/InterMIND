<script setup lang="ts">
interface FormData {
  name: string
  email: string
  webSite: string
  kind: string
  message: string
}

const { t } = useI18n({ useScope: "global" })

const props = withDefaults(
  defineProps<{
    services: string[]
    categoryLabel?: string
    categoryPlaceholder?: string
    messageLabel?: string
    messagePlaceholder?: string
    webSiteLabel?: string
    webSitePlaceholder?: string
    buttonText?: string
  }>(),
  {
    categoryLabel: undefined,
    categoryPlaceholder: undefined,
    messageLabel: undefined,
    messagePlaceholder: undefined,
    webSiteLabel: undefined,
    webSitePlaceholder: undefined,
    buttonText: undefined,
  },
)

// Theme-aware Tailwind class groups, shared across fields (mirrors the home page's dark: pattern).
const fieldGroupClass = "flex flex-col gap-4 p-6 rounded-xl border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800/50"
const fieldClass = "flex flex-col gap-1.5"
const labelClass = "text-sm font-medium text-gray-600 dark:text-gray-400"
const inputClass =
  "px-3 py-2.5 rounded-lg border text-base bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-900 dark:bg-gray-900 dark:border-gray-600 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:border-gray-300"

const data = reactive<FormData>({ name: "", email: "", webSite: "", kind: "", message: "" })

// A single category is no real choice — hide the select and submit it implicitly.
const showCategory = computed(() => props.services.length > 1)
watchEffect(() => {
  if (props.services.length === 1) data.kind = props.services[0]!
})

const isSubmitting = ref(false)
const successMessage = ref("")
const errorMessage = ref("")

// posthog-js instance (null in dev / SSR). capture() is a no-op while the
// visitor hasn't granted Usercentrics consent, so this is GDPR-safe.
const { $clientPosthog } = useNuxtApp()

async function handleSubmit() {
  isSubmitting.value = true
  successMessage.value = ""
  errorMessage.value = ""

  try {
    const res = await fetch("/api/submit-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    const json = (await res.json()) as { success?: boolean; message?: string }
    if (res.ok && json.success) {
      successMessage.value = t("contactForm.successMessage")
      // Key landing-page conversion (replaces the old GTM dataLayer push).
      $clientPosthog?.capture("generate_lead", { kind: data.kind })
    } else {
      errorMessage.value = json.message || t("contactForm.crmError")
    }
  } catch (e) {
    errorMessage.value = t("contactForm.networkError")
    console.error("ContactForm error:", e)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="max-w-xl my-6">
    <div v-if="successMessage" class="p-8 text-center rounded-xl border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20">
      <h3 class="mb-2 font-semibold text-green-700 dark:text-green-400">{{ t("contactForm.successHeading") }}</h3>
      <p>{{ successMessage }}</p>
    </div>
    <form v-else :class="fieldGroupClass" @submit.prevent="handleSubmit">
      <div :class="fieldClass">
        <label for="cf-name" :class="labelClass">{{ t("contactForm.nameLabel") }}</label>
        <input id="cf-name" v-model="data.name" type="text" :class="inputClass" :placeholder="t('contactForm.namePlaceholder')" required />
      </div>
      <div :class="fieldClass">
        <label for="cf-email" :class="labelClass">{{ t("contactForm.emailLabel") }}</label>
        <input id="cf-email" v-model="data.email" type="email" :class="inputClass" :placeholder="t('contactForm.emailPlaceholder')" required />
      </div>
      <div :class="fieldClass">
        <label for="cf-site" :class="labelClass">{{ webSiteLabel ?? t("contactForm.webSiteLabel") }}</label>
        <input
          id="cf-site"
          v-model="data.webSite"
          type="url"
          :class="inputClass"
          :placeholder="webSitePlaceholder ?? t('contactForm.webSitePlaceholder')"
          pattern="https?://.+"
          maxlength="100"
        />
      </div>
      <div v-if="showCategory" :class="fieldClass">
        <label for="cf-kind" :class="labelClass">{{ categoryLabel ?? t("contactForm.categoryLabel") }}</label>
        <select id="cf-kind" v-model="data.kind" :class="inputClass" required>
          <option value="" disabled>{{ categoryPlaceholder ?? t("contactForm.categoryPlaceholder") }}</option>
          <option v-for="s in services" :key="s" :value="s">{{ s }}</option>
        </select>
      </div>
      <div :class="fieldClass">
        <label for="cf-msg" :class="labelClass">{{ messageLabel ?? t("contactForm.messageLabel") }}</label>
        <textarea
          id="cf-msg"
          v-model="data.message"
          :class="[inputClass, 'resize-y']"
          :placeholder="messagePlaceholder ?? t('contactForm.messagePlaceholder')"
          rows="4"
        />
      </div>
      <p v-if="errorMessage" class="text-sm text-red-600 dark:text-red-400">{{ errorMessage }}</p>
      <button
        type="submit"
        class="px-5 py-3 rounded-full text-base font-medium transition-colors bg-gray-900 text-white hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 disabled:opacity-60 disabled:cursor-not-allowed"
        :disabled="isSubmitting"
      >
        {{ isSubmitting ? t("contactForm.sending") : (buttonText ?? t("contactForm.buttonText")) }}
      </button>
    </form>
  </div>
</template>
