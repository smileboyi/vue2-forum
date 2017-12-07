import Vue from 'vue'
import Router from 'vue-router'
//引入路由要加载的page组件
import message from '../pages/message/message.vue'
import topics from '../pages/topics/topics.vue'
import user from '../pages/user/user.vue'


Vue.use(Router)

// 定义路由影射
const routes = [
  {
    name: 'topics',
    path: '/topics/:title',
    component: topics
  },
  {
    name: 'message',
    path: '/message/:title',
    component: message
  },
  {
    name: 'user',
    path: '/user/:title',
    component: user
  }
]


const router = new Router({ routes })

// 第一次打开时的页面
router.push({name: 'topics', params: {title: '话题'}})

export default router