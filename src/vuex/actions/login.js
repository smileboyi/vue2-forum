import * as types from '../constants/types'
import { setCookie, getCookie, delCookie } from '../../assets/js/cookies'
import axios from 'axios'

//axios请求get的格外参数格式{params:params}
//post的格外参数格式直接传递一个对象params

// 登录不成功提示报错，登录成功提示成功，设置缓存，并获取用户数据切换页面。
export const loginActions = {

  
  fetchUserLogin({ commit, state, dispatch }, params){
    axios({
      method: 'post',
      url: 'accesstoken',
      params: {
        accesstoken : params.accesstoken
      }
    }).then((res) => {

    })
  }
}