<template>
  <div class="cartoon-contain">
    <div class="cartoon-contain_log">
      <img src="static/img/six-logo.jpg" width="980px" height="82px" />
    </div>
    <div class="cartoon-contain_content">
      <div class="cartoon-contain_left">
        <div class="cartoon-contain_left-top">
          <div>
            <i></i>
            <span class="title">动画</span>
            <span>有新动态</span>
            <span>有最新投稿</span>
          </div>
          <div>
            <a href="#">更多》</a>
          </div>
        </div>
        <div class="cartoon-contain_left-body">
          <div v-for="n in 8" v-bind:key="n" class="cartoon-contain_pos">
            <div class="cartoon-left-img">
              <image-item :item="item" :num="n" v-bind:key="n" @maskChange="changeDes"></image-item>
            </div>
            <div class="cartoon-left-img-desc" v-show="isShowDes[n-1]">
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
      <div class="cartoon-contain_right">
        <div class="cartoon-contain_right-top">
          <p>
            <span>排行</span>
            <span>全部</span>
            <span>原创</span>
          </p>
          <div>
            <select>
              <option>三日</option>
              <option>一周</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import imageItem from '../Fiv/ImagItem';
export default {
  name: 'cartoon',
  data () {
    return {
      item: {
        title: 'isssaa你好wom你好women你好w你好womenomen你好womenen',
        isShowMask: false
      },
      isShowDes: [true, true, true, true, true, true, true, true]
    };
  },
  methods: {
    changeDes () {
      if (!arguments[0]) {
        this.isShowDes.splice(arguments[1] - 1, 1, true);
      }
      if (arguments[0]) {
        this.isShowDes.splice(arguments[1] - 1, 1, false);
      }
    }
  },
  components: {
    imageItem
  }
};
</script>
<style lang="stylus" scoped>
.cartoon-contain {
  width: 100%;
  height: 511px;
  margin: 0 0 30px 0;
  color: #000;
  text-align: left;

  .cartoon-contain_logo {
    height: 82px;
    margin-bottom: 20px;
  }

  .cartoon-contain_content {
    width: 100%;
    height: 381px;
    display: flex;
    justify-content: space-between;

    .cartoon-contain_left {
      width: 720px;

      .cartoon-contain_left-top {
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

      .cartoon-contain_left-body {
        height: 336px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        div {
          position: relative;

          .cartoon-left-img {
            width: 160px;
            height: 148px;
            margin: 0 20px 20px 0;
          }

          .cartoon-left-img-desc {
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

    .cartoon-contain_right {
      width: 260px;
      height: 363px;
    }
  }
}
</style>
