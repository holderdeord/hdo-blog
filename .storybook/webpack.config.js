/* See default storybook config: */
const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'react-svg-loader',
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../")
      }
    ]
  }
};
