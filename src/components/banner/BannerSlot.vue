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
            <div>直播：</div>
            <div class='brocast-slot-items'>
                <div><img  src='#'/></div>
                <div><img  src='#'/></div>
                <div><img  src='#'/></div>
                <div><img  src='#'/></div>
                <div><img  src='#'/></div>
                <div><img  src='#'/></div>
                <div><img  src='#'/></div>
                <div><img  src='#'/></div>
            </div>
        </div>
        <div class='brocast-slot-right'>
            <div>热门活动：</div>
            <div><img src='#'></div>
            <div><img src='#'></div>
        </div>
    </div>
    <div class='slot-saoma' v-if='item.title=="下载App"'>
        <div><img src='#'></div>
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
.brocast-slot-left {
    width: 254px;
    height: 100%;
}
.brocast-slot-items {
    display: flex;
    align-items: flex-start;
    width: 45px;
    height: 70px;
}
.brocast-slot-left {
    width: 200px;
    height: 100%;
}
.slot-saoma {
    background-color: #fff;
}
</style>
