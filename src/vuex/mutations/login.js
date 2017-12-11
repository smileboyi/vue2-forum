import * as types from '../constants/types'


const loginMutations = {
  [types.SHOW_INFOPOPUP](state, action){
    state.isopen = true;
  },
  [types.HIDE_INFOPOPUP](state, action){
    state.isopen = false;
  },
  [types.USER_LOGOUT](state){
    state.loginState = false;
  }
}

export default loginMutations;

