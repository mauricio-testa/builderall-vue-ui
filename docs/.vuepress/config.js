module.exports = {
	locales: {
		'/': {
			lang: 'en-US',
			title: 'Builderall Vue UI',
			description: 'Vue UI Library for Builderall Apps'
		}
	},

	themeConfig: {
		repoLabel: 'Contribute Jovem!',
		repo: '',
		docsDir: 'docs',
		editLinks: true,
		docsBranch: 'dev',
		editLinkText: 'Edit!',
		search: true,
		locales: {
			'/': {
				label: 'English',
				selectText: 'Languages',
				lastUpdated: 'Last Updated',
				/* service worker is configured but will only register in production
				serviceWorker: {
					updatePopup: {
						message: 'New content is available.',
						buttonText: 'Refresh'
					}
				},
				*/
				nav: [
					{ text: 'Getting Started', link: '/guide' },
					{ text: 'Components', link: '/components/' },
					{ text: 'GitHub', link: 'https://github.com/mauricio-testa/builderall-vue-ui' }
				],
				sidebar: [
					{
						title: 'Docs',
						collapsable: false,
						children: [
							['/guide', 'Getting Started'],
							['/layout', 'Layout'],
							['/rtl', 'RTL Support'],
							['/about', 'About']
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
							['/components/bui-modal-confirm', 'Confirmation modal'],
						]
					},
					{
						title: 'Bootstrap components',
						collapsable: false,
						children: [
							['/bootstrap/b-tabs', 'Tabs'],
							['/bootstrap/b-inputs', 'Inputs'],
							['/bootstrap/b-modal', 'Modal'],
							['/bootstrap/b-alert', 'Alert'],
						]
					}
				]
			}
		}
	},

}