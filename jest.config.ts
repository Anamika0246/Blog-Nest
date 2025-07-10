export default {
  roots: ['<rootDir>/apps'],
  testMatch: ['**/?(*.)+(spec|test).ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.service.ts',
    '!**/node_modules/**',
    '!**/*.spec.ts',
  ],
  coverageDirectory: './coverage',
};
