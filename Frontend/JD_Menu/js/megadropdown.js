+function() {
	let $test = $('#test');
	let $sub = $('#sub');
	let activeRow = null;
	let activeMenu = null;

	$test.on({
		'mouseenter' : function(e) {
			$sub.removeClass('none');
		},
		'mouseleave' : function(e) {
			$sub.addClass('none');

			if (activeRow) {
				activeRow.removeClass('active');
				activeRow = null;
			}
			if (activeMenu) {
				activeMenu.addClass('none');
				activeMenu = null;
			}
		}
	})
	.on('mouseenter', 'li', function(e) {
		if (!activeRow) {
			activeRow = $(e.target).addClass('active');
			activeMenu = $('#' + activeRow.data('id'));
			activeMenu.removeClass('none');
			return;
		}
		if (activeRow) {
			activeRow.removeClass('active');
			activeMenu.addClass('none');
		}
		activeRow = $(e.target);
		activeRow.addClass('active');
		activeMenu = $('#' + activeRow.data('id'));
		activeMenu.removeClass('none');
	});


}();
// 操作完毕后要加一个空 return 