<template>
  <div class="swiper-contain">
    <div class="swiper-left">
      <swiper-left></swiper-left>
    </div>
    <div class="swiper-right">
      <swiper-right></swiper-right>
    </div>
  </div>
</template>
<script>
import SwiperLeft from './SwiperLeft';
import SwiperRight from './SwiperRight';
export default {
  name: 'SwiperContain',
  data () {
    return {};
  },
  components: {
    SwiperLeft,
    SwiperRight
  }
};
</script>
<style lang="stylus" scoped>
.swiper-contain {
  width: 100%;
  height: 220px;
  display: flex;
  justify-content: space-between;

  .swiper-left {
    width: 400px;
    height: 100%;
  }

  .swiper-right {
    width: 540px;
    height: 100%;
  }
}
</style>
