<template>
  <div
    class="right-contain"
    @mouseenter="toggle ($event, true)"
    @mouseleave="toggle ($event, false)"
  >
    <div class="right-contain-content">
      <ul class="right-content-items">
        <li>
          <div @mouseenter="toggleMask(0)" @mouseleave="toggleMask(0)">
            <img v-lazy="dataSrcItem" width="160px" height="100px" />
            <p v-show="!isShowMask[0]">da</p>
            <div class="mask-div" v-show="isShowMask[0]">
              <my-mask :item="maskItem"></my-mask>
            </div>
          </div>
        </li>
        <li>
          <div @mouseenter="toggleMask(1)" @mouseleave="toggleMask(1)">
            <img src="../../assets/images/swiper-right-one.jpg" width="160px" height="100px" />
            <p v-show="!isShowMask[1]">addgadagadddddddddddddddddd</p>
            <div class="mask-div" v-show="isShowMask[1]">
              <my-mask :item="maskItem"></my-mask>
            </div>
          </div>
        </li>
        <li>
          <div @mouseenter="toggleMask(2)" @mouseleave="toggleMask(2)">
            <img src="../../assets/images/swiper-right-one.jpg" width="160px" height="100px" />
            <p v-show="!isShowMask[2]">addgadagadddddddddddddddddd</p>
            <div class="mask-div" v-show="isShowMask[2]">
              <my-mask :item="maskItem"></my-mask>
            </div>
          </div>
        </li>
        <li>
          <div @mouseenter="toggleMask(3)" @mouseleave="toggleMask(3)">
            <img src="../../assets/images/swiper-right-one.jpg" width="160px" height="100px" />
            <p v-show="!isShowMask[3]">addgadagadddddddddddddddddd</p>
            <div class="mask-div" v-show="isShowMask[3]">
              <my-mask :item="maskItem"></my-mask>
            </div>
          </div>
        </li>
        <li>
          <div @mouseenter="toggleMask(4)" @mouseleave="toggleMask(4)">
            <img src="../../assets/images/swiper-right-one.jpg" width="160px" height="100px" />
            <p v-show="!isShowMask[4]">addgadagadddddddddddddddddd</p>
            <div class="mask-div" v-show="isShowMask[4]">
              <my-mask :item="maskItem"></my-mask>
            </div>
          </div>
        </li>
        <li>
          <div @mouseenter="toggleMask(5)" @mouseleave="toggleMask(5)">
            <img src="../../assets/images/swiper-right-one.jpg" width="160px" height="100px" />
            <p v-show="!isShowMask[5]">addgadagadddddddddddddddddd</p>
            <div class="mask-div" v-show="isShowMask[5]">
              <my-mask :item="maskItem"></my-mask>
            </div>
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
      isShowMask: [false, false, false, false, false, false],
      isShowTag: false,
      miniusTimes: false,
      addTimes: false,
      dataSrcItem: null,
      maskItem: {
        title: 'nihaooaoalaklajk',
        subTitleOne: 'Up主： xxx小行星',
        subTitleTwo: 'Up主： xxx小行星11111'
      }
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
    toggleMask (index) {
      this.isShowMask.splice(index, 1, !this.isShowMask[index]);
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

          .mask-div {
            position: absolute;
            width: 160px;
            height: 100px;
            top: 0;
            left: 0;
          }
        }
      }
    }
  }
}
</style>
