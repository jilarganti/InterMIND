<script setup lang="ts">
interface FormData {
  name: string
  email: string
  webSite: string
  kind: string
  message: string
}

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
    categoryLabel: "What's your topic? *",
    categoryPlaceholder: "Choose one...",
    messageLabel: "Message",
    messagePlaceholder: "Anything you'd like to share...",
    webSiteLabel: "Company website",
    webSitePlaceholder: "e.g. https://companyname.com",
    buttonText: "Submit request",
  },
)

const data = reactive<FormData>({ name: "", email: "", webSite: "", kind: "", message: "" })
const isSubmitting = ref(false)
const successMessage = ref("")
const errorMessage = ref("")

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

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
    const json = (await res.json()) as { success?: boolean; message?: string; gtmData?: Record<string, unknown> }
    if (res.ok && json.success) {
      successMessage.value = "We've received your message — our team will be in touch shortly."
      if (json.gtmData && typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push(json.gtmData)
      }
    } else {
      errorMessage.value = json.message || "CRM error"
    }
  } catch (e) {
    errorMessage.value = "Network or server error"
    console.error("ContactForm error:", e)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="contact-form-wrap">
    <div v-if="successMessage" class="success">
      <h3>Thank you!</h3>
      <p>{{ successMessage }}</p>
    </div>
    <form v-else class="contact-form" @submit.prevent="handleSubmit">
      <div class="field">
        <label for="cf-name">Name *</label>
        <input id="cf-name" v-model="data.name" type="text" placeholder="your name" required />
      </div>
      <div class="field">
        <label for="cf-email">Email *</label>
        <input id="cf-email" v-model="data.email" type="email" placeholder="your email address" required />
      </div>
      <div class="field">
        <label for="cf-site">{{ webSiteLabel }}</label>
        <input id="cf-site" v-model="data.webSite" type="url" :placeholder="webSitePlaceholder" pattern="https?://.+" maxlength="100" />
      </div>
      <div class="field">
        <label for="cf-kind">{{ categoryLabel }}</label>
        <select id="cf-kind" v-model="data.kind" required>
          <option value="" disabled>{{ categoryPlaceholder }}</option>
          <option v-for="s in services" :key="s" :value="s">{{ s }}</option>
        </select>
      </div>
      <div class="field">
        <label for="cf-msg">{{ messageLabel }}</label>
        <textarea id="cf-msg" v-model="data.message" :placeholder="messagePlaceholder" rows="4" />
      </div>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <button type="submit" class="submit" :disabled="isSubmitting">
        {{ isSubmitting ? "Sending..." : buttonText }}
      </button>
    </form>
  </div>
</template>

<style scoped>
.contact-form-wrap {
  max-width: 560px;
  margin: 1.5rem 0;
}
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background: #fafafa;
  border-radius: 12px;
  border: 1px solid #ececec;
}
.field {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
.field label {
  font-size: 0.85rem;
  font-weight: 500;
  color: #555;
}
.field input,
.field select,
.field textarea {
  padding: 0.6rem 0.8rem;
  border: 1px solid #d4d4d4;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  background: #fff;
}
.field textarea {
  resize: vertical;
}
.field input:focus,
.field select:focus,
.field textarea:focus {
  outline: none;
  border-color: #dd9144;
}
.submit {
  padding: 0.75rem 1.25rem;
  background: #1c1c1c;
  color: #fff;
  border: none;
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s;
}
.submit:hover:not(:disabled) {
  background: #dd9144;
}
.submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.error {
  color: #c62828;
  font-size: 0.9rem;
}
.success {
  padding: 2rem;
  background: #f3f8f4;
  border: 1px solid #c8e6c9;
  border-radius: 12px;
  text-align: center;
}
.success h3 {
  margin: 0 0 0.5rem;
  color: #2e7d32;
}
</style>
