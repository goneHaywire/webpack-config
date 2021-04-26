const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "development";

if (process.env.NODE_ENV === "production") mode = "production";

module.exports = {
  mode,

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },

  plugins: [new MiniCssExtractPlugin()],

  //   no source-maps used
  //   devtool: false,

  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
};
