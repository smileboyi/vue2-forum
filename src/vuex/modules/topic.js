import topicActions from '../actions/topic'
import topicMutations from '../mutations/topic'

const topic = {
  state: {
    isfatching: false,
    nomoredata: true,  //这里6种tab共用一个状态，每次切换tab时将状态设为true
    listdata: {
      all: [],
      good: [],
      weex: [],
      share: [],
      ask: [],
      job: []
    },
    detaildata: {},
    error: ''
  },
  mutations: topicMutations,
  actions: topicActions
}

export default topic;