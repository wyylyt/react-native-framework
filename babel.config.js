module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      // 设置整体全局的别名
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathSuffix: './',
            rootPathPrefix: '~/',
          },
          {
            rootPathSuffix: './src/component',
            rootPathPrefix: 'com/',
          },
          {
            rootPathSuffix: './src/containers',
            rootPathPrefix: 'con/',
          },
          {
            rootPathSuffix: './src/public/images',
            rootPathPrefix: 'img/',
          },
          {
            rootPathSuffix: './src/public/method',
            rootPathPrefix: 'method/',
          },
          {
            rootPathSuffix: './config',
            rootPathPrefix: 'config/',
          },
        ],
      },
    ],
    // 可以使用antd的rn语法
    ['import', { libraryName: 'antd-mobile-rn' }],
    [
      // 调用自定义的svg
      'babel-plugin-inline-import',
      {
        extensions: ['.svg'],
      },
    ],
  ],
};
