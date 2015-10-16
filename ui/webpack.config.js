var path = require('path'),
    webpack = require('webpack'),
    nodeModulesDir = path.resolve(__dirname, '../', 'node_modules');

module.exports = {
    entry: './lib/calculaural.js',
    output: {
        path: './build/',
        filename: 'bundle.js'
    },
    node: {
        fs: 'empty'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel?optional[]=runtime',
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json',
                include: path.resolve(nodeModulesDir, 'pixi-piano-roll', 'node_modules', 'pixi.js'),
            },
            {
                test: /\.html$/,
                loader: 'file?name=[path][name].[ext]',
                include: [path.resolve(__dirname, 'index.html')]
            },
            {
                test: /\.html$/,
                loader: 'html',
                include: [path.resolve(__dirname, 'lib', 'templates')]
            },
            {
                test: /\.ico$/,
                loader: 'file?name=[name].[ext]',
                include: [path.resolve(__dirname, 'images')]
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                include: [
                    path.resolve(__dirname, 'css'),
                    path.resolve(nodeModulesDir, 'angular-material')
                ]
            }
        ]
    },
    // todo remove when this issue is resolved: https://github.com/angular/material/issues/4225
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'root.jQuery': 'jquery'
        })
    ],
    resolve: {
        extensions: ['', '.js', '.html', '.ico', '.css']
    }
};