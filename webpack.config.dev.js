const HtmlWebPackPlugin = require('html-webpack-plugin');
import path from 'path';

module.exports = {
  entry: {
    // app: './index.js'
    path: path.resolve(__dirname, './src/index.js')
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [

      //first rule is for the html-loader
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]

      },

      //this rule is for the babel-loader
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use:[
          "babel-loader"
        ]
      },

      //this rule of for the file-loader
      {
        test:/\.(png|svg|jpg|gif)$/,
        use:[
          "file-loader",
          {loader: 'image-webpack-loader'}
          
        ]
      },

    ]

  },


  plugins:[
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
  ]


}