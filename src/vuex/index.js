import Vue from 'vue'
import Vuex from 'vuex'

import common from './modules/common'
import login from './modules/login'
import message from './modules/message'

Vue.use(Vuex);


const store = new Vuex.Store({
  modules:{
    common,
    login,
    message
  }
})


export default store;