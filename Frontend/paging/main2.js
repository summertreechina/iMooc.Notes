{
	// alert('这相当于一个自执行匿名函数')

	let json = {
		'total_item' : 99,
		'now_page' : 13,
		'single_page_item' : 8,
		'paging_container' : '#paging',
		'callBack' : 'function() {}'
	}

	let total_page = Math.ceil(json.total_item/8)
	let now_page = json.now_page
	let paging_container = $('#paging')
	let left_btn = $('#paging a:first-child')
	let right_btn = $('#paging a:last-child')
	let frist_page = $('#frist-page')
	let last_page = $('#last-page')
	let pages = $('#paging>a')
	let callBack = json.callBack || function() {
		let readme = `根据用途制定一些后续的函数`
	}

	let random_test = Math.ceil(Math.random()*1000)
	rend_paging(random_test)


	paging_container.on('click', 'a', function(e) {
		e.preventDefault()
		now_page = $(this).html()
		if ($(this).html() === '首页') {
			now_page = 1
			rend_paging(1)
		} else if ($(this).html() === '末页') {
			now_page = total_page
			rend_paging(now_page)
		} else {
			if ($(this).html() == '1') {
				rend_paging(1)
			}
			if ($(this).html() == total_page) {
				rend_paging(total_page)
			}
			if ($(this).find('i').hasClass('fa-hand-o-left')) {
				now_page = $('#rend-area').find('.current').html()
				rend_paging(now_page*1 - 1)
			} else if ($(this).find('i').hasClass('fa-hand-o-right')) {
				now_page = $('#rend-area').find('.current').html()
				rend_paging(now_page*1 + 1)
			} else {
				rend_paging($(this).html())
			}
		}
	});



	function rend_paging(now_page) {
		let html_tmp = ``
		total_page = 1000
		if (now_page == 1) {
			// 如此麻烦就是为了隐藏仍占据位置 不使页码跳动
			document.querySelector('#frist-page').style.visibility="hidden"
			document.querySelector('#last-page').style.visibility="visible"
		} else if (now_page == total_page) {
			document.querySelector('#last-page').style.visibility="hidden"
			document.querySelector('#frist-page').style.visibility="visible"
		} else {
			document.querySelector('#last-page').style.visibility="visible"
			document.querySelector('#frist-page').style.visibility="visible"
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
















