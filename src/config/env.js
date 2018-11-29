/**
 * 配置多个环境
 */

// cookie的domain
let WING_DOMAIN = ''

console.log('RUNTIME_ENV:', process.env.RUNTIME_ENV)

if (process.env.NODE_ENV === 'development') {
  // 开发环境
  // cookie的domain
  WING_DOMAIN = document.domain
} else if (process.env.BUILD_ENV === 'development') {
  // 打包后的开发环境
  // cookie的domain
  WING_DOMAIN = document.domain
} else if (process.env.BUILD_ENV === 'qa') {
  // QA内部测试环境
  // cookie的domain
  WING_DOMAIN = document.domain
} else if (process.env.BUILD_ENV === 'production') {
  // 生产环境
  // cookie的domain
  WING_DOMAIN = 'chipsgames.com'
} else if (process.env.BUILD_ENV === 'pre') {
  // 境外测试环境
  // cookie的domain
  WING_DOMAIN = 'pre.wingsdk.com'
}

export default {
  ...process.env.RUNTIME_ENV,
  WING_DOMAIN
}
