<script setup lang="ts">
/**
 * ContactForm Component
 *
 * Modal contact form component for lead generation and customer inquiries.
 * Integrates with Pipedrive CRM via API and tracks user interactions in
 * Google Tag Manager DataLayer for analytics and conversion tracking.
 *
 * Features:
 * - Modal-based form interface
 * - CRM integration with submitForm API
 * - GTM DataLayer event tracking
 * - Analytics and conversion tracking
 * - Customizable form fields and styling
 * - Form validation and error handling
 * - Success/error state management
 * - Multilingual support
 * - Category selection dropdown
 * - Website URL validation
 * - Click-outside-to-close functionality
 */

import { useData } from "vitepress"
import { ref, computed } from "vue"
import { onClickOutside } from "@vueuse/core"
import VPButton from "vitepress/dist/client/theme-default/components/VPButton.vue"
import { SubmitForm } from "../../../../api/types/pipedriveFields"

const { site } = useData()

const props = defineProps<{
  formName?: string
  services?: string[]
  buttonText?: string
  formStyle?: string
  buttonClass?: "brand" | "alt" | "sponsor"
  categoryLabel?: string
  categoryPlaceholderText?: string
  messageLabel?: string
  messagePlaceholderText?: string
}>()

const buttonTextValue = computed(() => props.buttonText || site.value.themeConfig.contact_form.defaultButtonText)
const categoriesValue = computed(() => props.services || site.value.themeConfig.contact_form.defaultCategories)
const styleValue = computed(() => props.formStyle || "display: block;")
const buttonTheme = computed(() => props.buttonClass || "brand")
const categoryLabelValue = computed(() => props.categoryLabel || site.value.themeConfig.contact_form.category)
const categoryPlaceholderValue = computed(() => props.categoryPlaceholderText || site.value.themeConfig.contact_form.categoryPlaceholder)
const messageLabelValue = computed(() => props.messageLabel || site.value.themeConfig.contact_form.message)
const messagePlaceholderValue = computed(() => props.messagePlaceholderText || site.value.themeConfig.contact_form.messagePlaceholder)

const showModal = ref(false)
const modalContainerRef = ref(null)

// Simple form state without composable
const isSubmitting = ref(false)
const formSuccessMessage = ref("")
const formErrorMessage = ref("")

// Form data
const formData = ref<SubmitForm>({
  email: "",
  kind: "",
  message: "",
})

const { name, namePlaceholder, phone, phonePlaceholder, email, emailPlaceholder, submit, sending, successTitle, successMessage } =
  site.value.themeConfig.contact_form

onClickOutside(modalContainerRef, () => {
  if (showModal.value) {
    closeModal()
  }
})

const handleSubmit = async () => {
  isSubmitting.value = true
  formSuccessMessage.value = ""
  formErrorMessage.value = ""

  try {
    const response = await fetch("/api/submitForm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData.value),
    })

    const data = await response.json()

    if (response.ok && data.success) {
      formSuccessMessage.value = data.message || "Lead created"
    } else {
      formErrorMessage.value = data.message || "CRM error"
    }
  } catch (e) {
    formErrorMessage.value = "Network or server error"
    console.error("CRM Error:", e)
  } finally {
    isSubmitting.value = false
  }
}

const closeModal = () => {
  showModal.value = false
  formErrorMessage.value = ""
}
</script>

<template>
  <div :style="styleValue">
    <VPButton :text="buttonTextValue" :theme="buttonTheme" href="javascript:void(0);" @click.prevent="showModal = true" />
  </div>

  <Teleport to="body">
    <Transition name="modal">
      <div v-show="showModal" class="modal-mask">
        <div ref="modalContainerRef" class="modal-container">
          <div class="modal-header">
            <h3>{{ buttonTextValue }}</h3>
            <button class="close-button" @click="closeModal">&times;</button>
          </div>

          <div v-if="formSuccessMessage" class="success-message">
            <h3 class="success-title">{{ successTitle }}</h3>
            <p class="success-text">{{ successMessage }}</p>
          </div>

          <form v-else @submit.prevent="handleSubmit" class="contact-form">
            <div>
              <label for="name">{{ name }}</label>
              <input name="name" type="text" v-model="formData.name" :placeholder="namePlaceholder" required />
            </div>

            <div>
              <label for="email">{{ email }}</label>
              <input name="email" type="email" v-model="formData.email" :placeholder="emailPlaceholder" required />
            </div>

            <div>
              <label for="phone">{{ phone }}</label>
              <input
                name="phone"
                type="tel"
                v-model="formData.phone"
                :placeholder="phonePlaceholder"
                required
                pattern="^(\+\d{1,4}[\s\-]?|\(\d{1,4}\)[\s\-]?|\d{1,4}[\s\-])[\d\s\-]{8,16}$"
                maxlength="20"
              />
            </div>

            <div>
              <label for="category">{{ categoryLabelValue }}</label>
              <select name="category" v-model="formData.kind" required>
                <option value="" disabled>{{ categoryPlaceholderValue }}</option>
                <option v-for="category in categoriesValue" :key="category" :value="category">
                  {{ category }}
                </option>
              </select>
            </div>

            <div>
              <label for="message">{{ messageLabelValue }}</label>
              <textarea name="message" v-model="formData.message" :placeholder="messagePlaceholderValue"></textarea>
            </div>

            <p v-if="formErrorMessage" class="error">
              {{ formErrorMessage }}
            </p>

            <div class="modal-footer">
              <button type="submit" class="submit-button" :disabled="isSubmitting">
                {{ isSubmitting ? sending : submit }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-container {
  width: 400px;
  padding: 1.5rem;
  background-color: var(--vp-c-bg);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.modal-header h3 {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: 1.3rem;
}

.close-button {
  width: 32px;
  height: 32px;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.close-button:hover {
  background-color: var(--vp-c-bg-soft);
  opacity: 1;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-form div {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.contact-form label {
  color: var(--vp-c-text-1);
}

.contact-form input {
  padding: 0.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

contact-form input:focus {
  outline: none;
  border-color: var(--vp-c-brand);
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.error {
  color: var(--vp-c-danger);
  font-size: 0.875rem;
  margin: 0;
}

/* Animations */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition: transform 0.3s ease;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(1.1);
}

.contact-form select {
  padding: 0.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  width: 100%;
}

.contact-form textarea {
  padding: 0.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  width: 100%;
  resize: vertical;
  min-height: 100px;
}

.contact-form select:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: var(--vp-c-brand);
}

.success-message {
  text-align: center;
  padding: 32px 16px;
}

.success-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--vp-c-brand);
}

.success-text {
  font-size: 16px;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}

.submit-button {
  padding: 0.5rem 1rem;
  border: 1px solid var(--vp-button-brand-border);
  background-color: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text);
  cursor: pointer;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  font-weight: 600;
  border-radius: 20px;
}

.submit-button:hover {
  color: var(--vp-button-brand-hover-text);
  border-color: var(--vp-button-brand-hover-border);
  background-color: var(--vp-button-brand-hover-bg);
}

.submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
