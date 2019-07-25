<template>
  <div class="right-contain">
    <div class="right-contain-content">
      <ul class="right-content-items">
        <li>
          <div>
            <img src="../../assets/images/swiper-right-one.jpg" width="160px" height="100px" />
            <p>addgadagadddddddddddddddddd</p>
          </div>
        </li>
        <li>
          <div>
            <img src="../../assets/images/swiper-right-one.jpg" width="160px" height="100px" />
            <p>addgadagadddddddddddddddddd</p>
          </div>
        </li>
        <li>
          <div>
            <img src="../../assets/images/swiper-right-one.jpg" width="160px" height="100px" />
            <p>addgadagadddddddddddddddddd</p>
          </div>
        </li>
        <li>
          <div>
            <img src="../../assets/images/swiper-right-one.jpg" width="160px" height="100px" />
            <p>addgadagadddddddddddddddddd</p>
          </div>
        </li>
        <li>
          <div>
            <img src="../../assets/images/swiper-right-one.jpg" width="160px" height="100px" />
            <p>addgadagadddddddddddddddddd</p>
          </div>
        </li>
        <li>
          <div>
            <img src="../../assets/images/swiper-right-one.jpg" width="160px" height="100px" />
            <p>addgadagadddddddddddddddddd</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="tag-left tag" v-show="miniusTimes"><< 昨日</div>
    <div class="tag-right tag" v-show="addTimes">一周 >></div>
  </div>
</template>
<script>
export default {
  name: 'SwiperRight',
  data () {
    return {
      data: null,
      miniusTimes: false,
      addTimes: false
    };
  },
  methods: {
    getMockData () {
      // return this.$http.mock(this.globalData.swiperData);
    }
  },
  beforeMount () {
    this.getMockData();
  },
  created () {},
  mounted () {
    console.log(this.data);
  }
};
</script>
<style lang="stylus" scoped>
.right-contain {
  width: 100%;
  height: 100%;
  padding-left: 12px;
  position: relative;

  .tag {
    display: inline-block;
    position: absolute;
    padding: 6px 10px;
    background: rgba(0, 0, 0, 0.4);
    color: #fff;
    font-size: 16px;
    border-radius: 8px;

    &.tag-left {
      left: 6px;
      top: 90px;
    }

    &.tag-right {
      right: 12px;
      top: 90px;
    }
  }

  .right-contain-content {
    width: 100%;
    height: 100%;

    .right-content-items {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: flex-start;
      flex-wrap: wrap;

      li {
        width: 160px;
        height: 100px;
        margin-right: 20px;

        div {
          position: relative;

          p {
            position: absolute;
            width: 140px;
            bottom: 4px;
            left: 10px;
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
  }
}
</style>
