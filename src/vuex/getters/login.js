import * as types from '../constants/types'


const loginGetters = {
  [types.COLLECTS_COUNT](state) {
    let arr = state.userinfo.collect_topics;
    return arr ? arr.length : 0;
  },
  [types.REPLIES_COUNT](state) {
    let arr = state.userinfo.recent_replies;
    return arr ? arr.length : 0;
  },
  [types.RECENT_COUNT](state) {
    let arr = state.userinfo.recent_topics;
    return arr ? arr.length : 0;
  }
}

export default loginGetters;