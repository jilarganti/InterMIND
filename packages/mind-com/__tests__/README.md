# Unit Tests

This directory contains unit tests for the Mind-Com API endpoints and utilities.

## Test Structure

```
__tests__/
├── unit/                     # Unit tests
│   ├── signUp.test.ts       # Tests for signUp API endpoint
│   ├── submitForm.test.ts   # Tests for submitForm API endpoint
│   └── utm.test.ts          # Tests for UTM utilities
├── test-traffic-sources.ts  # Integration tests for traffic sources
├── tsconfig.json            # TypeScript config for tests
└── README.md               # This file
```

## Running Tests

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
pnpm test:coverage
```

### Run Integration Tests

```bash
pnpm test:traffic-sources
```

## Test Coverage

### API Endpoints

- **signUp.ts**: Tests for user registration endpoint

  - Valid sign-up data processing
  - UTM parameter handling
  - CRM integration
  - GTM DataLayer events
  - Error handling

- **submitForm.ts**: Tests for contact form endpoint
  - Form data processing
  - Website URL handling
  - Lead generation
  - Error scenarios

### Utilities

- **utm.ts**: Tests for UTM tracking utilities
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

- CRM library functions are mocked
- Domain middleware is bypassed for testing
- Browser APIs (localStorage, window, document) are mocked

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
pnpm test:coverage --reporter=lcov
```
