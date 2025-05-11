const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // Path to your Next.js app directory
});

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1', // Support for absolute imports
  },
};

module.exports = createJestConfig(customJestConfig);