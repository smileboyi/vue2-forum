import * as types from '../constants/types'


const commomActions = {

  // 怎么显示要由具体的其他action行为中调用

  /**
   * 
   * @param {msg} [String]     文本信息
   * @param {state} [Boolean]  执行状态
   * @param {bottom} [String]  底部距离
   */
  showInfoPopup({ commit, state }, params){
    let isopen = params.isopen || false ,
      position = params.position || '';

    commit(types.SHOW_INFOPOPUP);
    commit(types.DEFINE_INFOPOPUP_MSG, { 
      infomsg: params.msg
    });
    commit(types.DEFINE_INFOPOPUP_STATE, { 
      infostate: params.state
    });
    commit(types.DEFINE_INFOPOPUP_BOTTOM, { 
      bottom: params.bottom
    });

    // 2秒后消失
    let t = setTimeout(function(){
      commit(types.HIDE_INFOPOPUP);
      clearTimeout(t)
    },2000)
  }
}

export default commomActions;