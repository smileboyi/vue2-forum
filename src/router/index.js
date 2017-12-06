import Vue from 'vue'
import Router from 'vue-router'
import resetPage from '@/components/resetPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: resetPage
    }
  ]
})
