(function(){
	'use strict'

	function DragSort(dom) {
		let self = this;
		this.dom = $(dom);
		let isDrag = false;
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

			item.Left = $(this).offset().left;
			item.Top = $(this).offset().top;
			oldPointer.x = event.clientX;
			oldPointer.y = event.clientY;

			isDrag = true;
		});
		this.dom.on('mouseup', '.item', function(){
			if(!isDrag) return false;
			isDrag = false;
			$(this).css({
				"opacity" : "1",
				"z-index" : 0
			});
		});
		this.dom.on('mousemove', '.item', function(event) {
			event.preventDefault();
			if (isDrag) {
				let currentItem = $(this);
				currentItem.x = event.clientX;
				currentItem.y = event.clientY;

				$(this).css({
					"opacity" : "0.8",
					"z-index" : 999,
					left : currentItem.x - oldPointer.x + item.Left,
					top : currentItem.y - oldPointer.y + item.Top
				});		//console.log(oldPointer.x)

				// collisionCheck()
				let direction = null;
				currentItem.siblings(".item").each(function(index, el) {
					this.box = $(this).parent();
					if (currentItem.x > this.box.offset().left &&
						currentItem.y > this.box.offset().top && 
						(currentItem.x < this.box.offset().left + this.box.width()) &&
						(currentItem.y < this.box.offset().top + this.box.height())
						) {
							// 返回对象和方向
							if(currentItem.parent().offset().top < this.box.offset().top) {
								direction = "down" ;
							} else if(currentItem.parent().offset().top > this.box.offset().top) {
								direction = "up" ;
							} else {
								direction = "normal" ;
							}
							console.log(currentItem)
					}
				});
				

			}
		});

	}

	DragSort.prototype = {

	}



	window.Drag_sort = DragSort;

})(jQuery);