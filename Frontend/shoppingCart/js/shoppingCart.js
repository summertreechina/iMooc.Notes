;(function(){
	'use strict';

	window.onload = function () {
		var cartTable = document.querySelector('#cartTable');
		var tr = cartTable.children[1].rows;
		var checkInputs = document.querySelectorAll('.check'); // 9个
		var checkAllInputs = document.querySelectorAll('.check-all'); // 2个
		var selectedTotal = document.querySelector('#selectedTotal');
		var priceTotal = document.querySelector('#priceTotal');
		var foot = document.querySelector('#foot');
		var selected = document.querySelector('#selected');
		var selectedViewList = document.querySelector('#selectedViewList');
		var deleteAll = document.querySelector('#deleteAll');
		// console.log(tr.length);

		// 合计
		var getTotal = function() {
			var selected = 0;
			var price = 0;
			var htmlStr = '';

			for (var i = 0, len = tr.length; i < len; i++) {
				if (tr[i].querySelector('.check-one').checked) {

					selected++;
					price += parseFloat(tr[i].querySelector('.subtotal').innerHTML);

					htmlStr += 
					'<div><img src="' +
					tr[i].querySelector('img').src +
					'"><span class="delete" index='+ i +'>取消选择</span></div>';
					
					tr[i].className = 'on';
				} else {
					tr[i].className = '';
				}
			}
			selectedTotal.innerHTML = selected;
			priceTotal.innerHTML = price.toFixed(2);
			selectedViewList.innerHTML = htmlStr;
		}
		// 小计
		var getSubTotal = function(tr) {
			var number = tr.querySelector('.count-input').value;
			var subTotal = parseFloat(tr.querySelector('.price').innerHTML)*number;
			tr.querySelector('.subtotal').innerHTML = subTotal.toFixed(2);
		}

		for (var i = 0, len = checkInputs.length; i < len; i++) {
			checkInputs[i].onclick = function() {
				// 如果‘全选’被点击......
				if (this.className == 'check-all check') {
					for (var j = 0, len = checkInputs.length; j < len; j++) {
						checkInputs[j].checked = this.checked;
					}
				}
				// 如果有一个‘未选择’......
				if (!this.checked) {
					for (var k = 0; k < checkAllInputs.length; k++) {
						checkAllInputs[k].checked = false;
					}
				}

				getTotal();
			}
		}

		selected.onclick = function() {
			if (selectedTotal.innerText != 0) {
				foot.className == 'foot' ? foot.className = 'foot show' : foot.className = 'foot';
			} else {
				foot.className = 'foot';
			}
		}

		// 事件代理
		// 如果页面中绑定太多事件性能会降低
		selectedViewList.onclick = function(e) {
			e = e || window.event;
			var el = e.srcElement;
			var id = null;
			var input = null;

			if (el.className == 'delete') {
				id = el.getAttribute('index');
				input = tr[id].querySelector('input');
				input.checked = false;

				// 调用其它事件
				// 之前在<input>上绑定的事件尚未解除
				input.onclick();
			}
		}

		for (var i = 0, len = tr.length; i < len; i++) {
			tr[i].onclick = function(e) {
				var el = e.srcElement;
				var className = el.className;
				var input = this.querySelector('.count-input');
				var inputNum = parseInt(input.value);
				var reduceElm = this.querySelector('.reduce');

				switch(className) {
					case 'add':
						input.value = inputNum+1;
						if (input.value > 1) {
							reduceElm.innerHTML = '-';
							getSubTotal(this);
						}
						break;
					case 'reduce':
						if (input.value > 1) {
							input.value = inputNum-1;
							getSubTotal(this);
						}
						if (input.value <= 1) {
							input.value = 1;
							reduceElm.innerHTML = '';
						}
						break;
					case 'delete':
					this.className = 'ui orange';
						var answer = confirm('您确定要删除吗？');
						// console.log(this);
						if (answer) {
							this.parentNode.removeChild(this);
						}
						break;
					case 'check-one check':
						//
						break;
					default:
						//
				}
				getTotal()
			}

			tr[i].querySelector('.count-input').onkeyup = function() {
				var val = parseInt(this.value);
				var tr = this.parentNode.parentNode;
				var reduceBtn = tr.querySelector('.reduce');
				if (isNaN(val) || val < 1) {
					val = 1;
				}
				this.value = val;
				if (val <= 1) {
					reduceBtn.innerHTML = '';
				} else {
					reduceBtn.innerHTML = '-';
				}
				getSubTotal(tr);
				getTotal();
			}
		}

		deleteAll.onclick = function() {
			if (selectedTotal.innerHTML != 0) {
				for (var i = 0; i < tr.length; i++) {
				// for (var i = 0, len = tr.length; i < len; i++) {
				// 报错。两种写法，第一种写法'len'的长度是随着删除而减小的。第二种写法'len'始终不变，删除至没有对象时就会报错。
					var isChecked = tr[i].querySelector('.check-one.check').checked;
					if (isChecked) {
						tr[i].parentNode.removeChild(tr[i]);
						i--;
						// console.log(i);
					}
				}
				getTotal();
			} 
		}
	}

})();