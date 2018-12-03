const webpack = require('webpack')
const path = require('path')
const glob = require('glob')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const jsEntries = {}
glob.sync('./public/js/**/*.js').forEach((file) => {
  jsEntries[file.replace('public/js/', '').replace('.js', '')] = file
})


const cssEntries = {}
glob.sync('./public/css/**/*.scss').forEach((file) => {
  cssEntries[file.replace('public/css/', '').replace('.scss', '')] = file
})

const devMode = process.env.NODE_ENV !== 'production'

module.exports = [
  {
    // optimization: {
    //   splitChunks: {
    //     name: 'commons',
    //     filename: 'commons.js',
    //     minChunks: 3,
    //   }
    // },
    entry: jsEntries,
    mode: 'development',
    output: {
      path: path.join(__dirname, 'dist/js'),
      filename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.js'],
      modules: ['node_modules', 'src'],
      alias: {
        components: path.join(__dirname, 'js/components'),
        pages: path.join(__dirname, 'js/pages'),
      },
    },
    devServer: {
      port: 3001,
      contentBase: path.join(__dirname, 'dist'),
      proxy: {
        '/': {
          target: 'http://localhost:3000/',
          secure: false,
        },
      },
    },
    devtool: 'source-map',
  },

  {
    entry: cssEntries,
    mode: 'development',
    output: {
      path: path.join(__dirname, 'dist/css'),
      filename: '[name].css',
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          include: /node_modules/,
          use: [
            'style-loader',
            'css-loader',
            // MiniCssExtractPlugin.loader
          ]
        },
        {
          test: /\.(sa|sc)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            // 'style-loader',
            'css-loader',
            'sass-loader',
          ],
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        // filename: `[name].css`,
        filename: `[name].min.css`,
        chunkFilename: "[id].css"
      })
    ]
  }
]