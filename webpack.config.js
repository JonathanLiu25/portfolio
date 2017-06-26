const config = {
  entry: "./app/index.jsx",
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  module: {
    rules: [{
      test: /jsx?$/,
      exclude: /(node_modules)/,
      use: [{
        loader: "babel-loader",
        options: {
          presets: ["react", "es2015"]
        }
      }]
    }]
  }
};

module.exports = config;
