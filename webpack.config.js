var cssLoaders = 'style-loader!css-loader!postcss-loader'
module.exports = {
  entry: './client.js',
  output: {
    filename: 'public/bundle.js'
  },
  module: {
    loaders: [{
      exclude: /(node_modules|server.js)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.css$/,
      loader: cssLoaders
    }]
  },
  postcss: function () {
    return [
      require('postcss-import')({
        glob: true,
        onImport: function (files) {
          files.forEach(this.addDependency)
        }.bind(this)
      }),
      require('postcss-simple-vars'),
      require('postcss-focus'),
      require('autoprefixer')({
        browsers: ['last 2 versions', 'IE > 8']
      }),
      require('postcss-reporter')({
        clearMessages: true
      })
    ]
  }
}
