var vm = new Vue({

	el: "#app",
	data: {
		test: 'nanannana'
	},
	filters: {

	},
	mounted () {
		this.cartView();
	},
	methods: {
		cartView () {
			this.test = 'Vue Hello';
		}
	}

})