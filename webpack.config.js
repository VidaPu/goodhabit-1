var path = require('path');
module.exports = {
    entry: './src/main.js',
    output: {
        path: './dist',
        publicPath: 'dist/',
        filename: 'build.js'
    },
    module: {
        loaders: [{
            test: /\.js|jsx$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: [
                    'babel-preset-es2015',
                    'babel-preset-vue',
                    'babel-preset-stage-0'
                ],
                plugins: [
                    "add-module-exports"
                ]
            }
        }]
    }
}