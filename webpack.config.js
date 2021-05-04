const webpack = require('webpack');
const path = require('path');

/*
 * We've enabled Postcss, autoprefixer and precss for you. This allows your app
 * to lint  CSS, support variables and mixins, transpile future CSS syntax,
 * inline images, and more!
 *
 * To enable SASS or LESS, add the respective loaders to module.rules
 *
 * https://github.com/postcss/postcss
 *
 * https://github.com/postcss/autoprefixer
 *
 * https://github.com/jonathantneal/precss
 *
 */

const autoprefixer = require('autoprefixer');
const precss = require('precss');

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

const WebpackCleanPlugin = require('webpack-clean-plugin');

module.exports = {
	module: {
		rules: [
			{
				include: [path.resolve(__dirname, 'js')],
				loader: 'babel-loader',

				options: {
					plugins: ['syntax-dynamic-import'],

					presets: [
						[
							'@babel/preset-env',
							{
								modules: false
							}
						]
					]
				},

				test: /\.js$/
			},
			{
				test: /\.css$/,

				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',

						options: {
							importLoaders: 1,
							sourceMap: false
						}
					},
					{
						loader: 'postcss-loader',

						options: {
							plugins: function () {
								return [precss, autoprefixer];
							}
						}
					}
				]
			}
		]
	},

	entry: {
		about: './js/about.js',
		index: './js/index.js'
	},

	output: {
		filename: '[name].js'
	},

	mode: 'production',

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	},

	plugins: [
		new WebpackCleanPlugin({
			on: "emit",
			path: ['./dist']
		})]
};
