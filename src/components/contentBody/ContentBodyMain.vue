<template>
  <div>
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
  </div>
</template>
<script>
import SwiperContain from '../for/SwiperContain';
import Promotion from '../fiv/Promotion';
import Cartoon from '../six/Cartoon';
import Drama from '../sev/Drama';

export default {
  name: 'ContentBodyMain',
  data () {
    return {};
  },
  components: { SwiperContain, Promotion, Cartoon, Drama }
};
</script>
<style scoped>
</style>
