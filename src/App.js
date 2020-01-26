import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Datepicker, Buttons, ButtonGroup, Grid } from './components';

function App() {
	return (
		<div className="App">
			<ButtonGroup />
			<Datepicker />
			<Buttons />
			<Grid />
		</div>
	);
}

export default App;
