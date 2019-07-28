<template>
  <div class="left-contain">
    <div
      class="left-contain-content"
      v-on:mouseenter="toggle(true)"
      v-on:mouseleave="toggle(false)"
    >
      <ul class="left-content-items" style="margin-left: 0%;" ref="imageItems">
        <li>
          <img src="../../assets/images/swiper-left-one.png" width="400px" height="220px" />
          <p>1111nihaonaalall</p>
        </li>
        <li>
          <img src="../../assets/images/swiper-left-two.jpg" width="400px" height="220px" />
          <p>1111nihaonaalall</p>
        </li>
        <li>
          <img src="../../assets/images/swiper-left-thr.jpg" width="400px" height="220px" />
          <p>1111nihaonaalall</p>
        </li>
        <li>
          <img src="../../assets/images/swiper-left-for.jpg" width="400px" height="220px" />
          <p>1111nihaonaalall</p>
        </li>
        <li>
          <img src="../../assets/images/swiper-left-fiv.jpg" width="400px" height="220px" />
          <p>1111nihaonaalall</p>
        </li>
      </ul>
    </div>
    <ul class="left-contain-num">
      <li v-for="n in 5" :key="n">
        <i :class="{'on': n == numCount}" v-on:click="changeTag(n)"></i>
      </li>
    </ul>
    <p class="left-contain-more" v-show="isShowMore" v-on:mouseenter="toggleA()">
      <a>更多 ></a>
    </p>
  </div>
</template>
<script>
export default {
  name: 'SwiperLeft',
  data () {
    return {
      isShowMore: false,
      timeCount: 0,
      numCount: 1,
      timer: null
    };
  },
  components: {},
  methods: {
    toggle (tag) {
      this.isShowMore = tag;
    },
    toggleA () {
      this.isShowMore = true;
    },
    changeImag (num) {
      let percentNum = this.$refs['imageItems'] && this.$refs['imageItems'].style['marginLeft'].split(
        '%'
      )[0];
      if (!num) {
        if (percentNum == -400) {
          this.$refs['imageItems'].style['marginLeft'] = 0 + '%';
          this.numCount = 1;
        } else {
          percentNum -= 100;
          this.$refs['imageItems'].style['marginLeft'] = percentNum + '%';
          this.numCount++;
        }
      } else {
        this.$refs['imageItems'].style['marginLeft'] = '-' + (num - 1) + '00%';
        this.numCount = num;
      }
    },
    changeTag (n) {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
      this.changeImag(n);
      this.intervalChangeImag();
    },
    intervalChangeImag () {
      if (!this.timer) {
        this.timer = setInterval(() => {
          this.$nextTick(() => {
            this.changeImag();
          }) 
        }, 4000);
      }
    }
  },
  beforeMount () {
    this.intervalChangeImag();
  }
};
</script>
<style lang="stylus" scoped>
.left-contain {
  width: 100%;
  position: relative;

  .left-contain-num {
    position: absolute;
    right: 10px;
    bottom: 12px;
    width: 130px;
    height: 21px;
    display: flex;
    background: transparent;

    li {
      width: 18px;
      height: 18px;
      margin-right: 9px;

      i {
        display: inline-block;
        width: 18px;
        height: 18px;
        background: url('../../assets/images/icons.png') -855px -790px no-repeat;

        &.on, &.on:hover {
          background: url('../../assets/images/icons.png') -855px -727px no-repeat;
        }

        &:hover {
          background: url('../../assets/images/icons.png') -919px -790px no-repeat;
        }
      }
    }
  }

  .left-contain-more {
    position: absolute;
    display: inline-block;
    padding: 1px 8px;
    right: 10px;
    bottom: 38px;
    background: rgb(0, 0, 0, 0.5);
    font-size: 14px;
    line-height: 28px;
    border-radius: 4px;

    a {
      color: #fff;
    }
  }

  .left-contain-content {
    width: 400px;
    height: 220px;
    overflow: hidden;
  }

  .left-content-items {
    width: 2000px;
    height: 220px;
    display: flex;
    transition: margin-left 0.4s;

    li {
      width: 400px;
      height: 220px;
      position: relative;

      p {
        position: absolute;
        display: inlinn-block;
        width: 280px;
        height: 28px;
        left: 0;
        bottom: 0;
        padding-left: 10px;
        font-size: 14px;
        line-height: 28px;
        color: #fff;
        text-align: left;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
