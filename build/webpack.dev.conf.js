const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');
const webpack = require('webpack');

let devConfig =  merge(baseConfig, {
  output: {
      path: '/'
  },
  devServer: {
    watch: true,
    inline:true,
    reload:true,
    // clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    proxy: {}
  },
  devtool: '#source-map',
  plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
  ]
});

module.exports = devConfig;