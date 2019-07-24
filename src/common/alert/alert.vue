<template>
  <div class="alert-box">这是我的警告框！！</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'myAlert',
  data () {
    return {};
  },
  methods: {
    //   close () {
    //     this.visible = false
    //     this.$emit('close')
    //     if (typeof this.onClose === 'function') {
    //       this.onClose(this)
    //     }
    //   }
  }
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
