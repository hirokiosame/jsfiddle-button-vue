const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const WebpackConfig = module.exports = {

	context: __dirname + '/src',

	entry: {
		'jsfiddle-btn': './jsfiddle-btn.vue',
	},

	output: {
		path: __dirname + '/dist',
		filename: '[name].js',
		libraryTarget: 'umd',
	},

	module: {
		rules: [
			{
				test: /\.vue$/i,
				loader: 'vue-loader',
				options: {
					extractCSS: true,
					preserveWhitespace: false,
					cssModules: {
						localIdentName: (process.env.NODE_ENV === 'development') ? '[local]_-_[hash:base64:5]' : '[hash:base64]',
					},
				},
			},
		],
	},

	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
		}),
		new ExtractTextPlugin({
			filename: '[name].css',
			allChunks: true,
		}),
	],
};
