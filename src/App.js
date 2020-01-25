import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Datepicker, Buttons, Grid } from './components';

function App() {
	return (
		<div className="App">
			<Datepicker />
			<Buttons />
			<Grid />
		</div>
	);
}

export default App;
