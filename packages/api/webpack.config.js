const path = require("path");
const TSConfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "src"),
  entry: "./index",
  output: {
    path: path.join(__dirname, "temp"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\\.tsx?$/,
        exclude: /^node_modules/,
        loader: "ts-loader",
        options: {
          configFile: "./tsconfig.json",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [
      new TSConfigPathsPlugin({
        configFile: "./tsconfig.json",
        logLevel: "info",
        extensions: [".ts"],
        mainFields: ["main"],
        // baseUrl: "/foo"
      }),
    ],
  },
};
