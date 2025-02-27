/// <reference types="vitest" />

/**
 * @see https://vitest.dev/config/
 */

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueDevTools from "vite-plugin-vue-devtools"
import { fileURLToPath, URL } from "node:url"

export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@docs": fileURLToPath(new URL("./docs/en", import.meta.url)),
      "@setup": fileURLToPath(new URL("./.vitepress", import.meta.url)),
    },
  },
  test: {
    include: ["**/test/*.test.js"],
    reporters: ["default", "html"],
  },
})
