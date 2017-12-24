import * as types from '../constants/types'

const commonMutations = {
  // infopopup
  [types.SHOW_INFOPOPUP](state){
    state.infopopup.isopen = true;
  },
  [types.HIDE_INFOPOPUP](state){
    state.infopopup.isopen = false;
  },
  [types.DEFINE_INFOPOPUP_MSG](state, action){
    state.infopopup.infomsg = action.infomsg;
  },
  [types.DEFINE_INFOPOPUP_STATE](state, action){
    state.infopopup.infostate = action.infostate;
  },
  [types.DEFINE_INFOPOPUP_BOTTOM](state, action){
    state.infopopup.bottom = action.bottom;
  },
  // dialogalert
  [types.SHOW_DIALOGALERT](state, action){
    state.dialogalert.msg = action.msg;
    state.dialogalert.isopen = true;
  },
  [types.HIDE_DIALOGALERT](state){
    state.dialogalert.isopen = false;
  },
  // releasepage
  [types.SHOW_RELEASEPAGE](state){
    state.releasepage.isopen = true;
  },
  [types.HIDE_RELEASEPAGE](state){
    state.releasepage.isopen = false;
  },
  // detailpage
  [types.SHOW_DETAIL_PAGE](state){
    state.detailpage.isopen = true;
  },
  [types.HIDE_DETAIL_PAGE](state){
    state.detailpage.isopen = false;
  },
  // bottomnav
  [types.SWITCH_ROUTE_PAGE](state, action){
    state.bottomnav.active = action;
  }
}

export default commonMutations;