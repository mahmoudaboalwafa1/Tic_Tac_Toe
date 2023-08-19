const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMiniExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./main.js",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    port: 3000,
    compress: true,
    hot: true,
  },

  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        use: [
          {
            loader: "file-loader",
            options: { name: "images/[name].[ext]", useRelativePath: true },
          },
        ],
      },
      {
        test: /\.(mp3|wav|ogg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "sounds/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [CssMiniExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  resolve: {
    fallback: {
      events: require.resolve("events/"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new CssMiniExtractPlugin({ filename: "style.css" }),
  ],
};
