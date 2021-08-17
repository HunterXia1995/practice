const readEnv = require('./src/utils/readEnv')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')
const env = readEnv('./.env')
module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.css', '.scss', '.html'],
    alias: {
      '@': path.resolve(__dirname, 'src'), // 给src起了个别名
      // 'assets': resolve('@/assets'),
      // 'components': resolve('@/components'),
      // 'views': resolve('@/views')
    }
  },
  externals: {
    'vue': 'Vue',
    'element-ui': 'ELEMENT'
  },
  entry: path.resolve(__dirname, './src/main.js'),
  output: {
    path: path.resolve(__dirname, 'dist2'),
    filename: './js/app.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.js$/,
        loader: 'babel-loader'
        // options: {
        //   presets: [
        //     ['@babel/preset-env', {
        //       modules: false
        //     }]
        //   ]
        // }
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      { test: /\.ts$/, use: 'ts-loader' },
      {
        test:/\.(jpg|png|gif)$/,
        // 使用一个loader
        // 下载url-loader file-loader
        loader:'url-loader',
        options: {
            // 8 * 1024表示 图片大小小于8KB，就会被base64处理
            // 优点: 减少请求数量(减轻服务器压力)
            // 缺点: 图片体积会更大(文件请求熟读更慢)
            limit:  8 * 1024,
            // 问题:因为url-loader默认使用es6模块化解析,而html-loader引入图片是commonjs
            // 解析时会出问题:[object Module]
            // 解决:关闭url-loader的es6模块化，使用commonjs解析
            esModule:false,
            // 给图片进行重命名
            // [hash:10]取图片的hash的前10位
            // [text]取文件原来扩展名
            name:'[hash:10].[ext]'
        }
    }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './public/index.html'}),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({ // 定义环境和变量
      'process.env': {
        NODE_ENV: "'development'",
        ...env
      }
    })
  ],
  devServer: {
    port: 3333,
    proxy: {
      '/jsonp': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        pathRewrite: {
          ['^jsonp']: ''
        }
      }
      // [process.env.VUE_APP_JSONP]: 'http://127.0.0.1:3000'
    }
  }
}