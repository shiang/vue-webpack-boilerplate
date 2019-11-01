module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'prettier/vue',
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'no-unused-vars': ['off'],
    semi: ['error', 'never'],
    'sort-imports': ['off'],
    'sort-keys': ['off'],
    'no-console': ['off'],
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-single'],
    camelcase: ['off']
  }
}
