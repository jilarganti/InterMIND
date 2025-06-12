// composables/CRM/useFormSubmit.ts
import { ref } from "vue"
import { usePipedriveCRM } from "./usePipedriveCRM"
import { determineTrafficSource } from "../../../../../shared/utils/utm"
import { generateOriginId } from "../../../../../shared/utils/path"
import { useRoute } from "vitepress"

export const useFormSubmit = (formName = "Unknown") => {
  const formData = ref({
    name: "",
    email: "",
    webSite: "",
    message: "",
    category: "",
    leadSource: determineTrafficSource(),
    channel: "Web forms",
    channelId: formName,
    originId: generateOriginId(useRoute().path),
    countryCode: "",
    countryName: "",
  })

  const { status, submitToCRM } = usePipedriveCRM()

  const submitForm = async () => {
    const success = await submitToCRM(formData.value)
    return success
  }

  return { formData, formStatus: status, submitForm }
}
