import { loginActions } from '../actions/login'
import { loginMutations } from '../mutations/login'
import { loginGetters } from '../getters/login'


//定义login状态配置
const login = {
  //定义login状态state
  state: {
    loginState: false,
    msg: '',
    userinfo: {

    }
  },
  mutations: loginMutations,
  getters: loginGetters,
  actions: loginActions
}
export default login