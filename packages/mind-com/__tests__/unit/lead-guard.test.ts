import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"
import type { H3Event } from "h3"
import { guardLeadSubmission, __resetRateLimit } from "../../server/utils/lead-guard"

vi.mock("h3", () => ({
  getRequestHeader: (event: FakeEvent, name: string) => event.headers[name.toLowerCase()],
  getRequestIP: (event: FakeEvent) => event.ip,
}))

interface FakeEvent {
  headers: Record<string, string | undefined>
  ip: string
}

function makeEvent(origin: string | undefined, ip = "1.2.3.4"): H3Event {
  return { headers: { origin }, ip } as unknown as H3Event
}

const OK_ORIGIN = "https://mind.com"

// Verified by mutation: server/utils/lead-guard.ts:75 — dropping the origin
// rejection turned 5 tests red; :78 dropping the rate-limit rejection turned 2
// red; :80 dropping the captcha rejection turned 2 red.
describe("guardLeadSubmission", () => {
  beforeEach(() => {
    __resetRateLimit()
    delete process.env.TURNSTILE_SECRET_KEY
    vi.restoreAllMocks()
  })

  afterEach(() => {
    delete process.env.TURNSTILE_SECRET_KEY
  })

  describe("origin check", () => {
    it("accepts the campaign site and the product", async () => {
      expect(await guardLeadSubmission(makeEvent("https://mind.com"), undefined)).toBeNull()
      __resetRateLimit()
      expect(await guardLeadSubmission(makeEvent("https://intermind.com"), undefined)).toBeNull()
    })

    it("accepts preview deploys and locale subdomains", async () => {
      expect(await guardLeadSubmission(makeEvent("https://mind-com-abc123.vercel.app"), undefined)).toBeNull()
      __resetRateLimit()
      expect(await guardLeadSubmission(makeEvent("https://www.mind.com"), undefined)).toBeNull()
    })

    it("rejects a request with no Origin header — the bare scripted POST case", async () => {
      expect(await guardLeadSubmission(makeEvent(undefined), undefined)).toEqual({ reason: "origin", status: 403 })
    })

    it("rejects a foreign origin", async () => {
      expect(await guardLeadSubmission(makeEvent("https://evil.example.com"), undefined)).toEqual({ reason: "origin", status: 403 })
    })

    it("rejects a lookalike domain that merely contains an allowed host", async () => {
      expect(await guardLeadSubmission(makeEvent("https://mind.com.evil.example"), undefined)).toEqual({ reason: "origin", status: 403 })
    })

    it("rejects a malformed origin", async () => {
      expect(await guardLeadSubmission(makeEvent("not-a-url"), undefined)).toEqual({ reason: "origin", status: 403 })
    })
  })

  describe("rate limit", () => {
    it("allows a burst up to the cap, then rejects", async () => {
      for (let i = 0; i < 5; i++) {
        expect(await guardLeadSubmission(makeEvent(OK_ORIGIN), undefined)).toBeNull()
      }
      expect(await guardLeadSubmission(makeEvent(OK_ORIGIN), undefined)).toEqual({ reason: "rate-limit", status: 429 })
    })

    it("counts per IP, so one flooder cannot block another visitor", async () => {
      for (let i = 0; i < 6; i++) await guardLeadSubmission(makeEvent(OK_ORIGIN, "9.9.9.9"), undefined)
      expect(await guardLeadSubmission(makeEvent(OK_ORIGIN, "8.8.8.8"), undefined)).toBeNull()
    })

    it("lets a blocked IP through again once the window elapses", async () => {
      const start = 1_000_000
      for (let i = 0; i < 6; i++) await guardLeadSubmission(makeEvent(OK_ORIGIN), undefined, start)
      expect(await guardLeadSubmission(makeEvent(OK_ORIGIN), undefined, start)).toEqual({ reason: "rate-limit", status: 429 })
      expect(await guardLeadSubmission(makeEvent(OK_ORIGIN), undefined, start + 10 * 60 * 1000 + 1)).toBeNull()
    })
  })

  describe("captcha", () => {
    it("fails open when no secret is provisioned, so a missing env var never swallows leads", async () => {
      const fetchSpy = vi.spyOn(globalThis, "fetch")
      expect(await guardLeadSubmission(makeEvent(OK_ORIGIN), undefined)).toBeNull()
      expect(fetchSpy).not.toHaveBeenCalled()
    })

    it("rejects a missing token once a secret is configured", async () => {
      process.env.TURNSTILE_SECRET_KEY = "secret"
      expect(await guardLeadSubmission(makeEvent(OK_ORIGIN), undefined)).toEqual({ reason: "captcha", status: 403 })
    })

    it("rejects a token Cloudflare declines", async () => {
      process.env.TURNSTILE_SECRET_KEY = "secret"
      vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response(JSON.stringify({ success: false })))
      expect(await guardLeadSubmission(makeEvent(OK_ORIGIN), "bad-token")).toEqual({ reason: "captcha", status: 403 })
    })

    it("accepts a token Cloudflare verifies", async () => {
      process.env.TURNSTILE_SECRET_KEY = "secret"
      vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response(JSON.stringify({ success: true })))
      expect(await guardLeadSubmission(makeEvent(OK_ORIGIN), "good-token")).toBeNull()
    })

    it("fails open when Cloudflare is unreachable", async () => {
      process.env.TURNSTILE_SECRET_KEY = "secret"
      vi.spyOn(globalThis, "fetch").mockRejectedValue(new Error("network down"))
      vi.spyOn(console, "error").mockImplementation(() => {})
      expect(await guardLeadSubmission(makeEvent(OK_ORIGIN), "any-token")).toBeNull()
    })

    it("checks origin before spending a network round-trip on Cloudflare", async () => {
      process.env.TURNSTILE_SECRET_KEY = "secret"
      const fetchSpy = vi.spyOn(globalThis, "fetch")
      await guardLeadSubmission(makeEvent("https://evil.example.com"), "good-token")
      expect(fetchSpy).not.toHaveBeenCalled()
    })
  })
})
