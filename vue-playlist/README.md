# vue-playlist

vue-cli安装
1.安装node
2.cmd中测试node和npm版本
3.node -v  (版本号在6.9以上)
4.npm -v(版本3.10以上)
5.npm install --global vue-cli(安装全局的cli)
6装好后测试vue --version
7.装好cd到对应的项目文件夹下
8.vue init webpack vue-playlist
9.cd到 项目文件夹下
10.npm install
11.npm run dev

> A Vue.js project
##自学vue，没事倒腾倒腾

## Build Setup




``` bash
# install dependencies
npm install


# serve with hot reload at localhost:8080
npm run dev
11
# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

#命令行
git clone https://github.com/leonjun/vue.git
git remote add origin https://github.com/leonjun/vue.git
git push -u origin master

#轮播插件
npm install --save swiper

#sass
npm install --save-dev sass-loader
npm install --save-dev node-sass

#webpack.base.conf.js的rules里面添加配置
{
  test: /\.sass$/,
  loaders: ['style', 'css', 'sass']
}

#字体图标
npm install font-awesome --save-dev
import 'font-awesome/scss/font-awesome.scss'

#mint-ui
npm install mint-ui --save-dev
import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css'

#resource跨域 config目录下index.js

module.exports = {
  dev: {
  新增
  
proxyTable: {
      '/api': {
        target: 'http://v.juhe.cn', 
        // secure: false,  // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        pathRewrite: {
          '^/api': ''
        }
      }
    },


```



For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
