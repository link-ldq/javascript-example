'use strict';
const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		index: './src/index.js',
		get: './src/24.lodash _get方法 安全获取.js',
		rc: './src/react.js',
	},
	output: {
		path: path.join(__dirname, 'dist'),
		// filename: '[name].js',
		// 指纹
		filename: '[name][chunkhash:8].js'
	},
	// mode: 'production',
	mode: 'development',
	module: {
		rules: [
			{
				test: /.js$/,
				use: 'babel-loader'
			},
			{
				test: /.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /.less$/,
				use: [
					'style-loader',
					'css-loader',
					'less-loader'
				]
			},
			// {
			// 	test: /.(png|jpg|jpeg|gif|svg)$/,
			// 	use: 'file-loader'
			// },
			{
				test: /.(png|jpg|jpeg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10240,
							esModule: false,
						}
					}
				],
				type: 'javascript/auto'
			},
			{
				test: /.(woff2|woff|eot|ttf|otf)$/,
				use: 'file-loader'
			}
		]
	},
	devtool: 'source-map',
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		// base: './dist',
		hot:true
	}
};
