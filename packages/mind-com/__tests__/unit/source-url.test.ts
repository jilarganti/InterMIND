import { describe, it, expect } from "vitest"
import { resolveSourceUrl } from "../../server/utils/source-url"

const ORIGIN = "https://mind.com"
const REFERER = "https://mind.com/somewhere"

describe("resolveSourceUrl", () => {
  it("resolves the declared form page against the origin, beating the referer", () => {
    expect(resolveSourceUrl("/team", REFERER, ORIGIN)).toBe("https://mind.com/team")
    expect(resolveSourceUrl("/careers", REFERER, ORIGIN)).toBe("https://mind.com/careers")
    expect(resolveSourceUrl("/contacts", REFERER, ORIGIN)).toBe("https://mind.com/contacts")
    expect(resolveSourceUrl("/help", REFERER, ORIGIN)).toBe("https://mind.com/help")
  })

  it("keeps the locale prefix of localized routes", () => {
    expect(resolveSourceUrl("/de/team", REFERER, ORIGIN)).toBe("https://mind.com/de/team")
  })

  it("falls back to the referer when no page was declared", () => {
    expect(resolveSourceUrl(undefined, REFERER, ORIGIN)).toBe(REFERER)
    expect(resolveSourceUrl("", REFERER, ORIGIN)).toBe(REFERER)
  })

  it("falls back to the origin when neither page nor referer is present", () => {
    expect(resolveSourceUrl(undefined, undefined, ORIGIN)).toBe(ORIGIN)
  })

  it("ignores a declared page that is not a plain site path", () => {
    expect(resolveSourceUrl("https://evil.example", REFERER, ORIGIN)).toBe(REFERER)
    expect(resolveSourceUrl("//evil.example", REFERER, ORIGIN)).toBe(REFERER)
    expect(resolveSourceUrl("/team?x=<script>", REFERER, ORIGIN)).toBe(REFERER)
    expect(resolveSourceUrl("team", REFERER, ORIGIN)).toBe(REFERER)
    expect(resolveSourceUrl(42, REFERER, ORIGIN)).toBe(REFERER)
  })

  it("ignores an overlong declared page", () => {
    expect(resolveSourceUrl("/" + "a".repeat(64), REFERER, ORIGIN)).toBe(REFERER)
  })
})
