(function($){
	'use surict';

function Picker(el, date) {
	this.dom = $(el);
	let arr = date.split('-');

	if (arr[0] && arr[1] && arr[2]) {
		this.year = arr[0];
		this.month = arr[1];
		this.day = self.day = arr[2];
		this.time = new Date(this.year, this.month-1, this.day);
		this.week = this.time.getDay();
	} else {
		this.time = new Date();
		this.year = this.time.getFullYear();
		this.month = this.time.getMonth() + 1;
		this.week = this.time.getDay();
		this.day = self.day = this.time.getDate();
	}

	this.str_time = this.time.toLocaleDateString();
	this.html = `<div class="ui-datepicker-header"><a href="#" class="ui-datepicker-btn ui-datepicker-prev-btn">&lt;</a><span class="ui-datepicker-curr-month">${this.str_time}</span><a href="#" class="ui-datepicker-btn ui-datepicker-next-btn">&gt;</a></div><div class="ui-datepicker-body"><table><thead><tr><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th><th>日</th></tr></thead><tbody>`;

	this.get_other_date();
	this.render_dom();
}


Picker.prototype = {

	get_other_date : function() {
		this.f_day = new Date(this.year, this.month-1, 1);
		// 月初肯定是1号 不用算
		this.f_week = this.f_day.getDay();

		this.l_day = new Date(this.year, this.month, 0);
		this.l_date = this.l_day.getDate();  // 本月最后一天
		this.l_week = this.l_day.getDay();
	},

	render_dom : function() {
		dateArr = new Array();

		if (this.f_week === 0) {
			this.f_week = 7;
		}
		for (let i = 0; i < (this.f_week-1); i++) {
			dateArr.push(null);
		}
		for (let i = 1; i <= this.l_date; i++) {
			dateArr.push(i);
		}
		for (let i = 0; i < (7-this.l_week); i++) {
			dateArr.push(null);
		}
		// console.log(7-this.l_week);
		let the_day = this.day;
		let html = '';

		$(dateArr).each(function(id, val) {
			id++;

			if (id%7 == 1) {
				html += `<tr>`;
			}
			if (val==null) {
				html += `<td></td>`;
			} else {
				if (val != the_day) {
					html += `<td>${val}</td>`;
					if (id%7 == 0) {
						html += `</tr>`;
					}
				} else {
					html += `<td class="selected_day">${val}</td>`;
					if (id%7 == 0) {
						html += `</tr>`;
					}
				}
			}
		});
		this.html += html;

		this.html += `</tbody></table></div><div class="ui-datepicker-footer"></div>`;

		this.dom.html(this.html);
	}
}

$.fn.extend({
	datePicker : function() {
		$(this).each(function(i, el) {
			let date = $(el).data('date');
			picker = new Picker(el, date);
		});
	}
});

})(jQuery);










