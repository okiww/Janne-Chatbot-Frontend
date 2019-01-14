const UglifyPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeAssetPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const utils = require('./utils');

module.exports = {
    resolve: {
        extensions: ['.es6', '.js', '.jsx'],
        alias: {
            '@': utils.resolve('src')
        }
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },
    entry: [path.resolve(__dirname, '../src/app.js')],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'eslint-loader',
                enforce: 'pre'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        compact: false
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['css-loader']
            },
            {
                test: /\.styl(us)?$/,
                exclude: /node_modules/,
                use: ['css-loader', 'stylus-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: utils.assetsPath('img/[name].[hash:7].[ext]')
                    }
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: utils.assetsPath('media/[name].[hash:7].[ext]')
                    }
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                    }
                }
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    mangle: {
                        keep_fnames: true
                    }
                }
            })
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new OptimizeAssetPlugin(),
        new CopyWebpackPlugin([
            {
                from: utils.resolve('static/font'),
                to: utils.resolve('dist/static/font'),
                toType: 'dir'
            },
            {
                from: utils.resolve('static/images'),
                to: utils.resolve('dist/static/images'),
                toType: 'dir'
            }
        ])
    ]
};
