let http = require('http');
http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.end('Hello, Nn!\n');
}).listen(8889, '127.0.0.1');

console.log('OK!');
console.log(http);