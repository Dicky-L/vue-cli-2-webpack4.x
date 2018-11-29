import env from '@/config/env'

export function initFacebook (callback) {
  // const FB = window.FB
  if (window.FB) {
    window.FB.init({
      appId: env.fbParam.appId,
      cookie: true,
      xfbml: true,
      version: env.fbParam.apiVer
    })
    if (callback) callback()
  }
}
