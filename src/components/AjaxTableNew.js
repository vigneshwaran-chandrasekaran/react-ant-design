import { Table } from 'antd';
import React, { useEffect, useState } from 'react';
import reqwest from 'reqwest';

const columns = [
	{
		title: 'Name',
		dataIndex: 'name',
		sorter: true,
		render: (name) => `${name.first} ${name.last}`,
		width: '20%',
	},
	{
		title: 'Gender',
		dataIndex: 'gender',
		filters: [
			{ text: 'Male', value: 'male' },
			{ text: 'Female', value: 'female' },
		],
		width: '20%',
	},
	{
		title: 'Email',
		dataIndex: 'email',
	},
];

const getRandomuserParams = (params) => {
	return {
		results: params.pagination.pageSize,
		page: params.pagination.current,
		...params,
	};
};

function AjaxTableNew() {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);
	const [pagination, setPagination] = useState({
		current: 1,
		pageSize: 10,
	});

	useEffect(() => {
		fetch({ pagination });
	}, []);

	const fetch = (params = {}) => {
		setLoading(true);
		reqwest({
			url: 'https://randomuser.me/api',
			method: 'get',
			type: 'json',
			data: getRandomuserParams(params),
		}).then((data) => {
			console.log(false);
			setLoading(false);
			setData(data.results);
			setPagination({
				...params.pagination,
				total: 200,
				// 200 is mock data, you should read it from server
				// total: data.totalCount,
			});
		});
	};

	const handleTableChange = (pagination, filters, sorter) => {
		fetch({
			sortField: sorter.field,
			sortOrder: sorter.order,
			pagination,
			...filters,
		});
	};
	return (
		<div>
			<Table
				columns={columns}
				rowKey={(record) => record.login.uuid}
				dataSource={data}
				pagination={pagination}
				loading={loading}
				onChange={handleTableChange}
			/>
		</div>
	);
}

export default AjaxTableNew;
