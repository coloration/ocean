const StatsPlugin = require('stats-webpack-plugin')
const packageJson = require('./package.json')

const microId = packageJson.name
module.exports = {
  // 资源发布到
  publicPath: '/' + microId,
  // css在所有环境下，都不单独打包为文件。这样是为了保证最小引入（只引入js）
  css: {
      extract: false
  },
  configureWebpack: {
      // devtool: 'none', // 不打包sourcemap
      // 顶层通过 window[microId] 来索引
      output: {
          library: microId,
          libraryTarget: "window",
      },
      // 顶层通过 manifest 加载文件
      plugins: [
        new StatsPlugin('manifest.json', {
            chunkModules: false,
            entrypoints: true,
            source: false,
            chunks: false,
            modules: false,
            assets: false,
            children: false,
            exclude: [/node_modules/]
        }),
    ]
  },
  chainWebpack: config => {

    
    // 为模板添加一个 id 变量 不想修改也可以使用title, 
    // title 默认为 package.json [name]
    config.plugin('html')
    .tap(args => {
      return [Object.assign(args[0], { id: microId })]
    })
  },
  devServer: {
      contentBase: './',
      compress: true,
  }
}