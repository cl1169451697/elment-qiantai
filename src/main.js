import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入字体图标
import './assets/fonts/iconfont.css'
// 导入三级联动
import Distpicker from 'v-distpicker'
//  导入axios
import axios from './http'
// 实例化axios到vue原型里
Vue.prototype.$axios = axios
// 配置请求路径
axios.defaults.baseURL = 'http://localhost:8000/api'

Vue.config.productionTip = false

Vue.component('v-distpicker', Distpicker)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
