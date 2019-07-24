<template>
  <div class="search-contain">
    <div class="search-content">
      <div class="searcj-part_pos">
        <a :href="null">
          <span>排行榜</span>
        </a>
        <form>
          <input type="text" placeholder="这样的历史剧才靠谱" v-focus />
          <button type="submit"></button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {};
  },
  methods: {}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.search-contain {
  width: 100%;
  height: 170px;
  background: url('../../assets/back-bar.png');

  .search-content {
    position: relative;
    width: 980px;
    margin: auto;

    .searcj-part_pos {
      display: flex;
      position: absolute;
      top: 120px;
      right: 0;
      width: 342px;
      height: 36px;
      align-items: space-between;
      font-size: 12px;

      a {
        display: inline-block;
        height: 100%;
        background-color: #fff;
        border-radius: 4px;
        margin-right: 2px;
        width: 66px;
        padding-right: 2px;

        span {
          padding-left: 26px;
          color: #f25d8e;
          display: inline-block;
          line-height: 36px;
          background: url('../../assets/images/icons.png') -659px -655px no-repeat;
        }
      }

      form {
        width: 276px;
        height: 100%;
        border-radius: 4px;
        line-height: 36px;
        display: flex;
        align-items: space-between;
        background-color: #fff;

        input {
          width: 224px;
          height: 100%;
          border-radius: 4px;
          padding: 0 10px;
        }

        a {
          width: 32px;
          height: 100%;
        }

        button {
          width: 48px;
          border: 0px solid #fff;
          background: url('../../assets/images/icons.png') -653px -720px no-repeat;
        }
      }
    }
  }
}
</style>
