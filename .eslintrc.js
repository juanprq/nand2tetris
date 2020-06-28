module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
    'jest/globals': true,
  },
  extends: ['airbnb-base', 'plugin:jest/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 11,
  },
  plugins: ['jest', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
