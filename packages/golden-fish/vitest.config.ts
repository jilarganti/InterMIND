import { defineConfig } from "vitest/config"
// import path from "path"

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      provider: "v8",
      reporter: ["text", "html", "lcov"],
      reportsDirectory: "__tests__/coverage",
      exclude: [
        "coverage/**",
        "dist/**",
        "node_modules/**",
        "__tests__/**",
        "**/*.d.ts",
        "docs/**",
        "scripts/**",
        "api/demo/**",
        // Don't count mocked modules in coverage
        "**/pipedriveLib.ts",
      ],
    },
  },
  resolve: {
    // alias: {
    //   "@": path.resolve(__dirname, "."),
    //   "shared": path.resolve(__dirname, "../../shared"),
    // },
  },
})
