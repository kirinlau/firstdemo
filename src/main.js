// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router'
import store from './store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import $Axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$Axios = $Axios

Vue.use(ElementUI)

const router = new VueRouter({
	mode:'history',
// mode : "hash",
	 routes:routes
})



Vue.directive('focus',{
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
   }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
