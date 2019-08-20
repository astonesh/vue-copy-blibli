<template>
  <div id="app">
    <div class="top-bar_position">
      <topBar></topBar>
    </div>
    <div class="main-content">
      <router-view></router-view>
    </div>
    <div class="bottom-bar_position" v-show="isShowBottom">
      <bottom-bar v-on:hideBottom="hideBottom"></bottom-bar>
    </div>
  </div>
</template>

<script>
import TopBar from './components/banner/TopBar';
import BottomBar from './components/banner/BottomBar';

export default {
  name: 'app',
  data () {
    return {
      isShowBottom: true
    };
  },
  components: {
    TopBar,
    BottomBar
  },
  methods: {
    testMe () {
      // console.log('111');
    },
    hideBottom (data) {
      this.isShowBottom = false;
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
  padding-bottom: 56px;
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
.bottom-bar_position {
  width: 100%;
  position: fixed;
  background: #fff;
  bottom: 0;
  font-size: 14px;
}
</style>
