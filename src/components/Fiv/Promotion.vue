<template>
  <div class="promotion-contain">

    <div class="promotion-contain_top">
      <div class="promotion-contain_top-left">
        <i></i>
        <span>推广</span>
      </div>
      <div class="promotion-contain_top-right">
        <p>
          在线人数:
          <span>4467444</span>最新投稿
          <span>89154</span>
        </p>
      </div>
    </div>
    <div class="promotion-contain_body">
      <div class="promotion-contain_body-left">
        <div v-for="n in 4">
          <div class="left-img-item">
            <image-item :item="item" v-bind:key="n"></image-item>
          </div>
        </div>
      </div>
      <div class="promotion-contain_body-right">
        <a href="#">
          <img src="../../assets/images/swiper-right-for.png" width="260px" height="150px" />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import ImageItem from './ImagItem';

export default {
  name: 'Promotion',
  data () {
    return {
      item: {
        title: 'isssaa你好wom你好women你好w你好womenomen你好womenen',
        isShowMask: false
      }
    };
  },
  components: {
    ImageItem
  }
};
</script>
<style lang="stylus" scoped>
.promotion-contain {
  width: 100%;
  height: 228px;
  margin: 15px 0;
  color: #000 !important;
  text-align: left;

  .promotion-contain_top {
    width: 100%;
    height: 45px;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;

    .promotion-contain_top-left {
      i {
        display: inline-block;
        width: 40px;
        height: 40px;
        background: url('../../assets/images/icons.png') -141px -75px no-repeat;
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

    .promotion-contain_top-right p {
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

  .promotion-contain_body {
    display: flex;
    justify-content: space-between;
    height: 168px;

    .promotion-contain_body-left {
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

    .promotion-contain_body-right {
      width: 260px;
      height: 100%;
    }
  }
}
</style>
