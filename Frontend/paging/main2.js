{
	// alert('这相当于一个自执行匿名函数')

	let json = {
		'total_item' : 99,
		'now_page' : 9,
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
		// $(this).css({
		// 	'background-color' : '#337ab7',
		// 	'color' : '#d9edf7'
		// }).siblings('.current').removeClass('current');
		$('#rend-area').empty()
		now_page = parseInt($(this).html())
		if ($(this).html() == '首页') {
			now_page = 1
			$('#frist-page').hide()
			rend_paging(now_page)
		}
		if ($(this).html() == '末页') {
			now_page = total_page
			$('#last-page').hide()
			rend_paging(now_page)
		}
		if ($(this).html() != '1' && $(this).html() != total_page) {
			$('#last-page').show()
			$('#frist-page').show()
			rend_paging($(this).html())
		}
	});


	// right_btn.style.visibility = 'hidden'

	function rend_paging(now_page) {
		let html_tmp = ``
		if ((now_page*1 - 5) <= 0) {
			for (let i = 1; i <= 10; i++) {
				if (i == now_page) {
					html_tmp += `<a href="#${i}" class="current">${i}</a>`
				} else {
					html_tmp += `<a href="#${i}">${i}</a>`
				}
			}
		}

		if ((now_page*1 - 5) > 0 && (now_page*1 + 4) <= total_page) {
			for (let i = (now_page*1 - 5); i <= (now_page*1 + 4); i++) {
				console.log(i)
				if (i == now_page) {
					html_tmp += `<a href="#${i}" class="current">${i}</a>`
				} else {
					html_tmp += `<a href="#${i}">${i}</a>`
				}
			}
		}
		$('#rend-area').empty().append(html_tmp)
	}
}
















