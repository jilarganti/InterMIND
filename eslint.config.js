import globals from "globals"

export default [
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.vitepress/cache/**",
      "**/.vitepress/dist/**",
      "**/coverage/**",
      "**/.vercel/**",
      "**/pnpm-lock.yaml",
      "**/*.d.ts",
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    rules: {
      "no-console": "off",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "prefer-const": "warn",
    },
  },
]
