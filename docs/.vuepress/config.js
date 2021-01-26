module.exports = {
	locales: {
		'/': {
			lang: 'en-US',
			title: 'builderall-vue-ui',
			description: 'Documentation builderall-vue-ui plugin'
		}
	},

	themeConfig: {
		repoLabel: 'Contribute Jovem!',
		repo: '',
		docsDir: 'docs',
		editLinks: true,
		docsBranch: 'dev',
		editLinkText: 'Ajude ou reporte essa pagina!',
		search: false,
		locales: {
			'/': {
				label: 'English',
				selectText: 'Languages',
				lastUpdated: 'Last Updated',
				// service worker is configured but will only register in production
				serviceWorker: {
					updatePopup: {
						message: 'New content is available.',
						buttonText: 'Refresh'
					}
				},
				nav: [
					{ text: 'Getting Started', link: '/guide' },
					{ text: 'Components', link: '/components/' },
					{ text: 'GitHub', link: '' }
				],
				sidebar: [
					{
						title: 'Getting started',
						path: '/guide',
						collapsable: false,
						children: [
							['/layout', 'Layout']
						]
					},
					{
						title: 'Components',
						collapsable: false,
						children: [
							['/components/bui-container', 'Container'],
							['/components/bui-page', 'Page'],
							['/components/bui-sidebar', 'Sidebar'],
							['/components/bui-navbar', 'Navbar'],
							['/components/bui-alert', 'Alert'],
							['/components/bui-icon', 'Icon'],
							['/components/bui-form-group', 'Form group'],
							['/components/bui-language-selector', 'Language Selector'],
						]
					},
					{
						title: 'Bootstrap components',
						collapsable: false,
						children: [
							['/bootstrap/b-tabs', 'Tabs'],
							['/bootstrap/b-inputs', 'Inputs']
						]
					}
				]
			}
		}
	},

}