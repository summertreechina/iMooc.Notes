;(function($, win, doc, undefined){
	'use strict';

	// const endTime = new Date(2017, 4, 22, 19, 47, 10);   // javascript月份是从0开始的 ?时间格式有误
	const colors  = [ 
		"#33b5e5", "#0099cc", "#aa66cc", "#9933cc", "#99cc00", 
		"#669900", "#ffbb33", "#ff8800", "#ff4444", "#cc0000" 
	];
	var endTime = new Date();
	endTime.setTime( endTime.getTime() + 3600*1000 );

	var curShowTimeSeconds = 0;
	// var diff_time;

	var WINDOW_WIDTH  = $(win).width();
	var WINDOW_HEIGHT = $(win).height();
	// var WINDOW_HEIGHT = 900;
	var RADIUS        = Math.round(WINDOW_WIDTH * 4 / 5 / 108)-1;
	var MARGIN_LEFT   = Math.round(WINDOW_WIDTH /10);
	var MARGIN_TOP    = Math.round(WINDOW_HEIGHT /5);
	var balls         = [];

	var canvas  = doc.querySelector('#Countdown');
	var context = canvas.getContext('2d');

	canvas.width  = WINDOW_WIDTH;
	canvas.height = WINDOW_HEIGHT;

	curShowTimeSeconds = getCurrentShowTimeSeconds();

	setInterval(
		function(){
			render( context );
			updata();
		
	}, 50);


	// $('#fs-btn').on("click", function() {
	$('canvas').on("click", function() {
	    if (runPrefixMethod(document, "FullScreen") || runPrefixMethod(document, "IsFullScreen")) {
	        runPrefixMethod(document, "CancelFullScreen");
	        this.title = this.title.replace("退出", "");
	    } else if (runPrefixMethod(this, "RequestFullScreen")) {
	        this.title = this.title.replace("点击", "点击退出");
	    }
	});


	function runPrefixMethod(element, method) {
	    var usablePrefixMethod;
	    ["webkit", "moz", "ms", "o", ""].forEach(function(prefix) {
	        if (usablePrefixMethod) return;
	        if (prefix === "") {
	            // 无前缀，方法首字母小写
	            method = method.slice(0,1).toLowerCase() + method.slice(1);
	            
	        }
	        
	        var typePrefixMethod = typeof element[prefix + method];
	        
	        if (typePrefixMethod + "" !== "undefined") {
	            if (typePrefixMethod === "function") {
	                usablePrefixMethod = element[prefix + method]();
	            } else {
	                usablePrefixMethod = element[prefix + method];
	            }
	        }
	    });
	    
	    // console.log(usablePrefixMethod)
	    // return usablePrefixMethod;
	    return undefined;
	};

/**
 * [获取当前显示的时间]
 * @return {[type]} [description]
 */
	function getCurrentShowTimeSeconds() {
		/*倒计时效果*/
		var curTime = new Date();
		var ret     = endTime.getTime() - curTime.getTime();
		ret         = Math.round(ret/1000);

		return ret>=0 ? ret : 0;

		/*时钟效果*/
		// var curTime = new Date();
		// var ret     = curTime.getHours()*3600 + curTime.getMinutes()*60 + curTime.getSeconds();
		// return ret;
	}

/**
 * [绘制]
 * @param  {[type]} context [description]
 * @return {[type]}         [description]
 */
	function render(context) {

		context.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);	// 清空画布

		var hours   = parseInt( curShowTimeSeconds/3600 );
		var minutes = parseInt( (curShowTimeSeconds - hours*3600)/60 );
		var seconds = parseInt( curShowTimeSeconds%60 );


		/*思路 | 是否可以直接用一个函数输出系统时间 拆分一位绘制一位 最后形成时钟效果*/
		renderDigit(MARGIN_LEFT, MARGIN_TOP, parseInt(hours/10), context);
		renderDigit(MARGIN_LEFT+15*(RADIUS+1), MARGIN_TOP, parseInt(hours%10), context);

		renderDigit(MARGIN_LEFT+30*(RADIUS+1), MARGIN_TOP, 10, context);

		renderDigit(MARGIN_LEFT+39*(RADIUS+1), MARGIN_TOP, parseInt(minutes/10), context);
		renderDigit(MARGIN_LEFT+54*(RADIUS+1), MARGIN_TOP, parseInt(minutes%10), context);

		renderDigit(MARGIN_LEFT+69*(RADIUS+1), MARGIN_TOP, 10, context);

		renderDigit(MARGIN_LEFT+78*(RADIUS+1), MARGIN_TOP, parseInt(seconds/10), context);
		renderDigit(MARGIN_LEFT+93*(RADIUS+1), MARGIN_TOP, parseInt(seconds%10), context);

		for ( var i=0; i<balls.length; i++ ) {
			context.fillStyle = balls[i].color;

			context.beginPath();
			context.arc( balls[i].x, balls[i].y, RADIUS, 0, 2*Math.PI, true );
			context.closePath();

			context.fill();
		}

	}

/**
 * [更新画面]
 * @return {[type]} [description]
 */
	function updata() {
		var nextShowTimeSeconds = getCurrentShowTimeSeconds();

		var nextHours   = parseInt( nextShowTimeSeconds/3600 );
		var nextMinutes = parseInt( (nextShowTimeSeconds - nextHours*3600)/60 );
		var nextSeconds = nextShowTimeSeconds%60;

		var curHours   = parseInt( curShowTimeSeconds/3600 );
		var curMinutes = parseInt( (curShowTimeSeconds - curHours*3600)/60 );
		var curSeconds = curShowTimeSeconds%60;

		if (nextSeconds != curSeconds) {

			// 更新小时
			if (parseInt(curHours/10) != parseInt(nextHours/10)) {
				addBalls(MARGIN_LEFT+0, MARGIN_TOP, parseInt(curHours/10));
			}
			if (parseInt(curHours%10) != parseInt(nextHours%10)) {
				addBalls(MARGIN_LEFT + 15*(RADIUS+1), MARGIN_TOP, parseInt(curHours/10));
			}

			// 更新分钟
			if (parseInt(curMinutes/10) != parseInt(nextMinutes/10)) {
				addBalls(MARGIN_LEFT+ 39*(RADIUS+1), MARGIN_TOP, parseInt(curMinutes/10));
			}
			if (parseInt(curMinutes%10) != parseInt(nextMinutes%10)) {
				addBalls(MARGIN_LEFT+ 54*(RADIUS+1), MARGIN_TOP, parseInt(curMinutes%10));
			}

			// 更新秒钟
			if (parseInt(curSeconds/10) != parseInt(nextSeconds/10)) {
				addBalls(MARGIN_LEFT+ 78*(RADIUS+1), MARGIN_TOP, parseInt(curSeconds/10));
			}
			if (parseInt(curSeconds%10) != parseInt(nextSeconds%10)) {
				addBalls(MARGIN_LEFT+ 93*(RADIUS+1), MARGIN_TOP, parseInt(curSeconds%10));
			}

			// 将要显示的时间 赋值给 当前显示的时间
			curShowTimeSeconds = nextShowTimeSeconds;
		}

		updataBalls();
		// console.log(balls.length + '个小球')
	}

	function updataBalls() {
		// var ballAmount = 0;	// 小球的总数
		for ( var i=0; i<balls.length; i++ ) {

			balls[i].x += balls[i].vx;
			balls[i].y += balls[i].vy;
			balls[i].vy+= balls[i].g;

			// 碰撞检测
			if (balls[i].y >= WINDOW_HEIGHT-RADIUS ) {
				balls[i].y = WINDOW_HEIGHT-RADIUS;
				balls[i].vy= - balls[i].vy * 0.65;
			}
		}


		var ballAmount = 0;	// 小球的总数
		for ( var i=0; i<balls.length; i++ ) {
			if ( balls[i].x + RADIUS > 0 && balls[i].x - RADIUS < WINDOW_WIDTH ) {
				balls[ballAmount++] = balls[i];
			}
		}
			
		while ( balls.length > ballAmount ) {
			balls.pop();
			// console.log(balls.length);
		}

	}

/**
 * [添加小球]
 * @param {[type]} x   [description]
 * @param {[type]} y   [description]
 * @param {[type]} num [description]
 */
	function addBalls(x, y, num) {
		for ( var i=0; i<digit[num].length; i++ ) {
			for ( var j=0; j<digit[num][i].length; j++ ) {
				if ( digit[num][i][j] == 0 ) {
					var aBall = {
						x     : x + j*2*(RADIUS+1) + (RADIUS+1),
						y     : y + i*2*(RADIUS+1) + (RADIUS+1),
						g     : 1.5*Math.random(),
						vx    : Math.pow( -1 , Math.ceil( Math.random()*1000 ) ) * 4,
						vy    : getRandomInt(5, -8),
						color : colors[getRandomInt(colors.length, -1)],
					};

					balls.push(aBall);
				}
			}
		}
	}


/**
 * [绘制时钟]
 * @param  {[int]}  x   [x坐标]
 * @param  {[int]}  y   [y坐标]
 * @param  {[int]}  num [在digit中的键名]
 * @param  {[type]} cxt [context]
 * @return {[type]}     [绘制一个圆]
 */
	function renderDigit(x, y, num, cxt) {

		cxt.fillStyle = 'rgb(0,102,153)';

		for (var i=0; i<digit[num].length; i++) {
			for (var k=0; k<digit[num][i].length; k++) {

				if (digit[num][i][k] == 1) {
					var centerX = x + k*2*(RADIUS + 1) + (RADIUS + 1);
					var centerY = y + i*2*(RADIUS + 1) + (RADIUS + 1);

					cxt.beginPath();
					cxt.arc(centerX, centerY, RADIUS, 0, 2*Math.PI, false);
					cxt.closePath();

					cxt.fill();
				}

			}
		}
	}

/**
 * [获取一个随机整数]
 * @param  {[INT]} rangInt [范围 | 正整数]
 * @param  {[INT]} negInt  [调节数 | 可以为负数 以获取负数]
 * @return {[INT]}         [整数]
 */
	function getRandomInt(rangInt, negInt=0) {
		return parseInt(rangInt*Math.random() + negInt);
	}




})(jQuery, window, document);