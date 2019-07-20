<template>
	<div class='sub-title-contain'>
		<ul class='sub-title-lists'>
			<li class='sub-title-item' v-for='item in subTitle' :key='item.id' v-on:mouseenter='toggleSlot(item)' v-on:mouseleave='toggleSlot(item)'>
				<a :href='item.linkHref'>
					<div class='item-icon' v-if='item.hasIcon' v-bind:class='{"item-icon-home": item.id==1, "item-icon-lan": item.id==17, "item-icon-ground": item.id==18, "item-icon-broadcast": item.id==19, "item-icon-brackhouse": item.id==20,   }'></div>
					<div class='item-num' v-if='item.hasNum'><span>{{item.num}}</span></div>
					<div class='item-title'>{{item.title}}</div>
				</a>
				<div v-if='item.slotValue == 2' v-show='item.isShow'>
					<sub-title-slot v-bind:item='item'></sub-title-slot>
				</div>
			</li>
		</ul>
		<div class="sub-title-contain_right"><img src="../../assets/images/logo_70.gif"></div>
	</div>	
</template>
<script type="text/javascript">
	import SubTitleSlot from './SubTitleSlot';

	export default {
	    data() {
	        return {
	        	subTitle:[{
	        		'title':'首页',
	        		'hasIcon': true,
	        		'hasNum': false,
	        		'slotValue': 1,
	        		'linkHref': '#',
	        		'id': 1
	        	},{
	        		'title':'动画',
	        		'hasIcon': false,
	        		'hasNum': true,
	        		'num': '999+',
	        		'slotValue': 2,
	        		'linkHref': '#',
	        		'items': [{
	        			'item':'MAD',
	        			'itemUrl':'#'
	        		},{
	        			'item':'动画',
	        			'itemUrl':'#'
	        		}],
	        		'id': 2,
	        		'isShow': false
	        	},{
	        		'title':'番剧',
	        		'hasIcon': false,
	        		'hasNum': true,
	        		'num': 135,
	        		'slotValue': 2,
	        		'id': 3,
	        		'isShow': false
	        	},{
	        		'title':'国创',
	        		'hasIcon': false,
	        		'hasNum': true,
	        		'num': 193,
	        		'slotValue': 2,
	        		'id': 4,
	        		'isShow': false
	        	},{
	        		'title':'音乐',
	        		'hasIcon': false,
	        		'hasNum': true,
	        		'num': '999+',
	        		'slotValue': 2,
	        		'id': 5
	        	},{
	        		'title':'舞蹈',
	        		'hasIcon': false,
	        		'hasNum': true,
	        		'num': 436,
	        		'slotValue': 2,
	        		'id': 6
	        	},{
	        		'title':'游戏',
	        		'hasIcon': false,
	        		'hasNum': true,
	        		'num': '999+',
	        		'slotValue': 2,
	        		'id': 7
	        	},{
	        		'title':'科技',
	        		'hasIcon': false,
	        		'hasNum': true,
	        		'num': '999+',
	        		'slotValue': 2,
	        		'id': 8
	        	},{
	        		'title':'数码',
	        		'hasIcon': false,
	        		'hasNum': true,
	        		'num': '999+',
	        		'slotValue': 2,
	        		'id': 9
	        	},{
	        		'title':'生活',
	        		'hasIcon': false,
	        		'hasNum': true,
	        		'num': '999+',
	        		'slotValue': 2,
	        		'id': 10
	        	},{
	        		'title':'鬼畜',
	        		'hasIcon': false,
	        		'hasNum': true,
	        		'num': '999+',
	        		'slotValue': 2,
	        		'id': 11
	        	},{
	        		'title':'时尚',
	        		'hasIcon': false,
	        		'hasNum': true,
	        		'num': '999+',
	        		'slotValue': 2,
	        		'id': 12
	        	},{
	        		'title':'广告',
	        		'hasIcon': false,
	        		'hasNum': true,
	        		'num': '999+',
	        		'slotValue': 2,
	        		'id': 13
	        	},{
	        		'title':'娱乐',
	        		'hasIcon': false,
	        		'hasNum': true,
	        		'num': '999+',
	        		'slotValue': 2,
	        		'id': 14
	        	},{
	        		'title':'影视',
	        		'hasIcon': false,
	        		'hasNum': true,
	        		'num': '999+',
	        		'slotValue': 2,
	        		'id': 15
	        	},{
	        		'title':'放映厅',
	        		'hasIcon': false,
	        		'hasNum': true,
	        		'num': '999+',
	        		'slotValue': 2,
	        		'id': 16
	        	},{
	        		'title':'专栏',
	        		'hasIcon': true,
	        		'hasNum': false,
	        		'slotValue': 1,
	        		'id': 17
	        	},{
	        		'title':'广场',
	        		'hasIcon': true,
	        		'hasNum': false,
	        		'slotValue': 1,
	        		'id': 18
	        	},{
	        		'title':'直播',
	        		'hasIcon': true,
	        		'hasNum': false,
	        		'slotValue': 1,
	        		'id': 19
	        	},{
	        		'title':'小黑屋',
	        		'hasIcon': true,
	        		'hasNum': false,
	        		'slotValue': 1,
	        		'id': 20
	        	}]
	        }
	    },
	    components:{
	    	SubTitleSlot,
	    },
	    methods: {
	    	toggleSlot: function(item) {
	    		if(item.slotValue == 2) {
	    			item.isShow = !item.isShow;
	    		}
	    	}
	    }
	}
</script>
<style scoped>
	.sub-title-contain {
		position: relative;
		margin: auto;
		width: 980px;
		font-size: 12px;
	}
	ul {
		width: 100%;
		height: 52px;
		margin: 8px 0;
		display: flex;
		align-items: flex-start;
	}
	ul li {
		height: 100%;
		width: 36px;
		margin-right: 10px;
		text-align: center;
	}
	.item-icon, .item-num {
		display: inline-block;
		width: 30px;
		height: 28px;
		line-height: 28px;
	}
	.item-icon-home {
		background: url(../../assets/images/icons.png) -658px -1170px no-repeat;
	}
	.item-icon-lan {
		background: url(../../assets/images/baseIcons.png) -87px -1814px no-repeat;
	}
	.item-icon-ground {
		background: url(../../assets/images/baseIcons.png) -87px -2006px no-repeat;
	}
	.item-icon-broadcast {
		background: url(../../assets/images/baseIcons.png) -87px -1878px no-repeat;
	}
	.item-icon-brackhouse {
		background: url(../../assets/images/baseIcons.png) -87px -1942px no-repeat;
	}
	.item-num span {
		text-align: center;
	    border-radius: 3px;
	    display: inline-block;
	    width: 30px;
	    height: 16px;
	    line-height: 16px;
	    background: #ffafc9;
	    color: #fff;
	}
	.sub-title-contain_right {
		position: absolute;
		right: -4px;
		top: 0;
	}
</style>