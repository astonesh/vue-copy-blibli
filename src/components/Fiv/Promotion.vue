<template>
  <div class="promotion-contain">
    <div class="promotion-left">
      <div class="promotion-left-top">
          <div class="promotion-left-top_logo"></div>
          <div>推广</div>
          <a>万份小龙虾任性送！</a>
          <a>莽吧！变形兄弟</a>
      </div>
      <div class="promotion-left-content">
          
      </div>
    </div>
    <div class="promotion-right">
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
  height: 228px;
  display: flex;
  justify-content: space-between;

  .promotion-left {
    width: 760px;
    height: 100%;
    .promotion-left-top {
        width: 100%;
        height: 45px;
        display flex
        .promotion-left-top_logo {
            width: 40px;
            height 40px
            background: url(../../assets/images/icons.png) -141px -75px no-repeat;
        }
    }
  }

  .swiper-right {
    width: 540px;
    height: 100%;
  }
}
</style>
