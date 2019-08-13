<template>
  <div class="drama-contain">
    <div class="drama-contain_content">
      <div class="drama-contain_left">
        <div class="drama-contain_left-top">
          <div>
            <i></i>
            <span class="title">番剧</span>
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
        <div class="drama-contain_left-body">
          <div class="drama-contain_left-body-contain">
            <div v-for="n in 13" v-bind:key="n" class="drama-contain_pos">
              <div class="drama-left-img">
                <drama-image-item :item="item" :num="n" v-bind:key="n" @maskChange="changeDes"></drama-image-item>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="drama-contain_right">
        <div class="drama-contain_right-top">
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
        <div class="drama-contain_right-body">
          <div v-for="n in 10" v-bind:key="n" class="drama-contain_right-a">
            <a href="#">
              <span v-bind:class="{'isActive': item.isActive}">{{n}}</span>
              你好
            </a>
          </div>
          <div class="drama-list-item-more">
            <a href="#">查看更多 》</a>
          </div>
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

      .drama-contain_left-body {
        position: relative;
        margin: 26px 20px 40px 0;
        height: 398px;
        overflow-x: hidden;
        width: 700px;
        overflow-y: scroll;

        .drama-contain_left-body-contain {
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

            .drama-left-img {
              width: 180px;
              height: 72px;
            }
          }
        }
      }
    }

    .drama-contain_right {
      width: 260px;
      height: 445px;
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

        .drama-contain_right-a {
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

        .drama-list-item-more {
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
      }
    }
  }
}
</style>
