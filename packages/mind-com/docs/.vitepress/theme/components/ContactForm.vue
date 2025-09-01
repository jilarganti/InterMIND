<script setup lang="ts">
/**
 * ContactForm Component
 *
 * Flexible contact form component for lead generation and customer inquiries.
 * Supports both modal and inline display modes.
 * Integrates with Pipedrive CRM via API and tracks user interactions in
 * Google Tag Manager DataLayer for analytics and conversion tracking.
 *
 * Features:
 * - Modal-based form interface (default)
 * - Inline form display (with `inline` prop)
 * - CRM integration with submitForm API
 * - GTM DataLayer event tracking
 * - Analytics and conversion tracking
 * - Customizable form fields and styling
 * - Form validation and error handling
 * - Success/error state management
 * - Multilingual support
 * - Category selection dropdown
 * - Website URL validation
 * - Click-outside-to-close functionality (modal mode)
 *
 * @prop {boolean} inline - Display form inline instead of modal
 * @prop {string} formName - Name identifier for the form
 * @prop {string[]} services - Array of service options for category dropdown
 * @prop {string} buttonText - Text for the modal trigger button
 * @prop {string} formStyle - CSS styles for the form container
 * @prop {"brand" | "alt" | "sponsor"} buttonClass - Button theme class
 * @prop {string} categoryLabel - Label for category field
 * @prop {string} categoryPlaceholderText - Placeholder for category field
 * @prop {string} messageLabel - Label for message field
 * @prop {string} messagePlaceholderText - Placeholder for message field
 * @prop {string} webSiteLabel - Label for website field
 * @prop {string} webSitePlaceholderText - Placeholder for website field
 *
 * @usage
 * // Modal form (default)
 * <ContactForm buttonText="Contact Us" />
 *
 * // Inline form
 * <ContactForm :inline="true" />
 */

/// <reference types="../types/global" />

import { useData } from "vitepress"
import { ref, computed } from "vue"
import { onClickOutside } from "@vueuse/core"
import VPButton from "vitepress/dist/client/theme-default/components/VPButton.vue"
import { SubmitForm } from "../../../../api/types/pipedriveFields"

const { site } = useData()

const props = withDefaults(
  defineProps<{
    formName?: string
    services?: string[]
    buttonText?: string
    formStyle?: string
    buttonClass?: "brand" | "alt" | "sponsor"
    categoryLabel?: string
    categoryPlaceholderText?: string
    messageLabel?: string
    messagePlaceholderText?: string
    webSiteLabel?: string
    webSitePlaceholderText?: string
    inline?: boolean
  }>(),
  {
    buttonClass: "brand",
    formStyle: "display: block;",
    inline: false,
  },
)

// Только для динамических дефолтов из настроек темы
const buttonTextValue = computed(() => props.buttonText || site.value.themeConfig.contact_form.defaultButtonText)
const categoriesValue = computed(() => props.services || site.value.themeConfig.contact_form.defaultCategories)
const categoryLabelValue = computed(() => props.categoryLabel || site.value.themeConfig.contact_form.category)
const categoryPlaceholderValue = computed(() => props.categoryPlaceholderText || site.value.themeConfig.contact_form.categoryPlaceholder)
const messageLabelValue = computed(() => props.messageLabel || site.value.themeConfig.contact_form.message)
const messagePlaceholderValue = computed(() => props.messagePlaceholderText || site.value.themeConfig.contact_form.messagePlaceholder)
const webSiteLabelValue = computed(() => props.webSiteLabel || site.value.themeConfig.contact_form.webSite)
const webSitePlaceholderValue = computed(() => props.webSitePlaceholderText || site.value.themeConfig.contact_form.webSitePlaceholder)

const showModal = ref(false)
const modalContainerRef = ref(null)

// Simple form state without composable
const isSubmitting = ref(false)
const formSuccessMessage = ref("")
const formErrorMessage = ref("")

// Form data
const formData = ref<SubmitForm>({
  name: "",
  email: "",
  kind: "",
  message: "",
  webSite: "",
})

const { name, namePlaceholder, webSite, webSitePlaceholder, email, emailPlaceholder, submit, sending, successTitle, successMessage } =
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

      // Send GTM data to DataLayer for analytics tracking
      window.dataLayer?.push(data.gtmData)
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
  <!-- Inline form mode -->
  <div v-if="props.inline" :style="props.formStyle" class="inline-form-container">
    <div v-if="formSuccessMessage" class="success-message">
      <h3 class="success-title">{{ successTitle }}</h3>
      <p class="success-text">{{ successMessage }}</p>
    </div>

    <form v-else @submit.prevent="handleSubmit" class="contact-form inline-form">
      <div>
        <label for="name">{{ name }}</label>
        <input name="name" type="text" v-model="formData.name" :placeholder="namePlaceholder" required />
      </div>

      <div>
        <label for="email">{{ email }}</label>
        <input name="email" type="email" v-model="formData.email" :placeholder="emailPlaceholder" required />
      </div>

      <div>
        <label for="webSite">{{ webSiteLabelValue }}</label>
        <input name="webSite" type="url" v-model="formData.webSite" :placeholder="webSitePlaceholderValue" pattern="https?://.+" maxlength="100" />
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
        <textarea name="message" v-model="formData.message" :placeholder="messagePlaceholderValue" required></textarea>
      </div>

      <p v-if="formErrorMessage" class="error">
        {{ formErrorMessage }}
      </p>

      <div class="form-footer">
        <button type="submit" class="submit-button" :disabled="isSubmitting">
          {{ isSubmitting ? sending : submit }}
        </button>
      </div>
    </form>
  </div>

  <!-- Modal form mode (default) -->
  <template v-else>
    <div :style="props.formStyle">
      <VPButton :text="buttonTextValue" :theme="props.buttonClass" href="javascript:void(0);" @click.prevent="showModal = true" />
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
                <label for="webSite">{{ webSiteLabelValue }}</label>
                <input name="webSite" type="url" v-model="formData.webSite" :placeholder="webSitePlaceholderValue" pattern="https?://.+" maxlength="100" />
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
                <textarea name="message" v-model="formData.message" :placeholder="messagePlaceholderValue" required></textarea>
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
</template>

<style scoped>
/* Inline form styles */
.inline-form-container {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.inline-form {
  padding: 1.5rem;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.form-footer {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

/* Inline form specific styles */
.inline-form input,
.inline-form select,
.inline-form textarea {
  background: var(--vp-c-bg) !important;
}

/* Modal styles */
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
