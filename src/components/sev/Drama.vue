<template>
  <div class="drama-contain">
    <div class="drama-contain_content">
      <div class="drama-contain_left">
        <div class="drama-contain_left-top">
          <div>
            <i></i>
            <span class="title">番剧</span>
            <span class="title-tab">最新</span>
            <span class="title-tab">一</span>
            <span class="title-tab">二</span>
            <span class="title-tab">三</span>
            <span class="title-tab">四</span>
            <span class="title-tab">五</span>
            <span class="title-tab">六</span>
            <span class="title-tab">日</span>
          </div>
          <div>
            <a href="#">新番时间表 ></a>
          </div>
        </div>
        <div class="drama-contain_left-body">
          <div class="drama-contain_left-body-contain">
            <div v-for="n in 18" v-bind:key="n" class="drama-contain_pos">
              <div class="drama-left-img">
                <drama-image-item :item="item" :num="n" v-bind:key="n" @maskChange="changeDes"></drama-image-item>
              </div>
              <div class="drama-left-img-desc" v-show="isShowDes[n-1]">
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
      </div>
      <div class="drama-contain_right">
        <div class="drama-contain_right-top">
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
        <div class="drama-contain_right-body">
          <drama-list :items="items"></drama-list>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import dramaImageItem from './DramaImagItem';
import dramaList from '../Six/CartoonList';
import { mapState } from 'vuex';

export default {
  name: 'drama',
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
      items: state => state.cartoon.list,
      index: state => state.cartoon.index
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
    dramaImageItem,
    dramaList
  },
  mounted () {
    this.getList();
  }
};
</script>
<style lang="stylus" scoped>
.drama-contain {
  width: 100%;
  color: #000;
  text-align: left;

  .drama-contain_content {
    width: 100%;
    height: 509px;
    display: flex;
    justify-content: space-between;

    .drama-contain_left {
      width: 720px;

      .drama-contain_left-top {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 45px;
        margin-bottom: 15px;
        position: relative;

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

      .drama-contain_left-body {
        position: relative;
        margin: 26px 20px 40px 0;
        height: 398px;

        .drama-contain_left-body-contain {
          width: 100%;
          height: auto;
          overflow-y: auto;
          overflow-x: hidden;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          overflow: hidden;

          div {
            position: relative;
            width: 226px;
            height: 72px;
            padding: 36px 46px 0 0;

            .drama-left-img {
              width: 72px;
              height: 72px;
              margin: 0 20px 20px 0;
            }

            .drama-left-img-desc {
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
    }

    .drama-contain_right {
      width: 260px;
      height: 363px;
      margin-top: 5px;

      .drama-contain_right-top {
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

      .drama-contain_right-body {
        width: 260px;
        margin-top: 20px;
      }
    }
  }
}
</style>
