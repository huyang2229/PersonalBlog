<template>
	<transition name="fade">
		<div class="mask" @mousemove="move" @mouseup="stop" @click.self="close">
			<img :src="maskImgSrc" class="mask-img" @mousedown="start" >
		</div>	
	</transition>
</template>

<script>
	import { mapGetters } from '../store/vuex'
	export default {
		data() {
			return {
				flag: false,
				left: 0,
				top: 0,
				currentX: 0,
				currentY: 0,
				target: ''
			}	
		},
		computed: {
			...mapGetters([
				'maskImgSrc'
			])
		},
		methods: {
			getCss(o, key) {
				return o.currentStyle ? o.currentStyle[key] : window.getComputedStyle(o, false)[key]
			},
			start(event) {
				var e = event ? event : window.event
				this.flag = true
				this.currentX = e.clientX
				this.currentY = e.clientY
				this.target = e.target
				this.left = this.getCss(e.target, 'left')
				this.top = this.getCss(e.target, 'top')
			},
			move(event) {
				var e = event ? event : window.event,
					target = this.target
				if (this.flag) {
					var nowX = e.clientX,
						nowY = e.clientY,
						disX = nowX - this.currentX,
						disY = nowY - this.currentY
					target.style.left = parseInt(this.left) + disX + 'px'
					target.style.top = parseInt(this.top) + disY + 'px'
					event.preventDefault()
					return false
				}
			},
			stop(event) {
				var e = event ? event : window.event
				this.flag = false
			},
			close() {
				this.$store.commit('CLOSE_MASK_LAYER')
			}
		}
	}
</script>

<style>
	.mask {
		position: fixed;
		left: 0px;
		right: 0px;
		top: 0px;
		bottom: 0px;
		height: 100%;
		width: 100%;
		z-index: 9;
		background: rgba(0,0,0,.6);
		display: block;
	}
	.mask-img {
		cursor: move;
		position: fixed;
		width: 344px;
		height: 400px;
		z-index: 100;
		transition: none;
		left: 50%;
		top: 50%;
		transform:translate(-50%,-50%);
	}
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
	  opacity: 0
	}
</style>