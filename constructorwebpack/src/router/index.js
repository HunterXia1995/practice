import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const constantRoutes = [
  {
    path: '/',
    component: () => import ('@/views/home/index')
  },
  {
    path: '/bili',
    component: () => import ('@/views/bili/index')
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  base: '/',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})