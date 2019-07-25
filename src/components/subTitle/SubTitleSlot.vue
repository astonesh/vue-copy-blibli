<template>
  <div class="slot-contain">
    <div v-if="dataList.items && dataList.slotValue ==2" class="slot-contain-one">
      <ul v-for="(list, index) in dataList.items" :key="index">
        <li v-on:mouseenter="toggle(index)" v-on:mouseleave="toggle(index)">
          <a :href="list.itemUrl" class="slot-item_a">
            <span class="myAnimation_left">
              <em>></em>
              {{list.item}}
            </span>
            <span class="myAnimation_right">
              <
              <em v-show="list.isShowTag">></em>
            </span>
          </a>
        </li>
      </ul>
    </div>
    <div v-if="dataList.slotValue == 3 && dataList.isShowSlot" class="slot-contain-two">
      <div class="ground" v-if="dataList.id == 18">
        <div class="ground-left">
          <ul>
            <li class="one">
              <a>
                <i></i>会员购
              </a>
            </li>
            <li class="two">
              <a>
                <i></i>游戏中心
              </a>
            </li>
            <li class="thr">
              <a>
                <i></i>画友
              </a>
            </li>
            <li class="for">
              <a>
                <i></i>芒果TV
              </a>
            </li>
          </ul>
        </div>
        <div class="ground-right">
          <div>
            <a>
              <img src="../../assets/images/ground-one.jpg" />
            </a>
          </div>
          <div>
            <a>
              <img src="../../assets/images/ground-two.jpg" />
            </a>
          </div>
        </div>
      </div>
      <div class="ground" v-if="dataList.id == 19">
        <div class="ground-left">
          <ul>
            <li>
              <a>
                <i>></i>全部直播
              </a>
            </li>
            <li>
              <a>
                <i>></i>游戏直播
              </a>
            </li>
            <li>
              <a>
                <i>></i>手游直播
              </a>
            </li>
            <li>
              <a>
                <i>></i>娱乐直播
              </a>
            </li>
            <li>
              <a>
                <i>></i>电台直播
              </a>
            </li>
            <li>
              <a>
                <i>></i>绘画直播
              </a>
            </li>
          </ul>
        </div>
        <div class="ground-right">
          <div>
            <a>
              <img src="../../assets/images/ground-one.jpg" />
            </a>
          </div>
          <div>
            <a>
              <img src="../../assets/images/ground-two.jpg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data () {
    return {
      dataList: this.item
    };
  },
  props: ['item'],
  beforeCreate: function () {
    // debugger
    // console.log(this.item);
  },
  created: function () {
    // debugger
    // console.log(this.item);
  },
  beforeMount () {
    // console.log(this.dataList);
    this.initDataList();
    // console.log(this.item);
  },
  mounted () {
    // console.log(this.item);
  },
  methods: {
    initDataList: function () {
      if (this.dataList && this.dataList.items) {
        this.dataList.items.forEach(function (item) {
          item.isShowTag = false;
        });
      }
    },
    toggle: function ($index) {
      // 第一种方法
      let itemTemp = {
        item: this.dataList.items[$index].item,
        itemUrl: this.dataList.items[$index].itemUrl,
        isShowTag: !this.dataList.items[$index].isShowTag
      };
      this.dataList.items.splice($index, 1, itemTemp);
      // 第二种方法
      // var a = this.dataList;
      // this.dataList.items[$index].isShowTag = !this.dataList.items[$index].isShowTag;
      // this.datalist = this.copy(this.dataList);
      // console.log(this.datalist);
      // console.log(this.datalist == a);
    }
  },
  watch: {
    'dataList.items': {
      handler: function (n, o) {
        // console.log(n);
      },
      deep: true,
      immediate: true
    }
  }
};
</script>
<style scoped>
.slot-contain {
  background-color: #fff;
  z-index: 999;
}
.slot-contain-two {
  width: 300px;
}
.slot-contain-one {
  position: relative;
  margin-left: -6px;
  margin-top: 4px;
  width: 130px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
}
.slot-contain-one ul,
.slot-contain-one .li {
  width: 100%;
  background: #fff;
  overflow: hidden;
}
ul li {
  position: relative;
  height: 30px;
  text-align: left;
  line-height: 30px;
  padding: 0 6px;
  overflow: hidden;
}
.myAnimation_left em {
  padding-right: 8px;
  color: #00a1d6;
}
.slot-item_a .myAnimation_right {
  margin-left: 100px;
  color: #00a1d6;
}
.slot-item_a:hover .myAnimation_right {
  margin-left: 6px;
  transition: margin-left 0.4s;
}
.slot-contain-one ul li:hover {
  padding-left: 12px;
  background-color: rgba(0, 0, 0, 0.16);
  transition: padding-left 0.4s;
}
.ground {
  display: flex;
  width: 387px;
  height: 228px;
  padding: 20px 0;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
}
.ground-left {
  width: 107px;
  height: 100%;
  border-right: 1px solid #ddd;
}
.ground-right {
  width: 280px;
  height: 100%;
}
.ground-left li {
  padding: 0 40px 0 20px;
}
.ground-left li:hover {
  background: #e5e9ef;
}
.ground-left li i {
  display: inline-block;
  position: relative;
  width: 16px;
  height: 13px;
  top: 2px;
  left: -2px;
  color: #00a1d6;
}
.ground-left li a {
  display: inline-block;
  width: 80px;
}
.one i {
  background: url(../../assets/images/icon-pc.png) no-repeat;
}
.two i {
  background: url(../../assets/images/icons.png) -279px -1241px no-repeat;
}
.thr i {
  background: url(../../assets/images/icons.png) -280px -1370px no-repeat;
}
.for i {
  background: url(../../assets/images/icons.png) -280px -1433px no-repeat;
}
.ground-right div {
  width: 240px;
  margin-left: 20px;
  margin-bottom: 20px;
}
</style>
