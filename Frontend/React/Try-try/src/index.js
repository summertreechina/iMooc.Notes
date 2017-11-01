import _ from 'lodash'
import printMe from './print.js'
import './styles.css'
// import './style.css'
// import Icon from './icon.png'
// import Data from './data.xml'

function component() {
	var element = document.createElement('div')
	element.innerHTML = _.join(['Hello', 'webpack'], ' ')

	var btn = document.createElement('button')
	btn.innerHTML = 'Click me and check the console!'
	btn.onclick = printMe
	
	element.appendChild(btn)
	// element.classList.add('hello');

	// Add the image to our existing div.
	// var myIcon = new Image()
	// myIcon.src = Icon
	// element.appendChild(myIcon)
	// console.log(Data)

	return element;
}

// document.body.appendChild(component())
let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);

if (module.hot) {
	module.hot.accept('./print.js', function() {
		console.log('Accepting the updated printMe module!');
		// printMe();
		document.body.removeChild(element);
		element = component(); // 重新渲染页面后，component 更新 click 事件处理
		document.body.appendChild(element);
	})
}



