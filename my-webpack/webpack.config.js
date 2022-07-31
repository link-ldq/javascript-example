'use strict';
const path = require('path');

module.exports = {
	entry: {
		index: './src/index.js',
		get: './src/24.lodash _get方法 安全获取.js',
		rc: './src/react.js',
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js'
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /.js$/,
				use: 'babel-loader'
			}
		]
	}
};
