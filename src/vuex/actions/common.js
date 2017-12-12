import * as types from '../constants/types'


const commomActions = {

  // 显示的方法要由具体的其他action行为中调用
  showInfoPopup({ commit, state, dispatch }, params){
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