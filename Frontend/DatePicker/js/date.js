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
let firstDayOfWeek = firstDay.getDay();
// 4
let lastDay = new Date(curr_year, curr_month, 0);
// 30 本月的最后一天 
// 因为本月最后一天我并不知道 只能通过下一月的第一天的前一天来确认


console.log();






function render($dom){

	html = `<div class="ui-datepicker-header">
			<a href="#" class="ui-datepicker-btn ui-datepicker-prev-btn">&lt;</a>
			<span class="ui-datepicker-curr-month">${curr_day}</span>
			<a href="#" class="ui-datepicker-btn ui-datepicker-next-btn">&gt;</a>
		</div>
		<div class="ui-datepicker-body">
			<table>
				<thead>
					<tr>
						<th>一</th>
						<th>二</th>
						<th>三</th>
						<th>四</th>
						<th>五</th>
						<th>六</th>
						<th>日</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>2</td>
						<td>3</td>
						<td>4</td>
						<td>5</td>
						<td>6</td>
						<td>7</td>
					</tr>
					<tr>
						<td>8</td>
						<td>9</td>
						<td>10</td>
						<td>11</td>
						<td>12</td>
						<td>13</td>
						<td>14</td>
					</tr>
					<tr>
						<td>15</td>
						<td>16</td>
						<td>17</td>
						<td>18</td>
						<td>19</td>
						<td>20</td>
						<td>21</td>
					</tr>
					<tr>
						<td>22</td>
						<td>23</td>
						<td>24</td>
						<td>25</td>
						<td>26</td>
						<td>27</td>
						<td>28</td>
					</tr>
					<tr>
						<td>29</td>
						<td>30</td>
						<td>31</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="ui-datepicker-footer"></div>`;
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










