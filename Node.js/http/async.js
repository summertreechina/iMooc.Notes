// <script src='a.js'></script>
// <script src='b.js'></script>
// <script src='c.js'></script>

// let i = 0;
// while(true) {
// 	i++;
// }



let c = 0;

function printIt() {
	console.log(c);
}

function plus(callback) {
	setTimeout(() => {
		c += 1;
		callback();
	}, 1000);
}

plus(printIt);