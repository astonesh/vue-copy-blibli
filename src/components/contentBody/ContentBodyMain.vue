<template>
  <div class="main-body">
    <div class="main-body-side">
      <content-side></content-side>
    </div>
    <div>
      <swiper-contain></swiper-contain>
    </div>
    <div>
      <promotion></promotion>
    </div>
    <div>
      <cartoon></cartoon>
    </div>
    <div>
      <drama></drama>
    </div>
    <div>
      <drama-status></drama-status>
    </div>
    <div>
      <domestic-opera></domestic-opera>
    </div>
    <div>
      <comic></comic>
    </div>
  </div>
</template>
<script>
import SwiperContain from '../for/SwiperContain';
import Promotion from '../fiv/Promotion';
import Cartoon from '../six/Cartoon';
import Drama from '../sev/Drama';
import DramaStatus from '../sev/DramaStatus';
import DomesticOpera from '../sev/DomesticOpera';
import Comic from '../sev/Comic';
import ContentSide from './ContentSide';

export default {
  name: 'ContentBodyMain',
  data () {
    return {};
  },
  components: {
    SwiperContain,
    Promotion,
    Cartoon,
    Drama,
    DramaStatus,
    DomesticOpera,
    Comic,
    ContentSide
  }
};
</script>
<style scoped>
.main-body {
  position: relative;
}
.main-body-side {
  position: absolute;
  width: 50px;
  top: 0;
  right: -70px;
}
</style>
