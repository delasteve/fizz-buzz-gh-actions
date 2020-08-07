module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  env: {
    node: true,
    mocha: true,
  },
  extends: ['eslint:recommended'],
  rules: {
    complexity: ['error', 5],
  },
};
