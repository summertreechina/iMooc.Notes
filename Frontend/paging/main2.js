{
	// alert('这相当于一个自执行匿名函数')

	let json = {
		'total_item' : 99,
		'now_page' : 13,
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

	rend_paging(12)

	paging_container.on('click', 'a', function(e) {
		e.preventDefault()
		now_page = $(this).html()
		if ($(this).html() === '首页') {
			now_page = 1
			// $('#frist-page').fadeOut()
			// $('#last-page').fadeIn()
			rend_paging(1)
		} else if ($(this).html() === '末页') {
			now_page = total_page
			// $('#last-page').fadeOut()
			// $('#frist-page').fadeIn()
			rend_paging(now_page)
		} else {
			if ($(this).html() == '1') {
				rend_paging(1)
			}
			if ($(this).html() == total_page) {
				rend_paging(total_page)
			}
			if ($(this).html() != '1' && $(this).html() != total_page) {
				// $('#last-page').show()
				// $('#frist-page').show()
				rend_paging($(this).html())
			}
		}
		// console.log(this)
	});



	function rend_paging(now_page) {
		let html_tmp = ``
		if (now_page == 1) {
			$('#frist-page').hide()
			$('#last-page').fadeIn()
		}
		if (now_page == total_page) {
			$('#last-page').hide()
			$('#frist-page').fadeIn()
		}
		if ((now_page*1 - 5) <= 0) {
			for (let i = 1; i <= 10; i++) {
				if (i == now_page) {
					html_tmp += `<a href="#${i}" class="current">${i}</a>`
				} else {
					html_tmp += `<a href="#${i}">${i}</a>`
				}
			}
		}

		if ((now_page*1 + 4) > total_page) {
			for (let i = total_page - 10; i <= total_page; i++) {
				if (i == now_page) {
					html_tmp += `<a href="#${i}" class="current">${i}</a>`
				} else {
					html_tmp += `<a href="#${i}">${i}</a>`
				}
			}
		}

		if ((now_page*1 - 5) > 0 && (now_page*1 + 4) <= total_page) {
			for (let i = (now_page*1 - 5); i <= (now_page*1 + 4); i++) {
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
















