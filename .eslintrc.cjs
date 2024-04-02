/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  extends: ['@napaling'],
  rules: {
    '@typescript-eslint/no-empty-interface': 'off',
    'no-warning-comments': 'off',
    'prefer-arrow-functions/prefer-arrow-functions': 'off',
  },
};
