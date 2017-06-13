(function($){
	'use surict';

function DatePicker() {

}
// DatePicker.prototype.

let now = new Date();
// Tue Jun 13 2017 14:11:20 GMT+0800 (CST) {}
let curr_day = now.toLocaleDateString();
// "2017-6-13"
let curr_year = now.getFullYear();
// curr_year = 2017
let curr_month = now.getMonth() + 1;
// curr_month = 6
let curr_date = now.getDate();
// curr_date = 13
let curr_week = now.getDay();
// 2
let timestamp = now.getTime();
// timestamp = 1497334280876

let firstDay = new Date(curr_year, curr_month-1, 1);
// 6月1日 数据
let first_Week = firstDay.getDay();
// 4
let lastDay = new Date(curr_year, curr_month, 0);
// 30 本月的最后一天 
// 因为本月最后一天我并不知道 只能通过下一月的第一天的前一天来确认
let last_date = lastDay.getDate(); // 30
let last_Week = lastDay.getDay(); // 5

let dateArr = new Array();
for (let i = 0; i < (first_Week-1); i++) {
	dateArr.push(null);
}
for (let i = 1; i <= last_date; i++) {
	dateArr.push(i);
}
for (let i = 0; i < (7-last_Week); i++) {
	dateArr.push(null);
}
let html = `<div class="ui-datepicker-header"><a href="#" class="ui-datepicker-btn ui-datepicker-prev-btn">&lt;</a><span class="ui-datepicker-curr-month">${curr_day}</span><a href="#" class="ui-datepicker-btn ui-datepicker-next-btn">&gt;</a></div><div class="ui-datepicker-body"><table><thead><tr><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th><th>日</th></tr></thead><tbody>`;
dateArr.forEach(function(val,id){
	id++;

	if (id%7 == 1) {
		html += `<tr>`;
	}
	if (val==null) {
		html += `<td></td>`;
	} else {
		html += `<td>${val}</td>`;
		if (id%7 == 0) {
			html += `</tr>`;
		}
	}
});
html += `</tbody></table></div><div class="ui-datepicker-footer"></div>`;


console.log();





function render($dom){

	// html = `<div class="ui-datepicker-header">
	// 		<a href="#" class="ui-datepicker-btn ui-datepicker-prev-btn">&lt;</a>
	// 		<span class="ui-datepicker-curr-month">${curr_day}</span>
	// 		<a href="#" class="ui-datepicker-btn ui-datepicker-next-btn">&gt;</a>
	// 	</div>
	// 	<div class="ui-datepicker-body">
	// 		<table>
	// 			<thead>
	// 				<tr>
	// 					<th>一</th>
	// 					<th>二</th>
	// 					<th>三</th>
	// 					<th>四</th>
	// 					<th>五</th>
	// 					<th>六</th>
	// 					<th>日</th>
	// 				</tr>
	// 			</thead>
	// 			<tbody>
	// 				<tr>
	// 					<td>1</td>
	// 					<td>2</td>
	// 					<td>3</td>
	// 					<td>4</td>
	// 					<td>5</td>
	// 					<td>6</td>
	// 					<td>7</td>
	// 				</tr>
	// 				<tr>
	// 					<td>8</td>
	// 					<td>9</td>
	// 					<td>10</td>
	// 					<td>11</td>
	// 					<td>12</td>
	// 					<td>13</td>
	// 					<td>14</td>
	// 				</tr>
	// 				<tr>
	// 					<td>15</td>
	// 					<td>16</td>
	// 					<td>17</td>
	// 					<td>18</td>
	// 					<td>19</td>
	// 					<td>20</td>
	// 					<td>21</td>
	// 				</tr>
	// 				<tr>
	// 					<td>22</td>
	// 					<td>23</td>
	// 					<td>24</td>
	// 					<td>25</td>
	// 					<td>26</td>
	// 					<td>27</td>
	// 					<td>28</td>
	// 				</tr>
	// 				<tr>
	// 					<td>29</td>
	// 					<td>30</td>
	// 					<td>31</td>
	// 				</tr>
	// 			</tbody>
	// 		</table>
	// 	</div>
	// 	<div class="ui-datepicker-footer"></div>`;
	$dom.html(html);
}

$.fn.extend({
	datePicker : function() {
		$(this).each(function(i, el){
			render($(el));
		});
	}
});

})(jQuery);










