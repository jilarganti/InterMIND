import type { ApiRequest, ApiResponse } from "./types/api"

export default function handler(req: ApiRequest, res: ApiResponse) {
  try {
    res.status(200).json({ message: "Everything is fine" + req.method + req.body })
  } catch (error) {
    console.error("Error in handler:", error)
    res.status(500).json({ message: "Internal Server Error" })
  }
}
