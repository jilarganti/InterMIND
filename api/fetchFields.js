export async function fetchLeadFields() {
  try {
    const response = await fetch(`https://api.pipedrive.com/v1/leadFields?api_token=${process.env.PIPEDRIVE_API_TOKEN}`)
    const data = await response.json()

    if (data.success) {
      const fields = data.data.reduce((acc, field) => {
        acc[field.key] = field
        return acc
      }, {})
      return fields
    } else {
      console.error("Error loading lead fields:", data.error)
      throw new Error(data.error)
    }
  } catch (error) {
    console.error("Error fetching lead fields:", error.message)
    throw error
  }
}
