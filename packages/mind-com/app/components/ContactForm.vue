<script setup lang="ts">
import type { FormError } from "@nuxt/ui"

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
    /** "card" wraps the form in a framed panel for inline page use; "plain" suits already-framed containers like modals. */
    variant?: "card" | "plain"
  }>(),
  {
    categoryLabel: undefined,
    categoryPlaceholder: undefined,
    messageLabel: undefined,
    messagePlaceholder: undefined,
    webSiteLabel: undefined,
    webSitePlaceholder: undefined,
    buttonText: undefined,
    variant: "card",
  },
)

// Translated labels carry a trailing "*"; UFormField's `required` renders its own marker.
const stripRequired = (label: string) => label.replace(/\s*\*\s*$/, "")

const data = reactive<FormData>({ name: "", email: "", webSite: "", kind: "", message: "" })

// Honeypot — hidden from real users, filled by bots; dropped server-side.
const honeypot = ref("")
const captchaToken = ref("")

// A single category is no real choice — hide the select and submit it implicitly.
const showCategory = computed(() => props.services.length > 1)
watchEffect(() => {
  if (props.services.length === 1) data.kind = props.services[0]!
})

function validate(state: Partial<FormData>): FormError[] {
  const errors: FormError[] = []
  if (!state.name?.trim()) errors.push({ name: "name", message: t("contactForm.errorRequired") })
  if (!state.email?.trim()) errors.push({ name: "email", message: t("contactForm.errorRequired") })
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) errors.push({ name: "email", message: t("contactForm.errorEmail") })
  if (showCategory.value && !state.kind) errors.push({ name: "kind", message: t("contactForm.errorRequired") })
  if (!state.message?.trim()) errors.push({ name: "message", message: t("contactForm.errorRequired") })
  return errors
}

const isSubmitting = ref(false)
const isSubmitted = ref(false)
const errorMessage = ref("")

// posthog-js instance (null in dev / SSR). capture() is a no-op while the
// visitor hasn't granted Usercentrics consent, so this is GDPR-safe.
const { $clientPosthog } = useNuxtApp()

async function handleSubmit() {
  isSubmitting.value = true
  errorMessage.value = ""

  try {
    const res = await fetch("/api/submit-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, website: honeypot.value, captchaToken: captchaToken.value }),
    })
    const json = (await res.json()) as { success?: boolean; message?: string }
    if (res.ok && json.success) {
      isSubmitted.value = true
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
  <div :class="variant === 'card' ? 'max-w-xl my-6' : undefined">
    <UAlert
      v-if="isSubmitted"
      color="success"
      variant="subtle"
      icon="i-lucide-circle-check"
      :title="t('contactForm.successHeading')"
      :description="t('contactForm.successMessage')"
    />
    <UForm
      v-else
      :state="data"
      :validate="validate"
      :class="['flex flex-col gap-4', variant === 'card' && 'p-6 rounded-xl border border-default bg-elevated/50']"
      @submit="handleSubmit"
    >
      <!-- Honeypot: off-screen, hidden from real users; bots fill it and get dropped server-side. -->
      <div aria-hidden="true" class="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <input v-model="honeypot" type="text" name="website" tabindex="-1" autocomplete="off" />
      </div>
      <UFormField :label="stripRequired(t('contactForm.nameLabel'))" name="name" required>
        <UInput v-model="data.name" size="lg" class="w-full" autocomplete="name" :placeholder="t('contactForm.namePlaceholder')" />
      </UFormField>
      <UFormField :label="stripRequired(t('contactForm.emailLabel'))" name="email" required>
        <UInput v-model="data.email" type="email" size="lg" class="w-full" autocomplete="email" :placeholder="t('contactForm.emailPlaceholder')" />
      </UFormField>
      <UFormField :label="stripRequired(webSiteLabel ?? t('contactForm.webSiteLabel'))" name="webSite">
        <UInput
          v-model="data.webSite"
          size="lg"
          class="w-full"
          inputmode="url"
          autocomplete="url"
          maxlength="100"
          :placeholder="webSitePlaceholder ?? t('contactForm.webSitePlaceholder')"
        />
      </UFormField>
      <UFormField v-if="showCategory" :label="stripRequired(categoryLabel ?? t('contactForm.categoryLabel'))" name="kind" required>
        <USelect v-model="data.kind" :items="services" size="lg" class="w-full" :placeholder="categoryPlaceholder ?? t('contactForm.categoryPlaceholder')" />
      </UFormField>
      <UFormField :label="stripRequired(messageLabel ?? t('contactForm.messageLabel'))" name="message" required>
        <UTextarea
          v-model="data.message"
          :rows="4"
          autoresize
          size="lg"
          class="w-full"
          :placeholder="messagePlaceholder ?? t('contactForm.messagePlaceholder')"
        />
      </UFormField>
      <TurnstileWidget v-model="captchaToken" />
      <UAlert v-if="errorMessage" color="error" variant="subtle" icon="i-lucide-circle-alert" :description="errorMessage" />
      <UButton
        type="submit"
        color="neutral"
        size="lg"
        class="self-start"
        :loading="isSubmitting"
        :label="isSubmitting ? t('contactForm.sending') : (buttonText ?? t('contactForm.buttonText'))"
      />
    </UForm>
  </div>
</template>
