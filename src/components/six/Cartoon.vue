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
            <span>动画</span>
            <span>有新动态</span>
            <span>有最新投稿</span>
          </div>
          <div>更多》</div>
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
  }

  .cartoon-contain_top {
    width: 100%;
    height: 45px;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;

    .cartoon-contain_top-left {
      i {
        display: inline-block;
        width: 40px;
        height: 40px;
        background: url('../../assets/images/icons.png') -141px -908px no-repeat;
      }

      span {
        display: inline-block;
        position: relative;
        top: -10px;
        padding-left: 10px;
        line-height: 45px;
        font-size: 24px;
      }
    }

    .cartoon-contain_top-right p {
      position: relative;
      height: 34px;
      line-height: 34px;
      padding: 0 10px;
      border-radius: 4px;
      text-align: center;
      background: #e5e9ef;
      white-space: nowrap;

      span {
        padding-left: 6px;

        &:first-child {
          padding-right: 18px;

          &::after {
            display: inline-block;
            width: 1px;
            height: 12px;
            content: '';
            position: relative;
            background: #99a2aa;
            top: 1px;
            left: 9px;
          }
        }
      }
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
