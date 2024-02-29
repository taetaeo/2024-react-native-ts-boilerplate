module.exports = {
  env: {browser: true, es2021: true},
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  overrides: [
    {
      env: {node: true},
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {sourceType: 'script'},
    },
  ],
  parserOptions: {ecmaVersion: 'latest', sourceType: 'module'},
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {'prettier/prettier': 'error'},
};
