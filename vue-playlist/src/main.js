// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'font-awesome/scss/font-awesome.scss'
//import VueResource from 'vue-resource'
import axios from 'axios'
import Vueaxios from 'vue-axios'
import VueRouter from 'vue-router'
import VueScroller from 'vue-scroller'
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
/*Vue.use(VueResource)
Vue.http.options.emulateHTTP = true
Vue.http.options.emulateJSON = true*/
Vue.use(Vueaxios,axios,VueRouter,VueScroller)
Vue.prototype.$ajax=axios