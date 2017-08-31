let EventEmitter = require('events');

let life = new EventEmitter();

life.on('something', function(who) {
	console.log('do ' + who + 'thing');
})

life.emit('something', 'you');