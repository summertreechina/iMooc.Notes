(function(){
	console.log("网页可见区域宽：" + document.body.clientWidth);
	console.log("网页可见区域高：" + document.body.clientWidth);
	console.log("网页可见区域宽（包括边线的宽）：" + document.body.offsetWidth);
	console.log("网页可见区域宽（包括边线的高）：" + document.body.offsetHeight);
	console.log("网页正文全文宽：" + document.body.scrollWidth);
	console.log("网页正文全文高：" + document.body.scrollHeight);
	console.log("网页被卷去的高：" + document.body.scrollTop);
	console.log("网页被卷去的左：" + document.body.scrollLeft);
	console.log("网页正文部分上：" + window.screenTop);
	console.log("网页正文部分左：" + window.screenLeft);
	console.log("屏幕分辨率的高：" + window.screen.height);
	console.log("屏幕分辨率的宽：" + window.screen.width);
	console.log("屏幕可用工作区域高：" + window.screen.availHeight);
	console.log("屏幕可用工作区域宽：" + window.screen.availWidth);
})();

