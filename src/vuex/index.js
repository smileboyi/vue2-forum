import Vue from 'vue'
import Vuex from 'vuex'

import common from './modules/common'
import login from './modules/login'

Vue.use(Vuex);


const store = new Vuex.Store({
  modules:{
    common,
    login,
  }
})


export default store;