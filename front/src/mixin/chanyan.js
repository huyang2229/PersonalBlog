const TYPES = ['post', 'page']

export default {
  watch: {
    '$route': 'resetChanyan'
  },
  mounted () {
    // this.resetChanyan()
  },
  methods: {
    reset(dsq) {
      const self = this
      dsq.reset({
        reload: true,
        config: function() {
          this.page.identifier = (self.$route.path || window.location.pathname)
          this.page.url = window.location.href
        }
      })
    },
    loadJs(loadUrl,callMyFun,argObj) {
      let script = document.createElement('script'),
          head = document.getElementsByTagName('head')[0] || document.head || document.documentElement
      script.setAttribute('type', 'text/javascript')
      script.setAttribute('charset', 'UTF-8')
      script.setAttribute('src', loadUrl)
      head.appendChild(script)
      if (typeof callMyFun === 'function') {
        if(window.attchEvent) {
          script.onreadystatechange=function(){
            if(script && (script.readyState == "loaded" || script.readyState == "complete")){
              //表示加载成功
              script.onreadystatechange=null;
              callMyFun()//执行回调
            }
          }
        } else {
          script.onload = function() {
            script.onload = null
            callMyFun()
          }
        }
      }
    },
    resetChanyan(val, oldVal) {
      delete window.changyan;
      delete window.cyan;
      if (!this.$isServer) {
        this.loadJs('https://changyan.sohu.com/upload/changyan.js', function() {
          window.changyan.api.config({
            appid: 'cytgxKQeS',
            conf: 'a53ed8bf63b8b5668fadaab50fcfc7ad'
          })
        })
      }
    }
  }
}
