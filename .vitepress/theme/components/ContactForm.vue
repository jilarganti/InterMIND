// ContactForm.vue

<script setup lang="ts">
import { ref, onMounted, computed } from "vue"
import { useData } from "vitepress"

interface FormData {
  name: string
  phoneCode: string
  phoneNumber: string
  email: string
  service: string
  offerType: string
  message: string
  source: string
  category: string
}

interface TelegramResponse {
  ok: boolean
  description?: string
}

const props = defineProps<{
  mediaUrl?: string
  redirectUrl?: string
  selectLabel?: string
  selectOptions?: string[]
  selectPlaceholder?: string
  messagePlaceholder?: string
}>()

const isVideo = computed(() => props.mediaUrl?.toLowerCase().match(/\.(mp4|webm|ogg)$/))

const { site } = useData()
const { name, namePlaceholder, phone, phonePlaceholder, phoneError, email, emailPlaceholder, message, submit, sending, successTitle, successMessage } =
  site.value.themeConfig.contact_form

const formData = ref<FormData>({
  name: "",
  phoneCode: "",
  phoneNumber: "",
  email: "",
  service: "",
  offerType: "",
  message: "",
  source: "",
  category: "",
})

const formErrors = ref({
  phoneCode: "",
  phoneNumber: "",
})

const validatePhoneFields = (): boolean => {
  let isValid = true
  formErrors.value.phoneNumber = ""

  // Validate phone number
  if (!/^\d{8}$/.test(formData.value.phoneNumber)) {
    formErrors.value.phoneNumber = phoneError
    isValid = false
  }

  return isValid
}

const handlePhoneCodeInput = (event: Event) => {
  const input = event.target as HTMLInputElement
  // Only allow numbers and limit to 4 digits
  input.value = input.value.replace(/\D/g, "").slice(0, 4)
  formData.value.phoneCode = input.value
}

const handlePhoneNumberInput = (event: Event) => {
  const input = event.target as HTMLInputElement
  // Only allow numbers and limit to 9 digits
  input.value = input.value.replace(/\D/g, "").slice(0, 8)
  formData.value.phoneNumber = input.value
}

const handleCategoryChange = (event: Event) => {
  const select = event.target as HTMLSelectElement
  const selectedValue = select.value

  if (props.selectOptions && selectedValue === props.selectOptions[props.selectOptions.length - 1] && props.redirectUrl) {
    window.location.href = props.redirectUrl
  }
}

onMounted(() => {
  const path = window.location.pathname
  formData.value.source = path

  const parts = path.split("/").filter(Boolean)
  if (parts.length >= 2) {
    formData.value.service = parts[parts.length - 1]
    formData.value.offerType = parts[parts.length - 2]
  }
})

const loading = ref<boolean>(false)
const showSuccess = ref<boolean>(false)

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyiXcPMa9pCUItnIyRgJlrKc4EqFEFiqZMQ1Rm0wl60t2a0WTtzwHt5bcuvfwso_fHrdw/exec"

const sendToSheets = async (data: FormData): Promise<boolean> => {
  try {
    const form = document.createElement("form")
    form.method = "POST"
    form.action = APPS_SCRIPT_URL
    form.style.display = "none"

    const fields = {
      name: data.name,
      phone: `${data.phoneCode} ${data.phoneNumber}`, // Combine phone fields
      email: data.email,
      service: data.service,
      offerType: data.offerType,
      message: data.message,
      source: data.source,
      category: data.category,
    }

    for (const [key, value] of Object.entries(fields)) {
      const input = document.createElement("input")
      input.type = "hidden"
      input.name = key
      input.value = value.toString()
      form.appendChild(input)
    }

    const iframe = document.createElement("iframe")
    iframe.name = "form-target"
    iframe.style.display = "none"
    document.body.appendChild(iframe)
    form.target = "form-target"

    document.body.appendChild(form)
    form.submit()

    setTimeout(() => {
      document.body.removeChild(form)
      document.body.removeChild(iframe)
    }, 1000)

    return true
  } catch (error) {
    console.error("Error sending to Sheets:", error)
    return false
  }
}

const BOT_TOKEN = "7676327694:AAGexHtN-uuHpt4ttrp9mGrOKNcOU246XSg"
const CHAT_ID = "-1002291337225"

const sendToTelegram = async (data: FormData): Promise<boolean> => {
  const message = `
    🔔 ${data.service} ${data.category}
    👤 ${data.name} 📞 ${data.phoneCode} ${data.phoneNumber} 📧 ${data.email}
    📝 ${data.message}
      `

  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    })

    const result: TelegramResponse = await response.json()
    if (!result.ok) throw new Error(result.description || "Failed to send message")

    return true
  } catch (error) {
    console.error("Error sending to Telegram:", error)
    return false
  }
}

const handleSubmit = async (e: Event): Promise<void> => {
  e.preventDefault()

  if (loading.value) {
    return
  }

  // Validate phone fields before submission
  if (!validatePhoneFields()) {
    return
  }

  loading.value = true

  const sheetsSuccess = await sendToSheets(formData.value)
  if (!sheetsSuccess) {
    loading.value = false
    return
  }

  const telegramSuccess = await sendToTelegram(formData.value)

  if (sheetsSuccess) {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "custom_event_form_submit",
        form_type: formData.value.offerType,
        form_service: formData.value.service,
        form_URL: formData.value.source,
        form_category: formData.value.category,
      })
    }

    formData.value = {
      name: "",
      phoneCode: "",
      phoneNumber: "",
      email: "",
      service: formData.value.service,
      offerType: formData.value.offerType,
      message: "",
      source: formData.value.source,
      category: "",
    }

    showSuccess.value = true
  }

  loading.value = false
}
</script>

<template>
  <div class="form-wrapper">
    <div class="form-container">
      <div v-if="showSuccess" class="success-message">
        <h3 class="success-title">
          <span>✨</span>
          <span>{{ successTitle }}</span>
        </h3>
        <p class="success-text">{{ successMessage }}</p>
      </div>

      <form v-else @submit="handleSubmit" class="contact-form">
        <div class="form-group">
          <label>{{ name }}</label>
          <input type="text" v-model="formData.name" :placeholder="namePlaceholder" />
        </div>

        <div class="form-group">
          <label>{{ phone }}</label>
          <div class="phone-input-group">
            <div class="phone-code">
              <input
                type="text"
                v-model="formData.phoneCode"
                placeholder="971"
                @input="handlePhoneCodeInput"
                class="phone-code-input"
                autocomplete="tel-country-code"
                inputmode="numeric"
              />
            </div>
            <div class="phone-number">
              <input
                type="text"
                v-model="formData.phoneNumber"
                :placeholder="phonePlaceholder"
                @input="handlePhoneNumberInput"
                :class="{ invalid: formErrors.phoneNumber }"
                autocomplete="tel-national"
                inputmode="numeric"
              />
              <span v-if="formErrors.phoneNumber" class="error-message">{{ formErrors.phoneNumber }}</span>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label>{{ email }}</label>
          <input type="email" v-model="formData.email" :placeholder="emailPlaceholder" required />
        </div>

        <div v-if="props.selectLabel && props.selectOptions" class="form-group">
          <label>{{ props.selectLabel }}</label>
          <select v-model="formData.category" required class="select-input" @change="handleCategoryChange">
            <option value="" disabled>{{ props.selectPlaceholder }}</option>
            <option v-for="option in props.selectOptions" :key="option" :value="option">
              {{ option }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label>{{ message }}</label>
          <textarea v-model="formData.message" :placeholder="props.messagePlaceholder" required></textarea>
        </div>

        <button id="formSubmit" type="submit" :disabled="loading" class="button brand">
          {{ loading ? sending : submit }}
        </button>
      </form>
    </div>

    <div v-if="mediaUrl" class="media-container">
      <video v-if="isVideo" autoplay muted playsinline class="media-content">
        <source :src="mediaUrl" :type="`video/${mediaUrl.split('.').pop()}`" />
      </video>
      <img v-else :src="mediaUrl" alt="" class="media-content" />
    </div>
  </div>
</template>

<style scoped>
.form-container {
  flex: 1 1 500px; /* Можно “расти” до 500px, но и ужаться при необходимости */
  max-width: 500px; /* Чтобы на широких экранах не растягивалось за 500px */
  width: 100%; /* Чтобы на узких экранах занимало всю доступную ширину */
}

.form-wrapper {
  display: flex;
  gap: 48px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  align-items: center;
  justify-content: flex-start;
}

.phone-input-group {
  display: flex;
  gap: 12px;
}

.phone-code {
  flex: 0 0 80px;
}

.phone-number {
  flex: 1;
}

.phone-code input,
.phone-number input {
  width: 100%;
}

.media-container {
  display: none;
}

@media (min-width: 768px) {
  .media-container {
    display: block;
    flex: 0 1 500px;
  }

  .form-wrapper:has(.media-container) {
    justify-content: space-between;
  }
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 500px;
  padding: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-size: 16px;
  margin-bottom: 8px;
}

.form-group input,
.form-group textarea,
.form-group select {
  padding: 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 16px;
}

.form-group input.invalid {
  border-color: #dc2626;
}

.error-message {
  color: #dc2626;
  font-size: 14px;
  margin-top: 4px;
}

.select-input {
  cursor: pointer;
  color: var(--vp-hl-color) !important;
}

.button {
  min-width: fit-content;
  width: auto;
  margin: 12px auto 0;
  padding: 0 32px;
  line-height: 38px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 20px;
}

.button.brand {
  border: 1px solid var(--vp-button-brand-border);
  color: var(--vp-button-brand-text);
  background-color: var(--vp-button-brand-bg);
}

.button.brand:hover {
  border-color: var(--vp-button-brand-hover-border);
  color: var(--vp-button-brand-hover-text);
  background-color: var(--vp-button-brand-hover-bg);
}

.success-message {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-brand);
  padding: 32px;
  border-radius: 12px;
  text-align: left;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.success-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--vp-c-brand);
  display: flex;
  align-items: center;
  gap: 8px;
}

.success-text {
  font-size: 16px;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}

.media-content {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}
</style>
