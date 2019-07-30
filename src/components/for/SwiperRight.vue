<template>
  <div
    class="right-contain"
    @mouseenter="toggle ($event, true)"
    @mouseleave="toggle ($event, false)"
  >
    <div class="right-contain-content">
      <ul class="right-content-items">
        <li>
          <div>
            <img v-lazy="dataSrcItem" width="160px" height="100px" />
            <p>da</p>
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
    <div
      class="tag-left tag"
      v-show="isShowTag"
      ref="leftTag"
      @click="changeTag(true)"
    ><< {{tagArr[(index+1)%3]}}</div>
    <div
      class="tag-right tag"
      v-show="isShowTag"
      ref="rightTag"
      @click="changeTag(false)"
    >{{tagArr[index]}} >></div>
  </div>
</template>
<script>
export default {
  name: 'SwiperRight',
  data () {
    return {
      tagArr: ['昨日', '三日', '一周'],
      index: 0,
      dataSrc: [
        require('../../assets/images/swiper-right-one.jpg'),
        require('../../assets/images/swiper-right-two.jpg'),
        require('../../assets/images/swiper-right-thr.jpg')
      ],
      isShowTag: false,
      miniusTimes: false,
      addTimes: false,
      dataSrcItem: null
    };
  },
  methods: {
    getMockData () {
      this.$http.mock(this.globalData.swiperData).then(data => {
        // this.dataSrc = data[this.index]['src'];
      });
    },
    async getData () {
      this.dataSrc = await this.getMockData();
      console.log(this.dataSrc);
    },
    toggle ($event, isShow) {
      this.isShowTag = isShow;
    },
    changeTag (isUp) {
      if (isUp) {
        this.index++;
      } else {
        this.index--;
      }
      this.index === 3
        ? (this.index = 0)
        : this.index === -1
          ? (this.index = 2)
          : '';
      this.dataSrcItem = this.dataSrc[this.index];
    }
  },
  beforeCreate () {},
  created () {
    this.getMockData();
  },
  beforeMount () {
    // this.getData();
    this.dataSrcItem = this.dataSrc[this.index];
  },
  mounted () {}
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
