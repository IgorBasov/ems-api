const path = require('path');

module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  collectCoverage: false,
  collectCoverageFrom: [
    '**/*.js',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/tests-env/**',
    '!**/*.config.js'
  ],
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  testEnvironment: './tests-env/api-test-environment/index.js',
  globalSetup: './tests-env/global/setup.js',
  globalTeardown: './tests-env/global/teardown.js'
};
