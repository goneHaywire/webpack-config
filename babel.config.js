const plugins = [];

if (process.env.NODE_ENV !== "production") {
  // this plugin works only on development
  plugins.push("react-refresh/babel");
}

module.exports = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};
