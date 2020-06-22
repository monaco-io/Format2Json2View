const path = require("path")

const PATHS = {
  src: path.join(__dirname, "..", "src"),
  component: path.join(__dirname, "..", "src", "Format2Json2View"),
  build: path.join(__dirname, "..", "dist")
}
console.log(PATHS.src)
console.log(PATHS.component)
console.log(PATHS.build)
const config = {
  entry: [PATHS.component + "/index.tsx"],
  externals: {
    cheerio: "window",
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react",
      umd: "react"
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom",
      umd: "react-dom"
    }
  },
  output: {
    path: PATHS.build,
    filename: "main.js",
    library: "Format2Json2View",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [".tsx", ".json", ".css", ".scss"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        enforce: 'pre',
        use: "ts-loader",
        include: PATHS.src,
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  }
}

module.exports = config
