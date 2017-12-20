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
    datapage:{
      all: 1,   //如果某个话题数据加载完，设为0
      good: 1,
      weex: 1,
      share: 1,
      ask: 1,
      job: 1
    },
    detaildata: {},
    error: ''
  },
  mutations: topicMutations,
  actions: topicActions
}

export default topic;