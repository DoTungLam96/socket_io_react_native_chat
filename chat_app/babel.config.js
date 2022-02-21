module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['.'],
        alias: {
          src: './src',
          svg: './images/manage',
          images: './images',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
