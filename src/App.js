import React from 'react';
import './App.css';
import {
	Datepicker,
	Buttons,
	ButtonGroup,
	Grid,
	MySelect,
	MyTreeSelect,
} from './components';

function App() {
	return (
		<div className="App">
			<ButtonGroup />
			<Datepicker />
			<Buttons />
			<Grid />
			<MySelect />
			<MyTreeSelect />
		</div>
	);
}

export default App;
