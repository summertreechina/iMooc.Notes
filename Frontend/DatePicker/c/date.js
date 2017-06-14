(function($){
	'use surict';

function Picker(el, date) {
	// 将 el element 包装成jQuery 对象后赋值为这个对象的dom属性 this.dom
	this.dom = $(el);
	// 接收的这个date 是“2019-16-9”格式， 我们可以很方便的把它转化为一个有规律的数组 你可以打印出来看一下。
	// 如果date为空，或者没有传过来怎么办呢？后面有响应的处理。
	let arr = date.split('-');

	if (arr[0] && arr[1] && arr[2]) {
		// 上面是年月日的合法性验证， 防止后面的程序出现错乱
		// 下面是将验证过的数据赋值给new 的这个对象的年月日的属性上
		this.year = arr[0];
		this.month = arr[1];
		this.day = self.day = arr[2];
		this.time = new Date(this.year, this.month-1, this.day);
		// 传过来的 date 没有星期 我们可以通过这两行换算出来
		this.week = this.time.getDay();
	} else {
		// 如果date为空 也就是用户希望显示当前的日期
		// 下面的大家都懂
		this.time = new Date();
		this.year = this.time.getFullYear();
		this.month = this.time.getMonth() + 1;
		this.week = this.time.getDay();
		this.day = self.day = this.time.getDate();
	}

	this.str_time = this.time.toLocaleDateString();
	// 把日期转换成 this.str_time  这种“2019-16-9”格式 是为了方便做测试观察用， 没有特别的意义
	// `${this.str_time}` 这是ES6 新规范写法 其实用新写法就不用删除换行符了 只是为了页面利索删除了换行符 没啥意义的做法
	this.html = `<div class="ui-datepicker-header"><a href="#" class="ui-datepicker-btn ui-datepicker-prev-btn">&lt;</a><span class="ui-datepicker-curr-month">${this.str_time}</span><a href="#" class="ui-datepicker-btn ui-datepicker-next-btn">&gt;</a></div><div class="ui-datepicker-body"><table><thead><tr><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th><th>日</th></tr></thead><tbody>`;

	// 调用这个对象上原型链上 get_other_date() 方法。get_other_date()是干什么的？我们现在仅仅是知道当前日期了，但是画一个日历还是不够的，本月第一天是星期几？第一天前面需要空几个格子？最后一天是几号？最后一天需要空几个格子？就是 get_other_date() 函数做的事情。
	this.get_other_date();
	this.render_dom();
}


Picker.prototype = {

	get_other_date : function() {
		this.f_day = new Date(this.year, this.month-1, 1);
		// 月初肯定是1号 不用算 1号是星期几？
		this.f_week = this.f_day.getDay();

		this.l_day = new Date(this.year, this.month, 0);
		this.l_date = this.l_day.getDate();  // 本月最后一天
		this.l_week = this.l_day.getDay();   // 最后一天是星期几？  就这么点数据
		// 思路: 对照效果图 我们画日历 就是在日历格子里填上对应的数字，仅仅填个数字而已，数量也不多，最多31个数。但是我们不知道 1号从哪里开始填？知道星期几就可以填了。1号前面要空几个格子？月末一天后面需要空几个格子？对照效果图，你就能发现其中的规律：第一天是周四，那前面就是（4-1）三个格子... 同理，最后一天我们也知道了，画图所需要的数据我们都掌握了，那下面就是开始画图了 引出了 render_dom()方法
	},

	render_dom : function() {
		// 建立一个空数组。这个数组中将储存的东西是与我们日历上的格子一一对应的，空格子 和 有数字的格子。 这个数组最多有 7*5=35 的长度，超过35，不用说就肯定是你中间哪个逻辑出错了，后面你就知道了。
		dateArr = new Array();

		if (this.f_week === 0) {
			this.f_week = 7;
			// 西方周日是一周的第一天 是 0 ，但我们的日历是给我们中国人看的，遇到周日我们需要转换一下，否则影响我们日期在页面上的排布
		}
		for (let i = 0; i < (this.f_week-1); i++) {
			dateArr.push(null);
			// 找出1号前面有几个空格子 把它push到空数组里
		}
		for (let i = 1; i <= this.l_date; i++) {
			dateArr.push(i);
			// 这个月有多少天 比如说是31天 把这31天依次 push到 dateArr这个数组里
		}
		for (let i = 0; i < (7-this.l_week); i++) {
			dateArr.push(null);
			// 这几本不用解释了 找出最后一天之后需要画几个空格子
		}

		let the_day = this.day;
		// the_day 就是当前时间 或者是初始化的时候指定的那一天
		let html = '';
		// 定义了一个新的html变量，本来想直接用 this.html 呢，但是在下面的循环中，this的指向变了，偷懒新定义了一个html变量

		$(dateArr).each(function(id, val) {
			// 开始对这个dateArr循环 在循环的过程中将 dateArr 中储存的东西插到网页中去
			// dateArr的id 为什么要自增 1 呢？这个不需要我说了
			id++;
			if (id%7 == 1) {
				// 每遇到周一 要增加一个 <tr> 标签。后面的运算还要继续
				html += `<tr>`;
			}
			if (val==null) {
				html += `<td></td>`;
				// 每遇到空格子 就是直接 画一个空格子
			} else {
				if (val != the_day) {
					// 如果不是“今天”或“指定的那天” 就插入数组中响应的日期
					html += `<td>${val}</td>`;
					if (id%7 == 0) {
						// 在这过程中，如果是周末就额外插入 </tr> 标签
						html += `</tr>`;
					}
				} else {
					html += `<td class="selected_day">${val}</td>`;
					// 如果正好是是“今天”或“指定的那天” 就插入一个selected_day样式 也就是绿色格子
					if (id%7 == 0) {
						// 如果遇到凑巧的时候，“今天”正好是周末 </tr> 不能少
						html += `</tr>`;
					}
				}
			}
		});
		// 最后将 html 中储存的内容交给 this.html
		this.html += html;
		// 再把日历的尾巴 接到 this.html 上
		this.html += `</tbody></table></div><div class="ui-datepicker-footer"></div>`;

		// 最后 将 this.html 中储存的内容 插入到 this.dom DOM节点中。
		this.dom.html(this.html);
		// 好了，页面的渲染也就完成了。
		// 下面我要接着写事件绑定了，拜拜。
	}
}

$.fn.extend({
	datePicker : function() {
		$(this).each(function(i, el) {
			// 1. 如果你不知道这里的 this 指的是什么 你可以 console.log(this) 打印出来 你就懂了 就是你页面上所有日历的 DOM节点容器
			// 也可以直接简写成 picker = new Picker(el, $(el).data('date'));
			// 2. 我们去看看 new Picker(el, date) 后， 去干了些什么？
			let date = $(el).data('date');
			picker = new Picker(el, date);
		});
	}
});

})(jQuery);










