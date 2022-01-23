const path = require('path');
module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './src/index.ts'),
    preload: path.resolve(__dirname, './src/preload.ts'),
  },
  output: {
    filename: '[name].js',
  },
  target: 'electron-main',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.json/,
        type: 'asset/source',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
