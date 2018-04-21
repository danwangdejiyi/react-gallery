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
            presets: ['react','es2015',"env",'stage-3'],
            plugins: []
        }
      }
    ]
  }
}