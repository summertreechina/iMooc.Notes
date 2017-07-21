+function(){
	'use strict';
// 注册框居中控制
	let dom = $('.container');
	let offsetTop = ($(window).height() - dom.height()) / 4;
	dom.css('margin-top', offsetTop + 'px');

// 注册身份验证码发送控制
	// if (!$('#postCode').attr('disabled')) {
	// 	console.log('true')
	// 	// 按钮'disabled'竟然也可以点击 屏蔽之 
	// 	$('#postCode').on('click', function(e) {
	// 		e.preventDefault();
	// 		let self = this;		
	// 		// 点击后不能再次点击
	// 		$(self).attr('disabled', 'disabled');
	// 		// 时长
	// 		let i = 60*0.1;
	// 		let oldTxt = $(self).text();
	// 		let timer = setInterval(function(){
	// 			i--;
	// 			$(self).text('还剩' + i + 'S');
	// 		}, 1000);
	// 		setTimeout(function(){
	// 			// 恢复可点击状态
	// 			$(self).removeAttr('disabled');
	// 			// 清除定时器
	// 			clearTimeout(timer);
	// 			// 恢复按钮内文字
	// 			$(self).text(oldTxt);
	// 		}, 1000*i);
	// 	});
	// }
	$('#postCode').click(function(event) {
		event.preventDefault();
		if ($('#postCode').attr('disabled')) { return; alert('') };
		if (!$('#postCode').attr('disabled')) {
			let self = this;		
			// 点击后不能再次点击
			$(self).attr('disabled', 'disabled');
			// 时长
			let i = 60*0.5;
			let oldTxt = $(self).text();
			let timer = setInterval(function(){
				i--;
				$(self).text('还剩' + i + 'S');
			}, 1000);
			setTimeout(function(){
				// 恢复可点击状态
				$(self).removeAttr('disabled');
				// 清除定时器
				clearTimeout(timer);
				// 恢复按钮内文字
				$(self).text(oldTxt);
			}, 1000*i);
		}
	});
	function postCodeCtrl() {
		console.log(event)
		if (!$('#postCode').attr('disabled')) {
			
			// 按钮'disabled'竟然也可以点击 屏蔽之 
			$('#postCode').on('click', function(e) {
				e.preventDefault();
				let self = this;		
				// 点击后不能再次点击
				$(self).attr('disabled', 'disabled');
				// 时长
				let i = 60*0.1;
				let oldTxt = $(self).text();
				let timer = setInterval(function(){
					i--;
					$(self).text('还剩' + i + 'S');
				}, 1000);
				setTimeout(function(){
					// 恢复可点击状态
					$(self).removeAttr('disabled');
					// 清除定时器
					clearTimeout(timer);
					// 恢复按钮内文字
					$(self).text(oldTxt);
				}, 1000*i);
			});
		}
	}

// 鉴别输入的账号类型
	$('#account').on('blur', function(event) {
		event.preventDefault();
		let content = $(this).val();
		let regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
		let regMobile = /^1[3-8][0-9]{9}$/;
		if (regEmail.test(content)) {
			$('#postCode').removeAttr('disabled');
			$('#postCode').text('用邮箱接收验证码');
			return '邮箱';
		} else if (regMobile.test(content)) {
			$('#postCode').removeAttr('disabled');
			$('#postCode').text('用手机接收验证码');
			return '手机';
		} else {
			$('#postCode').attr('disabled', 'disabled');
		}
	});

// 输入密码时，密码规则的提示
	$('#password').on({
		focus : function() {
			let notice = `<label id="password-error" class="error" for="password">密码6~12位，必需包含数字、大小写字母，可以包含符号（注意：符号也有大小写的区分）</label>`;
			$(notice).insertAfter(this);
			console.log('获得')
		},
		blur : function() {
			$("#password-error").remove()
			console.log('失去')
		}
	});




}();