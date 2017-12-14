import * as types from '../constants/types'


const messageMutations = {
  [types.FETCH_MESSAGE_REQ](state){
    state.isfetching = true;
  },
  [types.FETCH_MESSAGE_SUC](state, action){
    state.isfetching = false;
    state.data = action.data;
  },
  [types.FETCH_MESSAGE_ERR](state, action){
    state.isfetching = false;
    state.error = action.error;
  },
  [types.FETCH_MARK_ALL_REQ](state){
    state.ismarkallfatching = true;
  },
  [types.FETCH_MARK_ALL_SUC](state){
    // 标记后不会返回什么，如果成功了就重新加载组件
    state.ismarkallfatching = false;
  },
  [types.FETCH_MARK_ALL_ERR](state){
    state.ismarkallfatching = false;
  },
  [types.CLEAR_MESSAGE](state){
    state.data = {
      has_read_messages: [],
      hasnot_read_messages: []
    };
  }
}

export default messageMutations;
