import * as types from '../constants/types'


const topicMutations = {
  //topics
  [types.FETCH_TOPIC_REQ](state){
    state.isfetching = true;
  },
  [types.FETCH_TOPIC_SUC](state, action){
    action.data.forEach(arr => {
      state.listdata[action.tab].push(arr);
    });
    state.isfetching = false;
  },
  [types.FETCH_TOPIC_ERR](state){
    state.isfetching = false;
  },
  [types.CLEAR_TOPIC_TAB_DATA](state, action){
    state.listdata[action.tab] = [];
    state.datapage[action.tab] = 1;
  },
  [types.CHANGE_TOPIC_DATA_PAGE](state, action){
    state.datapage[action.tab] = action.page; 
  },
  //detail
  [types.FETCH_DETAIL_REQ](state){
    state.isfetching = true;
  },
  [types.FETCH_DETAIL_SUC](state, action){
    state.isfetching = false;
    state.detaildata = action.data;
  },
  [types.FETCH_DETAIL_ERR](state){
    state.isfetching = false;
    state.error = action.error;
  },
  [types.COLLECT_TOPIC](state){
    state.isfetching = true;
  },
  [types.CANCEL_TOPIC](state){
    state.isfetching = true;
  },
}

export default topicMutations;
