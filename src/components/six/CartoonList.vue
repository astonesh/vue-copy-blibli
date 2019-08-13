<template>
  <div class="cartoon-list">
    <div class="cartoon-list-item" v-for="(item, index) in items" :key="index">
      <div v-if="index === 0">
        <cartoon-fir-list :item="item"></cartoon-fir-list>
      </div>
      <div v-else>
        <a>
          <span v-bind:class="{'isActive': item.isActive}">{{index + 1}}</span>
          {{item.content}}
        </a>
      </div>
    </div>
    <div class="cartoon-list-item-more">
      <a href="#">查看更多 》</a>
    </div>
  </div>
</template>
<script>
import CartoonFirList from './CartoonFirList';

export default {
  name: 'CartoonList',
  data () {
    return {
      newItemArr: this.items
    };
  },
  components: {
    CartoonFirList
  },
  methods: {},
  mounted () {
    // console.log(this.items);
  },
  props: ['items']
};
</script>
<style lang="stylus" scoped>
.cartoon-list {
  width: 260px;

  .cartoon-list-item {
    font-size: 12px;
    width: 100%;
    margin-bottom: 20px;

    &:first-child {
      height: 50px;
    }

    a {
      height: 18px;
      lin-height: 18px;

      span {
        display: inline-block;
        padding: 0 6px;
        height: 18px;
        line-height: 18px;
        font-weight: 600;
        margin-right: 6px;
        background: #b8c0cc;
        border-radius: 4px;

        &.isActive {
          background: #f25d8e;
        }
      }

      &:hover {
        color: #00a1d6;
      }
    }
  }

  .cartoon-list-item-more {
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
</style>
