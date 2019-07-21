<template>
<div class='slot-contain'>
    <div class='slot-game' v-if='item.title=="游戏中心"'>
        <div class='game-slot-left'>
            <div class='game-slot-left_topImg'><img  src='../../assets/images/banHover_01_300_100.jpg'/></div>
            <div class='game-slot-left_bottomImg'>
                <div>
                    <img  src='../../assets/images/banHover_01_80_80.jpg'/>
                    <p>命运管</p>
                </div>
                <div>
                    <img  src='../../assets/images/banHover_01_80_80.jpg'/>
                    <p>英雄冢</p>
                </div>
                <div>
                    <img  src='../../assets/images/banHover_01_80_80.jpg'/>
                    <p>英雄冢</p>
                </div>
            </div>
        </div>
        <div class='game-slot-right'>
            <div><img src="../../assets/images/banHover-game-title.png"></div>
            <ul>
                <li>大三国</li>
                <li>大三国</li>
                <li>大三国</li>
                <li>大三国</li>
                <li>大三国</li>
                <li>大三国</li>
            </ul>
        </div>
    </div>
    <div class='slot-brocast' v-if='item.title=="直播"'>
        <div class='brocast-slot-left'>
            <h3>直播：</h3>
            <div class='brocast-slot-items'>
                <div><a href='#'><img  src='../../assets/images/banHover_02_01_2.png'/><p>武帝官邸</p></a></div>
                <div><a href='#'><img  src='../../assets/images/banHover_02_01_2.png'/><p>武帝官邸</p></a></div>
                <div><a href='#'><img  src='../../assets/images/banHover_02_01_2.png'/><p>武帝官邸</p></a></div>
                <div><a href='#'><img  src='../../assets/images/banHover_02_01_2.png'/><p>武帝官邸</p></a></div>
                <div><a href='#'><img  src='../../assets/images/banHover_02_01_2.png'/><p>武帝官邸</p></a></div>
                <div><a href='#'><img  src='../../assets/images/banHover_02_01_2.png'/><p>武帝官邸</p></a></div>
                <div><a href='#'><img  src='../../assets/images/banHover_02_01_2.png'/><p>武帝官邸</p></a></div>
                <div><a href='#'><img  src='../../assets/images/banHover_02_01_2.png'/><p>武帝官邸</p></a></div>
            </div>
        </div>
        <div class='brocast-slot-right'>
            <h3>热门活动：</h3>
            <div><a href='#'><img src='../../assets/images/banHover_02_01_1.png'></a></div>
            <div><a href='#'><img src='../../assets/images/banHover_02_01_1.png'></a></div>
        </div>
    </div>
    <div class='slot-saoma' v-if='item.title=="下载App"'>
        <div></div>
    </div>
    <div class='slot-login' v-if='item.title=="login"' ref='slot-login'>
        <p>你登陆以后可以：</p>
        <div>
            <img src='../../assets/images/danmu.png' ref='firImage'>
            <img src='../../assets/images/danmu.png' ref='secImage'>
        </div>
        <a>登陆</a>
        <p>首次登陆？<span>点我注册</span></p>
    </div>
    <div class='slot-his' v-if='item.title=="历史"'>
        <div><p>登陆以后有更多功能~</p><a href='#'>登陆</a></div>
        <div>没有数据哦,多看点视频吧~</div>
        <a class='more'>查看更多 ></a>
    </div>
</div>                  
</template>

<script>
import { setInterval, setTimeout } from 'timers';
export default {
    data() {
        return {
            count: 0,
            timer: null,
        }
    },
    props: ['item'],
    // methods: {
    //     intervalChange: function() {
    //         this.$refs['firImage'].style.left-=4;
    //         this.$refs['secImage'].style.left-=4;
    //         if(this.$refs['firImage'].style.left == -320) {
    //             this.$refs['firImage'].style.left = 320;
    //         }
    //         if(this.$refs['secImage'].style.left == -320) {
    //             this.$refs['secImage'].style.left = 320;
    //         }
    //     },
    //     createTimer: function () {
    //         if(!timer) {
    //             timer = setTimeout(function() {
    //                 this.intervalChange();
    //                 this.createTimer();
    //             }, 40)
    //         }
    //     }
    // },
    // beforeMount: function () {
    //     this.createTimer();
    // }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@import './BannerSlot.css';
</style>
