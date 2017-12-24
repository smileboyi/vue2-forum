// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './vuex'

Vue.config.productionTip = false

 
// muse-ui
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

// common.css、base.css、animate.css
import './assets/css/common.css' 
import './assets/css/base.css' 
import 'animate.css'      

// axios
import axios from 'axios'
axios.defaults.baseURL = 'https://www.vue-js.com/api/v1/' 


import App from './App'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
