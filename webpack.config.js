const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const path = require("path");

let mode = "development";
let target = "web";

const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({
    template: "./src/index.html",
  }),
];

if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
} else {
  // this plugin works only on development
  plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
  mode,
  target: target,
  resolve: {
    extensions: [".js", ".jsx"],
  },

  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[hash][ext][query]",
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)/i,
        // adds files directly to the js
        type: "asset/inline",

        // adds files externally
        // type: "asset/resource"

        // determine from default size limit whether to place inline or externally
        type: "asset",

        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024,
          },
        },
      },
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "",
            },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },

  plugins,

  //   no source-maps used
  //   devtool: false,

  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
};
