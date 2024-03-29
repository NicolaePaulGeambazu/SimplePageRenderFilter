module.exports = {
  plugins: ['@typescript-eslint', 'react'],
  extends: ['prettier', 'plugin:@typescript-eslint/recommended',
  'plugin:react/recommended',],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/no-unused-vars': ['error'],
    'prettier/prettier': ['error'],
  },
};
