'use strict';
const path = require('path');
const updateSourceMapPlugin = require( './source.map.upload.plugin')

module.exports = {
    entry: {
			index: './src/index.js',
			get: './src/24.lodash _get方法 安全获取.js',
			rc: './src/react.js',
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]_[chunkhash:8].js'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /.js$/,
                use: 'babel-loader'
            },
            {
                test: /.css$/,
                use: [
                    'css-loader'
                ]
            },
            {
                test: /.less$/,
                use: [
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]_[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]_[hash:8][ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new updateSourceMapPlugin({
            uploadUrl: 'http://localhost:7001/monitor/sourcemap',
            apiKey: 'kaikeba'
        })
    ],
    devtool:"source-map"
};