import * as types from '../constants/types'
import { setCookie, getCookie, delCookie } from '../../assets/js/cookies'
import axios from 'axios'


// a.登录不成功提示报错，b.登录成功提示成功，设置缓存，并获取用户数据切换页面。
const loginActions = {

  fetchUserLogin({ commit, state, dispatch }, params){
    axios({
      method: 'post',
      url: 'accesstoken',
      params: {
        accesstoken : params.accesstoken
      }
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }
}

export default loginActions;