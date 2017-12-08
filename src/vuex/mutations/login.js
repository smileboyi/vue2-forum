import * as types from '../constants/types'

export const loginMutations = {
  [types.FETCH_LOGIN_SUC](state, action){
    state.loginState = true;
    state.userinfo = action.data;
    state.msg = action.msg;
  },
  [types.FETCH_LOGIN_ERR](state, action){
    state.loginState = false;
    state.msg = action.error;
  },
  [types.USER_LOGOUT](state){
    state.loginState = false;
  }
}



