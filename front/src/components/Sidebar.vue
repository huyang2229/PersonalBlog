<template>
  <div>
    <widget></widget>
    <nav id=sidebar class=behavior_1 
          :class="{'sidebar-image': sidebarUrl !== ''}"
          :style="imageStyle">
        <widget style="display:block;"></widget>
        <nav id="sidebar-nav">
          <a class="main-nav-link" href="javascript:;"  @click.prevent="closeAndGo('/')" >Home</a>
          <a class="main-nav-link" href="javascript:;"  @click.prevent="closeAndGo('/archive')">Archives</a>        
          <a class="main-nav-link" href="javascript:;"  @click.prevent="closeAndGo('/tag')">Tags</a>
          <a class="main-nav-link" href="javascript:;"  @click.prevent="closeAndGo('/search')">Search</a>
          <a class="main-nav-link" href="javascript:;"  @click.prevent="closeAndGo('/about')">About</a>
        </nav>
        <div style="text-align: center;width: 100%;">
          <img src="../assets/img/logo.svg" style="">  
        </div>
    </nav>
  </div>
  
</template>

<script>
import mixin from '../mixin/image'
import widget from './widget.vue'
// import IScroll from 'iscroll/build/iscroll-lite'

function fetchInfo(store, { path, params, query }) {
  return Promise.all([store.dispatch('FETCH_OPTIONS'), store.dispatch('FETCH_FIREKYLIN')])
}

export default {
  metaInfo() {
    const {
      title: { value: title },
      description: { value: description },
      keywords: { value: keywords },
      logoUrl: { value: logoUrl },
      faviconUrl: { value: favicon }
    } = this.siteInfo
    return {
      title,
      titleTemplate: `%s - ${title}`,
      meta: [
        { name: 'charset', content: 'UTF-8' },
        { name: 'description', content: description },
        { name: 'keywords', content: keywords },
        { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' }
      ],
      link: [
        { rel: 'icon', href: favicon },
        { rel: 'apple-touch-icon', href: logoUrl },
        { rel: 'alternate', type: 'application/rss+xml', title: 'RSS 2.0', href: '/rss.xml' }
      ]
    }
  },
  mixins: [mixin],
  preFetch: fetchInfo,
  computed: {
    buttonColor() {
      return { 'color': this.sidebarUrl ? this.option.sidebarFontColor : '' }
    },
    imageStyle() {
      const sidebarUrl = this.sidebarUrl
      const sidebarMoveCss = sidebarUrl ? this.option.sidebarMoveCss : ''
      const result = {
        'transition': sidebarMoveCss,
        'background': '#fff'
      }
      return result
    }
  },
  mounted() {
    console.log(this.siteInfo)
  },
  components: {
    widget
  },
  methods: {
    closeAndGo(url) {
      document.body.className = document.body.className.replace('side', '')
      this.$router.push(url)
    }
  }
}
</script>
 
<style>
@import '../assets/css/icon.css';
@import '../assets/css/article.css';
@import '../assets/css/base.css';
@import '../assets/css/footer.css';
@import '../assets/css/header.css';
@import '../assets/css/highlight.css';
@import '../assets/css/pagination.css';
@import '../assets/css/sidebar.css';
@import '../assets/css/responsive.css';
@import '../assets/css/widget.css';
@import '../assets/css/top.css';
@import '../assets/css/search.css';

.sidebar-image {
  background-position: left center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;
}

.sidebar-image:hover {
  background-position: right center;
}

#sidebar-nav {
  margin-top: 20px;
}

#sidebar-nav a {
  display: block;
  width: 100%;
  line-height: 40px;
  color: #000;
  text-align: center;
}
</style>