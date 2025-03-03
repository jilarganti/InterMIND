import { openai } from "@ai-sdk/openai"
import { anthropic } from "@ai-sdk/anthropic"
import { streamText } from "ai"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

// @ts-ignore
export async function POST(req) {
  const { messages } = await req.json()

  const result = streamText({
    // model: openai("gpt-4-turbo"),
    model: anthropic("claude-3-haiku-20240307"),
    system: "You are a helpful assistant.",
    messages,
  })

  return result.toDataStreamResponse()
}
