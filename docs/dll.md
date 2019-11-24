# dll

- react
- ui

> webpack.dll.config.js

~~~
const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    react: ["react", "react-dom", "redux", "react-redux", "redux-thunk", "react-router-dom"],
    ui: ["antd-mobile/lib/toast", "antd-mobile/lib/button"] // 用到的ant-mobile组件配置在这里
  },
  output: {
    path: path.join(__dirname, "../dll"),
    filename: "[name].dll.js",
    library: "[name]_libary"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      //   name: "[name]_[hash]",
      name: "[name]_libary",
      path: path.join(__dirname, "../dll", "[name].manifest.json")
    })
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parallel: true,
          cache: true,
          compress: { warnings: true, drop_console: true },
          output: {
            comments: false
          }
        },
        extractComments: false
      })
    ]
  }
};

~~~


> webpacl.base.config.js

~~~
new webpack.DllReferencePlugin({
      manifest: require("../dll/ui.manifest.json")
}),
new webpack.DllReferencePlugin({
    manifest: require("../dll/react.manifest.json")
}),


new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, "../dll/*.dll.js"),
      outputPath: "js",
      publicPath: "js",
      hash: true,
      includeSourcemap: false
    }),
~~~
