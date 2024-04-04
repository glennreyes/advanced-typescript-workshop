/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  extends: ['@napaling'],
  rules: {
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    'func-style': 'off',
    'import/no-namespace': 'off',
    'no-console': 'off',
    'no-warning-comments': 'off',
    'perfectionist/sort-union-types': 'off',
    'prefer-arrow-callback': 'off',
    'prefer-arrow-functions/prefer-arrow-functions': 'off',
  },
};
