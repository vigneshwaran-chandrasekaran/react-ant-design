import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from 'antd';

import 'antd/dist/antd.css';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const { Header, Footer, Sider, Content } = Layout;

ReactDOM.render(
	<Layout style={{ minHeight: '100vh' }}>
		<Sider>Sider</Sider>
		<Layout>
			<Header>Header</Header>
			<Content>
				<App />
			</Content>
			<Footer>Footer</Footer>
		</Layout>
	</Layout>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
