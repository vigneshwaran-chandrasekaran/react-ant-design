import React from 'react';
import 'antd/dist/antd.css';
import { Form, Select } from 'antd';

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
class ExportAudience extends React.Component {
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	};

	handleSelectAll = value => {
		if (value && value.length && value.includes('all')) {
			if (value.length === all.length + 1) {
				return [];
			}
			return [...all];
		} else {
			return value;
		}
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		const formItemLayout = {
			labelCol: {
				xs: { span: 24 },
				sm: { span: 8 },
			},
			wrapperCol: {
				xs: { span: 16 },
				sm: { span: 12 },
			},
		};
		return (
			<Form
				{...formItemLayout}
				onSubmit={this.handleSubmit}
				hideRequiredMark={false}
				labelAlign={'right'}
			>
				<Form.Item label="Column Names">
					{getFieldDecorator(`columnNames`, {
						validateTrigger: ['onChange', 'onBlur'],
						getValueFromEvent: this.handleSelectAll,
						rules: [
							{
								required: true,
								message: 'Please input the Column Names!',
							},
						],
					})(
						<Select
							mode="multiple"
							placeholder="Please select Columns"
							maxTagCount={5}
							onChange={this.handleSelectAll}
						>
							<Option key="all" value="all">
								---SELECT ALL---
							</Option>
							{children}
						</Select>
					)}
				</Form.Item>
			</Form>
		);
	}
}
const WrappedExportForm = Form.create({ name: 'export' })(ExportAudience);
export default WrappedExportForm;

// https://codesandbox.io/s/ant-design-tree-select-select-all-dnekz
