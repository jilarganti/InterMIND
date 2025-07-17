# GoldenFishProject

Monorepo for InterMIND platform and related services.

## Packages

| Package                         | Description                                                     | README                                     |
| ------------------------------- | --------------------------------------------------------------- | ------------------------------------------ |
| [mind-com](./packages/mind-com) | VitePress website with multilingual support and CRM integration | [📖 README](./packages/mind-com/README.md) |

## Quick Start

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Development (from specific package)
cd packages/mind-com
pnpm dev
```

## Requirements

- Node.js 20+
- pnpm

## Structure

```
GoldenFishProject/
├── packages/
│   └── mind-com/          # Main website
├── shared/                # Shared utilities
├── scripts/               # Build and automation scripts
└── package.json           # Workspace configuration
```

## License

Apache License 2.0 - see individual packages for details.
