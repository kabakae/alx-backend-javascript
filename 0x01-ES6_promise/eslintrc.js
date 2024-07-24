module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true, // Enable Jest globals
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    // Define custom rules if needed
  },
};

