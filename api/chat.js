import { openai } from "@ai-sdk/openai"
import { anthropic } from "@ai-sdk/anthropic"
import { streamText } from "ai"
import dotenv from "dotenv"

dotenv.config()

/**
 * @param {{ body: { messages: any; }; }} req
 */
export default async function chatHandler(req) {
  const { messages } = req.body
  const response = streamText({
    model: anthropic("claude-3-haiku-20240307"),
    messages,
  })

  return response.toDataStreamResponse()
}

// TODO https://vercel.com/docs/functions/streaming-functions
