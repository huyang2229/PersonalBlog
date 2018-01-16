export default function(fullPath) {
  let screen = window.screen
  let params = {
    dt: document.title,
    dr: fullPath, //指明哪个引荐来源给网站带来了流量。此值也将用于计算流量来源。此值的格式是网址。
    ul: navigator.language || navigator.browserLanguage || '',
    sd: screen.colorDepth + '-bit',
    sr: screen.width + 'x' + screen.height,//指定屏幕分辨率
    dpr: window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio || 1,
    dp: fullPath,
    z: +new Date()
  }

  let queryArr = []
  for (let i in params) {
    queryArr.push(i + '=' + encodeURIComponent(params[i]))
  }
  let queryString = '?' + queryArr.join('&')
  window.ga_image = new window.Image()
  window.ga_image.src = '/_.gif' + queryString
}
