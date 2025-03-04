/**
 * Cloudflare Pages (front) -> Cloudflare Worker (poxy) -> Vercel API endpoint -> Pipedrive CRM
 *
 * 1. Cloudflare Pages (front) – packages/site/.vitepress/theme/composables/useFormSubmit.ts
 * 2. Cloudflare Worker (proxy) – packages/site/functions/api/[[path]].js
 * 3. Vercel API endpoint – packages/site/api/createContactAndLead.js
 */
import { ref } from "vue"

interface FormData {
  name: string
  email: string
  phone: string
  category: string
  message: string
  channel: string
  channelId: string
  originId: string
  leadSource: string
  countryCode: string
  countryName: string
}

interface FormStatus {
  isSubmitting: boolean
  successMessage: string
  errorMessage: string
}

export const useFormSubmit = () => {
  const formData = ref<FormData>({} as FormData)
  const formStatus = ref<FormStatus>({
    isSubmitting: false,
    successMessage: "",
    errorMessage: "",
  })

  const submitForm = async () => {
    formStatus.value.isSubmitting = true

    try {
      const response = await fetch("/api/createContactAndLead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData.value),
      })
      const data = await response.json()

      if (data.success) formStatus.value.successMessage = "Your application has been accepted!"
      else formStatus.value.errorMessage = data.message
    } catch (error) {
      console.error(error)
    } finally {
      formStatus.value.isSubmitting = false
    }
  }

  return { formData, formStatus, submitForm }
}
