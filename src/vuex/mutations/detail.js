import * as types from '../constants/types'


const detailMutations = {
  [types.FETCH_DETAIL_REQ](state){
    state.isfetching = true;
  },
  [types.FETCH_DETAIL_SUC](state, action){
    state.data = action.data;
    state.isfetching = false;
  },
  [types.FETCH_DETAIL_ERR](state, action){
    state.error = action.error;
    state.isfetching = false;
  },
  [types.CLEAR_DETAIL_DATA](state){
    state.data = {
      author: {
        avatar_url: '',
        loginname: ''
      },
      replies: []
    };
  }
}

export default detailMutations;

