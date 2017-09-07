{
	// alert('这相当于一个自执行匿名函数')

	let json = {
		'total_item' : 99,
		'now_page' : 10,
		'single_page_item' : 8,
		'paging_container' : '#paging'
	}

	let total_page = Math.ceil(json.total_item/8)
	let now_page = json.now_page
	let paging_container = $('#paging')
	let left_btn = $('#paging a:first-child')
	let right_btn = $('#paging a:last-child')
	let frist_page = $('#frist-page')
	let last_page = $('#last-page')
	let pages = $('#paging>a')

	pages.each(function(index, el) {
		if ($(el).hasClass('current')) {
			$(this).removeClass('current')
		}
		if ($(el).index() == json.now_page) {
			$(this).addClass('current')
		}
		if (json.now_page == 1) {
			frist_page.hide();
		}
		if (json.now_page == 10) {
			last_page.hide();
		}
	});

	paging_container.on('click', 'a', function(event) {
		event.preventDefault()
		$(this).css({
			'background-color' : '#337ab7',
			'color' : '#d9edf7'
		}).siblings('.current').removeClass('current');
		now_page = $(this).html()
		// $(this)
		let next_page = now_page + 1
		let prev_page = now_page - 1
		console.log(now_page)
	});

	// right_btn.style.visibility = 'hidden'

	



console.log(pages)
}
















