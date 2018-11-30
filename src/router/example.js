
const vuexDemo = resolve => require(['@/demo/vuexDemo'], resolve)

const routes = [{
  path: '/test/vuex',
  name: 'vuexDemo',
  component: vuexDemo
}]

export default routes
