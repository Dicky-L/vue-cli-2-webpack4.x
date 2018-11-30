
const vuexDemo = resolve => require(['@/demo/vuexDemo'], resolve)
// const swiperDemo = resolve => require(['@/demo/swiperDemo'], resolve)
// const iframeWrap = resolve => require(['@/demo/iframeWrap'], resolve)

const routes = [{
  path: '/test/vuex',
  name: 'vuexDemo',
  component: vuexDemo
// }, {
//   path: '/test/swiper',
//   name: 'swiperDemo',
//   component: swiperDemo
// }, {
//   path: '/test/iframe-wrapper',
//   name: 'iframeWrap',
//   component: iframeWrap
}]

export default routes
