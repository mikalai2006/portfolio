const CopyPlugin = require('copy-webpack-plugin');
let path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let conf = {
  mode: 'development',
  entry: {
      main: ['./src/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist/'
  },
  devServer: {
    overlay: true,
    contentBase: './',
    watchContentBase :  true,
    index: 'index.html',
    serveIndex: true
    /*,
    watchContentBase: true,
    liveReload: true
    */
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.s[ac]ss$/i,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              'css-loader',
              'sass-loader'
            ]
          })
      },
      {
        test: /\.html$/i,
        use: 'raw-loader',
      },
      { 
        test: /\.(png|jpg|gif)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    // context: path.resolve(__dirname, "/"),
                    // outputPath: '/assets/',
                    publicPath: '../',
                    // useRelativePaths: true
                }
            }
        ]
      },
      {
        test: /\.css/,
        /*
        use: [
          'style-loader',
          'css-loader'
        ]
        */
        use: ExtractTextPlugin.extract({
         fallback: "style-loader",
         use: "css-loader"
       })
        // exclude: '/node_modules/'
      }
    ]
  },
   // devtool: 'eval-sourcemap'
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new CopyPlugin([
      { from: 'assets', to: 'assets' }
    ]),
  ]
};

module.exports = (env, options) => {
  let production = options.mode === 'production';

  conf.devtool = production
                ? 'source-map'
                : 'eval-sourcemap'
  return conf;
};
