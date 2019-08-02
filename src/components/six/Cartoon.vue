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
        <div class="cartoon-contain_left-body"></div>
      </div>
    </div>

    <!-- <div class="cartoon-contain_top">
      <div class="cartoon-contain_top-left">
        <i></i>
        <span>动画</span>
      </div>
      <div class="cartoon-contain_top-right">
        <p>
          在线人数:
          <span>4467444</span>最新投稿
          <span>89154</span>
        </p>
      </div>
    </div>
    <div class="cartoon-contain_body">
      <div class="cartoon-contain_body-left">
        <div v-for="n in 4">
          <div class="left-img-item">
            <image-item :item="item" v-bind:key="n"></image-item>
          </div>
        </div>
      </div>
      <div class="cartoon-contain_body-right">
        <a href="#">
          <img src="../../assets/images/swiper-right-for.png" width="260px" height="150px" />
        </a>
      </div>
    </div>-->
  </div>
</template>
<script>
export default {
  name: 'cartoon',
  data () {
    return {
      item: {
        title: 'isssaa你好wom你好women你好w你好womenomen你好womenen',
        isShowMask: false
      }
    };
  },
  components: {}
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
    }

    .cartoon-contain_right {
      width: 260px;
    }
  }

  .cartoon-contain_body {
    display: flex;
    justify-content: space-between;
    height: 168px;

    .cartoon-contain_body-left {
      width: 720px;
      height: 100%;
      display: flex;
      justify-content: flex-start;

      .left-img-item {
        width: 160px;
        height: 148px;
        margin: 0 20px 20px 0;
      }
    }

    .cartoon-contain_body-right {
      width: 260px;
      height: 100%;
    }
  }
}
</style>
