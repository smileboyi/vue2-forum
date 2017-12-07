import *　as types from '../constants/types'

//定义基本
const topicsMutations = {
  [types.CLEAR_STATE_DATA](state){
    state.data = [];
  }
}

export default topicsMutations