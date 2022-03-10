const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: './src/index.tsx',
    output: {
      publicPath: '/',
      filename: 'bundle.[chunkhash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      plugins: [new TsconfigPathsPlugin({})],
    },
    devServer: {
      port: 3000,
      open: true,
      hot: true,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.json'),
            },
          },
          exclude: /node_modules/,
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                svgoConfig: {
                  plugins: {
                    removeViewBox: false,
                  },
                },
              },
            },
            'url-loader',
          ],
        },
        {
          test: /\.(png|jpg)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                name: '[hash].[ext]',
                limit: 10000
              }
            }
          ]
        }
      ],
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        favicon: 'favicon.ico',
      }),
    ],
  };
};
