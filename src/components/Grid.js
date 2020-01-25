import React from 'react';
import { Row, Col } from 'antd';
import { Button } from 'antd';

export default function Grid() {
	return (
		<div>
			<Row>
				<Col span={12}>col-12</Col>
				<Col span={12}>col-12</Col>
			</Row>
			<Row>
				<Col span={8}>col-8</Col>
				<Col span={8}>col-8</Col>
				<Col span={8}>
					<Button type="link">Link</Button>
				</Col>
			</Row>
			<Row>
				<Col span={6}>
					<Button type="primary">Primary</Button>
				</Col>
				<Col span={6}>
					<Button>Default</Button>
				</Col>
				<Col span={6}>
					<Button type="dashed">Dashed</Button>
				</Col>
				<Col span={6}>
					<Button type="danger">Danger</Button>
				</Col>
			</Row>
		</div>
	);
}
