+function(){
	'user strcit';
	
	// 控制元素局中
	makeCenter();
	// 登陆框关闭按钮功能
	closeBtn();
	// 控制元素局中
	function makeCenter() {
		let dom = $('#siginBox');
		let offsetTop = ($(window).height() - dom.height()) / 4;

		dom.css('margin-top', offsetTop + 'px');
	};
	// 登陆框关闭按钮功能
	function closeBtn() {
		$('#siginBox .close-btn').on('click', function(){
			$('#siginBox').hide();
			$('#footer').addClass('animated fadeOut');
		});
	};
	// 登陆页面a-link动画效果控制
	$('.js-link-effect').on('mouseover', function(e) {
		e.preventDefault();
		let linkEl = $(this);
		linkEl.addClass('animated swing');
		setTimeout(function(){
			linkEl.removeClass('animated swing');
		}, 1500);
	});

	// 登陆信息验证
	$('#siginForm').validate({
		rules : {
			debug : true,
			account : {
				required : true,
				account  : true
			},
			password : {
				required : true,
				minlength: 6,
				maxlength: 16
			},
			validate : {
				required: true,
				// remote  : "/rsc/demo.json",
			}

		},
		messages : {
			account : {
				required : '请输入账号',
			},
			password : {
				required : '请输入密码',
				minlength: '密码至少9位',
				maxlength: '密码最多16位'
			},
			validate : {
				required: '请输入验证码',
				remote  : '验证码输入错误',
			}
		}
	});
	// 自定义的手机号和邮箱同时登陆验证--"account"方法
	$.validator.addMethod("account", function(value, element, params){
	    let email = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
	    let mobile = /^1[0-9]{10}$/;
	    return (mobile.test(value)) || (email.test(value));
	}, $.validator.format("请检查您输入的「邮箱」或「手机号码」"));

}();