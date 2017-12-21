import * as types from '../constants/types'


const topicMutations = {
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
  }
}

export default topicMutations;
