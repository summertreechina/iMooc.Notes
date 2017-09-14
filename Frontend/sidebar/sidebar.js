;(function($){
	// 这是第二次创建的原型
	var Menubar = function () {
		var self                     = this;
		this.el                      = $('#sidebar ul');
		this.state                   = 'allClosed';
		this.currentOpendMenuContent = null;
		this.el.on('click', function(e){
			e.stopPropagation();
		});
		this.menuList = $('#sidebar ul>li');
		for (var i = 0; i < this.menuList.length; i++) {
			this.menuList[i].onclick = function (e) {
				var str           = '#' + this.id + '-content';
				var menuContentEl = $(str);

				// 如果没有打开的菜单 则直接打开被点击的菜单 如果有已打开的菜单 我们先将其关闭 再打开被点击的菜单
				if (self.state == 'allClosed') {
					// console.log('打开' + menuContentEl.attr('id'));
					menuContentEl.removeClass('menuContent-move-left');
					menuContentEl.css({
						'top'   : '0',
						'left'	: '-85px'
					});
					menuContentEl.addClass('nav-content menuContent-move-right');
					// menuContentEl.addClass('menuContent-move-right');
					self.state = 'hasOpened';
					self.currentOpendMenuContent = menuContentEl;
				} else {
					// console.log('关闭' + self.currentOpendMenuContent);
					self.currentOpendMenuContent.addClass('nav-content');
					self.currentOpendMenuContent.removeClass('menuContent-move-right');
					self.currentOpendMenuContent.css({
						'top'   : '0',
						'left'  : '35px'
					});
					self.currentOpendMenuContent.addClass('menuContent-move-left');
					// console.log('打开' + menuContentEl.attr('id'));
					menuContentEl.addClass('nav-content');
					menuContentEl.css({
						'top'   : '250px',
						'left'  : '35px'
					});
					menuContentEl.addClass('menuContent-move-up');
					
					self.state = 'hasOpened';
					self.currentOpendMenuContent = menuContentEl;
				};
			};
		};
		this.menuContentList = $('.nav-con-close');
		for (var i = 0; i<this.menuContentList.length; i++) {
			console.log(this.menuContentList[i])
			this.menuContentList[i].onclick = function(e) {
			};
		};
	};
	// 第一个字母必须大写，是构造函数的基本规范 这是第一次创建的原型
	var Sidebar = function( element_id, closeBar_id ){
		var self     = this;
		var eId      = '#' + element_id;
		var cId      = '#' + closeBar_id;
		this.state   = 'opened';
		this.element = $(eId);
		this.closeBarEl = $(cId);
		var menubar  = new Menubar();
		this.element.on('click', function(e){
			e.stopPropagation();
		});
		this.closeBarEl.on('click', function(event){
			if (event.target !== self.element) {
				self.triggerSwitch();
			}
		});
	};
	Sidebar.prototype.open = function () {
		console.log('打开sidebar');
		this.element.css({'left' : '-160px'});
		this.element.removeClass('sidebar-move-left');
		this.element.addClass('sidebar-move-right');
		this.closeBarEl.css({'left' : '160px'});
		this.closeBarEl.removeClass('closeBar-move-right');
		this.closeBarEl.addClass('closeBar-move-left');
		this.state = 'opened';
	};
	Sidebar.prototype.close = function () {
		console.log('关闭sidebar');
		this.element.removeClass('sidebar-move-right');
		this.element.addClass('sidebar-move-left');
		this.closeBarEl.removeClass('closeBar-move-left');
		this.closeBarEl.addClass('closeBar-move-right');
		this.state = 'closed';
	};
	Sidebar.prototype.triggerSwitch = function () {
		if (this.state == 'opened') {
			this.close();
		} else {
			this.open();
		};
	};
	var sidebar = new Sidebar('sidebar', 'closeBar');


})(jQuery);
