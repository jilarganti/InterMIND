/**
 * Demo Handler API Endpoint
 *
 * Simple demonstration handler that returns request information.
 * Shows basic API endpoint structure with request method and body echoing.
 * Useful for testing and debugging API connectivity.
 *
 * Features:
 * - Request method detection
 * - Body content echoing
 * - Error handling
 * - Status reporting
 */

import type { VercelRequest, VercelResponse } from "@vercel/node"

export default function handler(req: VercelRequest, res: VercelResponse): void {
  try {
    res.status(200).json({ message: "Status: OK" + " Method: " + req.method + " Body: " + req.body })
  } catch (error) {
    console.error("Error in handler:", error)
    res.status(500).json({ message: "Internal Server Error" })
  }
}
