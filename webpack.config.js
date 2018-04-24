const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/RenderHtml.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    watch: false,
    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']})
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Bha Ra Ta',
        // Load a custom template (lodash by default see the FAQ for details)
        template: './src/index.html'
    }),
    new ExtractTextPlugin("app.css")
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        allowedHosts: [
            "bharataspandana.com"
        ]
    }
};