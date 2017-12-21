import detailActions from '../actions/detail'
import detailMutations from '../mutations/detail'

const detail = {
  state: {
    isfetching: false,
    data: {
      author: {   //组件中要调用属性，所以要先申明为一个对象（不然报类型错误）
        avatar_url: '',
        loginname: ''
      },
      replies: []  //组件中要调用lenth，所以要先声明为一个数组（默认为字符串）
    },
    error: ''
  },
  mutations: detailMutations,
  actions: detailActions
}

export default detail;