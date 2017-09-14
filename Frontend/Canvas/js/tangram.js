;(function($, win, doc, undefined){
	/*七巧板项目*/
	
	'use strict';

	var canvas_circle = doc.querySelector('#circle');
	canvas_circle.width = 600;
	canvas_circle.height= 600;

	var context = canvas_circle.getContext('2d');

	context.arc(300, 300, 150, 0, 2.0*Math.PI, false);
	context.lineWidth   = 4;
	context.strokeStyle = '#005588';
	context.stroke();

})(jQuery, window,document);