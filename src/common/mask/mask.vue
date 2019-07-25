<template>
  <div class="alert-box">这是我的警告框！！</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'myMask',
  data () {
    return {};
  },
  props: []
};
</script>
<style>
.alert-box {
  display: inline-block;
  width: 200px;
  height: 100px;
  background: red;
  text-align: center;
  padding-top: 30px;
}
</style>
