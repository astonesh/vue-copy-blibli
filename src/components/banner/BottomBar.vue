<template>
  <div class="bottom-bar-contain">
    <div class="bottom-bar-content">
      <div class="fir-bottom">
        <img src="../../assets/images/bottom-bar.png" height="32px" width="32px" />
      </div>
      <div class="sec-bottom">哔哩哔哩，发弹幕看视频必备App</div>
      <div class="thr-bottom">下载</div>
      <i v-on:click="hideBottomBar()"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BottomBar',
  data () {
    return {};
  },
  methods: {
    hideBottomBar () {
      this.$emit('hideBottom');
    }
  }
};
</script>
<style scoped>
.bottom-bar-contain {
  position: relative;
  width: 100%;
  height: 56px;
}
.bottom-bar-content {
  position: relative;
  padding-left: 400px;
  padding-top: 12px;
  width: 980px;
  margin: 0 auto;
  height: 56px;
  display: flex;
  flex-direction: row;
}
.bottom-bar-contain .fir-bottom {
  width: 32px;
  height: 32px;
}
.bottom-bar-contain .sec-bottom {
  height: 32px;
  padding: 0 10px;
  line-height: 32px;
}
.bottom-bar-contain .thr-bottom {
  position: relative;
  top: 3px;
  width: 58px;
  height: 24px;
  line-height: 24px;
  font-size: 12px;
  height: 24px;
  border: 1px solid #fb7299;
  border-radius: 4px;
  color: #fb7299;
}
.bottom-bar-contain i {
  position: relative;
  left: 200px;
  top: 10px;
  cursor: pointer;
  display: inline-block;
  width: 12px;
  height: 12px;
  background: url("../../assets/images/live-eye.png");
}
</style>
