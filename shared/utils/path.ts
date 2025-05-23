// utils/path.ts
import { v5 as uuidv5 } from "uuid"

const PATH_CLEANUP_REGEX = /^(?:en|ar|hi|ur|bn|ml|ta|te|fa|zh|fr|ru|uk|tr|ko|ja|tl|id|vi|pt|es|de)\/|(\.[^/.]+)$/g

export const generateOriginId = (path: string): string => {
  return uuidv5(path.replace(PATH_CLEANUP_REGEX, ""), uuidv5.URL)
}
