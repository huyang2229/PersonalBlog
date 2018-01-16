<template>
	<div id="main">
		<h1 class="search-title">站内搜索</h1>
		<div class="entry-content"> 
			<div id="search"> 
				<input maxlength="80" placeholder="请输入关键字..." id="keyword" name="key" type="text" required v-model="key" @keyup.enter="search"> 
				<input class="submit" type="submit" value="搜索" @click="search"> 	
			</div>  
			<div id="searchResult">  
				<div class="no-search-result" v-if="!hits.length && !firstSearch">
					没有找到任何相关结果，请更换关键词试试
				</div>
				<div class="info" v-else>
					<span v-if="time">本次搜索共找到结果{{total}}条, 用时{{time}}ms</span>
					<span v-else>欢迎使用本博客站内搜索系统</span>
				</div>    
				<div class="item" v-for="item in hits" href="#">
					<div class="title">
						<router-link :to="{ name:'post', params:{ pathName: item._source.pathName } }" v-html="item.highlight.title && item.highlight.title[0] || item._source.title"></router-link>
					</div>
					<div class="desc">
						<div class="summary">
							<span class="date">{{item._source.updateTime}}</span>
							<template v-if="item.highlight.content">
								<span v-html="highlightItem" v-for="highlightItem in item.highlight.content" ></span>
							</template>
							<span v-html="item._source.content" v-else></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				total: '',
				time: '',
				hits: '',
				key: '',
				firstSearch: true
			}
		},
		methods: {
			search (event) {
				let searchResult = this.$store.dispatch('FETCH_SEARCH_RESULT', this.key)
				searchResult.then((result) => {
					this.time = result.result.took
					this.total = result.result.hits.total
					this.hits = result.result.hits.hits
				})
				this.firstSearch = false
			}
		}
	}
</script>
