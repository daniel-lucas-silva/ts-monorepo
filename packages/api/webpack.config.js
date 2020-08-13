const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const NodeExternals = require('webpack-node-externals')

module.exports = {
  target: 'node',
  externals: [
    NodeExternals({
      allowlist: [/^@ts-monorepo/],
      additionalModuleDirs: ['../../node_modules'],
    }),
  ],
  entry: './src/server.ts',
  mode: 'development',
  output: {
    filename: './bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TSConfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: { projectReferences: true },
      },
    ],
  },
}
