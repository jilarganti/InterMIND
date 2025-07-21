import { ref } from "vue"
import { useRoute } from "vitepress"
import { usePipedriveCRM } from "./usePipedriveCRM"
import { determineTrafficSource } from "../../../../../../shared/utils/utm"
import { generateOriginId } from "../../../../../../shared/utils/path"
// import type { FormData } from "../../../../api/types/pipedriveFields.js"
import { Channel, FormData } from "../../../../api/types/pipedriveFields.js"

export const useFormSubmit = (formName = "Unknown") => {
  const formData = ref<FormData>({
    email: "",
    leadSource: determineTrafficSource(),
    channel: Channel.WEB_VISITORS, // Default channel can be set to a more appropriate value
    channelId: formName,
    originId: generateOriginId(useRoute().path),
  })

  const { status, submitToCRM } = usePipedriveCRM()

  const submitForm = async () => {
    const success = await submitToCRM(formData.value)
    return success
  }

  return {
    formData,
    formStatus: status,
    submitForm,
  }
}
