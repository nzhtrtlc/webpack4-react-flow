const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractPlugin = new ExtractTextPlugin({
   filename: 'main.css',

});
const htmlPlugin = new HtmlWebPackPlugin({
   template: "./src/index.html",
   filename: "./index.html"
});

module.exports = {
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader"
            }
         },
         {
            test: /\.scss$/,
            use: extractPlugin.extract({
               use: ['css-loader', 'sass-loader']
            })
         }
      ]
   },
   plugins: [htmlPlugin, extractPlugin]
};