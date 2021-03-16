const path = require("path");

module.exports = {
   target: "web",
   entry: "./src/index.js",
   mode: "development",
   output: {
      filename: "index.js",
      path: path.resolve(__dirname, "dist")
   },
   resolve: {
      extensions: [
         ".jsx",
         ".js",
         ".json",
         ".svg"
      ]
   },
   module: {
      rules: [
         {
            test: /\.(jsx|js)?$/i,
            exclude: /node_modules/,
            use: {
               loader: "@sucrase/webpack-loader",
               options: {
                  production: true,
                  transforms: ["jsx", "imports"]
               }
            }
         },
         {
            test: /\.s[ac]ss$/i,
            use: [
               {
                  loader: "css-loader",
                  options: {
                     modules: true
                  }
               },
               "sass-loader"
            ]
         },
         {
            test: /\.svg$/,
            use: "./loaders/svgloader.js"
         }
      ]
   }
}