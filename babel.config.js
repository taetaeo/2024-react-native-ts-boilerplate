module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript', 'module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.ts', '.android.ts', '.ts', '.ios.tsx', '.android.tsx', '.tsx', '.jsx', '.js', '.json'],
        alias: {},
      },
    ],
  ],
};
