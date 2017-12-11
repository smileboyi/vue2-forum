import commonActions from '../actions/common'
import commonMutations from '../mutations/common'


const common = {
  state: {
    infopopup: {
      isopen: false,
      infostate: true,   //suc用true,err用false
      bottomclass:"",
      infomsg: ""
    }
  },
  mutations: commonMutations,
  actions: commonActions
}

export default common;