import * as types from '../constants/types'
import axios from 'axios'

const topicActions = {


  /**
   * 话题列表
   * @type  {get}
   * @param {tab} [String]    主题分类 
   * @param {page} [Number]   页数
   * @param {limit} [Number]  一次请求条数
   */
  fetchTopics({ commit, state }, params){

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
      if(res.data.data.length){
        commit(types.FETCH_TOPIC_SUC,{
          tab: params.tab,
          data: res.data.data
        });
        //下一次请求的时候页面加1
        commit(types.CHANGE_TOPIC_DATA_PAGE, {
          tab: params.tab,
          page: params.page + 1
        })
      }else{
        //没有数据，返回的数据数组为空时
        commit(types.CHANGE_TOPIC_DATA_PAGE,{
          tab: params.tab,
          page: 0
        });
        //这里可以视为失败，拿不到数据
        commit(types.FETCH_TOPIC_ERR);
      }
      commit(types.CHANGE_ISFIRST_STATE,{
        state: false
      });
    }).catch((err) => {
      commit(types.FETCH_TOPIC_ERR);
      commit(types.CHANGE_ISFIRST_STATE,{
        state: false
      });
    })
  },

  /**
   * 发布主题
   * @type  {post}
   * @param {accesstoken} [String] accesstoken
   * @param {title}   [String]     标题 
   * @param {tab}     [String]     分类(ask/share/job)
   * @param {content} [String]     内容
   */
  fetchReleaseTopic({ commit, state, dispatch }, params){
    commit(types.FETCH_RELEASE_REQ);

    axios.post('topics', {
      accesstoken: params.accesstoken,
      title: params.title,
      tab: params.tab,
      content: params.content
    }).then((res) => {
      commit(types.FETCH_RELEASE_SUC);
      commit("SHOW_DIALOGALERT",{
        msg: "发布成功"
      });
      localStorage.setItem('release_data', '');
      commit(types.CHANGE_BTN_TEXT,{
        text: "点击编辑正文"
      });
    }).catch((err) => {
      commit(types.FETCH_RELEASE_ERR);
      dispatch('showInfoPopup', {
        msg: '发送失败，请检查网络',
        bottom: 0
      });
    })

  }
  
}

export default topicActions;