<template>
  <div class="dramastatus-swiper-contain">
    <ul class="dramastatus-swiper-body" style="margin-left: 0%;" ref="imageSwiperItems">
      <li v-for="n in 4" :key="n">
        <img
          src="../../assets/images/swiper-right-fiv.jpg"
          width="260px"
          height="268px"
          v-if="n==1"
        />
        <img
          src="../../assets/images/swiper-right-for.png"
          width="260px"
          height="268px"
          v-if="n==2"
        />
        <img
          src="../../assets/images/swiper-right-thr.jpg"
          width="260px"
          height="268px"
          v-if="n==3"
        />
        <img
          src="../../assets/images/swiper-right-two.jpg"
          width="260px"
          height="268px"
          v-if="n==4"
        />
        <p>mihaooao我是谁</p>
      </li>
    </ul>
    <div class="dramastatus-swiper-tag">
      <span v-for="n in 4" :key="n" :class="{'on': numCount == n}" @mouseenter="hoverChangeImg(n)"></span>
    </div>
  </div>
</template>
<script>
import { setInterval, clearInterval } from 'timers';
export default {
  name: 'DramaStatusSwiper',
  data () {
    return {
      numCount: 1,
      timerCount: null
    };
  },
  computed: {},
  methods: {
    changeImg (n) {
      let percentNum =
        this.$refs['imageSwiperItems'] &&
        this.$refs['imageSwiperItems'].style['marginLeft'].split('%')[0];
      if (!n) {
        if (percentNum == -300) {
          this.$refs['imageSwiperItems'].style['marginLeft'] = 0 + '%';
          this.numCount = 1;
        } else {
          percentNum -= 100;
          this.$refs['imageSwiperItems'].style['marginLeft'] = percentNum + '%';
          this.numCount++;
        }
      } else {
        this.$refs['imageSwiperItems'].style['marginLeft'] =
          '-' + (n - 1) + '00%';
        this.numCount = n;
      }
    },
    hoverChangeImg (n) {
      this.timerCount && clearInterval(this.timerCount);
      this.timerCount = null;
      this.changeImg(n);
      this.timerCount = this.timer();
    },
    timer () {
      if (!this.timerCount) {
        this.timerCount = setInterval(() => {
          this.$nextTick(() => {
            this.changeImg();
          });
        }, 4000);
      }
    }
  },
  components: {},
  beforeCreate () {},
  beforeMount () {
    this.timer();
  },
  mounted () {},
  beforeDestroy () {
    this.timerCount && clearInterval(this.timerCount);
  }
};
</script>
<style lang="stylus" scoped>
.dramastatus-swiper-contain {
  position: relative;
  display: inline-block;
  width: 260px;
  height: 268px;
  overflow: hidden;

  .dramastatus-swiper-body {
    width: 1080px;
    height: 268px;
    display: inline-block;

    li {
      position: relative;
      display: inline-block;
      float: left;
      width: 260px;
      height: 268px;

      p {
        position: absolute;
        bottom: 4px;
        left: 4px;
        color: #fff;
      }
    }
  }

  .dramastatus-swiper-tag {
    position: absolute;
    display: inline-block;
    bottom: 4px;
    right: 4px;

    span {
      display: inline-block;
      width: 9px;
      height: 6px;
      border-radius: 3px;
      background: #fff;
      margin-right: 8px;
      transition: all 0.3s;

      &.on {
        width: 30px;
        background: #f45d8f;
      }
    }
  }
}
</style>
