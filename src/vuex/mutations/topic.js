import * as types from '../constants/types'


const topicMutations = {
  //topics
  [types.FETCH_TOPIC_REQ](state){
    state.isfetching = true;
  },
  [types.FETCH_TOPIC_SUC](state, action){
    switch (action.tab) {
      case 'all':
        state.listdata.all.push(action.data);
        break;
      case 'good':
        state.listdata.good.push(action.data);
        break;
      case 'weex':
        state.listdata.weex.push(action.data);
        break;
      case 'share':
        state.listdata.share.push(action.data);
        break;
      case 'ask':
        state.listdata.ask.push(action.data);
        break;
      case 'job':
        state.listdata.job.push(action.data);
        break;
    }
    state.isfetching = false;
  },
  [types.FETCH_TOPIC_ERR](state, action){
    state.isfetching = false;
    // console.log(action);
    // state.error = action.error;
  },
  [types.CLEAR_TOPIC_TAB_DATA](state){
    state.isfetching = true;
    switch (action.tab) {
      case 'all':
        state.listdata.all = [];
        break;
      case 'good':
        state.listdata.good = [];
      case 'weex':
        state.listdata.weex = [];
        break;
      case 'share':
        state.listdata.share = [];
        break;
      case 'ask':
        state.listdata.ask = [];
        break;
      case 'job':
        state.listdata.job = [];
        break;
    }
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
