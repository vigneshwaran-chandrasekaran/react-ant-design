import React from 'react';
import { Form, Input, Select, Row, Col } from 'antd';

const { Option } = Select;

const children = [];

for (let i = 10; i < 35; i++) {
	children.push(
		<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
	);
}
const all = [];
for (let i = 10; i < 35; i++) {
	all.push(i.toString(36) + i);
}

// https://codesandbox.io/s/ant-design-tree-select-select-all-dnekz
// https://codesandbox.io/s/hungry-mountain-jw3s0
export default function MySelect() {
	function handleSelectAll(value) {
		console.log('vvvv value', value);
		if (value && value.length && value.includes('all')) {
			console.log('yes all included');
			if (value.length === all.length + 1) {
				return [];
			}
			return [...all];
		} else {
			return value;
		}
	}

	function onChange(value) {
		console.log(`selected ${value}`);
	}

	function onBlur() {
		console.log('blur');
	}

	function onFocus() {
		console.log('focus');
	}

	function onSearch(val) {
		console.log('search:', val);
	}

	return (
		<Row>
			<Col span={12}>
				<Select
					showSearch
					style={{ width: 500 }}
					placeholder="Select a person"
					optionFilterProp="children"
					onChange={onChange}
					onFocus={onFocus}
					onBlur={onBlur}
					onSearch={onSearch}
					filterOption={(input, option) =>
						option.props.children
							.toLowerCase()
							.indexOf(input.toLowerCase()) >= 0
					}
				>
					<Option value="jack">Jack</Option>
					<Option value="lucy">Lucy</Option>
					<Option value="tom">Tom</Option>
				</Select>
			</Col>
			<Col span={12}>
				<Select
					style={{ width: 500 }}
					mode="multiple"
					placeholder="Please select Columns"
					maxTagCount={5}
					onChange={handleSelectAll}
				>
					<Option key="all" value="all">
						---SELECT ALL---
					</Option>
					{children}
				</Select>
			</Col>
		</Row>
	);
}
