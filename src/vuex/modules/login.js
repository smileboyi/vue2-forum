import loginActions from '../actions/login'
import loginMutations from '../mutations/login'
import loginGetters from '../getters/login'


const login = {
  state: {
    isfetching: false,
    loginstate: false,
    data:{
      avatar_url: '',
      loginname: '',
      id: ''
    },
    userinfo: {
      score: 0,
    }
  },
  mutations: loginMutations,
  getters: loginGetters,
  actions: loginActions
}

export default login;