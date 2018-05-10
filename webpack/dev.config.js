const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const HtmlWebPackPlugin = require('html-webpack-plugin');

console.log(baseConfig)

const htmlPlugin = new HtmlWebPackPlugin({
    template: "../src/index.html",
    favicon: '../favicon.ico',
    minify: {
        removeComments: true
    }
});


module.exports = merge(baseConfig, {
    devtool: 'eval-source-map',
    plugins: [htmlPlugin]
});