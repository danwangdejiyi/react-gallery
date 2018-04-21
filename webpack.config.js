const path = require('path');


module.exports = {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-react','es2015','stage-3']
        }
      }
    ]
  }
}