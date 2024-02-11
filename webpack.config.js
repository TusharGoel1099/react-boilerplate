const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const TerserWebpackPlugin = require("terser-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const getDevTool = (env) => (env == "development" ? "eval-cheap-module-source-map" : "source-map");
module.exports = (_,param) => {
    console.log(`mode is: ${param.env.TARGET_ENV}`);
    const mode  = param.mode
    return {
            mode,
            devtool: getDevTool(param.env.TARGET_ENV),
            entry: "./src/index.js",
            output: {
                chunkFilename: "[id].js",
                publicPath: "/",
                path: path.resolve(__dirname, "build"),
                filename: "[name].bundle.js"
            },
            module: {
                rules: [
                 {
                    test: /\.jpe?g|png$/,
                    exclude: /node_modules/,
                    use: ["url-loader", "file-loader"]
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                  },
                    {
                        test: /\.js$|jsx/,
                        exclude: /node_modules/,
                        loader: "babel-loader"
                    }
                ]
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: "./public/index.html",
                    inject: "body"
                }),
                param.env.TARGET_ENV == "development" && new webpack.HotModuleReplacementPlugin()
            ],
            optimization: {
                minimize: param.env.TARGET_ENV === "production",
                minimizer: [new TerserWebpackPlugin({ test: /\.js(\?.*)?$/i })],
                splitChunks: {
                    chunks: 'all',
                    cacheGroups: {
                      vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                      },
                    },
                  },
            },
            performance: {
                hints: param.env.TARGET_ENV === "production" ? "warning" : false,
                maxAssetSize: 2048000,
                maxEntrypointSize: 2048000,
              },
            devServer: {
                hot: true,
                // open: param.env.TARGET_ENV == "development"
              },
            resolve: { extensions: [".js", ".jsx", ".scss"] },
        }
        
};
