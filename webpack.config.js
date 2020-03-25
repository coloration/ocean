const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.ts',
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
          plugins: [
            '@babel/plugin-proposal-object-rest-spread',
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-proposal-class-properties',
          ],
        },
        test: /.tsx?$/,
        exclude: /node_modules/,
      }
    ]
  },
  // optimization: {
  //   minimize: true,
  //   minimizer: [new TerserPlugin()],
  // },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
  }
}