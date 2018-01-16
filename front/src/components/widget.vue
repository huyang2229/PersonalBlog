<template>
	<!-- <div class="widget about_me">
	  <h3 class="title">ABOUT ME</h3>
	  <ul class="entry">
	    <li><a href="http://jimliu.net/uploads/2012/03/Pig.180x180-150x150.jpg" title="" class="fancybox" rel="gallery1"><img width="150" title="avatar" src="../assets/img/logo.jpeg"></a></li>
	    <li><a href="/about">胡洋</a></li>
	    
	    <li>微博：<a href="http://weibo.com/jimnox" target="_BLANK">@胡洋-JimLiu</a></li>
	    
	    <li>github：<a href="http://www.zhihu.com/people/jimnox" target="_BLANK">@Jim Liu</a></li>
	    
	  </ul>
	</div> -->
	
	<aside id="profile">
		<div class="inner profile-inner">
			<div class="base-info profile-block">
				<img src="../assets/img/my.png" alt="avatar" id="avatar">
				<h2 id="name" class="alignCenter">Hu Yang</h2>
				<h3 id="title" class="alignCenter">Web Developer & Designer</h3>
				<span id="location" class="alignCenter">
					<i class="iconfont icon-home"></i>
					Shenzhen, China
				</span>
				<router-link id="follow" to="/search">SEARCH</router-link>
			</div>
			<div class="article-info profile-block clearfix">
				<div class="article-info-block">
					{{articlesCount}}
					<span>posts</span>
				</div>
				<div class="article-info-block">
					{{tagsCount}}
					<span>tags</span>
				</div>
			</div>
			<div class="profile-block social-links">
				<table>
					<tbody>
						<tr>
							<td>
								<a href="https://github.com/huyang2229" target="_blank" title="" class="tooltip">
									<i class="iconfont icon-github-v"></i>
								</a>
							</td>
							<td>
								<a href="https://www.facebook.com/profile.php?id=100015668948989&ref=bookmarks" target="_blank" title="" class="tooltip">
									<i class="iconfont icon-facebook"></i>
								</a>
							</td>
							<td>
								<a href="https://twitter.com/huyang2229" target="_blank" title="" class="tooltip">
									<i class="iconfont icon-twitter-v"></i>
								</a>
							</td>
							<td>
								<a href="https://weibo.cn/p/1005052137985884" target="_blank" title="" class="tooltip">
									<i class="iconfont icon-weibo"></i>
								</a>
							</td>
							<td>
								<a href="/rss.xml" target="_blank" title="" class="tooltip">
									<i class="iconfont icon-rss-v"></i>
								</a>
							</td>
						</tr>	
					</tbody>
					
				</table>
			</div>
		</div>
	</aside>
</template>

<script>
import {mapGetters} from '../store/vuex'
function fetchCount(store, { path: pathName, params, query }, callback) {
  return store.dispatch('FETCH_ARTICLES_COUNT', {
    model: 'post',
    query: {
      conditions: {
        type: 'post',
        isPublic: true
      },
      select: {
        _id: 0,
        tags: 1
      }
    },
    callback
  })
}
export default {
	computed: {
		...mapGetters([
			'articlesCount',
			'tagsCount'
		])
	},
	beforeMount() {
	    // console.log(this.$route)
	    // this.isLoadingAsyncComponent && this.$root._isMounted && fetchTags(this.$store, this.$route)
	    fetchCount(this.$store, this.$route)
	}
}
</script>

<style>
	#profile {
		width: 250px;
		float: left;
	}
	#profile .inner {
		background: #fff;
		box-shadow: 0 1px 2px rgba(0,0,0,0.05);
	}
	.profile-block {
		padding: 15px 20px;
		border-bottom: 1px solid #ecefe2;
	}
	#profile .inner .base-info #avatar {
		display: block;
		margin: 10px  auto 20px;
		width: 128px;
		height: 128px;
		border-radius: 128px;
	}
	#profile .inner .base-info #name {
		font-size: 20px;
		font-weight: 600;
	}
	#profile .inner .base-info #title {
		font-size: 14px;
		font-weight: 400;
	}
	#profile .inner .base-info #location {
		font-size: 12px;
		margin-top: 5px;
		color: #9a9ea3;
	}
	#profile .inner .base-info #follow {
		color: #fff!important;
		width: 150px;
		height: 40px;
	    display: block;
	    font-size: 14px;
	    font-weight: 600;
		line-height: 40px;
		text-align: center;
		margin: 20px auto 10px;
		background: #38b7ea;
		-webkit-border-radius: 20px;
		border-radius: 20px;
		-webkit-transition: 0.2s ease;
		-moz-transition: 0.2s ease;
		-ms-transition: 0.2s ease;
		transition: 0.2s ease;
	}
	#profile .inner .base-info #follow:hover {
		background: #49c8fb;
	}
	#profile .inner .article-info {
		padding: 0px;
	}
	#profile .inner .article-info .article-info-block:first-child {
		border-right: 1px solid #eceff2;
	}
	#profile .inner .article-info .article-info-block {
	   	width: 50%;
	  	float: left;
	  	padding: 20px 15px;
	  	text-align: center;
	  	-webkit-box-sizing: border-box;
	  	-moz-box-sizing: border-box;
	  	box-sizing: border-box;
	  	font-size: 20px;
	}
	#profile .inner .article-info .article-info-block span {
		display: block;
		font-size: 14px;
		text-transform: uppercase;
	}
	.profile-block:last-child {
		border-bottom: none;
	}
	#profile .inner .social-links > table {
		width: 100%;
	}
	#profile .inner .social-links > table td {
		text-align: center;
	}
	#profile .inner .social-links > table td a {
		position: relative;
		transition: 0.2s ease;
		color: #898d92;
	}
	#profile .inner .social-links > table td a:hover {
		color: #565a5f!important;
	}
	#profile .inner .social-links > table td a > i {
		font-size: 24px;
	}
</style>
