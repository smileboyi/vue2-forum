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
  },
  [types.SHOW_COMMENT_PAGE](state, action){
    state.isopen = true;
    state.reply_id = action.reply_id;
  },
  [types.HIDE_COMMENT_PAGE](state){
    state.isopen = false;
    state.reply_id = '';
  },
  [types.FETCH_COMMENT_REQ](state){
    state.issuccess = false;
    state.isfetching = true;
  },
  [types.FETCH_COMMENT_SUC](state){
    state.issuccess = true;
    state.isfetching = false;
  },
  [types.FETCH_COMMENT_ERR](state){
    state.issuccess = false;
    state.isfetching = false;
  },
}

export default detailMutations;    

