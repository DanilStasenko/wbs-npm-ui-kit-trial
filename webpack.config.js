const path = require("path");
//строчка снизу новая
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".tsx"],
  },
  externals: {
    react: "react",
  },
  //новый код
  plugins: [new MiniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: "[id].css",
  })],
  //-----
  module: {
    rules: [
      // {
      //   test: /\.css/,
      //   use: ["style-loader", "css-loader"],
      // },
      //новый код
      {
        test: /\.scss/,
        use: ['style-loader', { loader: "css-loader", options: { modules: true } }, 'sass-loader'],
        exclude: /node_modules/,
      },
      //----
      {
        test: /\.(ts|tsx)?$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
    ],
  },
};
