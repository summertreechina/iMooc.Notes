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

	// console.log(panel_shows, large_pic_box, min_pic_box, active_el, large_pics, min_pics)
	let i_zindex = 1;
	let i_now = 0;

	min_pic_box.onclick = function() {
		console.log(this)
	} 


	// for (let i = 0; i < .length; i++) {
	// 	[i]
	// }






	
}