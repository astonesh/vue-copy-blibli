<template>
  <div class="drama-status-contain">
    <div class="drama-status-contain_content">
      <div class="drama-status-contain_left">
        <div class="drama-status-contain_left-top">
          <div>
            <i></i>
            <span class="title">番剧动态</span>
            <span>有新动态</span>
            <span>有最新投稿</span>
          </div>
          <div>
            <a href="#">更多》</a>
          </div>
        </div>
        <div class="drama-status-contain_left-body">
          <div v-for="n in 8" v-bind:key="n" class="drama-status-contain_pos">
            <div class="drama-status-left-img">
              <image-item :item="item" :num="n" v-bind:key="n" @maskChange="changeDes"></image-item>
            </div>
            <div class="drama-status-left-img-desc" v-show="isShowDes[n-1]">
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
      <div class="drama-status-contain_right">
        <div class="drama-status-contain_right-top">
          <p>
            <span>特别推荐</span>
          </p>
        </div>
        <div class="drama-status-contain_right-body">
          <img src="../../assets/images/swiper-right-fiv.jpg" width="260px" height="268px" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import imageItem from '../Fiv/ImagItem';
import CartoonList from '../six/cartoonList';
import { mapState } from 'vuex';

export default {
  name: 'DramaStatus',
  data () {
    return {
      item: {
        title: 'isssaa你好wom你好women你好w你好womenomen你好womenen',
        isShowMask: false
      },
      isRightIndex: 1,
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
      items: state => state.dramaStatus.list,
      index: state => state.dramaStatus.index
    })
  },
  methods: {
    getList () {
      this.$store.dispatch('getList', {
        index: this.isRightIndex
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
    imageItem,
    CartoonList
  },
  mounted () {
    this.getList();
  }
};
</script>
<style lang="stylus" scoped>
.drama-status-contain {
  width: 100%;
  height: 511px;
  margin: 0 0 30px 0;
  color: #000;
  text-align: left;

  .drama-status-contain_logo {
    height: 82px;
    margin-bottom: 20px;
  }

  .drama-status-contain_content {
    width: 100%;
    height: 381px;
    display: flex;
    justify-content: space-between;

    .drama-status-contain_left {
      width: 720px;

      .drama-status-contain_left-top {
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

      .drama-status-contain_left-body {
        height: 336px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        overflow: hidden;

        div {
          position: relative;

          .drama-status-left-img {
            width: 160px;
            height: 148px;
            margin: 0 20px 20px 0;
          }

          .drama-status-left-img-desc {
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

    .drama-status-contain_right {
      width: 260px;
      height: 363px;
      margin-top: 5px;

      .drama-status-contain_right-top {
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

      .drama-status-contain_right-body {
        width: 260px;
        margin-top: 20px;
        height: 268px;
      }
    }
  }
}
</style>
