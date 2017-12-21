import * as types from '../constants/types'
import axios from 'axios'

const detailActions = {

  /**
   * 话题详情
   * @type  {get}
   * @param {id} [String]  主题id
   */
  fetchTopicDatail({ commit, state }, params){
    //清楚上一次加载的数据，显示成白屏
    commit(types.CLEAR_DETAIL_DATA);
    commit(types.FETCH_DETAIL_REQ);
    commit(types.SHOW_DETAIL_PAGE);

    axios({
      method: 'get',
      url: 'topic/' + params.id
    }).then((res) => {
      commit(types.FETCH_DETAIL_SUC,{
        data: res.data.data
      });
    }).catch((err) => {
      console.log(err);
      commit(types.FETCH_DETAIL_ERR,{
        error: err
      });
    })
  },

  /**
   * 话题收藏
   * @type  {post}
   * @param {accesstoken} [String] token 
   * @param {topic_id} [String]    主题id
   * @param {loginname} [String]   用户名
   */
  fetchToggleCollectTopic({ commit, state, dispatch }, params){
    let fn = params.iscollected ? 'de_collect' : 'collect';
    //收藏/取消
    axios.post('topic/'+ fn, {
      accesstoken: params.accesstoken,
      topic_id: params.topic_id
    }).then((res) => {
      if (res.data.success) {
        // 弹窗提示
        let text = params.iscollected ? '取消成功' : '收藏成功';
        dispatch('showInfoPopup', {
          msg: text,
          state: true
        });
        // 刷新个人数据
        dispatch('fetchUserInfo', {
          loginname: params.loginname
        })
      }else {
        dispatch('showInfoPopup', {
          msg: "操作失败",
          state: false
        });
      }
    })
  },

  /**
   * 点赞
   * @type  {post}
   * @param {replyid} [String]     评论id
   * @param {topicid} [String]     主题id
   * @param {accesstoken} [String] token
   */
  toggleThumb({ commit, state, dispatch }, params) {
		axios.post('reply/' + params.replyid + '/ups', {
				accesstoken: params.accesstoken
		}).then((res) => {

		}).catch((err) => {

		})

  }

}

export default detailActions;