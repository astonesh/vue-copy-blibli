<template>
  <div class="image-item" @mouseenter="toggleMask" @mouseleave="toggleMask">
    <a>
      <img src="../../assets/images/swiper-right-fiv.jpg" width="160px" height="100px" />
    </a>
    <p :class="{'color-blue': newItem.isShowMask}">{{newItem.title}}</p>
    <div class="fiv-left-mask" v-show="newItem.isShowMask">
      <my-mask :item="newItem"></my-mask>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ImageItem',
  data () {
    return {
      newItem: this.copy(this.item)
    };
  },
  methods: {
    toggleMask () {
      this.newItem.isShowMask = !this.newItem.isShowMask;
      this.$emit('maskChange', this.newItem.isShowMask, this.num);
    }
  },
  props: ['item', 'num']
};
</script>
<style lang="stylus" scoped>
.image-item {
  width: 100%;
  height: 100%;
  position: relative;

  p {
    padding-top: 8px;
    height: 40px;
    line-height: 20px;
    transition: all 0.2s linear;
    color: #222;
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
    text-align: left;

    &.color-blue {
      color: #00a1d6 !important;
    }
  }

  .fiv-left-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 160px;
    height: 100px;
  }
}
</style>
