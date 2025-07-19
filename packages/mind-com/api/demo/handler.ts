import type { VercelRequest, VercelResponse } from "@vercel/node"

export default function handler(req: VercelRequest, res: VercelResponse): void {
  try {
    res.status(200).json({ message: "Status: OK" + " Method: " + req.method + " Body: " + req.body })
  } catch (error) {
    console.error("Error in handler:", error)
    res.status(500).json({ message: "Internal Server Error" })
  }
}
