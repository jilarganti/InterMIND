# GoldenFishProject

Monorepo for InterMIND platform and related services.

## Packages

| Package                               | Description                                                      | README                                        |
| ------------------------------------- | ---------------------------------------------------------------- | --------------------------------------------- |
| [mind-com](./packages/mind-com)       | VitePress website with multilingual support and CRM integration  | [📖 README](./packages/mind-com/README.md)    |
| [golden-fish](./packages/golden-fish) | UAE business formation services with AI chat and CRM integration | [📖 README](./packages/golden-fish/README.md) |
| [draftium](./packages/draftium)       | Draftium package for content management                          | [📖 README](./packages/draftium/README.md)    |

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

cd packages/draftium    # Content management
pnpm dev
```

## Requirements

- Node.js 20+
- pnpm

## Structure

```
GoldenFishProject/
├── packages/
│   ├── golden-fish/       # UAE business formation services
│   ├── mind-com/          # Main website
│   └── draftium/          # Content management
├── shared/                # Shared utilities
├── scripts/               # Build and automation scripts
└── package.json           # Workspace configuration
```

## License

Apache License 2.0 - see individual packages for details.
