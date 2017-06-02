>>> 学了一招 '短路符'

(typeof self.opts.select === 'function') && self.opts.select();
如果成立 && 再执行后面的内容
相当于ifelse的写法，但是更简洁，易读



>>> 学了一招 '改变默认this的指向'
	有的时候用默认的this指向重复操作某些东西太不方便
	用什么方法呢？
	传说中的 call() !
	原: (typeof self.opts.select === 'function') && self.opts.select(num, itemsLength);
	新: (typeof self.opts.select === 'function') && self.opts.select.call(this, num, itemsLength);


>>> 学了一招 '事件切换'
	self.$el.trigger('chosen', [num, itemsLength]);