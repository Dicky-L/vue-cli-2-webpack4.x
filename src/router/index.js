import Vue from 'vue'
import Router from 'vue-router'
import example from '@/router/example'

Vue.use(Router)

const routes = [
  // 例子路由
  ...example
]

let router = new Router({
  // mode: 'history',
  routes
})

export default router
