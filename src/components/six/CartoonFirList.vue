<template>
  <div class="cartoon-list-item-first">
    <div class="item-first-logo">1</div>
    <div class="item-last-logo">
      <div class="item-last-logo-img">
        <img src="../../assets/images/six-right-one.jpg" width="80px" height="50px" />
      </div>
      <div class="item-last-logo-desc">
        <p>{{item.content}}</p>
        <p class="p-color">
          <span>综合评分:</span>
          {{item.score}}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CartoonFirList',
  data () {
    return {};
  },
  methods: {},
  props: ['item']
};
</script>
<style lang="stylus" scoped>
.cartoon-list-item-first {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;

  .item-first-logo {
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

  .item-last-logo {
    width: 235px;
    height: 50px;
    display: flex;
    justify-content: space-between;

    .item-last-logo-img {
      width: 80px;
      height: 50px;
    }

    .item-last-logo-desc {
      width: 150px;
      height: 50px;

      .p-color {
        color: #99a2aa;

        span {
          padding-right: 6px;
        }
      }
    }
  }
}
</style>
