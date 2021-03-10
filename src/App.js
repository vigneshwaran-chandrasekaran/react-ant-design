import React from 'react';
// import './App.css';
import './App.less';
import {
	// CustomSelect,
	// AjaxTable,
	AjaxTableNew,
	ButtonGroup,
	Buttons,
	Datepicker,
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
			{/* <CustomSelect /> */}
			{/* <AjaxTable /> */}
			<AjaxTableNew />
		</div>
	);
}

export default App;
