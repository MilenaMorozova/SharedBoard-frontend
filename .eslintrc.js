module.exports = {
    root: true,
    env: {
      'browser': true,
    },
    parser: '@typescript-eslint/parser',
    plugins: [
      '@typescript-eslint',
      'jest',
    ],
    extends: [
      'eslint:recommended',
      'plugin:jest/recommended',
      'airbnb',
      'plugin:@typescript-eslint/recommended',
    ],
    rules: {
      'linebreak-style': 0,
      '@typescript-eslint/prefer-as-const': 0,
      'import/no-unresolved': 0,
      'import/extensions': 0,
      'react/prefer-stateless-functionv': 0,
      'react/react-in-jsx-scope': 0,
      'react/jsx-filename-extension': [2, { 'extensions': ['.jsx', '.tsx'] }],
      'react/jsx-props-no-spreading': 0,
      'react/destructuring-assignment': 0,
      'no-multiple-empty-lines': [2, { 'max': 2 }],
      'max-len': [2, {'code': 120, "ignoreComments": true}],
      'react/prefer-stateless-function': 0,
      'arrow-parens': 0,
      'react/jsx-one-expression-per-line': 0,
      'no-param-reassign': ["error", { "props": true, "ignorePropertyModificationsForRegex": ["state"] }],
      'react/static-property-placement': 0,
      'lines-between-class-members': 0,
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': ['error'],
    }
  };