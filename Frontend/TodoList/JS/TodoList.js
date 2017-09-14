;(function($, win, doc, undefined){
	'use strict';
	// store.set('user','李晓妍');
	// var user = store.get('user');
	// document.write(user);
	// document.title = user;
	// store.clear();
	var $form_add_task = $('.add-task');
	var $task_detail_mask = $('.task-detail-mask');

	var task_list    = [];
	// var new_task  = {} 
	/*对象 VS 数组 VS 区别*/
	var $delete_btns;
	var $detail_btns;
	var $checkbox_complete;
	var current_index;
	// var $task_detail_content;
	// var $task_detail_content_input;
	// var $update_form;

	// 程序初始化
	init();

	$form_add_task.on('submit', form_add_task_on_submit);

	/**
	 * 程序初始化
	 * @return {[type]} [description]
	 */
	function init() {
		// 从store取出‘task_list’赋值给task_list，如果为空，则返回空数组
		task_list = store.get('task_list') || [];
		if (task_list.length) {
			render_task_list();
		};
	};
	function form_add_task_on_submit(e) {
		e.preventDefault();
		var new_task     = {};
		var $input       = $(this).find('input[name=content]');
		new_task.content = $input.val();
		if (!new_task.content) return;
		// document.write('new_task', new_task);
		// add_task(new_task);
		if (add_task(new_task)) {

			$input.val(null);
		};
	};
	/**
	 * 添加一个任务
	 * @param {[type]} new_task [description]
	 */
	function add_task(new_task) {
		/*for (var k in new_task) {
			if (new_task[k] ===undefined) {
				new_task[k] = '';
			}
		}*/
		// task_list.unshift(new_task);

		task_list.push(new_task);
		refresh_task_list();

		return true;
	};
	/**
	 * 删除某个任务
	 * @param  {[type]} index [description]
	 * @return {[type]}       [description]
	 */
	function delete_task_item(index) {
		// console.log(task_list)
		if (index===undefined || !task_list[index]) return;
		var tmp_r = confirm('确定删除?');
		tmp_r ? delete task_list[index] : null;
		refresh_task_list();
	};
	function listen_task_delete() {
		$delete_btns.on('click', function(){
			var $this = $(this);

			// var id = $this.attr("data-id");
			var id = $this.data('id');
			delete_task_item(id);
		});
	};
	function listen_task_detail() {
		var id;
		var $task_items = $('.task-item');
		/*双击显示任务详情*/
		$task_items.on('dblclick', function(){
			id = $(this).attr("data-id");
			show_item_detail(id);
		});
		/*点击‘详情’按钮显示任务详情*/
		$detail_btns.on('click', function(e){
			e.preventDefault();
			id = $(this).attr("data-id");
			show_item_detail(id);
		});
	}
	function listen_checkbox_complete() {
		var id;
		var is_checked;
		$checkbox_complete.on('click', function(e){
			e.preventDefault();
			id = $(this).attr("data-id");
			var current_item = store.get('task_list')[id];
			if (current_item.checked) {
				update_task(id, {checked: false});
			} else {
				update_task(id, {checked: true});
			}

			// is_checked = $(this).is(":checked");
			// update_task(id, {checked: is_checked});
			// console.log(current_item);
		});
	}
	function show_item_detail(id) {
		render_item_detail(id);
		current_index = id;
		var  $task_detail = $('.task-detail');
		$task_detail_mask = $('.task-detail-mask');
		$task_detail.removeClass('hidden');
		$task_detail_mask.removeClass('hidden');
		$task_detail_mask.on('click', hide_item_detail);
	}
	function hide_item_detail() {
		var $task_detail      = $('.task-detail');
		var $task_detail_mask = $('.task-detail-mask');
		$task_detail.addClass('hidden');
		$task_detail_mask.addClass('hidden');
	}
	function update_task(id, data) {
		if (id===undefined || !task_list[id]) return;

		// task_list[id] = data;
		task_list[id] = $.extend({}, task_list[id], data);
		refresh_task_list();
	};
	/**
	 * 刷新任务并更新模板
	 * @return {[type]} [description]
	 */	
	function refresh_task_list(){
		store.set('task_list', task_list);
		render_task_list();
	};
	/**
	 * 渲染任务列表到任务列表模版中
	 * @return {[type]} [description]
	 */
	function render_task_list() {
		var $task_list = $('.task-list');
		$task_list.html('');
		var item_checked = [];
		for (var i = 0, length = task_list.length; i < length; i++) {
			var item = task_list[i];
			if (item && item.checked) {
				item_checked[i] = item;
			} else {
				var $task = render_task_item(item, i);
			}
			$task_list.prepend($task);
		}
		for (var k = 0; k < item_checked.length; k++ ) {
			$task = render_task_item(item_checked[k], k);
			if (!$task) continue;
			// console.log($task)
			$task = $($task).addClass('completed');
			console.log($task);
			$task_list.append($task);
		}

		// 渲染完毕后，找到删除按钮&详细按钮&选择框
		$delete_btns = $('.btn.delete');
		$detail_btns = $('.btn.detail');
		$checkbox_complete = $('.todolist .task-list .task-item .complete[type=checkbox]');
		listen_task_delete();
		listen_task_detail();
		listen_checkbox_complete();
		// console.log('checkbox_complete:', $checkbox_complete)
	};
	/**
	 * 渲染单个任务模板
	 * @param  {[type]} data [description]
	 * @return {string}      [description]
	 */
	function render_task_item(data, i) {
		if (!data || i===undefined) return;
		var list_item_tpl =
			'<div class="task-item">' +
				'<span><input type="checkbox" class="complete" ' + (data.checked ? 'checked' : '') + ' data-id=' + i + '></span>' +
				'<span class="task-content">'+ data.content +'</span>' +
				'<a type="button" class="btn btn-xs btn-info detail" data-id="' + i + '" ><i class="icon-info-sign icon-large"></i> Info</a>' +
				'<a type="button" class="btn btn-xs btn-danger delete" data-id="' + i + '" ><i class="icon-trash icon-large"></i> Delete</a>' +
			'</div>';
		return list_item_tpl;
	};
	function render_item_detail(id) {
		if (id === undefined || !task_list[id]) return;
		var item = task_list[id];
		var detail_tpl = 
			'<form>' +
			  '<div class="content">' + (item.content || '') + '</div>' +
			  '<div class="input-item">' +
			  	'<input type="text" name="content" class="hidden form-control" value="' + (item.content || '') + '">' +
			  '</div>' +
			  '<div>' +
			    '<div class="description input-item">' +
			      '<textarea name="desc" class="form-control" rows="7" value="">' + (item.desc || '') + '</textarea>' +
			    '</div>' +
			  '</div>' +
			  '<div class="remind input-item">' +
			    '<input name="remind" type="month" class="form-control input-item" value="'+ (item.remind || '') +'">' +
			    '<div class="input-item">' +
				    '<button type="submit">更新</button>' +
				'</div>' +
			  '</div>' +
			'</form>' ;
		var $task_detail = $('.task-detail');
		$task_detail.html('');

		// $task_detail.append(detail_tpl);
		$task_detail.html(detail_tpl);
		var $update_form = $task_detail.find('form');
			/*找到content这个元素*/
		var $task_detail_content       = $update_form.find('.content');
		var $task_detail_content_input = $update_form.find('[name=content]');

		$task_detail_content.on('dblclick', function(){
			$task_detail_content_input.removeClass('hidden');
			$task_detail_content.addClass('hidden');
		});

		$update_form.on('submit', function(e){
			e.preventDefault();
			var data        = {};
			// data.content = $(this).find('[name=content]').text();
			data.content    = $(this).find('[name=content]').val();
			data.desc       = $(this).find('[name=desc]').val();
			data.remind     = $(this).find('[name=remind]').val();
			// if (data.content===undefined || data.desc===undefined || data.remind===undefined) return;
			// console.log(id, data)
			update_task(id, data);
			// $task_detail.addClass('hidden');
			hide_item_detail();
		});
	};



})(jQuery, window, document);