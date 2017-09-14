;(function($, win, doc, undefined){
	'use strict';

	var canvas1 = doc.querySelector('#canvas1');
	var context = canvas1.getContext('2d');

	if (!context) {
		alert('您的浏览器不支持canvas技术，请更换浏览器后再试。');
	}

	canvas1.width  = 800;
	canvas1.height = 600;

	/*绘制直线*/
	context.beginPath();
	context.moveTo(0, 0);      // 状态设置 | 起点
	context.lineTo(800, 600);  // 状态设置 | 终点
	context.lineTo(800, 0);
	context.lineTo(0, 0);
	context.closePath();

	context.lineWidth = 5;     // 状态设置 | 线宽
	context.strokeStyle = '#005588'; // 所有的style都是string赋值

	context.stroke();          // 执行

	/*填充颜色*/
	context.fillStyle = 'rgba(2, 100, 30, .2)';  // 状态设置 | 所有的style都是string赋值
	context.fill();

	/*绘制第二条直线*/
	context.beginPath();
	context.moveTo(0, 60);
	context.lineTo(740, 600);
	context.closePath();
	context.lineWidth = 5;
	context.strokeStyle = 'red';
	context.stroke();

	/*绘制平行线*/

	/*绘制圆弧 | 顺时针*/
	context.beginPath();
	context.arc(400, 300, 200, 0, 1.5*Math.PI, false);
	context.closePath();
	context.lineWidth = 4;
	context.strokeStyle = 'rgba(60, 60, 60, .5)';
	
	context.stroke();

	/*绘制圆弧 | 逆时针*/
	context.beginPath();
	context.arc(410, 290, 200, 0, 1.5*Math.PI, true);
	context.closePath();    // closePath()不是必须的
	context.lineWidth = 9;
	context.strokeStyle = 'rgba(20, 120, 60, .4)';

	context.stroke();

	/*绘制正方形*/
	context.beginPath();
	context.fillStyle = 'green';
	context.fillRect(100, 100, 400, 400);




})(jQuery, window, document);