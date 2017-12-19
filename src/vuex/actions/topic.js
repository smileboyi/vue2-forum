import * as types from '../constants/types'
import axios from 'axios'

const topicActions = {


  /**
   * @type  {get}
   * @param {tab} [String]    主题分类 
   * @param {page} [Number]   页数
   * @param {limit} [Number]  一次请求条数
   */
  fetchTopics({ commit, state, dispatch }, params){
    // 如果在tab数据加载完后再次上拉刷新不再请求
    if(!state.nomoredata) retrun;
    // 防止多次请求
    commit(types.FETCH_TOPIC_REQ);

    axios({
      method: 'get',
      url: 'topics',
      params: {
        tab: params.tab,
        page: params.page,
        limit: params.limit
      }
    }).then((res) => {
      commit(types.FETCH_TOPIC_SUC,{
        tab: params.tab,
        data: res.data.data
      });
    }).catch((err) => {
      commit(types.FETCH_TOPIC_ERR);
    })
  },

  /**
   * @type  {get}
   * @param {id} [String]  主题id
   */
  fetchTopicDatail({ commit, state, dispatch }, params){
    commit(types.FETCH_TOPIC_REQ);
  }
}

export default topicActions;