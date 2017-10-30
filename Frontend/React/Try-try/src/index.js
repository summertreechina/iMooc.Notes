import _ from 'lodash'
import printMe from './print.js'
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

document.body.appendChild(component())





