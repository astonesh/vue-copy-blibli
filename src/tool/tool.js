import Vue from 'vue';
export default new Vue({});

const tool = {
	// parse: JSON.parse,
	// stringify: JSON.stringify,
	copy: function(item) {
		return JSON.parse(JSON.stringify(item))
	}
}
export { tool };