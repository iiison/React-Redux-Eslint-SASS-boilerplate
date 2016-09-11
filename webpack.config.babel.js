/*

																																				,...,,
	`7MN.   `7MF'          db            .g8"""bgd                      .d' ""db
		MMN.    M           MM:         .dP'     `M                      dM`
		M YMb   M          ,V^MM.        dM'       ` ,pW"Wq.`7MMpMMMb.   mMMmm`7MM  .P"YbmM'
		M  `MN. M         ,M  `MM        MM         6W'   `Wb MM    MM    MM    MM  mI   I8
		M   `MM.M         AbmmmqMA       MM.        8M     M8 MM    MM    MM    MM  WmmmP"
		M     YMM        A'     VML      `Mb.     ,'YA.   ,A9 MM    MM    MM    MM 8M
	.JML.    YM      .AMA.   .AMMA.      `"bmmmd'  `Ybmd9'.JMML  JMML..JMML..JMML.YMMMMMb
																																							 6'     dP
																																							 Ybmmmd'
*/

import path               from 'path'
import precss             from 'precss'
import webpack            from 'webpack'
import autoprefixer       from 'autoprefixer'
import HtmlWebpackPlugin  from 'html-webpack-plugin'
import webpackLoadPlugins from 'webpack-load-plugins'
import DashboardPlugin    from 'webpack-dashboard/plugin'
import StyleLintPlugin    from 'stylelint-webpack-plugin'
import ExtractTextPlugin  from 'extract-text-webpack-plugin'
import ProgressBarPlugin  from 'progress-bar-webpack-plugin'

const LAUNCH_COMMAND  = process.env.npm_lifecycle_event
const isProd          = LAUNCH_COMMAND === 'production'
// const target          = 'https://nestaway.com'
const target          = 'http://localhost:3000'
const PATHS           = {
	app        : path.join(__dirname, 'app'),
	build      : path.join(__dirname, 'build'),
	scss       : path.join(__dirname, 'app/styles/scss'),
	api        : path.join(__dirname, 'app/javascripts/api'),
	utils      : path.join(__dirname, 'app/javascripts/utils'),
	store      : path.join(__dirname, 'app/javascripts/store'),
	config     : path.join(__dirname, 'app/javascripts/config'),
	containers : path.join(__dirname, 'app/javascripts/containers'),
	components : path.join(__dirname, 'app/javascripts/components'),
	redux      : path.join(__dirname, 'app/javascripts/redux/modules'),
}
const prodPlugin = new webpack.DefinePlugin({
	'process.env': {
		NODE_ENV: JSON.stringify('production')
	}
})
const dashBoardPlugin = new DashboardPlugin()

let progressBarConfig       = new ProgressBarPlugin()
let styleLintConfig         = new StyleLintPlugin({
	failOnError : true,
	syntax      : 'scss',
	files       : '**/*.s?(a|c)ss',
	context     : './',
	failOnError : false,
	configFile  : 'stylelint.config.js'
})
let HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template : PATHS.app + '/index.html',
	filename : 'index.html',
	inject   : 'body'
})
let extractTextPluginConfig  = new ExtractTextPlugin("style.css", { allChunks : false })

process.env.BABEL_ENV = LAUNCH_COMMAND
process.env.LINT_ENV  = LAUNCH_COMMAND
process.env.isProd    = isProd

const base = {
	entry: [
		// 'webpack-hot-middleware/client?reload=true',
		'babel-polyfill',
		PATHS.app
	],
	output: {
		path     : PATHS.build,
		filename : "bundle.js"
	},
	module: {
		preLoaders : [{
			test    : /\.jsx$|\.js$/,
			loader  : 'eslint-loader',
			include : PATHS.app,
			exclude : /bundle\.js/
		}],
		loaders: [
			{
				test    : /\.jsx$|\.js$/,
				exclude : /node_modules/,
				loader  : "babel-loader"
			},
			{
				test   : /\.(scss|css)$/,
				loader : ExtractTextPlugin.extract("style","css?localIdentName=[name]__[local]___[hash : base64 : 5]&modules&importLoaders=1!postcss-loader!sass?outputStyle=expanded")
				// loader: "style!css!postcss-loader!sass?outputStyle=expanded"
				// loader : 'style!css!autoprefixer?browsers=last 3 versions!sass?outputStyle=expanded!postcss-loader'
			},
			{
				test : /\.json$/,
				loader: 'json'
			}
		]
	},
	postcss: function () {
		return [autoprefixer, precss]
	},
	resolve: {
		root: path.resolve('./app'),
		extensions: ['', '.js', '.jsx'],
		alias: {
			'$styles'     : PATHS.scss,
			'$utils'      : PATHS.utils,
			'$store'      : PATHS.store,
			'$config'     : PATHS.config,
			'$redux'      : PATHS.redux,
			'$reducers'   : PATHS.reducers,
			'$containers' : PATHS.containers,
			'$components' : PATHS.components,
			'$api'        : PATHS.api
		}
	}
}

const commonPlugins = [HTMLWebpackPluginConfig, progressBarConfig, extractTextPluginConfig, dashBoardPlugin, styleLintConfig]
// const commonPlugins = [HTMLWebpackPluginConfig, progressBarConfig, extractTextPluginConfig, styleLintConfig]

const prodConf = {
	devtool : 'cheap-module-source-map',
	plugins : commonPlugins.concat([prodPlugin])
}

const devConf = {
	devtool   : 'cheap-module-inline-source-map',
	devServer : {
		contentBase : PATHS.build,
		hot         : true,
		inline      : true,
		progress    : true,
		proxy : {
			'*' : {
				target : target,
				secure : false/*
				bypass: function (req, res, proxyOptions) {
					if(req.headers.accept.indexOf('html') !== -1){
						return '/build/index.html'
					}
				}*/
			}
		}
	},
	plugins: commonPlugins.concat([new webpack.HotModuleReplacementPlugin()])
}

export default Object.assign({}, base, isProd ? prodConf : devConf)
