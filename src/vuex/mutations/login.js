import * as types from '../constants/types'


const loginMutations = {
  [types.FETCH_LOGIN_REQ](state, action){
    state.isfetching = true;
  },
  [types.FETCH_LOGIN_SUC](state, action){
    state.isfetching = false;
    state.loginstate = true;
    state.data = action.data;
  },
  [types.FETCH_LOGIN_ERR](state, action){
    state.isfetching = false;
    state.loginstate = false;
    state.msg = action.error;
  },
  [types.FETCH_USERINFO](state, action){
    state.userinfo = action.data;
  },
  [types.USER_LOGOUT](state){
    state.loginstate = false;
  }
}

export default loginMutations;

