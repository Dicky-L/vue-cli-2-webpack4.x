import env from '@/config/env'
function setMillisecondCookie(cname, cvalue, millisecond) {
  var d = new Date()
  d.setTime(d.getTime() + millisecond)
  var expires = 'expires=' + d.toGMTString()
  document.cookie = cname + '=' + cvalue + '; ' + expires + ";domain=" + env.WING_DOMAIN + ";path=/"
}

export default setMillisecondCookie
