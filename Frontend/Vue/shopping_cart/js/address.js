var vm = new Vue({
	el : '.container',
	data : {
		addressList : []
	},
	mounted : function() {
		this.$nextTick(function(){
			this.getAddressList();
		});
	},
	methods : {
		getAddressList : function() {
			this.$http.get('data/address.json').then((response) => {
				let res = response.data;
				if (res.status == '0') {
					this.addressList = res.result;
				}
			});
		}
	}
});