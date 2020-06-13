process.env.VUE_CLI_BABEL_TARGET_NODE = true;
process.env.VUE_CLI_BABEL_TRANSPILE_MODULES = true;

module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testURL: 'http://localhost/',
  testEnvironment: 'jest-environment-jsdom-global',
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue-tjw'],
  setupFilesAfterEnv: ['<rootDir>/tests/unit/setup'],
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    'src/App.vue',
    '!src/main.js',
    '!**/node_modules/**'
  ],
  testMatch: [
    '**/tests/unit/**/*.test.js'
  ],
  moduleNameMapper: {
    '^@@/(.*)$': '<rootDir>/tests/unit/$1',
    '^@/(.*)$': '<rootDir>/src/$1'
  }
};
