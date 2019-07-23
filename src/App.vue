<template>
<div id="app">
    <div class="top-bar_position"><topBar></topBar></div>
    <div class="content-body">
      <search-contain></search-contain>
      <sub-title></sub-title>
      <!-- <div><router-view /></div> -->
    </div>
    <common></common>
    
</div>
</template>

<script>
import TopBar from './components/banner/TopBar';
import SearchContain from './components/searchContain/SearchContain';
import SubTitle from './components/SubTitle/SubTitle';
import Common from './components/common/Common';

export default {
    name: 'App',
    components: {
      TopBar,
      SearchContain,
      SubTitle,
      Common
    },
    methods: {
      testMe: function() {
        console.log('111');
      }
    }
}
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
}
.top-bar_position {
  width: 100%;
  position: absolute;
  z-index: 99;
}
</style>
