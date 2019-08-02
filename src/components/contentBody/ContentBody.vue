<template>
  <div>
    <div class="content-body">
      <search-contain></search-contain>
      <sub-title></sub-title>
    </div>
    <common></common>
    <div class="swiper-body">
      <router-view></router-view>
      <!-- <swiper-contain></swiper-contain> -->
    </div>
  </div>
</template>

<script>
import SearchContain from '../searchContain/SearchContain';
import SubTitle from '../SubTitle/SubTitle';
import Common from '../common/Common';

export default {
  name: 'ContentBody',
  data () {
    return {};
  },
  components: {
    SearchContain,
    SubTitle,
    Common
  }
};
</script>
<style>
.swiper-body {
  padding-top: 70px;
  width: 980px;
  display: inline-block;
  margin: 0 auto;
  overflow: hidden;
  z-index: 90;
}
</style>
