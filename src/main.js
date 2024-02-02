import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
// import store from './store'

// 引入css样式
// import './plugins/bootstrapvue'                  // 引入 bootstrap-vue
import('bootstrap/dist/css/bootstrap.css')
// import('zico/css/zico.min.css')                   // zico 图标库 css

import { isCopy } from "@/utils/index" //判断复制还是点击

// 挂载 axios
Vue.prototype.$http = axios
Vue.prototype.$isCopy = isCopy
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  // store,
}).$mount('#app')
