<template>
  <div class="image-item">
    <a href="#">
      <div class="image-item_left">
        <img src="../../assets/images/swiper-right-fiv.jpg" width="72px" height="72px" />
      </div>
      <div class="image-item_right">
        <p class="fir-p">你第五你第五话好你第五话好你第五话好你第五话好你第五话好你第五话好你第五话好你第五话好话好</p>
        <p class="sec-p">第五话</p>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  name: 'DramaImageItem',
  data () {
    return {
      newItem: this.copy(this.item)
    };
  },
  methods: {},
  props: ['item', 'num']
};
</script>
<style lang="stylus" scoped>
.image-item {
  width: 100%;
  height: 100%;
  position: relative;

  a {
    display: flex;
    justify-content: space-between;

    .image-item_left {
      width: 72px;
      height: 72px;
    }

    .image-item_right {
      width: 96px;
      height: 72px;
      position: relative;

      .fir-p {
        padding: 0;
        height: 36px;
        line-height: 18px;
        word-break: break-all;
        word-wrap: break-word;
        color: #222;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;

        &:hover {
          color: #00a1d6;
        }
      }

      .sec-p {
        position: absolute;
        bottom: 0;
        left: 0;
        color: #fff;
        border-radius: 9px;
        display: inline-block;
        vertical-align: top;
        text-align: center;
        padding: 0 4px;
        height: 18px;
        line-height: 18px;
        min-width: 28px;
        max-width: 89px;
        text-overflow: ellipsis;
        overflow: hidden;
        background: #ff8eb3;
      }
    }
  }
}
</style>
