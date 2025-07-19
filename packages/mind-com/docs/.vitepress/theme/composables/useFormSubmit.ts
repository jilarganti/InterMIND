// packages/mind-com/docs/.vitepress/theme/composables/useFormSubmit.ts

import { ref } from "vue"
import { determineTrafficSource } from "../../../../../../shared/utils/utm"
import { generateOriginId } from "../../../../../../shared/utils/path"
import { useRoute } from "vitepress"
import type { FormSubmissionData, ApiResponse, FormSubmissionResponse } from "../../../../api/types/pipedrive"

export interface CRMStatus {
  isSubmitting: boolean
  successMessage: string
  errorMessage: string
}

export const useFormSubmit = (formName = "Unknown") => {
  const formData = ref<FormSubmissionData>({
    name: "",
    email: "",
    website: "",
    message: "",
    category: "",
    leadSource: determineTrafficSource(),
    channel: "Web forms",
    channelId: formName,
    originId: generateOriginId(useRoute().path),
    countryCode: "",
    countryName: "",
  })

  const status = ref<CRMStatus>({
    isSubmitting: false,
    successMessage: "",
    errorMessage: "",
  })

  const submitForm = async (): Promise<boolean> => {
    status.value.isSubmitting = true
    status.value.successMessage = ""
    status.value.errorMessage = ""

    try {
      const response = await fetch("/api/form-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData.value),
      })

      const data: ApiResponse<FormSubmissionResponse> = await response.json()

      if (response.ok && data.success) {
        status.value.successMessage = data.message || "Form submitted successfully"
        return true
      } else {
        status.value.errorMessage = data.message || data.error || "Submission failed"
        return false
      }
    } catch (e) {
      status.value.errorMessage = "Network or server error"
      console.error("Form submission error:", e)
      return false
    } finally {
      status.value.isSubmitting = false
    }
  }

  return { formData, formStatus: status, submitForm }
}

// Новый composable для работы только с контактами
export const useContactSubmit = () => {
  const contactData = ref({
    name: "",
    email: "",
    phone: "",
    website: "",
    countryCode: "",
    countryName: "",
  })

  const status = ref<CRMStatus>({
    isSubmitting: false,
    successMessage: "",
    errorMessage: "",
  })

  const submitContact = async (): Promise<boolean> => {
    status.value.isSubmitting = true
    status.value.successMessage = ""
    status.value.errorMessage = ""

    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactData.value),
      })

      const data: ApiResponse = await response.json()

      if (response.ok && data.success) {
        status.value.successMessage = data.message || "Contact created successfully"
        return true
      } else {
        status.value.errorMessage = data.message || data.error || "Contact creation failed"
        return false
      }
    } catch (e) {
      status.value.errorMessage = "Network or server error"
      console.error("Contact submission error:", e)
      return false
    } finally {
      status.value.isSubmitting = false
    }
  }

  return { contactData, contactStatus: status, submitContact }
}

// Новый composable для работы только с лидами
export const useLeadSubmit = () => {
  const leadData = ref({
    title: "",
    personId: undefined as string | number | undefined,
    channel: "",
    channelId: "",
    originId: "",
    category: "",
    message: "",
    leadSource: determineTrafficSource(),
  })

  const status = ref<CRMStatus>({
    isSubmitting: false,
    successMessage: "",
    errorMessage: "",
  })

  const submitLead = async (): Promise<boolean> => {
    status.value.isSubmitting = true
    status.value.successMessage = ""
    status.value.errorMessage = ""

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadData.value),
      })

      const data: ApiResponse = await response.json()

      if (response.ok && data.success) {
        status.value.successMessage = data.message || "Lead created successfully"
        return true
      } else {
        status.value.errorMessage = data.message || data.error || "Lead creation failed"
        return false
      }
    } catch (e) {
      status.value.errorMessage = "Network or server error"
      console.error("Lead submission error:", e)
      return false
    } finally {
      status.value.isSubmitting = false
    }
  }

  return { leadData, leadStatus: status, submitLead }
}
