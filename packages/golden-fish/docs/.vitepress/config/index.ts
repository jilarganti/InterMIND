import { defineConfig } from "vitepress"
import { shared } from "./shared"
import { locales } from "./locales"

export default defineConfig({
  ...shared,
  locales,
})
