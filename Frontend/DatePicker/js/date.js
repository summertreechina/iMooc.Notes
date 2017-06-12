(function($){
	'use surict';

function DatePicker() {

}
// DatePicker.prototype.

let now = new Date();
let curr_day = now.toLocaleDateString();
let curr_year = now.getFullYear();
let curr_month = now.getMonth() + 1;
let curr_date = now.getDate();
let timestamp = now.getTime();

let firstDay = new Date(curr_year, curr_month-1, 1);
let firstDayWeek = firstDay.getDay();
console.log(timestamp);






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