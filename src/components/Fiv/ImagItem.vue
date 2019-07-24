<template>
  <div class="image-item">
    <div><img src='../../assets/images/swiper-right-fiv.jpg' width='160px' height='100px'></div>
    <p>aanakalakjfalfakflakflakf</p>
  </div>
</template>
<script>
export default {
  name: 'ImageItem',
  data () {
    return {};
  },
  props:[item]
};
</script>
<style lang="stylus" scoped>
.swiper-contain {
  width: 100%;
  height: 100%;
  p {
      padding-top: 8px;
        height: 40px;
        line-height: 20px;
        transition: all .2s linear;
        color: #222;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
        text-align: left;
  }

}
</style>
