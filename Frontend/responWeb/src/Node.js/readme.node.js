let fs = require('fs');
// 异步执行 读取文件
fs.readFile('readme.txt', 'utf-8', (err, data) => {
	if (err) {
		console.error(err)
	} else {
		console.log(data)
	}
});
// 同步执行方法 读取文件
let data = fs.readFileSync('readme.txt', 'utf-8');
console.log(data);
