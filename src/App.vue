<template>
  <div id="app">
    <div class="top-bar_position">
      <topBar></topBar>
    </div>
    <div class="content-body">
      <search-contain></search-contain>
      <sub-title></sub-title>
      <!-- <div><router-view /></div> -->
    </div>
    <common></common>
    <div class="swiper-body">
      <swiper-contain></swiper-contain>
    </div>
  </div>
</template>

<script>
import TopBar from './components/banner/TopBar';
import SearchContain from './components/searchContain/SearchContain';
import SubTitle from './components/SubTitle/SubTitle';
import Common from './components/common/Common';
import SwiperContain from './components/for/SwiperContain';

export default {
  name: 'App',
  components: {
    TopBar,
    SearchContain,
    SubTitle,
    Common,
    SwiperContain
  },
  methods: {
    testMe () {
      console.log('111');
    }
  }
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  text-align: center;
  color: #2c3e50;
}
.content-body {
  width: 100%;
  margin: auto;
  z-index: 98;
}
.top-bar_position {
  width: 100%;
  position: absolute;
  z-index: 99999;
}
.swiper-body {
  padding-top: 70px;
  width: 980px;
  display: inline-block;
  margin: 0 auto;
  overflow: hidden;
  z-index: 90;
}
</style>
