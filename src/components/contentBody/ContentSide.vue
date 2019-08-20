<template>
  <div class="content-side">
    <ul>
      <li
        v-for="item in sideContent"
        :key="item.id"
        :class="{'isActive': tagNum == item.id}"
      >{{item.title}}</li>
      <li>
        <i></i>排序
      </li>
    </ul>
    <div class="line-desc"></div>
    <div class="line-tag"></div>
    <div
      ref="changeLogo"
      class="line-animation"
      style="background-position-x: 0px;"
      @mouseenter="timerLogo(true)"
      @mouseleave="timerLogo(false)"
    ></div>
  </div>
</template>

<script>
import { setInterval, clearInterval } from 'timers';
export default {
  name: 'ContentSide',
  data () {
    return {
      sideContent: [
        { title: '动画', id: 1 },
        { title: '番剧', id: 2 },
        { title: '国创', id: 3 },
        { title: '漫画', id: 4 }
      ],
      tagNum: 1,
      timer: null
    };
  },
  methods: {
    timerLogo (isIn) {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
      this.timer = setInterval(() => {
        this.$nextTick(() => {
          this.imanitionLogo(isIn);
        });
      }, 40);
    },
    imanitionLogo (isIn) {
      var num = parseInt(
        this.$refs['changeLogo'].style['backgroundPositionX'].split('px')[0]
      );
      if (isIn) {
        num -= 80;
        this.$refs['changeLogo'].style['backgroundPositionX'] = num + 'px';
        if (num <= -1120) {
          this.$refs['changeLogo'].style['backgroundPositionX'] = '-720px';
        }
      } else {
        num += 80;
        this.$refs['changeLogo'].style['backgroundPositionX'] = num + 'px';
        if (num >= 0) {
          clearInterval(this.timer);
          this.timer = null;
        }
      }
    }
  }
};
</script>
<style lang="stylus">
.content-side {
  width: 100%;

  ul {
    width: 50px;
    font-size: 12px;

    li {
      width: 100%;
      height: 28px;
      text-align: center;
      line-height: 28px;
      cursor: pointer;
      background-color: #f6f9fa;
      color: #000;
      transition: all 0.3s;

      &:hover {
        background-color: #00a1d6;
        color: #fff;
      }

      &:first-child {
        border-radius: 4px 4px 0 0;
      }

      &:last-child {
        border-radius: 0 0 4px 4px;
        height: 38px;
        padding: 8px 0;

        i {
          display: block;
          margin-left: 16px;
          width: 18px;
          height: 18px;
          background: url('../../assets/images/icons.png') -663px -151px no-repeat;
        }
      }

      &.isActive {
        background-color: #00a1d6;
        color: #fff;
      }
    }
  }

  .line-desc {
    display: inline-block;
    position: relative;
    top: -4px;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    height: 9px;
    width: 30px;
    margin: 0 auto;
  }

  .line-tag {
    position: relative;
    top: -8px;
    width: 50px;
    height: 50px;
    border-radius: 4px;
    background-color: #f6f9fa;
    border: 1px solid #e5e9ef;
    background: url('../../assets/images/icons.png') -648px -72px no-repeat;
    transition: all 0.3s;

    &:hover {
      background-color: #00a1d6;
      color: #fff;
    }
  }

  .line-animation {
    position: relative;
    left: -14px;
    width: 80px;
    height: 80px;
    background: url('../../assets/images/app-download.png');
  }
}
</style>>
