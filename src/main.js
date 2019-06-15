// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import axios from 'axios'
import Cookies from 'js-cookie'
import i18n from './lang'
import store from './store'
import 'iview/dist/styles/iview.css';
Vue.config.productionTip = false
Vue.prototype.$axios=axios
Vue.use(iView)
// Vue.use(iView, {
//   size: Cookies.get('size') || 'medium', // 设置元素ui大小
//   i18n: (key, value) => i18n.t(key, value) // 键值对取值
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: { App },
  template: '<App/>'
})
