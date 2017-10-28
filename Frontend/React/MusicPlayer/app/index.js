import React from 'react'
import { render } from "react-dom";
import { AppContainer } from 'react-hot-loader'
import Hello from "./components/hello";

// var react = require('react')
// console.log(React.version)

render(
	<Hello></Hello>,
	document.getElementById('root')
);

if (module.hot) {
	module.hot.accept('./components/hello', ()=>{
		const NewHello = require('./components/hello').default;
		render(
			<AppContainer>
				<NewHello />
			</AppContainer>,
			document.querySelector('#root')
		);
	});
}