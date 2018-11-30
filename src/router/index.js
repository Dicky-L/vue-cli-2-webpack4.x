import Vue from 'vue'
import Router from 'vue-router'
import example from '@/router/example'
import game from '@/router/game'

Vue.use(Router)

const routes = [
  // 例子路由
  ...example,
  // 游戏页 路由
  ...game
]

let router = new Router({
  // mode: 'history',
  routes
})

export default router
