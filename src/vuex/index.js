import Vue from 'vue'
import Vuex from 'vuex'

import topics from './modules/topics'


Vue.use(Vuex);


const store = new Vuex.Store({
  modules:{
    topics,
  }
})


export default store;