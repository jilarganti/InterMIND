// usePipedriveCRM.ts - убираем дефолтное значение
import { ref } from "vue"
import { SubmitForm, SignUpLead } from "../../../../api/types/pipedriveFields.js"
// import { SignUpLead } from "../../../../api/types/signUp.js"
// import { SubmitFormLead } from "../../../../api/types/submitForm.js"
// import { ContactForm } from "../types/ContactForm.js"

export interface CRMStatus {
  isSubmitting: boolean
  successMessage: string
  errorMessage: string
}

export const usePipedriveCRM = (endpoint: string) => {
  const status = ref<CRMStatus>({
    isSubmitting: false,
    successMessage: "",
    errorMessage: "",
  })

  const submitToCRM = async (payload: SignUpLead | SubmitForm) => {
    status.value.isSubmitting = true
    status.value.successMessage = ""
    status.value.errorMessage = ""

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        status.value.successMessage = data.message || "Lead created"
        return true
      } else {
        status.value.errorMessage = data.message || "CRM error"
        return false
      }
    } catch (e) {
      status.value.errorMessage = "Network or server error"
      console.error("CRM Error:", e)
      return false
    } finally {
      status.value.isSubmitting = false
    }
  }

  return { status, submitToCRM }
}
