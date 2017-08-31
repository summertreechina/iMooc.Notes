let pet = {
	words : '...',
	speak : function(say) {
		console.log(say + ' ' + this.words)
	}
}

pet.speak('Speak');

let dog = {
	words : 'Wang'
}

pet.speak.call(dog, 'Speak');

