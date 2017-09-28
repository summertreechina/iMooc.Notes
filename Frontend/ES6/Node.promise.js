const fs = require('fs')

let options = {}

fs.readFile('class.js', options, function(err, data){
	let p1 = new Promise((resolve, reject) => {
		if (err) {
			reject(err)
		} else {
			resolve(data)
		}
	})

	p1.then((val) => {
		console.log(val)
	}, (val) => {
		console.log(val)
	})
});

// let p = new Proxy(target, handler);