{

	let jsonData = {
		img1 : {
			title : 'nnn',
			src : 'img/index/1.jpg'
		},
		img2 : {
			title : 'aaaaaaaa',
			src : 'img/index/2.jpg'
		},
		img3 : {
			title : 'bbbbbbbb',
			src : 'img/index/3.jpg'
		},
		img4 : {
			title : 'jjjjjjjj',
			src : 'img/index/4.jpg'
		},
		img5 : {
			title : 'ggggggggg',
			src : 'img/index/5.jpg'
		}
	}

	let panel_shows = document.querySelector('#pic_panel_shows')
	let large_pic_box = panel_shows.querySelector('.large_pic_wrap')
	let min_pic_box = panel_shows.querySelector('#min_pic_wrap')
	let active_el = panel_shows.querySelector('.active')
	let large_pics = large_pic_box.querySelectorAll('.large_pic')
	let min_pics = min_pic_box.querySelectorAll('li')


	for (let i in min_pics) {
		min_pics[i].index = i
	}
	
	auto_show()


	min_pic_box.onclick = function(event) {
		event.preventDefault();
		
		let clicked_pic_nod = event.target.parentNode

		active_el.style.left = clicked_pic_nod.offsetLeft + "px"

		for (let i = 0; i < large_pics.length; i++) {
			large_pics[i].style.opacity = 0
		}
		large_pics[clicked_pic_nod.index].style.opacity = 1
	}


	function auto_show() {
		let i = 0
		let timer = setInterval(function() {
			active_el.style.left = min_pics[i].offsetLeft + 'px'

			for (let large_pic of large_pics) {
				large_pic.style.opacity = 0
			}
			large_pics[i].style.opacity = 1
			i++
			
			i = i % (large_pics.length)
			console.log(i)
		}, 3000)

		// for (let i in large_pics) {
		// 	// console.log(i)
		// 	console.log(large_pics[i])
		// 	// alert(i)
		// }

		// for (let el of min_pics) {
		// 	console.log(el)
		// }
		// let i = 0
		// for (let el of large_pics) {
			
		// 	el.index = i
		// 	el.id = i
		// 	i++
		// 	console.log(el)
		// }
	}






	
}