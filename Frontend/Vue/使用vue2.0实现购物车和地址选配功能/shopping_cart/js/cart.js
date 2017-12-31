var vm = new Vue({

	el: "#app",
	data: {
		test: 'nanannana',
		totalMoney : 0,
		productList : [],
		checkedAll : false
	},
	filters: {
		formatMoney : function(value) {
			return `¥ ${value.toFixed(2)}`;
		}
	},
	mounted () {
		this.cartView();
	},
	methods: {
		cartView () {
			this.test = 'Vue Hello';
			this.$http.get("../data/cartData.json").then((res)=>{
					this.productList = res.body.result.list;
					this.totalMoney = res.body.result.totalMoney;
			});
		},
		changeNumber : function(product, number) {
			product.productQuantity = product.productQuantity + number;
			if (product.productQuantity <= 1) {
				product.productQuantity = 1;
			}
		},
		selectedProduct : function(product) {
			if (typeof product.checked === 'undefined') {
					// 全局注册一个不存在的属性
					// Vue.set(product, 'checked', true);
				// 局部注册一个不存在的属性
				this.$set(product, 'checked', true);
			} else {
				product.checked = !product.checked;
			}
		},
		checkAll (flag) {
			this.checkedAll = flag;
			this.productList.forEach((v, i)=>{
				if (typeof v.checked === 'undefined') {
					this.$set(v, 'checked', this.checkedAll);
				} else {
					v.checked = this.checkedAll;
				}
			});
		},
		calcTotalPrice : function() {
			this.productList.forEach((v, i)=>{
				if (v.checked) {
					this.$set(v, 'checked', this.checkedAll);
				} else {
					v.checked = this.checkedAll;
				}
			});
		}
	}

});
// 下面是在定义一个全局的过滤器
let gf = Vue.filter('formatPrice', function(value, type) {
	return `¥ ${value.toFixed(2)} ${type}`;
});
