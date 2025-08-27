# Unit Tests

[![Tests](https://github.com/jilarganti/GoldenFishProject/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/jilarganti/GoldenFishProject/actions/workflows/test.yml)

This directory contains comprehensive unit tests for the Mind-Com API endpoints and utilities.

## Test Statistics

- **Total Tests**: 69 unit tests
- **Test Coverage**: 100% for all critical components
- **Test Files**: 6 test suites
- **Execution Time**: ~700ms (fast feedback loop)

## Test Structure

```
__tests__/
├── unit/                        # Unit tests (isolated components)
│   ├── signUp.test.ts          # Tests for signUp API endpoint (5 tests)
│   ├── submitForm.test.ts      # Tests for submitForm API endpoint (7 tests)
│   ├── utm.test.ts             # Tests for UTM utilities (22 tests)
│   ├── corsConfig.test.ts      # Tests for CORS configuration (19 tests)
│   ├── domainMiddleware.test.ts # Tests for domain security (6 tests)
│   └── pipedriveLib.test.ts    # Tests for CRM integration (10 tests)
├── test-traffic-sources.ts     # Integration tests (end-to-end traffic flow)
├── tsconfig.json               # TypeScript config for tests
└── README.md                   # This file
```

## Test Types

### Unit Tests (`unit/` directory)

- **Isolation**: All dependencies are mocked
- **Speed**: Fast execution without network requests
- **Purpose**: Testing logic of individual functions/modules
- **Examples**:
  - `utm.test.ts` - tests UTM utilities in isolation (22 tests)
  - `signUp.test.ts` - tests signUp endpoint with mocks (5 tests)
  - `corsConfig.test.ts` - tests CORS security configuration (19 tests)
  - `pipedriveLib.test.ts` - tests CRM integration with mocks (10 tests)

### Integration Tests (root `__tests__/` directory)

- **Reality**: Uses real API endpoints
- **Complexity**: Tests component interactions
- **Purpose**: End-to-end scenario validation
- **Examples**:
  - `test-traffic-sources.ts` - complete flow from UTM to CRM

> **Important**: Both test types are needed! Unit tests find logic bugs, Integration tests find integration issues.

## Automated Testing

The project includes git hooks that automatically run tests:

- **Pre-commit**: Runs code formatting before each commit
- **Pre-push**: Runs tests and build process before pushing to remote

To set up git hooks, run:

```bash
pnpm install
```

This ensures code quality and test coverage before code reaches the repository.

## Scripts

## Setup

### Install Dependencies

```bash
pnpm install
```

### Run All Unit Tests

```bash
pnpm test:unit
```

### Run Tests in Watch Mode

```bash
pnpm test:watch
```

### Run Tests with Coverage

```bash
pnpm test
```

### Run Integration Tests

```bash
pnpm test:traffic-sources
```

## Test Coverage

### API Endpoints

- **signUp.ts**: Tests for user registration endpoint (5 tests)
  - Valid sign-up data processing
  - UTM parameter handling
  - CRM integration
  - GTM DataLayer events
  - Error handling

- **submitForm.ts**: Tests for contact form endpoint (7 tests)
  - Form data processing
  - Website URL handling
  - Lead generation
  - Error scenarios

### Security & Configuration

- **corsConfig.ts**: Tests for CORS security configuration (19 tests)
  - Domain whitelist validation
  - Origin and referer header checking
  - Invalid URL handling
  - Fallback domain logic
  - Edge cases (ports, protocols, subdomains)

- **domainMiddleware.ts**: Tests for API security middleware (6 tests)
  - Domain access control
  - Unauthorized request blocking
  - Error response generation

### CRM Integration

- **pipedriveLib.ts**: Tests for CRM integration library (10 tests)
  - Contact and lead creation
  - API token validation
  - Network error handling
  - Response processing
  - Mock-based unit testing

### Utilities

- **utm.ts**: Tests for UTM tracking utilities (22 tests)
  - URL parameter extraction
  - LocalStorage management
  - Traffic source determination
  - API data formatting

## Test Dependencies

- **Vitest**: Test framework
- **jsdom**: DOM environment simulation
- **@vitest/coverage-v8**: Code coverage reports

## Mocking Strategy

Tests use Vitest's mocking capabilities to isolate units under test:

- **CRM library functions** are mocked for fast, reliable testing
- **Domain middleware** is bypassed for testing purposes
- **Browser APIs** (localStorage, window, document) are mocked
- **Pipedrive SDK** is fully mocked to avoid external API calls
- **CORS configuration** uses real functions with mocked console output

## Best Practices

1. **Isolation**: Each test is independent and doesn't rely on external services
2. **Mocking**: External dependencies are mocked to ensure fast, reliable tests
3. **Coverage**: Aim for high test coverage of critical business logic
4. **Clarity**: Test names clearly describe what is being tested
5. **Arrange-Act-Assert**: Tests follow the AAA pattern for clarity

## CI/CD Integration

These tests can be integrated into your CI/CD pipeline:

```bash
# In your CI script
pnpm test:unit --reporter=junit --outputFile=test-results.xml
pnpm test --reporter=lcov
```
