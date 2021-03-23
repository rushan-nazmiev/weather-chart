const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	entry: {
		main: './index.js',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './index.html'
		}),
		new CleanWebpackPlugin()
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader',"sass-loader"]
			},
			{
				test: /\.(svg|png)$/,
				use: ['file-loader']
			},


		]
	}
}