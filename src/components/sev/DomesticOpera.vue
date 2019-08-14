<template>
  <div class="domestic-opera-contain">
    <div class="domestic-opera-contain_content">
      <div class="domestic-opera-contain_left">
        <div class="domestic-opera-contain_left-top">
          <div>
            <i></i>
            <span class="title">国创</span>
            <span :class="{'title-tab': true, 'title-tab-active': Aindex == 8}">最新</span>
            <span :class="{'title-tab': true, 'title-tab-active': Aindex == 1}">一</span>
            <span :class="{'title-tab': true, 'title-tab-active': Aindex == 2}">二</span>
            <span :class="{'title-tab': true, 'title-tab-active': Aindex == 3}">三</span>
            <span :class="{'title-tab': true, 'title-tab-active': Aindex == 4}">四</span>
            <span :class="{'title-tab': true, 'title-tab-active': Aindex == 5}">五</span>
            <span :class="{'title-tab': true, 'title-tab-active': Aindex == 6}">六</span>
            <span :class="{'title-tab': true, 'title-tab-active': Aindex == 7}">日</span>
          </div>
          <div>
            <a href="#">新番时间表 ></a>
          </div>
        </div>
        <div class="domestic-opera-contain_left-body">
          <div class="domestic-opera-contain_left-body-contain">
            <div v-for="n in 13" v-bind:key="n" class="domestic-opera-contain_pos">
              <div class="domestic-opera-left-img">
                <drama-image-item :item="item" :num="n" v-bind:key="n" @maskChange="changeDes"></drama-image-item>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="domestic-opera-contain_right">
        <div class="domestic-opera-contain_right-top">
          <p>
            <span>排行</span>
          </p>
          <div>
            <select>
              <option>三日</option>
              <option>一周</option>
            </select>
          </div>
        </div>
        <div class="domestic-opera-contain_right-body">
          <div v-for="n in 7" v-bind:key="n" class="domestic-opera-contain_right-a">
            <a href="#">
              <span v-bind:class="{'isActive': item.isActive}">{{n}}</span>
              你好
            </a>
          </div>
          <div class="domestic-opera-list-item-more">
            <a href="#">查看更多 》</a>
          </div>
          <div class="opera-swiper">
            <opera-swiper></opera-swiper>
          </div>
        </div>
      </div>
    </div>
    <div class="opera-status-contain_content">
      <div class="opera-status-contain_left">
        <div class="opera-status-contain_left-top">
          <div>
            <i></i>
            <span class="title">国创原产相关</span>
            <span>有新动态</span>
            <span>有最新投稿</span>
          </div>
          <div>
            <a href="#">更多》</a>
          </div>
        </div>
        <div class="opera-status-contain_left-body">
          <div v-for="n in 8" v-bind:key="n" class="opera-status-contain_pos">
            <div class="opera-status-left-img">
              <image-item :item="item" :num="n" v-bind:key="n" @maskChange="changeDes"></image-item>
            </div>
            <div class="opera-status-left-img-desc" v-show="isShowDes[n-1]">
              <span>
                <i class="i-fir"></i>48.5万
              </span>
              <span>
                <i class="i-last"></i>2961
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="opera-status-contain_right">
        <div class="opera-status-contain_right-top">
          <p>
            <span>排行</span>
            <span :class="{'isActive': index == 1 }" @mouseenter="changeItems('1')">全部</span>
            <span :class="{'isActive': index == 2 }" @mouseenter="changeItems('2')">原创</span>
          </p>
          <div>
            <select>
              <option>三日</option>
              <option>一周</option>
            </select>
          </div>
        </div>
        <div class="opera-status-contain_right-body">
          <drama-list :items="items"></drama-list>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import dramaImageItem from './dramaImagItem';
import operaSwiper from './OperaSwiper';
import dramaList from '../Six/CartoonList';
import imageItem from '../Fiv/ImagItem';
import { mapState } from 'vuex';

export default {
  name: 'DomesticOpera',
  data () {
    return {
      item: {
        title: 'isssaa你好wom你好women你好w你好womenomen你好womenen',
        isShowMask: false
      },
      Aindex: 8,
      isShowDes: [true, true, true, true, true, true, true, true]
      // items: [
      //   {
      //     content: '你好women你好',
      //     score: '89799'
      //   },
      //   {
      //     content: '你好women你好',
      //     isActive: false
      //   },
      //   {
      //     content: '你好women你好',
      //     isActive: true
      //   },
      //   {
      //     content: '你好women你好',
      //     isActive: true
      //   },
      //   {
      //     content: '你好women你好',
      //     isActive: true
      //   },
      //   {
      //     content: '你好women你好'
      //   },
      //   {
      //     content: '你好women你好'
      //   }
      // ]
    };
  },
  computed: {
    ...mapState({
      items: state => state.cartoon.list,
      index: state => state.cartoon.index
    })
  },
  methods: {
    getList () {
      this.$store.dispatch('getList', {
        index: this.index
      });
    },
    changeDes () {
      if (!arguments[0]) {
        this.isShowDes.splice(arguments[1] - 1, 1, true);
      }
      if (arguments[0]) {
        this.isShowDes.splice(arguments[1] - 1, 1, false);
      }
    },
    changeItems (index) {
      if (index != this.index) {
        this.$store.dispatch('getList', {
          index: index
        });
      }
    }
  },
  components: {
    dramaImageItem,
    dramaList,
    operaSwiper,
    imageItem
  },
  mounted () {
    this.getList();
  }
};
</script>
<style lang="stylus" scoped>
.domestic-opera-contain {
  width: 100%;
  color: #000;
  text-align: left;

  .domestic-opera-contain_content {
    width: 100%;
    height: 509px;
    display: flex;
    justify-content: space-between;

    .domestic-opera-contain_left {
      width: 720px;

      .domestic-opera-contain_left-top {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 45px;
        margin-bottom: 15px;
        position: relative;

        .title-tab-active {
          border-bottom: 2px solid #00a1d6 !important;
        }

        div {
          &:first-child {
            display: flex;
            justify-content: flex-start;

            i {
              width: 40px;
              height: 40px;
              background: url('../../assets/images/icons.png') -141px -140px no-repeat;
            }

            span {
              display: inline-block;
              width: 48px;
              text-align: center;
              font-size: 18px;
              cursor: pointer;
              line-height: 45px;
              border-bottom: 1px solid #e5e9ef;

              &:hover {
                color: #00a1d6 !important;
                border-bottom: 2px solid #00a1d6;
              }

              &:active {
                color: #00a1d6 !important;
                border-bottom: 2px solid #00a1d6;
              }

              &.title {
                padding-left: 20px;
                font-size: 24px;
                font-weight: 400;
                margin-right: 20px;
                color: #222;
                border-bottom: 0px solid #e5e9ef;

                &:hover {
                  color: #000 !important;
                  border-bottom: 0 solid #00a1d6;
                }
              }
            }
          }

          &:last-child {
            position: absolute;
            right: 24px;
            top: 0px;
            border: 1px solid #f25d8e;
            width: 104px;
            height: 34px;
            line-height: 34px;
            text-align: center;
            font-size: 14px;
            border-radius: 4px;
            transition: 0.1s;

            a {
              color: #f25d8e;
            }
          }
        }
      }

      .domestic-opera-contain_left-body {
        position: relative;
        margin: 26px 20px 40px 0;
        height: 398px;
        overflow-x: hidden;
        width: 700px;
        overflow-y: scroll;

        .domestic-opera-contain_left-body-contain {
          width: 100%;
          overflow-y: auto;
          display: inline-block;

          div {
            display: inline-block;
            float: left;
            position: relative;
            width: 180px;
            height: 72px;
            margin-right: 46px;
            margin-bottom: 36px;

            .domestic-opera-left-img {
              width: 180px;
              height: 72px;
            }
          }
        }
      }
    }

    .domestic-opera-contain_right {
      width: 260px;
      height: 445px;
      margin-top: 5px;

      .domestic-opera-contain_right-top {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 32px;
        margin-bottom: 15px;
        line-height: 32px;

        p {
          line-height: 32px;

          span {
            display: inline-block;
            margin-right: 8px;
            text-align: center;

            &:first-child {
              font-size: 18px;
              color: #000 !important;

              &:hover {
                border-bottom: 0px solid #00a1d6;
                color: #000 !important;
              }
            }

            &:hover {
              color: #00a1d6 !important;
              border-bottom: 2px solid #00a1d6;
            }

            &:active {
              color: #00a1d6 !important;
              border-bottom: 2px solid #00a1d6;
            }

            &.isActive {
              color: #00a1d6 !important;
              border-bottom: 2px solid #00a1d6;
            }
          }
        }

        select {
          display: inline-block;
          padding: 0 7px;
          height: 22px;
          line-height: 22px;
          border: 1px solid #ccd0d7;
          border-radius: 4px;
        }
      }

      .domestic-opera-contain_right-body {
        width: 260px;
        margin-top: 20px;

        .domestic-opera-contain_right-a {
          margin-bottom: 20px;

          a {
            font-size: 12px;

            span {
              margin-right: 10px;
              display: inline-block;
              line-height: 18px;
              text-align: center;
              font-weight: 600;
              color: #fff;
              width: 18px;
              height: 18px;
              border-radius: 4px;
              background: #f25d8e;
            }
          }
        }

        .domestic-opera-list-item-more {
          font-size: 12px;
          height: 24px;
          line-height: 24px;
          background-color: #e5e9ef;
          text-align: center;
          border: 1px solid #e0e6ed;
          color: #222;
          border-radius: 4px;
          transition: 0.2s;
        }

        .opera-swiper {
          display: inline-block;
          width: 260px;
          height: 90px;
          margin-top: 20px;
        }
      }
    }
  }

  .opera-status-contain_content {
    width: 100%;
    height: 381px;
    display: flex;
    justify-content: space-between;

    .opera-status-contain_left {
      width: 720px;

      .opera-status-contain_left-top {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 45px;
        margin-bottom: 15px;

        div {
          &:first-child {
            display: flex;
            justify-content: flex-start;

            i {
              width: 40px;
              height: 40px;
              background: url('../../assets/images/icons.png') -141px -908px no-repeat;
            }

            span {
              padding: 0 10px;
              font-size: 12px;
              cursor: pointer;
              line-height: 45px;

              &:hover {
                color: #00a1d6 !important;
                border-bottom: 2px solid #00a1d6;
              }

              &:active {
                color: #00a1d6 !important;
                border-bottom: 2px solid #00a1d6;
              }

              &.title {
                padding-left: 20px;
                font-size: 24px;
                font-weight: 400;
                margin-right: 20px;
                color: #222;
              }
            }
          }

          &:last-child {
            position: relative;
            top: 8px;
            right: 20px;
            width: 52px;
            height: 22px;
            line-height: 22px;
            background-color: #fff;
            border: 1px solid #ccd0d7;
            color: #555;
            border-radius: 4px;
            text-align: center;
            margin: 0 0 0 10px;
            transition: all 0.2s;
            font-size: 12px;
          }
        }
      }

      .opera-status-contain_left-body {
        height: 336px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        overflow: hidden;

        div {
          position: relative;

          .opera-status-left-img {
            width: 160px;
            height: 148px;
            margin: 0 20px 20px 0;
          }

          .opera-status-left-img-desc {
            position: absolute;
            left: 6px;
            bottom: 22px;
            width: 100%;
            height: 20px;
            line-height: 20px;
            font-size: 12px;
            color: #99a2aa;
            background: #fff;

            i {
              display: inline-block;
              width: 12px;
              height: 12px;
              margin-right: 8px;

              &.i-fir {
                background: url('../../assets/images/icons.png') -282px -90px no-repeat;
              }

              &.i-last {
                background: url('../../assets/images/icons.png') -282px -218px no-repeat;
              }
            }

            span:first-child {
              padding-right: 30px;
            }
          }
        }
      }
    }

    .opera-status-contain_right {
      width: 260px;
      height: 363px;
      margin-top: 5px;

      .opera-status-contain_right-top {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 32px;
        margin-bottom: 15px;
        line-height: 32px;

        p {
          line-height: 32px;

          span {
            display: inline-block;
            margin-right: 8px;
            text-align: center;

            &:first-child {
              font-size: 18px;
              color: #000 !important;

              &:hover {
                border-bottom: 0px solid #00a1d6;
                color: #000 !important;
              }
            }

            &:hover {
              color: #00a1d6 !important;
              border-bottom: 2px solid #00a1d6;
            }

            &:active {
              color: #00a1d6 !important;
              border-bottom: 2px solid #00a1d6;
            }

            &.isActive {
              color: #00a1d6 !important;
              border-bottom: 2px solid #00a1d6;
            }
          }
        }

        select {
          display: inline-block;
          padding: 0 7px;
          height: 22px;
          line-height: 22px;
          border: 1px solid #ccd0d7;
          border-radius: 4px;
        }
      }

      .opera-status-contain_right-body {
        width: 260px;
        margin-top: 20px;
        height: 268px;
      }
    }
  }
}
</style>
