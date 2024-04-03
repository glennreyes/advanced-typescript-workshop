/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  extends: ['@napaling'],
  rules: {
    '@typescript-eslint/no-empty-interface': 'off',
    'func-style': 'off',
    'import/no-namespace': 'off',
    'no-warning-comments': 'off',
    'prefer-arrow-callback': 'off',
    'prefer-arrow-functions/prefer-arrow-functions': 'off',
  },
};
