<template>
  <div class="mask-box">
    <p class="first-p">{{item.title}}</p>
    <p>{{item.subTitleOne}}</p>
    <p>{{item.subTitleTwo}}</p>
    <div class="logo"></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'myMask',
  data () {
    return {};
  },
  props: ['item']
};
</script>
<style scope>
.mask-box {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  text-align: left;
  color: #fff;
}
.logo {
  position: absolute;
  display: inline-block;
  width: 20px;
  height: 20px;
  bottom: 4px;
  right: 4px;
  background: url(../../assets/images/icons.png) -853px -82px no-repeat;
}
p {
  padding: 0px 10px;
  font-size: 12px;
  line-height: 20px;
  color: #99a2aa;
}
p.first-p {
  color: #fff;
  height: 40px;
  overflow: hidden;
  margin-bottom: 5px;
  word-break: break-all;
  word-wrap: break-word;
}
</style>
