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
    ],
  },

  //   no source-maps used
  //   devtool: false,

  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
  },
};
