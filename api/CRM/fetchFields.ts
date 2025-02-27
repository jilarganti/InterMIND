export async function fetchLeadFields(): Promise<any> {
  try {
    const response = await fetch(`https://api.pipedrive.com/v1/leadFields?api_token=${process.env.PIPEDRIVE_API_TOKEN}`)
    const data = (await response.json()) as any

    if (data.success) {
      const fields = data.data.reduce((acc: any, field: any) => {
        acc[field.key] = field
        return acc
      }, {})
      return fields
    } else {
      console.error("Error loading lead fields:", data.error)
      throw new Error(data.error || "Unknown error")
    }
  } catch (error: any) {
    console.error("Error fetching lead fields:", error.message)
    throw error
  }
}
