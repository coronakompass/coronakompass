module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  env: {
    browser: true,
  },
  rules: {
    'prettier/prettier': ['error'],
    'react/prop-types': ['off'],
    'react/require-default-props': ['off'],
    // Waiting for:
    // https://github.com/airbnb/javascript/blob/530278467f8b0a1b2aee632fbeee543e6732ef35/packages/eslint-config-airbnb/rules/react.js#L484
    'react/state-in-constructor': ['error', 'never'],
    'react/destructuring-assignment': ['error', 'always', { ignoreClassFields: true }],
    // Messes up https://nextjs.org/docs#with-link
    'jsx-a11y/anchor-is-valid': ['off'],
    // We want simple onClick a-links:
    'jsx-a11y/click-events-have-key-events': ['off'],
    'jsx-a11y/no-static-element-interactions': ['off'],
    // Don't care about emojis for now:
    'jsx-a11y/accessible-emoji': ['off'],
    // Breaks prettier autoformatting:
    'react/jsx-one-expression-per-line': ['off'],
    // Allow jsx in .js files
    'react/jsx-filename-extension': ['off'],
    'react/jsx-wrap-multilines': ['off'],
  },
};
