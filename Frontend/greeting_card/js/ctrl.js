window.onload = function() {
	'use strict';

	let music = document.querySelector('#music');
	let audio = document.querySelector('audio');
	let page1 = document.querySelector('#page1');
	let page2 = document.querySelector('#page2');
	let page3 = document.querySelector('#page3');

	music.addEventListener("ended", function(e){
		music.setAttribute("class", "");
		music.style.animationPlayState = "paused";
	}, false);

	music.addEventListener("touchstart", function(e){
		if (audio.paused) {
			audio.play();
			// this.setAttribute("class", "play");
			this.style.animationPlayState = "running";
		} else {
			audio.pause();			
			// this.setAttribute("class", "");
			this.style.animationPlayState = "paused";
		}
	}, false);

	page1.addEventListener('touchstart', function(e){

		page1.style.display = 'none';
		page2.style.display = 'block';
		page3.style.display = 'block';
		page3.style.top 	= "100%";

		setTimeout(function(){
			page2.setAttribute("class", "page fadeOut");
			page3.setAttribute("class", "page fadeIn");
		}, 5500);
	}, false);

}

// music.onclick = function() {
// 	if (audio.paused) {
// 		audio.play();
// 		// this.setAttribute("class", "play");
// 		this.style.animationPlayState = "running";
// 	} else {
// 		audio.pause();			
// 		// this.setAttribute("class", "");
// 		this.style.animationPlayState = "paused";
// 	}
// }