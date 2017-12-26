import * as types from '../constants/types'


const loginMutations = {
  [types.FETCH_LOGIN_REQ](state){
    state.isfetching = true;
  },
  [types.FETCH_LOGIN_SUC](state, action){
    state.isfetching = false;
    state.loginstate = true;
    state.data = action.data;
  },
  [types.FETCH_LOGIN_ERR](state){
    // 错误没有msg返回，只返回了状态码403
    state.isfetching = false;
    state.loginstate = false;
  },
  [types.FETCH_USERINFO](state, action){
    state.userinfo = action.data;
  },
  [types.USER_LOGOUT](state){
    state.loginstate = false;
  },
  [types.SET_ACCESSTOKEN](state, action){
    state.accesstoken = action.accesstoken;
  }
}

export default loginMutations;

