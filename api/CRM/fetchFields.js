/**
 * @typedef {Object} Field
 * @property {string} key - Ключ поля
 */

/**
 * @typedef {Object.<string, any>} LeadFieldsMap
 */

/**
 * Получает поля для лидов из Pipedrive API
 * @returns {Promise<LeadFieldsMap>}
 */
export async function fetchLeadFields() {
  try {
    const response = await fetch(`https://api.pipedrive.com/v1/leadFields?api_token=${process.env.PIPEDRIVE_API_TOKEN}`)
    const data = await response.json()

    if (data.success) {
      const fields = data.data.reduce((/** @type {LeadFieldsMap} */ acc, /** @type {Field} */ field) => {
        acc[field.key] = field
        return acc
      }, /** @type {LeadFieldsMap} */ ({}))

      return fields
    } else {
      console.error("Error loading lead fields:", data.error)
      throw new Error(data.error)
    }
  } catch (/** @type {unknown} */ error) {
    console.error("Error fetching lead fields:", error instanceof Error ? error.message : String(error))
    throw error
  }
}
