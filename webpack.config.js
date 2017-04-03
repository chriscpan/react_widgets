const path = require('path');

module.exports = {
	entry: "./entry.jsx",
	output: {
		path: path.resolve(__dirname, 'scripts'),
		filename: "bundle.js"
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.jsx', '*']
	},
	module: {
		loaders: [
			{
				test: [/\.jsx?$/],
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
}