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
        // let text = params.iscollected ? '取消成功' : '收藏成功';
        // dispatch('showInfoPopup', {
        //   msg: text,
        //   state: true
        // });

        // 刷新个人数据
        dispatch('fetchUserInfo', {
          loginname: params.loginname
        })
      }else {
        dispatch('showInfoPopup', {
          msg: "操作失败"
        });
      }
    })
  },

  /**
   * 评论点赞
   * @type  {post}
   * @param {replyid} [String]     评论id
   * @param {topicid} [String]     主题id
   * @param {index}   [Number]     评论位置
   * @param {accesstoken} [String] token
   */
  toggleThumb({ commit, state, dispatch }, params){
		axios.post('reply/' + params.replyid + '/ups', {
				accesstoken: params.accesstoken
		}).then((res) => {
      //不能给自己的评论点赞
      if(res.data.error_msg){
        dispatch('showInfoPopup', {
          msg: res.data.error_msg
        });
        return;
      }

      //给别人 点赞/取消
      let index = params.index,
          ups = state.data.replies[index].ups;
      // 这里只是操作点赞数组的长度，因为仅仅展示的是点赞人数，而不是那些点赞人
      if(res.data.action === 'up'){
        ups.push('');
      }else{
        ups.pop();
      }

		}).catch((err) => {
      dispatch('showInfoPopup', {
        msg: '网骆超时'
      });
		})
  },

  /**
   * 发送评论请求
   * @type  {post}
   * @param {topicid} [String]     话题id
   * @param {accesstoken} [String] token
   * @param {content} [String]     评论内容
   * @param {reply_id} [String]    如果这个评论是对另一个评论的回复，请务必带上此字段
   */

  sendCommentData({ commit, state, dispatch }, params){

    //用于防止多次提交
    commit(types.FETCH_COMMENT_REQ);

    axios.post('topic/' + params.topicid + '/replies', {
      accesstoken: params.accesstoken,
      content: params.content,
      reply_id: params.reply_id    //貌似不能回复别人，试过多次了
    }).then((res) => {
      commit(types.FETCH_COMMENT_SUC);
      commit(types.HIDE_COMMENT_PAGE);
      console.log(55555);
      // 刷新页面
      dispatch('fetchTopicDatail', {
        id: params.topicid
      });
    }).catch((err) => {
      commit(types.FETCH_COMMENT_ERR);
      commit(types.HIDE_COMMENT_PAGE);
      dispatch('showInfoPopup', {
        msg: '网骆超时'
      });
    })
  }


}

export default detailActions;