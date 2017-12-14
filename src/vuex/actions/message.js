import * as types from '../constants/types'
import axios from 'axios'


const messageActions = {

  /**
   * 请求获取message
   * @param {accesstoken} [String]     accesstoken
   */
  fetchMessage({ commit, state, dispatch }, params){

    // 防止短时间内多次请求
    commit(types.FETCH_MESSAGE_REQ);

    axios({
      method: 'get',
      url: 'messages',
      params: {
        accesstoken: params.accesstoken
      }
    }).then((res) => {
      console.log(res.data.data.has_read_messages[1].reply);
      commit(types.FETCH_MESSAGE_SUC, { 
        data: res.data.data
      });
    }).catch((err) => {
      commit(types.FETCH_MESSAGE_ERR, { 
        error
      });
    });
  },

  /**
   * 将所有未读message标记为已读
   * @param {accesstoken} [String]     accesstoken
   */
  fetchMarkAllMsg({ commit, state, dispatch }, params){

    commit(types.FETCH_MARK_ALL_REQ);

    axios.post('message/mark_all', {
      accesstoken: params.accesstoken
    }).then((res) => {
      commit(types.FETCH_MARK_ALL_SUC);
      dispatch('showInfoPopup', {
        msg: '全部标记成功',
        state: true
      })
    }).catch((err) => {
      commit(types.FETCH_MARK_ALL_ERR);
      dispatch('showInfoPopup', {
        msg: '请求错误，请检查网络'
      })
    })
  }
}

export default messageActions;