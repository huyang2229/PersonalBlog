<template>
  <div id="app">
    <loading-bar :progress="progress"></loading-bar>
    <Top></Top>
    <div class="content clearfix">
      <sidebar></sidebar>
      <!-- <widget></widget> -->
      <router-view class="main-content"></router-view>
    </div>
    <my-header></my-header>
    <mask-layer v-if="maskLayer"></mask-layer>
    <!-- <footer></footer> -->
  </div>
</template>

<script>
import { mapGetters } from '../store/vuex'
import Sidebar from './Sidebar'
import LoadingBar from './Loading'
import MyHeader from './Header'
import myFooter from './Footer'
import Top from './Top'
import widget from './widget'
import maskLayer from './Mask'

export default {
  components: {
    LoadingBar,
    Sidebar,
    MyHeader,
    Top,
    widget,
    maskLayer,
    myFooter
  },
  computed: {
    ...mapGetters([
      'progress',
      'maskLayer'
    ])
  }
}
</script>

<style scoped>
  .content {
    max-width: 1320px;
    margin: 0 auto;
    padding:40px 35px;
  }
  .main-content {
    /*max-width: 1050px;*/
    /*float: right;*/
    margin-left: 270px;
  }
</style>