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
</div>                  
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: ['item']
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.slot-contain {
    box-shadow: 1px 1px 3px rgba(0, 0, 0, .4);
}
.slot-game {
    display: flex;
    width: 400px;
    padding: 6px 10px;
    align-items: space-between;
    background-color: #fff;
}
.game-slot-left {
    width: 300px;
    height: 100%;
}
.game-slot-right {
    width: 100px;
    height: 100%;
    padding: 0 10px;
}
.game-slot-left_bottomImg {
    display: flex;
    justify-content: space-around;
    margin: 8px 0px;
}
.game-slot-left_bottomImg p {
    margin: 10px 0 30px 0;
}
.game-slot-right ul {
    padding: 14px 6px;
    height: 180px;
    border-left: 2px solid rgba(0, 0, 0, .1);
    position: relative;
    left: 6px;
    top: -6px;
    text-align: left;
}
.game-slot-right ul li {
    height: 33px;
    line-height: 33px;
}
.slot-brocast {
    display: flex;
    width: 504px;
    height: 222px;
    padding: 20px 0 20px 20px;
    align-items: space-between;
    background-color: #fff;
}
.slot-brocast h3 {
    text-align: left;
    margin-bottom: 10px;
    color: #ea759f;
}
.brocast-slot-left {
    width: 290px;
    height: 100%;
}
.brocast-slot-items {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
}
.brocast-slot-items > div {
    margin-right: 4px;
    margin-bottom: 30px;
    width: 65px;
    height: 70px;
}
.brocast-slot-items p {
    margin-top: 4px;
}
.brocast-slot-right div {
    margin-bottom: 14px;
}
.slot-saoma {
    background-color: #fff;
}
.slot-saoma div {
    position: absolute;
    left: -20px;
    top: 42px;
    width: 259px;
    height: 174px;
    background: url(../../assets/images/app-box.png);
}
.slot-saoma div::before {
    content: "";
    position: absolute;
    width: 97px;
    height: 97px;
    left: 82px;
    top: 30px;
    background: url(../../assets/images/app-qrcode.png);
}
</style>
