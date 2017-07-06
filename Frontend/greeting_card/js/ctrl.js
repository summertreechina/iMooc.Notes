window.onload = function() {
	'use strict';

	let music = document.querySelector('#music');
	let audio = document.querySelector('audio');

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