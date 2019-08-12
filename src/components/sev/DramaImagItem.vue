<template>
  <div class="image-item">
    <a href="#">
      <div class="image-item_left">
        <img src="../../assets/images/swiper-right-fiv.jpg" width="72px" height="72px" />
      </div>
      <div class="image-item_right"></div>
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
    }
  }
}
</style>
