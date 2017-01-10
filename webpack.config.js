var WebpackBuildNotifier = require('webpack-build-notifier');

module.exports = {
  entry: [
    './browser/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: './public/bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
  ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    new WebpackBuildNotifier({
      title: "WebpackBuild",
      sucessSound: true,
      failureSound: true,
    }),
  ]
};
