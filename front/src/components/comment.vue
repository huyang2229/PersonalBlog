<template>
	<div class="comment-container">
		<h1 class="comment-title">Comments</h1>
		<p class="comment-loading" v-if="isLoading">网速太慢，评论和评论框正在赶来的路上...</p>
		<div id="SOHUCS"></div> 	
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isLoading: true
			}
		},
		mounted() {
			this.resetChanyan()
		},
		methods: {
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
		      this.isLoading = true
		      if (!this.$isServer) {
		        this.loadJs('https://changyan.sohu.com/upload/changyan.js', () => {
		          window.changyan.api.config({
		            appid: 'cytgxKQeS',
		            conf: 'a53ed8bf63b8b5668fadaab50fcfc7ad'
		          })
		          this.isLoading = false
		        })
		      }
		    }
		}
		
	}
</script>

<style>
	.comment-container {
		margin-top: 20px;
	}
	.comment-title {
		font-size: 25px;
	}
	.comment-loading {
		margin-top: 15px;
	}
	#SOHU_MAIN {
	  font-family: consolas !important;
	  margin-top: 50px !important;
	}
	.task-li,
	.hots-li,
	.feedback-li,
	.set-li,
	.power-by-cy-txt,
	.btn-bean-outer,
	.cy-user-sex,
	.msg-wrap-gw>div>.user-address-gw,
	.module-cmt-notice [node-type="notice-support"],
	.module-cmt-notice [node-type="notice-hots"],
	.module-cmt-notice [node-type="notice-task"],
	.module-cmt-notice [node-type="notice-history"],
	.module-hot-topic,
	.block-title-gw,
	.nt-logo,
	.section-service-w,
	.service-wrap-w,
	.cmt-list-type,
	.post-wrap-border-l,
	.post-wrap-border-r,
	.post-wrap-border-t,
	.user-wrap-w,
	.module-person-page-prompt,
	.module-prop-prompt,
	.cy-comment-has-apply-tip,
	[node-type="cy-sohu-feed"] {
	  display: none !important;
	  visible: hidden !important;
	  opacity: 0 !important;
	}
	#SOHUCS #SOHU_MAIN .module-cmt-box .post-wrap-w .post-wrap-main {
		background-image: none!important;
		border: 1px solid #eee!important;
	}
	.block-head-w {
		height: 0!important;
		z-index: 0!important;
	}
	.head-img-w {
		width: 100%!important;
		top: -60px!important;
		left: -10px!important;
		display: block!important;
	}
	.header-login {
		top: -58px!important;
		left: 35px!important;
		color: #666!important;
		border:none!important;
		z-index: 999!important;
	}
	.section-cbox-w {
		border: 1px solid #ddd!important;
		margin-top: 20px!important;
		border-radius: 4px!important;
		padding: 10px!important;
	}
	.issue-btn-w .btn-fw {
		background: #33b6e8!important;
		border-radius: 2px!important;
		font-size: 16px!important;
		letter-spacing: 4px!important;
		color: #fff!important;
		transition: all 0.2s;
	}
	.issue-btn-w .btn-fw:after {
		content: '发布'!important;
	}
	#SOHUCS #SOHU_MAIN .module-cmt-list .block-cont-gw {
		border-bottom: 1px solid #e5e5e5!important;
	}
</style>