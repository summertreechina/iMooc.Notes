var vm = new Vue({
	el : '.container',
	data : {
		addressList : [],
		limitNum : 2,
		currentIndex : 0,
		shippingMethod : 1,
		curItem : ''
	},
	mounted : function() {
		this.$nextTick(function(){
			this.getAddressList();
		});
	},
	computed : {
		filterAddress : function() {
			return this.addressList.slice(0, this.limitNum);
		}
	},
	methods : {
		getAddressList : function() {
			this.$http.get('data/address.json').then((response) => {
				let res = response.data;
				if (res.status == '0') {
					this.addressList = res.result;
				}
			});
		},
		setDefautle (addressId) {
			this.addressList.forEach(function(address, id){
				if (address.addressId==addressId) {
					address.isDefault = true;
				} else {
					address.isDefault = false;
				}
			})
		},
		addressDel(item) {
			let index = this.addressList.indexOf(this.curItem);
			this.addressList.splice(index,1);
		}
	}
});