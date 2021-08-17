import 'babel-polyfill'
import Es6Promise from 'es6-promise'
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import store from './store'
import router from './router'
require('es6-promise').polyfill()
Es6Promise.polyfill()
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')