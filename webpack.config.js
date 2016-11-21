var webpack = require('webpack');
var path = require('path');

var OUTPUT_DIR = path.resolve(__dirname, 'dist');
var INPUT_DIR = path.resolve(__dirname, 'app');

var config = {
    entry: INPUT_DIR + '/bootstrapper.js',
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js/, 
                include: INPUT_DIR,
                loader: 'babel'
            }
        ]
    },
    output: {
        path: OUTPUT_DIR + '/scripts',
        filename: 'bundle.js'
    }
};

module.exports = config;
