const webpack = require('webpack');
const path = require('path');

var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: SRC_DIR + '/app/index.js',
    output: {
        path: DIST_DIR + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test:/\.js?/,
                include: SRC_DIR,
                loader: 'babel-loader',
                query: {
                    plugins: [
                        ["@babel/plugin-proposal-decorators", { "legacy": true }],
                        "@babel/plugin-proposal-function-sent",
                        "@babel/plugin-proposal-export-namespace-from",
                        "@babel/plugin-proposal-numeric-separator",
                        "@babel/plugin-proposal-throw-expressions",
                    ],
                    presets: ['@babel/preset-react', '@babel/preset-env']
                }
            }
        ]
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: "[file].map"
          }),
    ]
};

module.exports = config;