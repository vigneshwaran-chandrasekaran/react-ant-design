import React, { useState, useEffect } from 'react';
import { TreeSelect } from 'antd';

const x = Array.from({ length: 50 }, (_, i) => ({
	title: `Block ${i + 1}`,
	value: `${i + 1}`,
}));

x.push({ title: 'Block 1', value: 'a1' });

const allIds = x.map(({ value }) => value);

console.log('xxx', x);
console.log('allIds', allIds);

export default function MyTreeSelect() {
	const [selectedValues, setSelectedValues] = useState([]);

	useEffect(() => {
		console.log('selectedValues', selectedValues);
	}, [selectedValues]);

	return (
		<TreeSelect
			allowClear={true}
			placeholder="Select a block"
			treeCheckable={true}
			showCheckedStrategy={TreeSelect.SHOW_CHILD}
			style={{ width: '350px' }}
			dropdownStyle={{ maxHeight: '300px' }}
			onChange={ids => setSelectedValues(ids)}
			value={selectedValues}
			maxTagCount={2}
			maxTagPlaceholder={omittedValues =>
				`+ ${omittedValues.length} entries ...`
			}
			treeData={[
				{
					title: (
						<React.Fragment>
							{selectedValues.length === x.length && (
								<span
									style={{
										display: 'inline-block',
										color: '#ccc',
										cursor: 'not-allowed',
									}}
								>
									Select all 1
								</span>
							)}
							{selectedValues.length < x.length && (
								<span
									onClick={() => setSelectedValues(allIds)}
									style={{
										display: 'inline-block',
										color: '#286FBE',
										cursor: 'pointer',
									}}
								>
									Select all 2
								</span>
							)}
							&nbsp;&nbsp;&nbsp;
							{selectedValues.length === 0 && (
								<span
									style={{
										display: 'inline-block',
										color: '#ccc',
										cursor: 'not-allowed',
									}}
								>
									Unselect all 1
								</span>
							)}
							{selectedValues.length > 0 && (
								<span
									onClick={() => setSelectedValues([])}
									style={{
										display: 'inline-block',
										color: '#286FBE',
										cursor: 'pointer',
									}}
								>
									Unselect all 2
								</span>
							)}
						</React.Fragment>
					),
					value: 'xxx',
					disableCheckbox: true,
					disabled: true,
				},
				...x,
			]}
		/>
	);
}
