<template>
  <div class="main-body" ref="mainBody">
    <div class="main-body-side" ref="mainBodySide">
      <content-side></content-side>
    </div>
    <div>
      <swiper-contain></swiper-contain>
    </div>
    <div ref="promotion">
      <promotion></promotion>
    </div>
    <div ref="cartoon">
      <cartoon></cartoon>
    </div>
    <div ref="drama">
      <drama></drama>
    </div>
    <div>
      <drama-status></drama-status>
    </div>
    <div ref="drama">
      <domestic-opera></domestic-opera>
    </div>
    <div ref="comic">
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
import { mapState } from 'vuex';

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
  },
  methods: {
    isCanScroll ($elementHeight, $scrollTop) {
      return (
        parseInt($scrollTop) - parseInt($elementHeight) <= 10 &&
        parseInt($scrollTop) - parseInt($elementHeight) >= -10
      );
    },
    scrollToId (n) {
      let $mainBody = this.$refs['mainBody']['offsetTop'];
      let $promotion = this.$refs['promotion']['offsetTop'];
      let $cartoon = this.$refs['cartoon']['offsetTop'];
      let $drama = this.$refs['drama']['offsetTop'];
      let $comic = this.$refs['comic']['offsetTop'];
      if (this.isCanScroll($mainBody + $promotion, n)) {
        this.$store.dispatch('setIdStatus', {
          id: 1
        });
      } else if (this.isCanScroll($mainBody + $cartoon, n)) {
        this.$store.dispatch('setIdStatus', {
          id: 2
        });
      } else if (this.isCanScroll($mainBody + $drama, n)) {
        this.$store.dispatch('setIdStatus', {
          id: 3
        });
      } else if (this.isCanScroll($mainBody + $comic, n)) {
        this.$store.dispatch('setIdStatus', {
          id: 4
        });
      } else {
        this.$store.dispatch('setIdStatus', {
          id: 2
        });
      }
    }
  },
  computed: {
    ...mapState({
      scrolltop: state => state.scrollStatus.scrolltop
    })
  },
  mounted () {},
  watch: {
    scrolltop (n, o) {
      console.log(n);
      this.scrollToId(n);
    }
  }
};
</script>
<style scoped>
.main-body {
  position: relative;
}
.main-body-side {
  position: fixed;
  width: 50px;
  top: 0;
  right: 0px;
}
</style>
