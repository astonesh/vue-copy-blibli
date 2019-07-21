<template>
	<div class='slot-contain'>
		<ul v-for='(list, index) in dataList.items' :key='index' v-if='dataList.items'>
			<li v-on:mouseenter='toggle(index)' v-on:mouseleave='toggle(index)'>
				<a :href='list.itemUrl'>
					<span class='myAnimation'>><span class='esp-span'>{{list.item}}</span></span>
					<span><</span>
				</a>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
export default {
	data() {
		return {
			dataList: this.item,
		}
	},
	props: ['item'],
	beforeCreate: function () {
		// debugger
		// console.log(this.item);
	},
	created: function () {
		// debugger
		// console.log(this.item);
	},
	beforeMount() {
		// console.log(this.dataList);
		this.initDataList();
		// console.log(this.item);
	},
	mounted () {
		// console.log(this.item);
	},
	methods: {
		initDataList: function() {
			if(this.dataList && this.dataList.items) {
				this.dataList.items.forEach(function(item) {
					item.isShowTag = false;
				})
			}
		},
		toggle: function($index) {
			// console.log(JSON.parse($index));
			// let itemTemp = {
			// 		item: this.dataList.items[$index].item,
			// 		itemUrl: this.dataList.items[$index].itemUrl,
			// 		isShowTag: !this.dataList.items[$index].isShowTag,
			// 	}
			// this.dataList.items.splice($index, 1 , itemTemp);
			// var a = this.dataList;
			// this.dataList.items[$index].isShowTag = !this.dataList.items[$index].isShowTag;
			// this.datalist = this.copy(this.dataList);
			// console.log(this.datalist);
			// console.log(this.datalist == a);
		}
	}
}
</script>
<style scoped>
	.slot-contain {
		position: relative;
		margin-left: -6px;
		width: 140px;
		background-color: #fff;
		padding: 10px 8px;
	}
	ul, li {
		width: 100%;
		background: red;
		overflow: hidden;
	}
	ul li {
		position: relative;
		height: 30px;
		text-align: left;
		line-height: 30px;
	}
	ul li:hover {
		padding-left: 8px;
		background-color: grey;
	}
	li a {
		display: flex;
		justify-content: flex-start;
	}
	li a > span {
		padding-right: 6px;
		padding-left: 6px;
		color: #00a1d6;
	}
	.esp-span {
		padding-left: 6px;
	}
	ul a > span.myAnimation {
		padding-right: 126px;
	}
	ul a:hover span.myAnimation {
		animation: mymove 1s;
	}
	@keyframes mymove {
		from { padding-right: 126px;}
		to { padding-right: 10px;}
	}
</style>
