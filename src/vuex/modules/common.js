import commonActions from '../actions/common'
import commonMutations from '../mutations/common'


const common = {
  state: {
    infopopup: {
      isopen: false,
      infostate: true,   //suc用true,err用false
      bottom:"56",
      infomsg: ""
    }
  },
  mutations: commonMutations,
  actions: commonActions
}

export default common;