import React from 'react';
import './App.css';
import {
	Datepicker,
	Buttons,
	ButtonGroup,
	Grid,
	MySelect,
	MyTreeSelect,
	CustomSelect,
} from './components';

function App() {
	return (
		<div className="App">
			{/* <ButtonGroup />
			<Datepicker />
			<Buttons />
			<Grid />
			<MySelect />
			<MyTreeSelect /> */}
			<CustomSelect />
		</div>
	);
}

export default App;
