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
        <div v-on:mouseenter='try09()'  ref='img-div' v-on:mouseleave ='clear09()'>
            <img src='../../assets/images/danmu.png' ref='firImage' style='left: 0px;'>
            <img src='../../assets/images/danmu.png' ref='secImage' style='left: 320px;'>
        </div>
        <a>登陆</a>
        <p>首次登陆？<span>点我注册</span></p>
    </div>
    <div class='slot-his' v-if='item.title=="历史"'>
        <div><p>登陆以后有更多功能~</p><a href='#'>登陆</a></div>
        <div>没有数据哦,多看点视频吧~</div>
        <a class='more'>查看更多 ></a>
    </div>
    <div class='slot-add' v-if='item.title=="投稿"'>
        <ul>
            <li><a><i></i><span>音频投稿</span></a></li>
            <li><a><i></i><span>音频投稿</span></a></li>
            <li><a><i></i><span>音频投稿</span></a></li>
            <li><a><i></i><span>音频投稿</span></a></li>
            <li><a><i></i><span>音频投稿</span></a></li>
        </ul>
    </div>
</div>                  
</template>
<script>
import { setInterval, clearInterval } from 'timers';
export default {
    data() {
        return {
            count: 0,
            timer: null,
        }
    },
    props: ['item'],
    methods: {
        intervalChange: function() {
            this.$refs['firImage'].style.left = this.countNum(this.$refs['firImage'].style.left, 10);
            this.$refs['secImage'].style.left = this.countNum(this.$refs['secImage'].style.left, 10);
            if(this.$refs['firImage'].style.left == '-320px') {
                this.$refs['firImage'].style.left = '320px';
            }
            if(this.$refs['secImage'].style.left == '-320px') {
                this.$refs['secImage'].style.left= '320px';
            }
        },
        createTimer: function () {
            // debugger
            let self = this;
            this.timer = setInterval(() => {
                this.intervalChange()
            }, 40)
        },
        try09: function () {
            this.createTimer();
        },
        clear09: function () {
            if(this.timer) {
                clearInterval(this.timer);
            }
        },
        countNum: function (str, num) {
            return (parseInt(str.split('px')[0]) - num) + 'px';
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import './BannerSlot.css';
</style>
