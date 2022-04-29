const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "development",
  
  entry: "./src/index.js",
  
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  
  devServer: {
    static: './dist',
  },

  resolve: {
    alias: {
      '@img': path.resolve(__dirname, 'src/assets/img/'),
      '@js': path.resolve(__dirname, 'src/js/'),
      '@css': path.resolve(__dirname, 'src/css/'),
      '@sass': path.resolve(__dirname, 'src/sass/'),
    }
  },
  
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: false,
        },
      },
      {
        test: /\.(c|sc|sa)ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(webp|png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          //filename: "assets/img/[hash][ext][query]",
          filename: "assets/img/[name][ext][query]",
        },
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ],
  },

  optimization: {
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      filename: "index.html",
      template: "./src/index.html"
    }),
    
    new HtmlWebpackPlugin({
      inject: true,
      filename: "nosotros.html",
      template: "./src/nosotros.html"
    }),

    new HtmlWebpackPlugin({
      inject: true,
      filename: "tienda.html",
      template: "./src/tienda.html"
    }),

    new HtmlWebpackPlugin({
      inject: true,
      filename: "blog.html",
      template: "./src/blog.html"
    }),

    new HtmlWebpackPlugin({
      inject: true,
      filename: "galeria.html",
      template: "./src/galeria.html"
    }),

    new HtmlWebpackPlugin({
      inject: true,
      filename: "contacto.html",
      template: "./src/contacto.html"
    }),

    new HtmlWebpackPlugin({
      inject: true,
      filename: "entrada.html",
      template: "./src/entrada.html"
    }),
    
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      ignoreOrder: false,
    }),
  ],
};