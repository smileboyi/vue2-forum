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
  [types.DEFINE_INFOPOPUP_POSITION](state, action){
    state.infopopup.position = action.position;
  }
}

export default commonMutations;