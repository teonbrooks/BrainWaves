module.exports = {
  extends: 'erb/typescript',
  rules: {
    // A temporary hack related to IDE not resolving correct package.json
    '@typescript-eslint/ban-ts-ignore': 'warn',
    'consistent-return': 'warn',
    'dot-notation': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'lines-between-class-members': 'off',
    'max-classes-per-file': 'off',
    'no-plusplus': 'off'
    'no-restricted-syntax': 'off',
    'prefer-destructuring': 'warn',
    'react/destructuring-assignment': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/no-access-state-in-setstate': 'warn',
    'react/no-will-update-set-state': 'warn',
    'react/prop-types': 'off',
    'react/static-property-placement': 'off',
  },
  settings: {
    'import/resolver': {
      // See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774 for line below
      node: {},
      webpack: {
        config: require.resolve('./configs/webpack.config.eslint.js')
      }
    }
  }
};
