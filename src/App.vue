<template>
  <div id="app">
    <div class="top-bar_position">
      <topBar></topBar>
    </div>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TopBar from './components/banner/TopBar';

export default {
  name: 'App',
  components: {
    TopBar
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
  top: 0;
  font-size: 14px;
}
</style>
