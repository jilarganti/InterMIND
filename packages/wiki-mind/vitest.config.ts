import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      provider: "v8",
      reporter: ["text", "html", "lcov"],
      reportsDirectory: "__tests__/coverage",
      include: ["api/**"],
      exclude: [
        "api/demo/**",
        // Don't count mocked modules in coverage
        "api/lib/pipedriveLib.ts",
      ],
    },
  },
})
