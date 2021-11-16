module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ts',
          '.tsx',
          '.jsx',
          '.json',
        ],
        alias: {
          tests: ['./tests/'],
          '@Hooks': './src/hooks',
          '@Commons': './src/commons',
          '@Components': './src/components',
          '@Utils': './src/utils',
          '@Redux': './src/redux',
          '@Api': './src/api',
          '@Styles': './src/styles',
          '@GraphQL': './src/GraphQL',
          '@Screens': './src/screens',
          '@Config': './src/config',
          '@Assets': './src/Assets',
          '@Types': './src/types',
        },
      },
    ],
  ],
};
