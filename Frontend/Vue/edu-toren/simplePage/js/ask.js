Vue.config.productionTip = false;
	// 是否允许 vue-devtools 检查代码。开发版本默认为 true，生产版本默认为 false。
Vue.config.devtools = true;
// import "store.js";
// let Store = require('./js/store.js');

let ask = new Vue({
	el: '#app',
	data: {
		pageTitle : '管理员出题页面',
		ask: '',
		anslist: []
	},
	mounted: function() {
		this.$nextTick(function(){
			this.render_wangEditor();
		});
	},
	filters: {},
	methods: {
		render_wangEditor: function() {
			let E = window.wangEditor;
			let editor = new E('#editor');
			editor.customConfig.uploadImgShowBase64 = true;
			editor.customConfig.uploadImgMaxSize = 1 * 1024 * 1024;
			editor.create();
		},
	},
});