<template>
<div class="top-bar">
    <div class="top-contain">
        <div class="top-contain-left">
            <ul>
                <banner-item v-for='item in leftTitle' :key="item.title" v-bind:item='item'>
                    <banner-slot v-bind:item='item'></banner-slot>
                </banner-item>
            </ul>
        </div>
        <div class="top-contain-right">
            <ul>
                <banner-item v-for='item in rightTitle' :key="item.title" v-bind:item='item'>
                    <banner-slot v-bind:item='item'></banner-slot>
                </banner-item>
                
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import BannerItem from './BannerItem';
import BannerSlot from './BannerSlot';
export default {
    name: 'TopBar',
    data() {
        return {
            leftTitle: [{
                    'title': '主站',
                    isShowPic: true,
                    isHightLight: false
                },
                {
                    'title': '音频',
                    isShowPic: false,
                    isHightLight: false
                },
                {
                    'title': '游戏中心',
                    isShowPic: false,
                    isHightLight: false
                },
                {
                    'title': '直播',
                    isShowPic: false,
                    isHightLight: false
                },
                {
                    'title': '会员购',
                    isShowPic: false,
                    isHightLight: false
                },
                {
                    'title': '漫画',
                    isShowPic: false,
                    isHightLight: false
                },
                {
                    'title': '70年',
                    isShowPic: false,
                    isHightLight: false
                },
                {
                    'title': '下载App',
                    isShowPic: true,
                    isHightLight: false
                },
            ],
            rightTitle: [{
                    'title': 'login',
                    isShowPic: true,
                    isHightLight: false
                },
                {
                    'title': '历史',
                    isShowPic: false,
                    isHightLight: false
                },
                {
                    'title': '投稿',
                    isShowPic: false,
                    isHightLight: true
                },
            ]
        }
    },
    components: {
        BannerItem,
        BannerSlot
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-bar {
    height: 42px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: hsla(0, 0%, 100%, .4);
    box-shadow: 0 1px 2px rgba(0, 0, 0, .1);
}

.top-contain {
    width: 980px;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
}
.top-contain-left {
    height: 100%;
}
.top-contain-right {
    height: 100%;
}
ul  {
    display: flex;
    height: 100%;
}
</style>
