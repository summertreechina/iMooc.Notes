+function(){
	'use strict';
// 注册框居中控制
	let dom = $('.container');
	let offsetTop = ($(window).height() - dom.height()) / 4;
	dom.css('margin-top', offsetTop + 'px');

// 登陆页面a-link动画小效果
	$('.js-link-effect').on('mouseover', function(e) {
		e.preventDefault();
		// alert('')
		let linkEl = $(this);
		linkEl.addClass('animated flash');
		setTimeout(function(){
			linkEl.removeClass('animated flash');
		}, 1500);
	});

// 注册身份验证码发送控制
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
			// $("#password-error").remove();
			let notice = `<label id="password-error" class="error" for="password">密码6~12位，必需同时包含数字、大小写字母，可以包含符号（注意：符号也有大小写的区分）</label>`;
			$(notice).insertAfter(this);
			console.log('获得')
		},
		blur : function() {
			$("#password-error").remove();
			console.log('失去')
		}
	});

// jQuery.Validate
// 自定义密码规则--"account"方法
	$('#signupForm').validate({
		rules : {
			// debug : true,
			account : {
				required : true,
				account  : true
			},
			password : {
				required : true,
				password : true,
			},
			confirmPassword : {
			    equalTo: password
			},
			validate : {
				required: true,
				remote  : "/rsc/demo.json",
			}
		},
		messages : {
			account : {
				required : '请输入邮箱或手机号码做为账户',
			},
			password : {
				required : '请设置账户密码',
			},
			confirmPassword : {
			    equalTo: "两次密码输入不一致"
			},
			validate : {
				required: '请填写身份验证码',
				remote  : "身份验证码不正确",
			}
		}
	});
	$.validator.addMethod("password", function(value, element, params){
	    let password = /^(?=.*[0-9].*)(?=.*[A-Z].*)(?=.*[a-z].*).{6,12}$/;
	    return password.test(value);
	}, $.validator.format("密码格式不符合要求"));
	$.validator.addMethod("account", function(value, element, params){
	    let email = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
	    let mobile = /^1[3-9][0-9]{9}$/;
	    return (mobile.test(value)) || (email.test(value));
	}, $.validator.format("请检查您输入的「邮箱」或「手机号码」"));





}();