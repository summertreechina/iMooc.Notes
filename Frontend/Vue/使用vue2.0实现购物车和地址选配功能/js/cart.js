Vue.config.productionTip = false;
	// 是否允许 vue-devtools 检查代码。开发版本默认为 true，生产版本默认为 false。
Vue.config.devtools = true;
	// 注册一个全局过滤 formatPrice
Vue.filter('formatPrice', function(value, type='元') {
	return `¥ ${value.toFixed(2)} ${type}`;
})
	// ViewModel 
var ShoppingCartVM = new Vue({
	el : '#app',
	data : {
		pageTitle : '使用Vue 2.0 实现购物车功能',
		totalMoney : 0,
		productList : [],
		isCheckAll : false
	},
	filters : {
		formatMoney : function(value) {
			return `¥ ${value.toFixed(2)}`;
		}
	},
	mounted : function() {
		this.$nextTick(function(){
			this.renderCartView();
		});
	},
	methods : {
		renderCartView : function() {
			this.$http.get('data/cartData.json', {'productId' : 600100002117}).then((res) => {
				this.productList = res.data.result.list;
				this.totalMoney = res.data.result.totalMoney * 0;
			}, function(err){
				console.log(err);
			});
		},
		changeMoney : function(product, flag) {
			product.productQuantity = product.productQuantity + flag;
			(product.productQuantity < 1) ? product.productQuantity = 1 : product.productQuantity;
			this.calcTotalPrice();
		},
		selectProduct : function(product) {
			if (typeof product.checked == 'undefined') {
				this.$set(product, 'checked', false);
			} else {
				product.checked = !product.checked;
			}
			this.calcTotalPrice();
		},
		checkAll : function(flag) {
			this.isCheckAll = flag;
			this.productList.forEach((product, index)=>{
				if (typeof product.checked == 'undefined') {
					this.$set(product, 'checked', flag);
				} else {
					product.checked = flag;
				}
				this.calcTotalPrice();
			});
		},
		calcTotalPrice : function() {
			this.totalMoney = 0;
			this.productList.forEach((product, index)=>{
				if (product.checked) {
					this.totalMoney += product.productQuantity * product.productPrice;
				}
			});
		},
		del : function(product) {
			swal({ 
			  title: "确定删除该商品订单吗？", 
			  text: "删除之后将永远无法恢复该订单！", 
			  type: "warning",
			  showCancelButton: true, 
			  confirmButtonColor: "#DD6B55",
			  confirmButtonText: "确定删除！", 
			  cancelButtonText: "我再想想~", 
			  closeOnConfirm: false
			},
			(isConfirm) => {
				if (isConfirm) { 
					let index = this.productList.indexOf(product);
					this.productList.splice(index, 1);
					swal("干得漂亮！", "订单信息已被删除！","success");
				} else {
					// 为什么 no isConfirm 时，走不到这里？后面再解决吧
					swal("干得漂亮！", "订单信息未被删除！","success");
				}
			});
		}
	}

});
