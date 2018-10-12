# vue-playlist


git remote add origin https://github.com/leonjun/vue.git
git push -u origin master


> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

#命令行
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

```


import 'mint-ui/lib/style.css'
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
