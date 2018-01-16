<template>
	<div>
		<div class="reward">
			<div class="reward-tip">
				看看能不能赚点零花钱花。您的支持将成为本人继续创作的源泉！
			</div>
			<div class="reward-btn" @click="showQRCode" >
				打赏支持
			</div>
			<!-- <div class="reward-wrap">
				<div class="reward-btn-close">+</div>
				<div class="wechat reward-code">
					<img src="https://owyxyx729.bkt.clouddn.com/zhifubaoQR.png" alt="支付宝支付">
				</div>
				<div class="zhifubao">
					<img src="https://owyxyx729.bkt.clouddn.com/ZhifubaoQRCode.png" alt="支付宝支付">
				</div>
			</div> -->
		</div>
		<transition name="fade" v-if="isShow">
			<div class="reward-phone">
				<div class="wechat reward-code">
					<img src="../assets/img/wechatQRCode.png" alt="微信支付" @click="zoomIn(wechatQRCode)">
				</div>
				<div class="zhifubao reward-code">
					<img src="../assets/img/zhifubaoQR.png" alt="支付宝支付" @click="zoomIn(zhifubaoQRCode)">
				</div>
			</div>
		</transition>
		
	</div>
</template>

<script>
	export default {
		data () {
			return {
				isShow: false
			}
		},
		methods: {
			showQRCode() {
				if (this.isShow === true) {
					this.isShow = false
				} else {
					this.isShow = true
				}
			},
			zoomIn(src) {
				const obj = {isShow:true, imgSrc: src}
				this.$store.commit('OPEN_MASK_LAYER', {obj})
			}
		}
	}
</script>

<style>
	.reward {
		width: 100%;
		/*height: 100px;*/
		border-left: 5px solid #ff7300;
		background: #eee;
		color: #5e5e5e;
		margin-top: 20px;
		padding-bottom: 10px;
	}
	.reward-tip {
		font-size: 14px;
		padding: 10px 20px;
		/*height: 42px;*/
		/*text-indent: 20px;*/
		/*line-height: 42px;*/
	}
	.reward-btn {
		width: 100px;
		line-height: 40px;
		text-align: center;
		background: #ff7300;
		color: #fff;
		margin-left: 20px;
		font-size: 14px;
		font-weight: 600;
		cursor: pointer;
		border-radius: 6px;
	}
	.reward-wrap {
		/*display: none;*/
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 548px;
		height: 548px;
		background: #fff;
		box-shadow: 0 0 0 2000px rgba(0,0,0,.5);
		border-radius: 10px;
	}
	.reward-phone img, .reward-wrap img {
		margin: 0;
		cursor: zoom-in;
		cursor: -webkit-zoom-in;
	}
	.reward-code {
		width: 200px;
		height: 200px;
		margin: 22px auto 0;
		padding: 17.5px;
		position: relative;
		box-sizing: border-box;
		border: 5px solid #ff7300;
		border-radius: 10px;
	}
	.reward-code:after {
		position: absolute;
		color: #666;
		background: #fff;
		padding: 0 10px;
		margin: 0 auto;
		font-size: 16px;
		text-align: center;
		left: 40px;
		bottom: -14px;
	}
	.wechat:after {
		content: "微信，扫一扫";
	}
	.zhifubao:after {
		content: "支付宝，扫一扫";
		left: 30px;
	}
	.reward-btn-close {
		width: 11px;
		height: 11px;
		position: absolute;
		top: 17px;
		right: 14px;
		cursor: pointer;
		font-size: 30px;
		transform: rotate(45deg);
	}
	.reward-btn-close:hover {
		transition: all .2s;
		color: #bbb;
	}
</style>