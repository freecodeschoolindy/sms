module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    node: true
  },
  plugins: [
    'jest',
    'vue'
  ],
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:vuejs-accessibility/recommended',
    'tjw-base',
    'tjw-vue'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-restricted-syntax': [
      'error',
      'Property[method="true"]'
    ]
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.test.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
};
