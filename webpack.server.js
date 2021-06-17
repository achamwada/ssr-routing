const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build',
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        options: {
          presets: [
            'react',
            'stage-0',
            [
              'env',
              {
                target: { browsers: ['last 2 versions'] },
              },
            ],
          ],
        },
      },
    ],
  },

  // Tell webpack not to bundle any libraries that exist in the 'node_modules' folder
  // into the server bundle
  externals: [webpackNodeExternals()],
};
