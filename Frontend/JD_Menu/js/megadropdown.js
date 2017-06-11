+function() {
	let $test = $('#test');
	let $sub = $('#sub');
	let activeRow = null;
	let activeMenu = null;
	let timer;
	let mouseInSub = false;

	$sub.on('mouseenter', function(event) {
		event.preventDefault();
		mouseInSub = true;
	}).on('mouseleave', function(event) {
		event.preventDefault();
		mouseInSub = false;
	});

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

		if (timer) {
			clearTimeout(timer);
		}

		timer = setTimeout(function() {
			if (mouseInSub) {
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
			timer = null;
		}, 200);

	});


}();
// 操作完毕后要加一个空 return 