module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended', 'airbnb',
  ],

  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'import/no-cycle': 0,
    'import/prefer-default-export': 0,
    'jsx-ally/alt-text': 0,
    'jsx-ally/click-events-have-key-events': 0,
    'jsx-ally/no-autofocus': 0,
    'jsx-ally/no-static-element-interactions': 0,
    'linebreak-style': 0,
    'max-len': [2, 250],
    'no-console': 0,
    'no-param-reassign': 0,
    'no-sparse-arrays': 0,
    'object-curly-newline': 0,
    'react/function-component-defination': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-one-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-array-index-key': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/state-in-constructor': 0,
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
};
