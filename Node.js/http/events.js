let EventEmitter = require('events');

let life = new EventEmitter();

life.on('something', function(who) {
	console.log('do ' + who + 'thing');
})

life.on('something', function(who) {
	console.log('do ' + who + 'thing2');
})

life.on('something', function(who) {
	console.log('do ' + who + 'thing10, 最多可以做十件事');
})


life.emit('something', 'you');