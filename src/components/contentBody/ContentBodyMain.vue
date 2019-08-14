<template>
  <div class="main-body">
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
    Comic
  }
};
</script>
<style scoped>
.main-body {
  position: relative;
}
</style>
