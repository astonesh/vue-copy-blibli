<template>
<li v-bind:class='classes' v-on:mouseenter="isShowSlot = !isShowSlot" v-on:mouseleave="isShowSlot = !isShowSlot">
    <a v-bind:href="null"  v-bind:title='item.title' class='menu-item'>
       <i v-if='item.isShowPic'></i> {{item.title}}
    </a>
    <div v-show='isShowSlot' class='banner-slot'><slot></slot></div>   
</li>
</template>

<script>
export default {
    data() {
        return {
            classes: {
                'highLight': this.item.isHightLight,
                'menu-item_width-100': this.item.isShowPic,
                'menu-item_width-70': !this.item.isShowPic,
                'i-show-home': this.item.title=='主站',
                'i-show-phone': this.item.title=='下载App',
            },
            isShowSlot: false
        }
    },
    props: ['item'],
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
    position: relative;
    display: inline-block;
    font-size: 14px;
}
a {
    line-height: 42px;
    margin: 0 10px;
}
li a {
    color: #000;
}
a i {
    display: inline-block;
    width: 20px;
    height: 20px;
    /*background: url('../../assets/logo.png');*/
    margin: 0 5px;
    position: relative;
    top: 1px;
}
.i-show-home a i,.i-show-phone a i {
    background: url(../../assets/images/icons.png) -853px -82px no-repeat;
}
li.highLight {
    height: 46px;
    border-radius: 0 0 6px 6px;
    background-color: #f45a8d;
}
li:hover {
    background-color: hsla(0, 0%, 100%, .6);
}
.item-detail {
    position: absolute;
    display: inline-block;
    width: 100px;
    height: 100px;
}
.menu-item_width-100 {
    width: 100px;
}
.menu-item_width-70 {
    width: 70px;
}
.banner-slot {
    display: inline-block;
}
</style>
