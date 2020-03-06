const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },

            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'docs'),
        port: '8080',
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({template: 'src/html/index.html'}),
        new MiniCssExtractPlugin({filename: 'style.css'}),
    ]
}