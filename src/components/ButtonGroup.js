import React from 'react';
import { Radio } from 'antd';

export default function ButtonGroup() {
	function onChange(e) {
		console.log(`radio checked:${e.target.value}`);
	}

	return (
		<div>
			<Radio.Group onChange={onChange} defaultValue="a">
				<Radio.Button value="a">Hangzhou</Radio.Button>
				<Radio.Button value="b">Shanghai</Radio.Button>
				<Radio.Button value="c">Beijing</Radio.Button>
				<Radio.Button value="d">Chengdu</Radio.Button>
			</Radio.Group>
		</div>
	);
}
