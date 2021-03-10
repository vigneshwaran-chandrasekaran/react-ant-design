const CracoLessPlugin = require('craco-less');

/**
 * https://ant.design/docs/react/use-with-create-react-app
 * https://github.com/ant-design/create-react-app-antd
 * https://ant.design/docs/react/customize-theme
 * https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
 */

/**
 * To override default antd desing styles with custom styles.
 * here we are modifying webpack configuration with craco-less plugin.
 */

module.exports = {
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {
							'@primary-color': '#1DA57A',
							'@link-color': '#5C987A',
							'@success-color': '#52c41a',
							'@warning-color': '#faad14',
							'@error-color': '#f5222d',
							'@font-size-base': '14px',
							'@heading-color': 'rgba(0, 0, 0, 0.85)',
							'@text-color': 'rgba(0, 0, 0, 0.65)',
							'@text-color-secondary': 'rgba(0, 0, 0, 0.45)',
							'@disabled-color': 'rgba(0, 0, 0, 0.25)',
							'@border-radius-base': '15px',
							'@border-color-base': '#d9d9d9',
							'@box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)',
						},
						javascriptEnabled: true,
					},
				},
			},
		},
	],
};
