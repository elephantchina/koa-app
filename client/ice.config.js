const path = require('path');

module.exports = {
  entry: 'src/index.tsx',
  publicPath: './',
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
  plugins: [
    [
      'ice-plugin-fusion',
      {
        themePackage: '@icedesign/theme',
      },
    ],
    [
      'ice-plugin-moment-locales',
      {
        locales: ['zh-cn'],
      },
    ],
  ],
  proxy: {
    '/graphql': {
      target: 'http://127.0.0.1:5000',
      changeOrigin: true,
      pathRewrite: { '^/graphql': '/graphql' },
    },
  },
};
