import commonActions from '../actions/common'
import commonMutations from '../mutations/common'


const common = {
  state: {
    infopopup: {
      isopen: false,
      infostate: true,   //suc用true,err用false
      bottom:"56",
      infomsg: ""
    },
    releasepage: {
      // 只有在登录的情况才能设置为true
      isopen: false
    }
  },
  mutations: commonMutations,
  actions: commonActions
}

export default common;