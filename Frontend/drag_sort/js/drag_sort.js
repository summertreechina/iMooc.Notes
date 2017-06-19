(function(){
	'use strict'

	function DragSort(dom) {
		let self = this;
		this.dom = $(dom);
		this.isDrag = false;
		let item = {};
		let oldPointer = {};

		this.dom.find('.item').each(function(index, el) {
			let parent = $(el).parent();
			$(el).attr("sort", index).css({
					position : "absolute",
					left : parent.offset().left,
					top : parent.offset().top
				}).appendTo(self.dom);
		});

		
		this.dom.on('mousedown', '.item', function(event) {
			event.preventDefault();

			// let item = {};
			// let oldPointer = {};
			item.Left = $(this).offset().left;
			item.Top = $(this).offset().top;
			oldPointer.x = event.clientX;
			oldPointer.y = event.clientY;

			self.isDrag = true;
		});
		this.dom.on('mouseup', function(){
			self.isDrag = false;

		});
		this.dom.on('mousemove', '.item', function(event) {
			event.preventDefault();
			$(this).css({
					"opacity" : "0.8",
					"z-index" : 999
			})
			if (self.isDrag) {

				$(this).css({
						left : event.clientX - oldPointer.x + item.Left,
						top : event.clientY - oldPointer.y + item.Top
				});console.log(oldPointer.x)
			}
		});

	}

	DragSort.prototype = {

	}



	window.Drag_sort = DragSort;

})(jQuery);