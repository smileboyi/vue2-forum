import * as types from '../constants/types'
import { setCookie, getCookie, delCookie } from '../../assets/js/cookies'
import axios from 'axios'


// a.登录不成功提示报错，b.登录成功提示成功，设置缓存，并获取用户数据切换页面。
const loginActions = {

  /**
   * @type {post}
   * @param {accesstoken} [String] accesstoken
   */
  fetchUserLogin({ commit, state, dispatch }, params){
    // 用于状态加载动画
    commit(types.FETCH_LOGIN_REQ);
    axios({
      method: 'post',
      url: 'accesstoken',
      params: {
        accesstoken : params.accesstoken
      }
    }).then((res) => {
      //登录成功提示
      dispatch('showInfoPopup', {
        msg: '登录成功',
        state: true
      })

      // 将 accesstoken 缓存在 cookie 中
      setCookie('accesstoken', params.accesstoken);

      // 获取基本个人数据
      commit(types.FETCH_LOGIN_SUC, {
        data: res.data
      });

      // 获取个人数据（包含话题数据）
      dispatch('fetchUserInfo', {
        loginname: res.data.loginname,
      })
  
    }).catch((err) => {
      dispatch('showInfoPopup', {
        msg: '登录失败，请检查网络或accesstoken是否正确',
        bottom: '56px'
      })
    })
  },

  /**
   * @type {post}
   * @param {loginname} [String] 用户名
   */
  fetchUserInfo({ commit, state }, params){
    axios({
      method: 'get',
      url: 'user/' + params.loginname
    }).then((res) => {
      commit(types.FETCH_USERINFO, {
          data: res.data.data
      })
    })
  }
}

export default loginActions;