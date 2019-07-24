<template>
	<div class='sub-title-contain'>
		<ul class='sub-title-lists'>
		<li :class='{"sub-title-item": true, "sub-title-item_hover-col": item.slotValue == 3}' v-for='item in subTitle' :key='item.id' v-on:mouseenter='toggleSlot(item)' v-on:mouseleave='toggleSlot(item)'>
		<a :href='item.linkHref'>
		<div class='item-icon' v-if='item.hasIcon' v-bind:class='{"item-icon-home": item.id==1, "item-icon-lan": item.id==17, "item-icon-ground": item.id==18, "item-icon-broadcast": item.id==19, "item-icon-brackhouse": item.id==20,   }'></div>
		<div class='item-num' v-if='item.hasNum'><span>{{item.num}}</span></div>
		<div class='item-title'>{{item.title}}</div>
		</a>
		<div v-if='item.slotValue == 2 ||(item.slotValue == 3 && item.isShowSlot)' v-show='item.isShow'>
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
  data () {
    return {
		  subTitle: [{
				'title': '首页',
				'hasIcon': true,
				'hasNum': false,
				'slotValue': 1,
				'linkHref': '#',
				'id': 1
		  }, {
				'title': '动画',
				'hasIcon': false,
				'hasNum': true,
				'num': '999+',
				'slotValue': 2,
				'linkHref': '#',
				'items': [{
					'item': 'MAD.MAV',
					'itemUrl': '#'
				}, {
					'item': 'MMD.3D',
					'itemUrl': '#'
				}, {
					'item': '短片.手书.配音',
					'itemUrl': '#'
				}, {
					'item': '特摄',
					'itemUrl': '#'
				}, {
					'item': '综合',
					'itemUrl': '#'
				}],
				'id': 2,
				'isShow': false
		  }, {
				'title': '番剧',
				'hasIcon': false,
				'hasNum': true,
				'num': 135,
				'slotValue': 2,
				'linkHref': '#',
				'items': [{
					'item': '连载动画',
					'itemUrl': '#'
				}, {
					'item': '完结动画',
					'itemUrl': '#'
				}, {
					'item': '资讯',
					'itemUrl': '#'
				}, {
					'item': '官方延申',
					'itemUrl': '#'
				}, {
					'item': '新番时间表',
					'itemUrl': '#'
				}, {
					'item': '番剧索引',
					'itemUrl': '#'
				}],
				'id': 3,
				'isShow': false
		  }, {
				'title': '国创',
				'hasIcon': false,
				'hasNum': true,
				'num': 193,
				'slotValue': 2,
				'linkHref': '#',
				'items': [{
					'item': '国产动画',
					'itemUrl': '#'
				}, {
					'item': '国产原创相关',
					'itemUrl': '#'
				}, {
					'item': '布袋戏',
					'itemUrl': '#'
				}, {
					'item': '动态漫.广播剧',
					'itemUrl': '#'
				}, {
					'item': '资讯',
					'itemUrl': '#'
				}, {
					'item': '新番时间表',
					'itemUrl': '#'
				}, {
					'item': '番剧索引',
					'itemUrl': '#'
				}],
				'id': 4,
				'isShow': false
		  }, {
				'title': '音乐',
				'hasIcon': false,
				'hasNum': true,
				'num': '999+',
				'slotValue': 2,
				'linkHref': '#',
				'items': [{
					'item': '原创音乐',
					'itemUrl': '#'
				}, {
					'item': '翻唱',
					'itemUrl': '#'
				}, {
					'item': 'VOLCALID',
					'itemUrl': '#'
				}, {
					'item': '电音',
					'itemUrl': '#'
				}, {
					'item': '演奏',
					'itemUrl': '#'
				}, {
					'item': 'MV',
					'itemUrl': '#'
				}, {
					'item': '音乐现场',
					'itemUrl': '#'
				}, {
					'item': '音乐综合',
					'itemUrl': '#'
				}, {
					'item': '音频',
					'itemUrl': '#'
				}],
				'id': 5,
				'isShow': false
		  }, {
				'title': '舞蹈',
				'hasIcon': false,
				'hasNum': true,
				'num': 436,
				'slotValue': 2,
				'linkHref': '#',
						'items': [{
							'item': '宅舞',
							'itemUrl': '#'
						}, {
							'item': '三次元舞蹈',
							'itemUrl': '#'
						}, {
							'item': '舞蹈教程',
							'itemUrl': '#'
						}],
						'id': 6,
						'isShow': false
		  }, {
						'title': '游戏',
						'hasIcon': false,
						'hasNum': true,
						'num': '999+',
				'slotValue': 2,
				'linkHref': '#',
						'items': [{
							'item': '单机游戏',
							'itemUrl': '#'
						}, {
							'item': '电子游戏',
							'itemUrl': '#'
						}, {
							'item': '手机游戏',
							'itemUrl': '#'
						}, {
							'item': '网络游戏',
							'itemUrl': '#'
						}, {
							'item': '桌游游戏',
							'itemUrl': '#'
						}, {
							'item': 'GMV',
							'itemUrl': '#'
						}, {
							'item': '音频',
							'itemUrl': '#'
						}, {
							'item': 'Mugen',
							'itemUrl': '#'
						}, {
							'item': '游戏赛事',
							'itemUrl': '#'
						}],
						'id': 7,
						'isShow': false
		  }, {
						'title': '科技',
						'hasIcon': false,
						'hasNum': true,
						'num': '999+',
				'slotValue': 2,
				'linkHref': '#',
						'items': [{
							'item': '趣味科普人文',
							'itemUrl': '#'
						}, {
							'item': '野生技术学会',
							'itemUrl': '#'
						}, {
							'item': '演讲公开课',
							'itemUrl': '#'
						}, {
							'item': '星海',
							'itemUrl': '#'
						}, {
							'item': '机械',
							'itemUrl': '#'
						}, {
							'item': '汽车',
							'itemUrl': '#'
						}],
						'id': 8,
						'isShow': false
		  }, {
						'title': '数码',
						'hasIcon': false,
						'hasNum': true,
						'num': '999+',
				'slotValue': 2,
				'linkHref': '#',
						'items': [{
							'item': '手机平板',
							'itemUrl': '#'
						}, {
							'item': '电脑装机',
							'itemUrl': '#'
						}, {
							'item': '摄影摄像',
							'itemUrl': '#'
						}, {
							'item': '影音智能',
							'itemUrl': '#'
						}],
						'id': 9,
						'isShow': false
		  }, {
						'title': '生活',
						'hasIcon': false,
						'hasNum': true,
						'num': '999+',
				'slotValue': 2,
				'linkHref': '#',
						'items': [{
							'item': '搞笑',
							'itemUrl': '#'
						}, {
							'item': '日常',
							'itemUrl': '#'
						}, {
							'item': '美食圈',
							'itemUrl': '#'
						}, {
							'item': '动物圈',
							'itemUrl': '#'
						}, {
							'item': '手工',
							'itemUrl': '#'
						}, {
							'item': '绘画',
							'itemUrl': '#'
						}, {
							'item': '运动',
							'itemUrl': '#'
						}, {
							'item': '其他',
							'itemUrl': '#'
						}],
						'id': 10,
						'isShow': false
		  }, {
						'title': '鬼畜',
						'hasIcon': false,
						'hasNum': true,
						'num': '999+',
				'slotValue': 2,
				'linkHref': '#',
						'items': [{
							'item': '鬼畜调教',
							'itemUrl': '#'
						}, {
							'item': '音MAD',
							'itemUrl': '#'
						}, {
							'item': '人力VOLCAL',
							'itemUrl': '#'
						}, {
							'item': '教程演示',
							'itemUrl': '#'
						}],
						'id': 11,
						'isShow': false
		  }, {
						'title': '时尚',
						'hasIcon': false,
						'hasNum': true,
						'num': '999+',
				'slotValue': 2,
				'linkHref': '#',
						'items': [{
							'item': '美妆',
							'itemUrl': '#'
						}, {
							'item': '服饰',
							'itemUrl': '#'
						}, {
							'item': '健身',
							'itemUrl': '#'
						}, {
							'item': 'T台',
							'itemUrl': '#'
						}, {
							'item': '风尚标',
							'itemUrl': '#'
						}],
						'id': 12,
						'isShow': false
		  }, {
						'title': '广告',
						'hasIcon': false,
						'hasNum': true,
						'num': '999+',
						'slotValue': 2,
						'id': 13
		  }, {
						'title': '娱乐',
						'hasIcon': false,
						'hasNum': true,
						'num': '999+',
				'slotValue': 2,
				'linkHref': '#',
				'items': [{
					'item': '综艺',
					'itemUrl': '#'
				}, {
					'item': '明星',
					'itemUrl': '#'
				}, {
					'item': 'Korea相关',
					'itemUrl': '#'
				}],
				'id': 14,
				'isShow': false
		  }, {
				'title': '影视',
				'hasIcon': false,
				'hasNum': true,
				'num': '999+',
				'slotValue': 2,
				'linkHref': '#',
				'items': [{
					'item': '影视杂谈',
					'itemUrl': '#'
				}, {
					'item': '影视剪辑',
					'itemUrl': '#'
				}, {
					'item': '预告.资讯',
					'itemUrl': '#'
				}, {
					'item': '短片',
					'itemUrl': '#'
				}],
				'id': 15,
				'isShow': false
		  }, {
				'title': '放映厅',
				'hasIcon': false,
				'hasNum': true,
				'num': '999+',
				'slotValue': 2,
				'linkHref': '#',
				'items': [{
					'item': '纪录片',
					'itemUrl': '#'
				}, {
					'item': '电影',
					'itemUrl': '#'
				}, {
					'item': '电视剧',
					'itemUrl': '#'
				}],
				'id': 16,
				'isShow': false
		  }, {
				'title': '专栏',
				'hasIcon': true,
				'hasNum': false,
				'slotValue': 3,
				'isShowSlot': false,
				'id': 17,
				'isShow': false
		  }, {
				'title': '广场',
				'hasIcon': true,
				'hasNum': false,
				'slotValue': 3,
				'isShowSlot': true,
				'id': 18,
				'isShow': false
		  }, {
				'title': '直播',
				'hasIcon': true,
				'hasNum': false,
				'slotValue': 3,
				'isShowSlot': true,
				'id': 19,
				'isShow': false
		  }, {
				'title': '小黑屋',
				'hasIcon': true,
				'hasNum': false,
				'slotValue': 3,
				'isShowSlot': false,
				'id': 20,
				'isShow': false
		  }]
    }
  },
	components: {
    SubTitleSlot
	},
	methods: {
		toggleSlot: function (item) {
		  if (item.slotValue == 2 || (item.slotValue == 3 && item.isShowSlot)) {
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
	.sub-title-item_hover-col:hover .item-title {
		color: #00a1d6;
	}
</style>
