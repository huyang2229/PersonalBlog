<template>
	<header id="top">
		<div id="header-main" class="header-inner">
			<div class="outer clearfix">
				<a href="#" id="logo">
					<i class="logo"></i>
					<span class="site-title">HY's Blog</span>
				</a>
				<nav id="main-nav">
                    <router-link class="main-nav-link" to="/">Home</router-link>
                
                    <router-link class="main-nav-link" to="/archive">Archives</router-link>
                
                    <router-link class="main-nav-link" to="/tag">Tags</router-link>
                
                    <router-link class="main-nav-link" to="/about">About</router-link>
	            </nav>
                <div id="search-form-wrap">
				    <form class="search-form">
				        <input type="text" class="ins-search-input search-form-input" placeholder="Search">
				        <button type="submit" class="search-form-submit icon-search iconfont"></button>
				    </form>
				</div>
			</div>
		</div>
	</header>
</template>
