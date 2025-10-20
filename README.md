# GoldenFishProject

Monorepo for InterMIND platform and related services.

## Packages

| Package                               | Description                                                                                                                                        |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| [mind-com](./packages/mind-com)       | https://mind.com/ is a VitePress website with multilingual support, integrated with Pipedrive CRM, and AI Chat powered by Upstash Vector database. |
| [golden-fish](./packages/golden-fish) | https://goldenfish.ae/ – UAE business formation services with AI chat and CRM integration                                                          |

## Quick Start

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Development (from specific package)
cd packages/golden-fish  # UAE business services
pnpm dev

cd packages/mind-com     # Main website
pnpm dev
```

## Translation & Quality Control

### Translate content to all languages

```bash
cd packages/mind-com
pnpm translate

cd packages/golden-fish
pnpm translate
```

### Check HTML tag balance in translations

```bash
# From any package directory
pnpm translate:check

# Or from root with package filter
pnpm --filter mind-com translate:check
pnpm --filter golden-fish translate:check
```

For detailed information about translation quality control and fixing HTML tag issues, see:

- 📋 [Translation Fix Documentation](./scripts/TRANSLATION_FIX_2025.md)
- 🔧 [Translation Balance Checker](./scripts/check-translation-balance.sh)

## Requirements

- Node.js 20+
- pnpm
- Vercel

## Structure

```
GoldenFishProject/
├── packages/
│   ├── golden-fish/       # UAE business formation services
│   ├── mind-com/          # Main website
├── shared/                # Shared utilities
├── scripts/               # Build and automation scripts
└── package.json           # Workspace configuration
```

## Development

For AI agent development instructions, see [📋 AI Agent Instructions](.github/copilot-instructions.md).

## License

Apache License 2.0 - see individual packages for details.
